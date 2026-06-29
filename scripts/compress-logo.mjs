import sharp from "sharp";
import { statSync } from "node:fs";

const FILE = "public/logobase2.png";
const before = statSync(FILE).size;

const buf = await sharp(FILE)
  // imagem grande pra um asset web; 1024px de largura já é bastante.
  .resize({ width: 1024, withoutEnlargement: true })
  // quase preto-e-branco -> paleta quantizada comprime muito sem perda visível.
  .png({ palette: true, colours: 256, effort: 10, compressionLevel: 9 })
  .toBuffer();

const { writeFileSync } = await import("node:fs");
writeFileSync(FILE, buf);

const after = statSync(FILE).size;
console.log(`antes: ${(before / 1e6).toFixed(2)} MB -> depois: ${(after / 1e6).toFixed(2)} MB`);
