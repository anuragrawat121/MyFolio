import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const files = [
  { html: "AnuragRawatCV.html", pdf: "AnuragRawatCV.pdf" },
  { html: "AnuragRawatFrontendCV.html", pdf: "AnuragRawatFrontendCV.pdf" },
];

const browser = await puppeteer.launch({ headless: true });

for (const f of files) {
  const htmlPath = path.join(__dirname, f.html);
  const outputPath = path.join(__dirname, f.pdf);
  const publicPath = path.join(__dirname, "..", "public", f.pdf);

  const page = await browser.newPage();
  await page.goto(`file:///${htmlPath.replace(/\\/g, "/")}`, {
    waitUntil: "domcontentloaded",
  });
  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: "0.30in", right: "0.45in", bottom: "0.30in", left: "0.45in" },
  });
  await page.close();

  // Copy to public for portfolio download
  fs.copyFileSync(outputPath, publicPath);

  console.log(`Resume generated: ${outputPath}`);
  console.log(`Copied to: ${publicPath}`);
}

await browser.close();
