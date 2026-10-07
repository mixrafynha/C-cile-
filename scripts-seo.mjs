import { mkdir, writeFile, readFile } from "node:fs/promises";

const raw = process.env.SITE_URL?.trim() || "https://www.cecileclean.com";
const base = raw.replace(/\/$/, "");
if (!/^https:\/\//i.test(base)) throw new Error("SITE_URL doit commencer par https://");
const routes = [
  ["/", "weekly", "1.0"], ["/services", "monthly", "0.9"], ["/formules", "monthly", "0.8"], ["/catalogue", "monthly", "0.8"], ["/secteurs", "monthly", "0.9"], ["/faq", "monthly", "0.8"], ["/contact", "monthly", "0.8"],
  ["/nettoyage/lunel", "monthly", "0.9"], ["/nettoyage/vendargues", "monthly", "0.9"], ["/nettoyage/mauguio", "monthly", "0.9"], ["/nettoyage/baillargues", "monthly", "0.9"], ["/nettoyage/castelnau-le-lez", "monthly", "0.9"], ["/nettoyage/lattes", "monthly", "0.9"], ["/nettoyage/la-grande-motte", "monthly", "0.9"], ["/nettoyage/montpellier", "monthly", "0.9"]
];
const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(([route, changefreq, priority]) => `  <url><loc>${base}${route}</loc><lastmod>${today}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`).join("\n")}\n</urlset>\n`;
await mkdir("dist", { recursive: true });
await writeFile("dist/sitemap.xml", xml);
let robots = await readFile("dist/robots.txt", "utf8").catch(() => "User-agent: *\nAllow: /\n");
robots = robots.replace(/\n?# Le sitemap[^\n]*\n?/g, "\n").replace(/\nSitemap:.*$/gm, "").trimEnd();
await writeFile("dist/robots.txt", `${robots}\n\nSitemap: ${base}/sitemap.xml\n`);
console.log(`[SEO] sitemap.xml gerado para ${base}`);
