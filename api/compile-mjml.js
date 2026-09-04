// Vercel serverless function: compiles real MJML (the npm package) to HTML.
// Maximus (index.html) is a static file on GitHub Pages with no backend of
// its own — this endpoint exists solely so Export Code / Full Preview can
// use the real MJML compiler instead of Maximus's hand-rolled subset, since
// the real `mjml` package depends on Node internals and cannot run in the
// browser. Every live-typing preview in the app stays on the local
// compiler; only this endpoint is network-backed.
const mjml2html = require("mjml");

const ALLOWED_ORIGIN = "https://kmodrzewski777.github.io";
const MAX_BODY_BYTES = 300 * 1024; // crude abuse guard — this endpoint has no auth

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

// Extracts what the frontend needs from mjml's full compiled HTML document:
// the <body> content itself, and mjml's own <style> block(s) from <head> —
// real MJML's mobile responsiveness (its own column-stacking media queries)
// lives in that <style> block, under class names unrelated to Maximus's own
// .mj-col-stack system, so it has to travel with the body, not get dropped.
function extractBodyAndStyle(fullHtml) {
  const bodyMatch = /<body[^>]*>([\s\S]*)<\/body>/i.exec(fullHtml);
  const bodyHtml = bodyMatch ? bodyMatch[1] : "";
  const styleMatches = fullHtml.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
  const headStyle = styleMatches.join("\n");
  return { bodyHtml, headStyle };
}

module.exports = function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Only POST is supported." });
    return;
  }

  const raw = req.body && typeof req.body === "object" ? req.body : {};
  const mjmlSource = typeof raw.mjml === "string" ? raw.mjml : "";

  if (!mjmlSource) {
    res.status(400).json({ error: "Missing 'mjml' string in request body." });
    return;
  }
  if (Buffer.byteLength(mjmlSource, "utf8") > MAX_BODY_BYTES) {
    res.status(413).json({ error: "MJML input too large." });
    return;
  }

  let result;
  try {
    result = mjml2html(mjmlSource, { validationLevel: "soft" });
  } catch (err) {
    res.status(422).json({ error: (err && err.message) || "MJML compilation failed." });
    return;
  }

  const { bodyHtml, headStyle } = extractBodyAndStyle(result.html || "");
  res.status(200).json({
    bodyHtml: bodyHtml,
    headStyle: headStyle,
    errors: (result.errors || []).map(function (e) { return e.formattedMessage || e.message || String(e); })
  });
};
