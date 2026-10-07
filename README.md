# Cécile Nettoyage React

Site vitrine React pour Cécile Nettoyage Montpellier.

## Lancer en local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## SEO / Google Search Console

O projeto inclui títulos e descriptions por rota, canonical dinâmico, robots, dados estruturados LocalBusiness/WebSite, 404 com noindex e geração de sitemap.

No deploy de produção, defina a variável `SITE_URL` com o domínio HTTPS final (sem barra no fim), por exemplo:

```bash
SITE_URL=https://www.seudominio.fr npm run build
```

O build cria `dist/sitemap.xml` e adiciona a linha `Sitemap:` ao `dist/robots.txt`. Depois do deploy, adicione a propriedade de domínio no Google Search Console e envie `sitemap.xml` na área Sitemaps.

Importante: antes de publicar, complete os campos “À compléter” das Mentions légales com os dados reais da empresa.

## Sitemap / Google / Bing

Le sitemap de production est disponible à `/sitemap.xml` et déclaré dans `/robots.txt`.
URL à envoyer dans Google Search Console et Bing Webmaster Tools : `https://www.cecileclean.com/sitemap.xml`.

Les fichiers/pages `noindex` (mentions légales, confidentialité, cookies et 404) ne sont pas inclus dans le sitemap.

La validation de propriété Google Search Console et Bing Webmaster Tools nécessite le code/token fourni par chaque compte. Ne pas inventer ces valeurs : ajouter le fichier HTML ou la balise meta exacte fournie par Google/Bing au moment de la validation.
