import sharp from "sharp";

const SRC = "public/logobase2.png";
const OUT = "src/app/icon.png";

const img = sharp(SRC);
const { width, height } = await img.metadata();
console.log("source:", width, "x", height);

// Centered square crop (captures the crossed forks in the middle), then resize.
const size = Math.min(width, height);
const left = Math.round((width - size) / 2);
const top = Math.round((height - size) / 2);

await sharp(SRC)
  .extract({ left, top, width: size, height: size })
  .resize(512, 512, { fit: "cover" })
  .png({ quality: 90 })
  .toFile(OUT);

console.log("wrote", OUT);
