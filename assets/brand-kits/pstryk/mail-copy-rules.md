# Pstryk – zasady copy, fakty o ofercie i katalog maili

## 1. Kontekst i narzędzia

- **Klient:** Pstryk, sprzedawca prądu w taryfie dynamicznej (ceny oparte o giełdę TGE). Strona: https://pstryk.pl/
- **Platforma wysyłkowa:** Customer.io (region EU). Maile wklejamy jako surowy HTML z Liquidem. Nie budujemy ich w Design Studio (x-components), nawet jeśli materiał wejściowy przychodzi w tym formacie. Taki kod przerabiamy na HTML.
- **Hosting obrazków:** Customer.io, prefiks `https://userimg-assets-eu.customeriomail.com/images/client-env-211024/`. Nowe grafiki zleceniodawca wgrywa sam i podaje URL.
- **Język:** polski, forma „Ty”.

## 3. Copywriting – ton, słownictwo, zakazy

### Ton
- Neutralny, rzeczowy, konkretny, nastawiony na korzyść. Lekko formalny, ale ludzki. Nie luzacki.
- Pisz jak człowiek, a nie jak AI:
  - krótkie zdania,
  - konkrety zamiast ogólników,
  - bez gotowych porównań („to nie wybór nowej koszulki”),
  - bez „Wiemy, że…”,
  - bez wyliczanek dla samej wyliczanki.
- **Bez emoji** w treści i nagłówkach.
- Nie pisz, że coś jest „nową funkcją” ani że „właśnie się pojawiło”. Funkcje opisuj tak, jakby istniały od zawsze.
- Mail ma być listem, a nie landingiem. Bez wielkich boxów promocyjnych w stylu banera. Kod rabatowy wstawiaj w zdaniu, z limonkowym podświetleniem.
- Maile piszemy od **Zespołu Pstryk**, nie od konkretnej osoby. Bez zdjęć i podpisów pracowników.
- Konkurencję sugeruj pośrednio. Nigdy nie wymieniaj jej z nazwy.
- Nie odstraszaj: nie pisz „najwyższa cena”, pisz „wyższa” albo „droższa”.

### Stałe formuły
- **Powitanie:** `Cześć {display_name},`, a gdy imienia brak, samo `Cześć,`.
- **Podpis:** `Z dobrą energią,` + nowa linia + **`Zespół Pstryk`**.
- **Kwota z kalkulatora:** „Możesz oszczędzać nawet X zł rocznie”. Nigdy „Twoja kalkulacja pokazała”.
  - Kwotę pokazuj **dopiero od 500 zł** rocznie. Niższa kwota jest niezręczna, więc jej nie wstawiaj.
- **Ceny prądu:** „cena prądu na giełdzie stale się zmienia”. Nigdy „co godzinę” ani „co 15 minut”. Na giełdzie jest 15 minut, a Pstryk rozlicza godzinowo, więc nie mieszamy odbiorcy w głowie.
- **Kalkulator:** „Skorzystaj z naszego **bezpłatnego i niezobowiązującego** kalkulatora…”.
- **Umowa:** na czas nieokreślony, bez kar za rozwiązanie, z miesięcznym okresem wypowiedzenia. „Jeśli uznasz, że dynamiczne ceny to nie dla Ciebie, wracasz do poprzedniego sprzedawcy bez konsekwencji.”
- **Formy zależne od płci** (`customer.sex == "female"`): podmieniaj CAŁE słowa, nigdy końcówki, bo polski ma oboczności:
  - zacząłeś / zaczęłaś,
  - podałeś / podałaś,
  - wpisałeś / wpisałaś,
  - skończyłeś / skończyłaś.

  Domyślnie zostaje forma męska.

### Procenty i liczby
- **Nie atakuj procentami oszczędności** (np. „30–50%”). Zamiast tego opisuj mechanizm albo pokazuj indywidualną kwotę z kalkulatora.
- Każda liczba musi mieć warunek i kontekst. Nie obiecuj więcej niż kalkulator.
- Na grafikach nie pokazuj zmyślonych kwot oszczędności. W miejscu wyniku zostaw „? zł” albo placeholder.

### Temat i preheader
- Temat: jeden, krótki, konkretny, zwykle wspólny dla wszystkich wariantów.
- Preheader uzupełnia temat. Nie powtarza go.

### Pogrubienia
- Oszczędnie: 1–2 kluczowe frazy na akapit.

## 4. Fakty o ofercie i sposób ich podawania

> Oferty się zmieniają. Poniższe wartości były aktualne na 30.09.2026. Przed użyciem potwierdź je w briefie.

### Tarcza Pstryk (stała reguła prezentacji)
- **Duża liczba:** zawsze cena **netto**: **0,50 zł/kWh netto**.
- **Podpis pod liczbą:** „tyle maksymalnie zapłacisz średnio za energię w miesiącu (0,615 zł/kWh brutto)”.
- **Tekst pod spodem, zawsze dokładnie ten:**
  > Tarcza Pstryk obejmuje sam koszt energii, bez opłat dystrybucyjnych. Od 2027 roku opłata za obsługę Pstryk (8 gr/kWh netto) jest liczona osobno. Tarcza działa automatycznie i pomniejsza fakturę, gdy wynika to z rozliczenia.
- **Mechanizm:** gdy prąd drożeje, nie przepłacisz. Gdy tanieje, płacisz mniej.
- Tarcza działa do końca 2027 roku. **Nie pisz**, że trzeba dołączyć do końca 2026 roku, chyba że brief wprost o to prosi.
- **Tarczy nie wstawiaj wszędzie.** W mailach o kalkulatorze i aplikacji jej nie ma, bo to nie ich cel.

### Kalkulator
- Adres: https://kalkulator.pstryk.pl/
- Nagłówek kalkulatora: „Ile przepłacasz za prąd?”.
- Wystarczą 2 liczby:
  - **roczny pobór energii z sieci** (kWh), który znajdziesz w aplikacji sprzedawcy albo na fakturze,
  - **cena za kWh**, którą płacisz dziś.
- Alternatywa: wgranie faktury w PDF („dane odczytamy za Ciebie”), co daje dokładniejszy wynik.
- Wynik w **30 sekund**.
- Dopisek prawny (mały szary tekst): „Kalkulator porównuje wyłącznie koszt energii i obsługi. Opłaty dystrybucyjne są regulowane i nie zmieniają się przy zmianie sprzedawcy. Wszystkie kwoty są podane brutto.” Jeśli w tym samym mailu jest cena netto (np. Tarcza), napisz „Kwoty w kalkulatorze są podane brutto”, żeby tekst nie przeczył reszcie maila.

### Aktywacja usługi (liczenie miesiąca startu)
- Umowa podpisana **do 15. dnia** miesiąca M daje start 1. dnia miesiąca M+2.
- Umowa podpisana **od 16. dnia** daje start 1. dnia miesiąca M+3.
- Przykłady:
  - 10.09 → od 1 listopada,
  - 29.09 → od 1 grudnia,
  - 16.12 → od 1 marca.

### Inne fakty używane w mailach
- **Promocja urodzinowa (zakończona 30.09.2026):** kod URODZINY, 300 zł do Portfela Pstryk zamiast 50 zł. Kwota pokrywa koszt miernika i formalności.
- **Miernik Pstryk:** urządzenie montowane w skrzynce z bezpiecznikami. Jest niezbędne do uruchomienia usługi.
- **Aplikacja:**
  - wskazówki cenowe dopasowane do taryfy dystrybucyjnej,
  - ceny godzinowe rozbite na składowe,
  - historia zużycia i kosztów (dzień, tydzień, miesiąc).
- **Trendy Pstryk** (tylko dla klientów):
  - raport co poniedziałek,
  - wynik na tle innych klientów w okolicy,
  - rytm zużycia,
  - jeden z 6 profili energetycznych,
  - jedna wskazówka na kolejny tydzień.
- **Dom demo:**
  - prawdziwy dom z fotowoltaiką, magazynem energii (Sigenergy) i pompą ciepła,
  - kod 739482,
  - jak dołączyć: w aplikacji prawy górny róg → „Dołącz do domu lub firmy”.
- **FAQ:** https://pstryk.pl/najczesciej-zadawane-pytania. Dział „Umowa” odpowiada m.in. na pytania:
  - ile trwa przejście,
  - gdzie znaleźć numer PPE i grupę taryfową,
  - czy trzeba samemu załatwiać formalności,
  - czy zmienia się grupa taryfowa,
  - czy można podpisać umowę, nie będąc właścicielem nieruchomości.
- **Kontakt:** +48 588 810 295, kontakt@pstryk.pl.
- **Adres prawny:** Pstryk Energy Group Prosta Spółka Akcyjna, ul. Aleje Jerozolimskie 30/53, 00-024 Warszawa.

## 10. Katalog maili i ich cele

| Mail | Moment | Jedyny cel / CTA | Kluczowe elementy |
|---|---|---|---|
| Promocja 300 zł (urodziny) | jednorazowo, 29.09 | Przejdź do Pstryk / kalkulator | Warianty: magazyn (z PV / bez PV) vs pozostali × kalkulacja / brak kalkulacji; kafelki „300 zł pokrywa koszt startu” i „Tarcza do 2027”; kod URODZINY w tekście |
| Porzucona umowa | 2 h po rozpoczęciu podpisywania | Dokończ podpisywanie → app.pstryk.pl/offer/contract/agreements | „Twoja umowa jest prawie gotowa”; „Świetnie, że myślisz o przejściu… od 1 {miesiąc} zaczniesz oszczędzać”; kafelki: Tarcza, umowa bez zobowiązań; granatowa infolinia; FAQ o formalnościach |
| Follow-up porzuconej umowy | 2 dni | Dokończ podpisywanie | Lekkie przypomnienie, bez edukacji: „Twoja umowa z Pstryk nadal czeka na dokończenie…”; zdanie o sprzęcie; kwota ≥ 500 zł; Tarcza; termin „do 15 X → od 1 Y”; bez kalkulatora |
| Ankieta wątpliwości | 5 dni | Odpowiedź w ankiecie (Typeform) lub kontakt | Empatycznie, bez presji; 7 klikanych odpowiedzi; granatowa sekcja „Zadzwoń albo napisz”; link tekstowy „Wróć do umowy” |
| Dom demo | – | Dołączenie do domu demo w aplikacji | Hero poza kartą (bez logo na grafice, bez logo nad nią); niska infografika nad „Co zobaczysz w środku?”; kroki 1–4; kod w kafelkach; przycisk „Przejdź do aplikacji” tylko na mobile; sklepy z aplikacją |
| Aplikacja + Trendy | – | Instalacja aplikacji | Kwota ≥ 500 zł (opcjonalnie); wskazówki cenowe + screen; Trendy Pstryk: 1 grafika + 1 akapit + dopisek „tylko dla klientów”; QR na desktopie / przyciski sklepów na mobile; bez „Przejdź do Pstryk” |
| Kalkulator | – | Policz oszczędności → kalkulator.pstryk.pl | Hero poza kartą (logo na grafice, więc bez osobnego logo); „Sprawdź, ile przepłacasz za prąd”; „Wystarczą 2 liczby” (kroki 1–2); szary box „Masz fakturę w PDF?”; dopisek prawny |
| Follow-up kalkulatora | 7 dni | Policz oszczędności | Ta sama grafika hero; „Czy Pstryk to coś dla Ciebie?”; „Skoro jesteś z nami w kontakcie…”; zielony box kalkulatora; bez Tarczy i umowy |

### Kohorty (dane z Customer.io)
- Pola:
  - `has_bess`, `is_prosument` (PV), `has_ev`, `has_hvac`,
  - `calc_yearly_savings`,
  - `display_name`, `sex`,
  - `marketing_consent`, `email_consent`,
  - `contract_status` (draft = rozpoczęta umowa), `paying_customer`, `ppe_terminated`,
  - `lbs_answer` (odpowiedź z ankiety o wątpliwościach).
- **Priorytet treści:** magazyn energii to najlepszy temat pod taryfę dynamiczną, potem EV, pompa ciepła, PV, a na końcu brak sprzętu.
- Przy analizie CSV:
  - wartości przychodzą jako tekst 'True' / 'False',
  - wykluczaj osoby z jawnym brakiem zgody, supresją, low quality lead oraz obecnych klientów,
  - wyraźnie raportuj osoby z nieznaną zgodą.

## 12. Lista błędów, które już popełniono (nie powtarzać)

1. Pisanie „Twoja kalkulacja pokazała X zł”. Poprawnie: „Możesz oszczędzać nawet X zł rocznie”.
2. „Ceny zmieniają się co godzinę”. Poprawnie: „cena prądu na giełdzie stale się zmienia”.
3. Promo box z kodem jak z landingu w środku listu.
4. Pogrubione CTA ze strzałką zamiast normalnego przycisku.
5. Kafelki obok siebie (zlewały się). Muszą być jeden pod drugim.
6. Podkreślanie ciemną zielenią na grafice („to nie kolor brandu”) i za gruby font nagłówka grafiki. Poprawnie: #5DDA71 i waga 700 w Plus Jakarta Sans.
7. Słabo widoczne logo na grafice. Poświaty trzymaj z dala od logo i daj logo większe.
8. `plus` na pustym atrybucie (błąd renderowania w Customer.io).
9. Kwota „1.872 872” przez float po `round`.
10. „Zacząłaś” zamiast „Zaczęłaś”, czyli doklejanie końcówek zamiast podmiany całych słów.
11. Porównanie z `"True"` (ostrzeżenie o gałęziach bez profili).
12. Sztywne, „AI-owe” zdania („Zostały tylko ostatnie kroki.”, „teraz wystarczy dokończyć umowę”). Poprawnie: naturalnie i uprzejmie, np. „Świetnie, że myślisz o przejściu do Pstryk. Pierwszy krok masz już za sobą. Wystarczy dokończyć podpisywanie umowy, a od 1 grudnia zaczniesz oszczędzać na prądzie z Pstryk.”
13. Edukowanie osoby, która przeszła już przez lejek („pokażemy Ci, co taryfa dynamiczna może dać”). Na późnych etapach wystarczy lekkie przypomnienie.
14. Kalkulator w mailu o dokończeniu umowy. Tam jedyny cel to powrót do podpisywania.
15. „Musisz dołączyć do końca 2026, żeby mieć Tarczę” bez zgody zleceniodawcy.
16. Tarcza i umowa w mailu, którego celem jest tylko kalkulator.
17. Przycisk „Przejdź do Pstryk” w mailu, który ma „sprzedać” instalację aplikacji.
18. „Nowa funkcja” / „od dziś dostępna” przy Trendy Pstryk.
19. Zbyt długa sekcja (kilka grafik z opisami). Poprawnie: jedna grafika i zwięzły tekst.
20. Zbyt luzacki ton („złote góry”, „jestem bardzo ciekawa 👍”) i podpis konkretnej osoby.
21. Grafika wewnątrz białego boxa i logo nad grafiką, która sama ma logo.
22. Obrazki bez linków.
23. Zbyt mały odstęp przed nagłówkami („brak oddechu”) i za ciasna interlinia.
24. Pokazywanie kwoty oszczędności poniżej 500 zł („siara”).
25. Kontakt dublowany w treści, gdy jest już w stopce.
26. Przyciski do sklepów z aplikacją w stopce maili, które nie dotyczą aplikacji.
