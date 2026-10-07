/* =====================================================================
   Tối ưu ảnh cho web — chạy: npm install && npm run images
   ---------------------------------------------------------------------
   Nguồn : raw/images/ (jpg, jpeg, png)   (ảnh gốc, KHÔNG đưa lên git)
   Đích  : assets/images/.../<tên>-<rộng>.webp   (nhiều kích thước)
           assets/js/images.js                  (manifest cho main.js)
   Trong config.js vẫn ghi đường dẫn gốc, ví dụ
   "assets/images/love/love-01.jpg" — main.js tự chọn bản .webp vừa
   với màn hình (điện thoại tải bản nhỏ, máy tính tải bản lớn).
   ===================================================================== */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "raw", "images");
const OUT = path.join(ROOT, "assets", "images");
const MANIFEST = path.join(ROOT, "assets", "js", "images.js");

const WIDTHS = [480, 960, 1440, 2048];   // chiều rộng các bản xuất ra
const WEBP = { quality: 82, effort: 6, smartSubsample: true };
const OG = { from: "prewedding/pre-01.jpg", to: "og-cover.jpg" };   // ảnh chia sẻ Facebook/Zalo

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : /\.(jpe?g|png)$/i.test(e.name) ? [p] : [];
  });
}

const kb = (n) => (n / 1024).toFixed(0) + " KB";

/* Ảnh HEIC của iPhone (kể cả khi bị đổi đuôi thành .jpg): sharp bản
   cài sẵn không giải mã được HEVC → dùng heic-convert ra PNG, rồi gắn
   lại profile màu gốc (thường là Display P3) để sharp chuyển sang sRGB
   đúng màu. */
const isHeic = (buf) => buf.toString("latin1", 4, 12).match(/^ftyp(heic|heix|mif1|msf1)/);

function crc32(buf) {
  let c, crc = 0xffffffff;
  for (let n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = (crc >>> 8) ^ c;
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function pngWithIcc(png, icc) {
  const body = Buffer.concat([Buffer.from("ICC\0\0", "latin1"), require("zlib").deflateSync(icc)]);
  const type = Buffer.from("iCCP", "latin1");
  const len = Buffer.alloc(4); len.writeUInt32BE(body.length);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([type, body])));
  const ihdrEnd = 8 + 4 + 4 + 13 + 4;   // chữ ký PNG + chunk IHDR
  return Buffer.concat([png.subarray(0, ihdrEnd), len, type, body, crc, png.subarray(ihdrEnd)]);
}

async function load(file) {
  const buf = fs.readFileSync(file);
  if (!isHeic(buf)) return sharp(buf).rotate();   // .rotate() áp dụng hướng xoay EXIF
  const { icc } = await sharp(buf).metadata();
  let png = await require("heic-convert")({ buffer: buf, format: "PNG" });
  png = Buffer.from(png);
  return sharp(icc ? pngWithIcc(png, icc) : png);
}

(async () => {
  const files = walk(SRC);
  const manifest = {};
  let before = 0, after = 0;

  for (const file of files) {
    const rel = path.relative(SRC, file).split(path.sep).join("/");
    const dir = path.posix.dirname(rel);
    const base = path.posix.basename(rel).replace(/\.[^.]+$/, "").toLowerCase();
    const outDir = path.join(OUT, dir);
    fs.mkdirSync(outDir, { recursive: true });

    // sharp tự chuyển màu về sRGB và bỏ metadata (EXIF/GPS) khi xuất
    const img = await load(file);
    const { info } = await img.clone().toBuffer({ resolveWithObject: true });
    const { width, height } = info;

    let widths = WIDTHS.filter((w) => w < width);
    if (widths.length < WIDTHS.length) widths.push(Math.min(width, WIDTHS[WIDTHS.length - 1]));
    widths = [...new Set(widths)];

    before += fs.statSync(file).size;
    const sizes = [];
    for (const w of widths) {
      const out = path.join(outDir, `${base}-${w}.webp`);
      await img.clone().resize({ width: w, withoutEnlargement: true }).webp(WEBP).toFile(out);
      const s = fs.statSync(out).size;
      sizes.push(`${w}:${kb(s)}`);
      if (w === widths[widths.length - 1]) after += s;
    }
    const key = `assets/images/${dir === "." ? "" : dir + "/"}${base}${path.extname(rel).toLowerCase().replace("jpeg", "jpg")}`;
    manifest[key] = { w: width, h: height, s: widths };
    console.log(rel.padEnd(32), `${width}x${height}`.padEnd(10), sizes.join("  "));
  }

  // Ảnh og:image (JPEG 1200x630 — mạng xã hội không đọc tốt WebP)
  const ogSrc = path.join(SRC, OG.from);
  if (fs.existsSync(ogSrc)) {
    await (await load(ogSrc)).resize(1200, 630, { fit: "cover", position: "attention" })
      .jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(OUT, OG.to));
  }

  const js = "/* Tự sinh bởi tools/optimize-images.js — đừng sửa tay. */\n" +
    "window.IMAGE_MANIFEST = " + JSON.stringify(manifest, null, 0).replace(/\},"/g, '},\n  "') + ";\n";
  fs.writeFileSync(MANIFEST, js);

  console.log(`\n${files.length} ảnh · gốc ${(before / 1048576).toFixed(1)} MB → bản lớn nhất ${(after / 1048576).toFixed(1)} MB`);
})().catch((e) => { console.error(e); process.exit(1); });
