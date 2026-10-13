import { readFile, writeFile, mkdir, cp, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { site } from "../src/content.mjs";
import { renderPage } from "../src/render.mjs";

const root = new URL("..", import.meta.url);
const css = await readFile(new URL("src/styles.css", root), "utf8");
const html = renderPage(site, css.trim());

const outDir = new URL("dist/", root);
await mkdir(outDir, { recursive: true });
await writeFile(new URL("index.html", outDir), html, "utf8");

// Ảnh thật và file tĩnh khác đặt trong public/ sẽ được chép sang dist/.
const publicDir = new URL("public/", root);
try {
  await access(publicDir);
  await cp(publicDir, outDir, { recursive: true });
} catch {}

console.log(`Đã build: ${fileURLToPath(new URL("index.html", outDir))}`);
