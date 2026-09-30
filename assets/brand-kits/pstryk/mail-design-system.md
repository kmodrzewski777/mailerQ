# Pstryk – design system maili (HTML)

Maile Pstryk kodujemy jako surowy HTML z Liquidem Customer.io (region EU). Obrazki hostowane w Customer.io, prefiks https://userimg-assets-eu.customeriomail.com/images/client-env-211024/.

## 5. Design system

Źródło: pstryk.pl (wartości odczytane z CSS strony).

### Kolory

| Token | HEX | Użycie |
|---|---|---|
| ink | `#0B242D` | tekst główny, nagłówki |
| ink-2 | `#576B72` | tekst pomocniczy, podpisy, stopka |
| ink-3 | `#A7B2B6` | placeholdery, bardzo drugorzędne |
| navy | `#0F2B35` | przyciski główne, ciemne sekcje (np. infolinia) |
| green (marka) | `#5DDA71` | kolor marki, punktory, akcenty tekstowe na grafikach |
| mint | `#8DF39E` | kółka z numerami, przycisk na ciemnym tle, akcenty na navy |
| green-dark | `#237B2D` | duże liczby w mailu, linki tekstowe |
| green-bg | `#E8FDEC` | box z kwotą oszczędności, box kalkulatora, odpowiedzi ankiety |
| green-light | `#C6F9CE` | poświaty i obramowania na grafikach |
| lime | `#ECFA66` | etykiety („KALKULATOR PSTRYK”), znaczniki, ikonka pioruna |
| lime-logo | `#E1EF42` | element logo |
| lime-bg | `#F5FCAD` | podświetlenie kodu rabatowego, ramki z ważną informacją |
| surface | `#F8F9F9` | tło całego maila, kafelki, drugorzędne boxy |
| chip | `#EDF0F0` | pigułki, obramowania pól na grafikach |
| border | `#E1E6E6` | linie podziału |
| on-navy text | `#D5DEE0` | tekst akapitów na tle navy |

Gradient logo: `#5DD971 → #ECFA66`.

> Uwaga do zieleni: na grafikach akcentem tekstowym jest **#5DDA71** (kolor marki). Ciemna zieleń #237B2D była odrzucona jako „nie kolor brandu” na grafikach. W mailu HTML #237B2D zostaje tylko dla dużych liczb i linków, ze względu na czytelność na białym tle.

### Typografia
- **Strona pstryk.pl:** Averta.
- **Grafiki (PNG):** zawsze **Plus Jakarta Sans**. Nagłówki grafik 700 (nie 800, bo było „za grube”), tekst 500–600.
- **Maile HTML:** Arial, Helvetica, sans-serif (bezpieczne dla wszystkich klientów pocztowych).

| Element w mailu | Rozmiar / interlinia | Grubość / kolor |
|---|---|---|
| Nagłówek główny (H1 w karcie) | 24/30 px | bold, ink |
| Nagłówek sekcji (H2) | 22/28 px | bold, ink |
| Tytuł kafelka / boxu | 18/24 px | bold |
| Tekst główny | 16/26 px | ink |
| Tekst w kafelkach i boxach | 15/25 px | – |
| Podpisy pod liczbami, dopiski | 13/20 px | ink-2 |
| Stopka prawna | 12/18 px | – |
| Duże liczby | 30–32 px | bold, green-dark, jednostka obok 16–18 px |
| Etykiety (eyebrow) | 11–13 px | bold, letter-spacing 1px, wersaliki |

Interlinia tekstu ma być przewiewna. Za ciasno było przy 24 px dla tekstu 16 px, dlatego obowiązuje 26 px.

### Kształty i przestrzeń
- Karta treści: biała, radius 24 px, padding 36/40 px (mobile 28/20 px).
- Kafelki i boxy: radius 16 px. Mniejsze elementy wewnętrzne: 12 px.
- Przyciski: pigułki (radius 9999 px). Główne są granatowe z białym tekstem, a na ciemnym tle miętowe z tekstem ink.
- Kółka z numerami: 30×30 px, mint, cyfra bold 14 px, ink.
- Punktory: zielona kropka `&#8226;` w kolorze #5DDA71.
- Bez ramek i cieni w mailu (cienie tylko na grafikach PNG).
- **Odstęp przed każdym nagłówkiem sekcji: ok. 36 px** (margin-top), żeby układ miał oddech.
- Kafelki zawsze **jeden pod drugim**, nigdy obok siebie.


## 6. Architektura maila i zasady layoutu

```
[tło maila #F8F9F9]
  (opcjonalnie) LOGO nad kartą           ← tylko gdy nie ma go na grafice hero
  (opcjonalnie) GRAFIKA HERO poza kartą  ← 600 px, radius 24, odstęp 16 px do karty
  ┌ BIAŁA KARTA (radius 24) ─────────────┐
  │ (logo w karcie, jeśli brak hero)     │
  │ Cześć {imię},                        │
  │ H1                                   │
  │ akapity                              │
  │ [komponenty: box kwoty, kafelki…]    │
  │ [CTA – jedno]                        │
  │ Z dobrą energią, Zespół Pstryk       │
  └──────────────────────────────────────┘
  (opcjonalnie) SEKCJA SPECJALNA poza kartą, np. infolinia (granatowa karta)
  (opcjonalnie) FAQ
  STOPKA: kontakt → zgoda/wypis → linia → Polityka | Regulamin → adres
```

Zasady:
- **Grafika hero stoi poza białym boxem**, na pełną szerokość 600 px.
- Jeśli grafika hero ma logo, nad nią nie dajemy osobnego logo. Jeśli grafika jest bez logo, a zleceniodawca chce logo, logo idzie nad grafiką.
- Box w boxie ma sens tylko wtedy, gdy wyróżnia jedną rzecz (kwota, kalkulator, ważna informacja). Nie zamykaj całych sekcji w dodatkowych boxach.
- Sekcje długie skracaj: jedna grafika i zwięzły akapit zamiast serii grafik z opisami.
- Przyciski do sklepów z aplikacją pokazuj tylko w mailach o aplikacji, nie w stopce każdego maila.


## 7. Biblioteka komponentów (HTML)

Zasady techniczne (Outlook-safe):
- układ wyłącznie na tabelach, inline CSS na każdym elemencie,
- `mso-line-height-rule:exactly`,
- stały kontener 600 px plus ghost table dla Outlooka,
- odstępy robione komórkami-spacerami o stałej wysokości,
- listy jako tabele (punktor w osobnej komórce), nigdy `<ul>`,
- przyciski: VML `v:roundrect` dla Outlooka i `<a>` inline-block dla reszty,
- obrazki: atrybut `width`, `display:block`, `height:auto`, **zawsze ALT i zawsze link**,
- `meta color-scheme: light`,
- Outlook na Windows nie zaokrągla rogów. To akceptowalne, byle układ się nie rozjeżdżał.

Stały styl akapitu (P):
`margin:0 0 16px 0; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:26px; mso-line-height-rule:exactly; color:#0B242D;`

### 7.1 Szkielet

```html
<!DOCTYPE html>
<html lang="pl" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>{TEMAT}</title>
<!--[if mso]>
<noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<style>table, td, p, a, span, li { font-family: Arial, Helvetica, sans-serif !important; }</style>
<![endif]-->
<style>
  body, table, td, a { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
  table, td { mso-table-lspace:0pt; mso-table-rspace:0pt; border-collapse:collapse; }
  img { -ms-interpolation-mode:bicubic; border:0; outline:none; text-decoration:none; }
  body { margin:0 !important; padding:0 !important; width:100% !important; background-color:#F8F9F9; }
  a[x-apple-data-detectors] { color:inherit !important; text-decoration:none !important; }
  u + #body a { color:inherit; text-decoration:none; }
  @media only screen and (max-width:620px) {
    .container { width:100% !important; }
    .card-pad { padding:28px 20px 28px 20px !important; }
    .gutter { padding-left:20px !important; padding-right:20px !important; }
    .h2 { font-size:20px !important; line-height:26px !important; }
    .hero { width:100% !important; max-width:100% !important; height:auto !important; }
    .big { font-size:28px !important; line-height:32px !important; }
    .mobile-only { display:block !important; max-height:none !important; overflow:visible !important; }
    .desktop-only { display:none !important; max-height:0 !important; overflow:hidden !important; }
  }
</style>
</head>
<body id="body" style="margin:0; padding:0; background-color:#F8F9F9;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F8F9F9" style="background-color:#F8F9F9;">
<tr><td align="center" style="padding:24px 10px 24px 10px;">
<!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td><![endif]-->
<table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px;">

  <!-- [HERO poza kartą – opcjonalnie] -->

  <tr>
  <td class="card-pad" bgcolor="#FFFFFF" style="background-color:#FFFFFF; border-radius:24px; padding:36px 40px 36px 40px; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:26px; color:#0B242D; text-align:left;">
    <!-- TREŚĆ -->
  </td>
  </tr>

  <!-- [SEKCJE SPECJALNE] -->
  <!-- [STOPKA] -->

</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr>
</table>
</body>
</html>
```

(W gotowym pliku usuń komentarze opisowe `<!-- … -->`. Zostają tylko komentarze warunkowe MSO.)

### 7.2 Grafika hero (poza kartą)

```html
{%- if hero_url != "" %}
<tr>
<td style="padding:0 0 16px 0;">
  <a href="{{ url_cel }}" target="_blank" style="text-decoration:none;"><img src="{{ hero_url }}" width="600" alt="{opis grafiki}" class="hero" style="display:block; width:100%; max-width:600px; height:auto; border:0; border-radius:24px; font-family:Arial, Helvetica, sans-serif; font-size:16px; color:#0B242D;"></a>
</td>
</tr>
{%- endif %}
```

Guard `hero_url != ""` sprawia, że dopóki nie wklei się URL-a, mail wychodzi bez pustego obrazka.

### 7.3 Logo

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
  <tr><td style="padding:0 0 28px 0;">
    <a href="https://pstryk.pl/" target="_blank" style="text-decoration:none;"><img src="https://userimg-assets-eu.customeriomail.com/images/client-env-211024/1773147012690_pstryk-logo@2x_01KKBWRG87PN6WW20Y0KD7XJEJ.png" width="95" alt="Pstryk" style="display:block; width:95px; height:auto; border:0; font-family:Arial, Helvetica, sans-serif; font-size:20px; font-weight:bold; color:#5DDA71;"></a>
  </td></tr>
</table>
```

### 7.4 Powitanie, H1, H2

```html
<p style="{P}">{%- assign fname = customer.display_name | default: "" | strip -%}{% if fname.size > 0 %}Cześć {{ fname | capitalize }},{% else %}Cześć,{% endif %}</p>

<p class="h2" style="margin:0 0 12px 0; font-family:Arial, Helvetica, sans-serif; font-size:24px; line-height:30px; mso-line-height-rule:exactly; font-weight:bold; color:#0B242D;">{Nagłówek główny}</p>

<p class="h2" style="margin:36px 0 12px 0; font-family:Arial, Helvetica, sans-serif; font-size:22px; line-height:28px; mso-line-height-rule:exactly; font-weight:bold; color:#0B242D;">{Nagłówek sekcji}</p>
```

### 7.5 Kod rabatowy w tekście

```html
<strong style="background-color:#F5FCAD; mso-highlight:yellow;">&nbsp;KOD&nbsp;</strong>
```

### 7.6 Box z kwotą oszczędności (tylko przy kalkulacji ≥ 500 zł)

```html
{%- if has_calc %}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr><td bgcolor="#E8FDEC" style="background-color:#E8FDEC; border-radius:16px; padding:18px 22px;">
    <p style="margin:0 0 2px 0; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:20px; mso-line-height-rule:exactly; color:#576B72;">Możesz oszczędzać nawet</p>
    <p class="big" style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:32px; line-height:38px; mso-line-height-rule:exactly; font-weight:bold; color:#237B2D;">{{ calc_fmt }}&nbsp;<span style="font-size:18px; line-height:38px;">zł rocznie</span></p>
  </td></tr>
</table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td height="16" style="height:16px; font-size:16px; line-height:16px;">&nbsp;</td></tr></table>
{%- endif %}
```

### 7.7 Kafelek z numerem (np. „powody”)

```html
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr><td bgcolor="#F8F9F9" style="background-color:#F8F9F9; border-radius:16px; padding:22px 24px 10px 24px; font-family:Arial, Helvetica, sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td width="30" height="30" align="center" valign="middle" bgcolor="#8DF39E" style="width:30px; height:30px; background-color:#8DF39E; border-radius:15px; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:30px; mso-line-height-rule:exactly; font-weight:bold; color:#0B242D;">1</td></tr></table>
    <p style="margin:12px 0 8px 0; font-family:Arial, Helvetica, sans-serif; font-size:18px; line-height:24px; mso-line-height-rule:exactly; font-weight:bold; color:#0B242D;">{Tytuł}</p>
    <p style="margin:0 0 12px 0; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:25px; mso-line-height-rule:exactly; color:#0B242D;">{Treść}</p>
  </td></tr>
</table>
<!-- kolejny kafelek po spacerze 12 px -->
```

### 7.8 Kafelek Tarczy (zgodny z regułą z sekcji 4)

```html
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr><td bgcolor="#F8F9F9" style="background-color:#F8F9F9; border-radius:16px; padding:22px 24px 10px 24px;">
    [lista: gdy prąd drożeje, <strong>nie przepłacisz</strong>, / gdy prąd tanieje, płacisz mniej.]
    <p class="big" style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:30px; line-height:36px; mso-line-height-rule:exactly; font-weight:bold; color:#237B2D;">0,50&nbsp;<span style="font-size:16px;">zł/kWh netto</span></p>
    <p style="margin:0 0 12px 0; font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:20px; mso-line-height-rule:exactly; color:#576B72;">tyle maksymalnie zapłacisz średnio za energię w miesiącu (0,615 zł/kWh brutto)</p>
    <p style="margin:0 0 12px 0; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:25px; mso-line-height-rule:exactly; color:#0B242D;">Tarcza Pstryk obejmuje sam koszt energii, bez opłat dystrybucyjnych. Od 2027 roku opłata za obsługę Pstryk (8 gr/kWh netto) jest liczona osobno. <strong>Tarcza działa automatycznie</strong> i pomniejsza fakturę, gdy wynika to z rozliczenia.</p>
  </td></tr>
</table>
```

### 7.9 Lista z punktorami

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 16px 0;">
  <tr>
    <td width="18" valign="top" style="width:18px; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:26px; mso-line-height-rule:exactly; color:#5DDA71; font-weight:bold;">&#8226;</td>
    <td valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:26px; mso-line-height-rule:exactly; color:#0B242D; padding:0 0 8px 0;">{punkt}</td>
  </tr>
  <!-- ostatni wiersz: padding-bottom 0 -->
</table>
```

### 7.10 Lista kroków z numerami

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px 0;">
  <tr>
    <td width="42" valign="top" style="width:42px; padding:0 0 12px 0;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td width="30" height="30" align="center" valign="middle" bgcolor="#8DF39E" style="width:30px; height:30px; background-color:#8DF39E; border-radius:15px; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:30px; mso-line-height-rule:exactly; font-weight:bold; color:#0B242D;">1</td></tr></table>
    </td>
    <td valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:26px; mso-line-height-rule:exactly; color:#0B242D; padding:2px 0 12px 0;">{krok}</td>
  </tr>
</table>
```

### 7.11 Przycisk główny (pigułka navy)

```html
<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td align="left" style="padding:4px 0 28px 0;">
  <!--[if mso]>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{URL}" style="height:52px; v-text-anchor:middle; width:260px;" arcsize="50%" stroke="f" fillcolor="#0F2B35">
    <w:anchorlock/>
    <center style="color:#FFFFFF; font-family:Arial, Helvetica, sans-serif; font-size:16px; font-weight:bold;">{Tekst}</center>
  </v:roundrect>
  <![endif]-->
  <!--[if !mso]><!-- -->
  <a href="{URL}" target="_blank" style="display:inline-block; background-color:#0F2B35; color:#FFFFFF; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:20px; font-weight:bold; text-decoration:none; border-radius:9999px; padding:16px 40px; mso-hide:all;">{Tekst}</a>
  <!--<![endif]-->
</td></tr></table>
```

Szerokość VML dopasuj do tekstu: ok. 240 px dla „Przejdź do Pstryk”, 260 px dla „Dokończ podpisywanie”, „Policz oszczędności” i „Skorzystaj z kalkulatora”. Na ciemnym tle przycisk ma `fillcolor/background #8DF39E` i tekst `#0B242D`.

### 7.12 Box kalkulatora (zielony, z przyciskiem)

- td `bgcolor #E8FDEC`, radius 16, padding 24–26 px,
- nagłówek 18–20/24–26 px bold, np. „Sprawdź, ile możesz zaoszczędzić”,
- tekst 15–16 px,
- przycisk pigułka navy „Policz oszczędności”,
- pod boxem mały szary dopisek prawny.

### 7.13 Odpowiedzi ankiety (klikane kafelki)

```html
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr><td bgcolor="#E8FDEC" style="background-color:#E8FDEC; border-radius:12px; padding:0;">
    <a href="{URL_TYPEFORM}{ID_ODPOWIEDZI}" target="_blank" style="display:block; padding:15px 20px; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:22px; font-weight:bold; color:#0B242D; text-decoration:none;"><span style="color:#237B2D;">&rarr;</span>&nbsp;&nbsp;{Odpowiedź}</a>
  </td></tr>
</table>
<!-- spacer 8 px między kafelkami; „Coś innego” na tle #F8F9F9 -->
```

Adres e-mail w linku Typeform przekazuj przez `{{ customer.email | url_encode }}`.

### 7.14 Kod cyfra po cyfrze (np. dom demo)

```html
{%- assign demo_digits = "739482" | split: "" -%}
<table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
  <tr>
    {%- for digit in demo_digits %}
    <td class="digit-pad" style="padding:0 5px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
        <td class="digit" width="52" height="68" align="center" valign="middle" bgcolor="#F8F9F9" style="width:52px; height:68px; background-color:#F8F9F9; border-radius:12px; font-family:Arial, Helvetica, sans-serif; font-size:36px; line-height:68px; mso-line-height-rule:exactly; font-weight:bold; color:#0B242D; text-align:center;">{{ digit }}</td>
      </tr></table>
    </td>
    {%- endfor %}
  </tr>
</table>
```

Na mobile w `@media` dodaj: `.digit { width:42px !important; height:58px !important; font-size:30px !important; line-height:58px !important; } .digit-pad { padding:0 3px !important; }`

### 7.15 Element tylko na mobile / tylko na desktop

- **Tylko mobile** (np. deep link `pstryk://…`, który na komputerze nie działa):
  ```html
  <!--[if !mso]><!-- -->
  <div class="mobile-only" style="display:none; max-height:0; overflow:hidden; mso-hide:all;"> … </div>
  <!--<![endif]-->
  ```
- **Tylko desktop:** opakuj w `<div class="desktop-only">`. Outlook widzi zawsze wersję desktop.
- Przykład: w mailu o aplikacji desktop pokazuje kody QR (iOS/Android), a mobile przyciski App Store i Google Play.

### 7.16 Sekcja specjalna „infolinia” (granatowa karta pod treścią)

- osobny `<tr>`, 16 px odstępu od karty,
- td `bgcolor #0F2B35`, radius 24, padding 32/40,
- eyebrow: mint, 13 px, bold, wersaliki, np. „INFOLINIA PSTRYK” albo „WOLISZ POROZMAWIAĆ?”,
- nagłówek: biały, 24/30 bold, np. „Chcesz porozmawiać?”,
- tekst: `#D5DEE0`, 16/26,
- numer telefonu jako duża liczba: mint, 30/36 bold, link `tel:+48588810295`,
- przycisk: miętowa pigułka „Zadzwoń do nas” (VML + `<a>`),
- linia: „Wolisz napisać? **kontakt@pstryk.pl**” (biały, podkreślony).

### 7.17 Sekcja FAQ (poza kartą, przed stopką)

- nagłówek 18/24 bold, np. „Masz pytania o formalności?”,
- 1 zdanie wstępu i lista punktorów z pytaniami z działu „Umowa”,
- link tekstowy zielony, bold, podkreślony: „Zobacz pytania o umowę” → https://pstryk.pl/najczesciej-zadawane-pytania.

### 7.18 Stopka

```html
<tr><td class="gutter" style="padding:32px 40px 24px 40px; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:26px; color:#0B242D;">
  <p style="margin:0 0 20px 0; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:26px; mso-line-height-rule:exactly; color:#0B242D;"><strong>Masz pytania? Skontaktuj się z nami</strong> — nasz Zespół jest do Twojej dyspozycji.</p>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0">
    <tr><td width="34" valign="middle" style="width:34px; padding:0 0 10px 0;"><a href="tel:+48588810295" target="_blank" style="text-decoration:none;"><img src="https://userimg-assets-eu.customeriomail.com/images/client-env-211024/01KP34Z5B9MV1YHS16YZBE11XN.png" width="22" alt="Telefon" style="display:block; width:22px; height:auto; border:0;"></a></td>
      <td valign="middle" style="padding:0 0 10px 0; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:26px; mso-line-height-rule:exactly; color:#0B242D;"><strong>Telefon:</strong> <a href="tel:+48588810295" style="color:#0B242D; text-decoration:none;">+48 588 810 295</a></td></tr>
    <tr><td width="34" valign="middle" style="width:34px;"><a href="mailto:kontakt@pstryk.pl" target="_blank" style="text-decoration:none;"><img src="https://userimg-assets-eu.customeriomail.com/images/client-env-211024/01KP34Z4R9A6YSP41793R26GBQ.png" width="22" alt="E-mail" style="display:block; width:22px; height:auto; border:0;"></a></td>
      <td valign="middle" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:26px; mso-line-height-rule:exactly; color:#0B242D;"><strong>E-mail:</strong> <a href="mailto:kontakt@pstryk.pl" style="color:#0B242D; text-decoration:none;">kontakt@pstryk.pl</a></td></tr>
  </table>
</td></tr>
<tr><td class="gutter" style="padding:0 40px 32px 40px; font-family:Arial, Helvetica, sans-serif;">
  <p style="margin:0 0 20px 0; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:18px; mso-line-height-rule:exactly; color:#576B72;">Przesłane do {{ customer.email }}. Otrzymujesz tę wiadomość, gdyż wyraziłeś/aś zgodę na otrzymywanie od nas komunikacji marketingowej. Jeśli nie chcesz otrzymywać kolejnych maili - <a href="{% unsubscribe_url %}" style="color:#576B72; text-decoration:underline;">wypisz się</a>.</p>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td height="1" bgcolor="#E1E6E6" style="height:1px; background-color:#E1E6E6; font-size:1px; line-height:1px;">&nbsp;</td></tr><tr><td height="16" style="height:16px; font-size:16px; line-height:16px;">&nbsp;</td></tr></table>
  <p style="margin:0 0 12px 0; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:18px; mso-line-height-rule:exactly; color:#0B242D;"><a href="https://pstryk.pl/polityka-prywatnosci" target="_blank" style="color:#0B242D; text-decoration:underline;">Polityka prywatności</a> | <a href="https://pstryk.pl/regulamin-web" target="_blank" style="color:#0B242D; text-decoration:underline;">Regulamin</a></p>
  <p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:18px; mso-line-height-rule:exactly; color:#576B72;">Pstryk Energy Group Prosta Spółka Akcyjna, ul. Aleje Jerozolimskie 30/53, 00-024 Warszawa.</p>
</td></tr>
```

W mailach, które mają granatową sekcję infolinii, pierwszą część stopki (kontakt z ikonkami) pomijamy, żeby nie dublować kontaktu.

### 7.19 Spacer

```html
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td height="16" style="height:16px; font-size:16px; line-height:16px;">&nbsp;</td></tr></table>
```

### 7.20 Podpis

```html
<p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height:26px; mso-line-height-rule:exactly; color:#0B242D;">Z dobrą energią,<br><strong>Zespół Pstryk</strong></p>
```

## 8. Liquid w Customer.io – wzorce i pułapki

### Zmienne na górze szablonu
Wszystkie adresy i stałe trzymaj w zmiennych na samej górze pliku, np. `url_umowa`, `url_kalk`, `hero_url`, `info_url`, `demo_code`.

### Boole (sprzęt)
```liquid
{%- assign bess = false -%}{%- if customer.has_bess == true or customer.has_bess == "true" -%}{%- assign bess = true -%}{%- endif -%}
{%- assign pv = false -%}{%- if customer.is_prosument == true or customer.is_prosument == "true" -%}{%- assign pv = true -%}{%- endif -%}
{%- assign ev = false -%}{%- if customer.has_ev == true or customer.has_ev == "true" -%}{%- assign ev = true -%}{%- endif -%}
{%- assign hvac = false -%}{%- if customer.has_hvac == true or customer.has_hvac == "true" -%}{%- assign hvac = true -%}{%- endif -%}
```
Nie porównuj z `"True"` (wielka litera). Customer.io zgłasza wtedy gałąź, dla której nie ma żadnego profilu.

### Kwota z kalkulatora (z formatowaniem „1 392”)
```liquid
{%- assign calc_raw = customer.calc_yearly_savings | default: 0 | plus: 0 | round -%}
{%- assign calc = calc_raw | append: "" | split: "." | first | plus: 0 | floor -%}
{%- assign has_calc = false -%}{%- if calc > 499 -%}{%- assign has_calc = true -%}{%- endif -%}
{%- if calc >= 1000 -%}
  {%- assign th = calc | divided_by: 1000 | floor -%}
  {%- assign rest = th | times: 1000 -%}
  {%- assign rest = calc | minus: rest | floor -%}
  {%- if rest < 10 -%}{%- assign rest = rest | prepend: "00" -%}{%- elsif rest < 100 -%}{%- assign rest = rest | prepend: "0" -%}{%- endif -%}
  {%- capture calc_fmt -%}{{ th }}&nbsp;{{ rest }}{%- endcapture -%}
{%- else -%}{%- assign calc_fmt = calc -%}{%- endif -%}
```
Pułapki:
- **`| default: 0` przed `plus` jest obowiązkowe.** Customer.io nie wykona `plus` na nil i rzuci błąd „plus filter cannot be called with null”.
- **`round` w Customer.io zwraca float.** Bez `split "." | first | floor` dzielenie przez 1000 daje np. „1.872 872”.
- **Próg zapisuj jako `calc > 499`, nie `calc >= 500`.** Na liczbach całkowitych to samo, a pewniej działa w różnych silnikach Liquid.

### Lista sprzętu składana w zdanie
```liquid
{%- assign devs_str = "" -%}
{%- if pv -%}{%- assign devs_str = devs_str | append: "|fotowoltaikę" -%}{%- endif -%}
{%- if bess -%}{%- assign devs_str = devs_str | append: "|magazyn energii" -%}{%- endif -%}
{%- if hvac -%}{%- assign devs_str = devs_str | append: "|pompę ciepła" -%}{%- endif -%}
{%- if ev -%}{%- assign devs_str = devs_str | append: "|auto elektryczne" -%}{%- endif -%}
{%- assign devs = devs_str | remove_first: "|" | split: "|" -%}
{%- assign dev_count = devs | size -%}
{%- capture dev_list -%}{%- for d in devs -%}{%- if forloop.first -%}{{ d }}{%- elsif forloop.last %} i {{ d }}{%- else %}, {{ d }}{%- endif -%}{%- endfor -%}{%- endcapture -%}
```
Wynik: „Masz fotowoltaikę, magazyn energii i pompę ciepła, więc…”. Przy tagach elsif/else z tekstem po prawej stronie nie używaj `-%}`, bo zjada spację przed „i” oraz po przecinku. Przy wielu urządzeniach łącz je w zdanie. Nie pisz „Masz pompę?”, bo wiemy, że ją ma.

### Płeć (całe słowa)
```liquid
{%- assign w_podal = "podałeś" -%}
{%- if customer.sex == "female" -%}{%- assign w_podal = "podałaś" -%}{%- endif -%}
```

### Imię
```liquid
{%- assign fname = customer.display_name | default: "" | strip -%}
{% if fname.size > 0 %}Cześć {{ fname | capitalize }},{% else %}Cześć,{% endif %}
```
Używaj `display_name`, nie `first_name`.

### Data: miesiąc startu i termin
```liquid
{%- assign today_d = "now" | date: "%d" | plus: 0 -%}
{%- assign today_m = "now" | date: "%m" | plus: 0 -%}
{%- assign add_m = 2 -%}{%- assign dl_add = 0 -%}
{%- if today_d > 15 -%}{%- assign add_m = 3 -%}{%- assign dl_add = 1 -%}{%- endif -%}
{%- assign start_idx = today_m | plus: add_m | minus: 1 | modulo: 12 -%}
{%- assign dl_idx = today_m | plus: dl_add | minus: 1 | modulo: 12 -%}
{%- assign months_gen = "stycznia,lutego,marca,kwietnia,maja,czerwca,lipca,sierpnia,września,października,listopada,grudnia" | split: "," -%}
{%- assign start_month = months_gen[start_idx] -%}
{%- assign deadline_month = months_gen[dl_idx] -%}
```
Użycie w tekście: „Jeśli dokończysz umowę do 15 {deadline_month}, zaczniesz korzystać z Pstryk od 1 {start_month}.” Customer.io liczy „now” w UTC, więc tylko w nocy 15. dnia miesiąca może pokazać się miesiąc za wcześnie.

### Warunek czasowy (np. baner do końca promocji)
```liquid
{%- assign now_ts = "now" | date: "%s" | plus: 0 -%}
{%- assign promo_end_ts = 1790805599 -%}   {%- comment -%} 30.09.2026 23:59:59 czasu PL {%- endcomment -%}
{%- if now_ts <= promo_end_ts %} … {%- endif %}
```

### Warunek roku
```liquid
{%- assign now_y = "now" | date: "%Y" | plus: 0 -%}
{%- if now_y == 2026 %} … {%- endif %}
```

### Kod cyfra po cyfrze
`{% assign digits = "739482" | split: "" %}` i pętla `for` (patrz 7.14).

### Link wypisu
`{% unsubscribe_url %}`

### Temat z Liquidem (gdy temat zależy od wariantu)
```liquid
{% if customer.has_bess == true or customer.has_ev == true or customer.has_hvac == true or customer.is_prosument == true %}…{% else %}…{% endif %}
```

## 9. Grafiki: hero, infografiki, zasady obrazków

### 9.1 Zasady dla wszystkich obrazków w mailu
- **Każdy obrazek ma ALT** z treścią merytoryczną, a nie „obrazek”.
- **Każdy obrazek linkuje.** Domyślnie do https://pstryk.pl/, chyba że istnieje bardziej logiczny cel:
  - grafika kalkulatora → kalkulator,
  - przyciski sklepów i kody QR → sklepy,
  - ikonka telefonu → `tel:`,
  - ikonka maila → `mailto:`.
- Obrazki w treści: `width="520"` (szerokość treści w karcie), `class="hero"`, radius 16. Hero poza kartą: `width="600"`, radius 24.
- Obrazki wgrywa zleceniodawca. Do czasu wklejenia URL-a używaj zmiennej z guardem `{% if x_url != "" %}`.

## 11. Checklista przed oddaniem

- [ ] Jeden cel maila i jedno CTA. Brak wtrąceń z innych ścieżek (kalkulator, Tarcza, umowa tam, gdzie nie pasują).
- [ ] Fakty oferty potwierdzone w briefie (kwoty, kody, daty, godziny).
- [ ] Tarcza (jeśli jest): duże netto, brutto w podpisie, stały tekst.
- [ ] Brak: „Twoja kalkulacja”, „co godzinę”, „najwyższa”, emoji, procentów oszczędności, „nowa funkcja”, korpomowy.
- [ ] Powitanie z `display_name`, podpis „Zespół Pstryk”, formy żeńskie jako całe słowa.
- [ ] Kwota tylko od 500 zł, bez „.0”, ze spacją przy tysiącach, `default: 0` przed `plus`.
- [ ] Każdy wariant i profil bez atrybutów wyrenderowane bez błędów.
- [ ] 36 px odstępu przed każdym nagłówkiem sekcji. Tekst 16/26.
- [ ] Kafelki jeden pod drugim. Brak zbędnych boxów w boxach.
- [ ] Hero poza kartą. Logo nie dubluje się z logo na grafice.
- [ ] Każdy obrazek ma ALT i link.
- [ ] Przyciski z VML, listy w tabelach, obrazki z `width`.
- [ ] Brak komentarzy opisowych i ukrytego preheadera. Temat i preheader podane osobno.
- [ ] Zrzuty 700 px i 375 px obejrzane.
