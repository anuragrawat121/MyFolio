import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "AnuragRawatCV.html");
const outputPath = path.join(__dirname, "AnuragRawatCV.pdf");
const publicPath = path.join(__dirname, "..", "public", "AnuragRawatCV.pdf");

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.goto(`file:///${htmlPath.replace(/\\/g, "/")}`, {
  waitUntil: "networkidle0",
});
await page.pdf({
  path: outputPath,
  format: "A4",
  printBackground: true,
  margin: { top: "0.35in", right: "0.45in", bottom: "0.35in", left: "0.45in" },
});
await browser.close();

// Copy to public for portfolio download
fs.copyFileSync(outputPath, publicPath);

console.log(`Resume generated: ${outputPath}`);
console.log(`Copied to: ${publicPath}`);
