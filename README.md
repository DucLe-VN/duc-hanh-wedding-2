# 💍 Wedding Invitation — Ngọc Đức ❤ Mỹ Hạnh (25.10.2026)

A single-page, bilingual (VI/EN) wedding invitation website for **GitHub Pages**.
Features: cover/enter screen, Ken Burns hero slideshow with a live countdown,
a love-story timeline (with the couple's poem embedded in it), a pre-wedding
gallery, the full invitation card, a Google-Maps QR, auto-generated **VietQR**
gift codes, background music, falling-petal animation, and a built-in tool to
create personalized links for each guest.

---

## 🗂 Structure

```
index.html
.nojekyll                      ← lets GitHub Pages serve /assets as-is
assets/
  favicon.svg                  ← wedding-ring tab icon
  css/style.css
  js/config.js                 ← ⭐ EDIT THIS: all text, photos, dates, bank info
  js/main.js                   ← logic (no need to edit)
  images/
    love/        love-01..08.jpg      (the "lovely" photos)
    prewedding/  pre-01..04.jpg
    poem.jpg                          (the first-date café photo w/ poem)
    qr-map.png                        (Google-Maps QR for the venue)
  music/         background.mp3       ← drop your song here (optional)
source/                        ← original full-size files (not used by the site)
```

## ✏️ How to customize

Open **`assets/js/config.js`** — the single source of truth. Every line of text
is bilingual: `{ vi: "Tiếng Việt", en: "English" }`. Sections:

- `couple` — names, parents, hometowns, wedding date/time
- `heroImages` — the cover slideshow photos
- `story` — the love-story timeline (dates, titles, captions, photos).
  The item with `poem: true` renders the poem (from `poem`) inside its card.
- `poem` — heading, image, verses (`lines_vi` / `lines_en`), closing note
- `gallery` — pre-wedding photo slideshow
- `ceremony` — Lễ Vu Quy & reception details, schedule
- `location` — map embed + QR (already set to Golden Lotus)
- `gift` — bank info for both sides (used to generate the VietQR — see below)
- `music` — path to your song (falls back to an online sample if missing)

## 💳 Gift — VietQR (auto-generated)

The gift QR codes are **generated live in the browser** (EMVCo VietQR payload +
CRC16, rendered via `api.qrserver.com`) — no image files to upload. Bank info
lives in `config.js → gift`:

| Side | Bank | Account | Holder |
|------|------|---------|--------|
| Chú rể (groom) | OCB (bin 970448) | 0838059792 | LE NGOC ANH |
| Cô dâu (bride) | Vietcombank (bin 970436) | 1037263934 | DO THI PHUONG LAN |

- Static QR (0đ — guest enters their own amount).
- Transfer note: `<Title>-<Name>-<suffix>` where the suffix is
  `MungCuoiNgocAnhPhuongLan` (groom) or `MungCuoiPhuongLanNgocAnh` (bride).
- `type=bride` shows only the bride's QR, `type=groom` only the groom's,
  and no `type` shows **both**.

## 🔗 Create per-guest links (the easy way)

On the live site, **double-click / double-tap the 囍 on the cover screen** to open
the *"Tạo thiệp mời"* popup. Fill in the guest, choose the side, optionally flip
**"Hiển thị rút gọn"**, then **"Tạo thiệp mời & mở"** — it opens the tailored
invitation in a new tab and gives you a copyable link to send (Zalo/Messenger).

### URL parameters (if you prefer building links by hand)

```
https://<user>.github.io/<repo>/?title=Anh&name=Nguyễn Văn A&self=Chúng mình&type=bride
```

| Param     | Meaning                                                    | Example |
|-----------|------------------------------------------------------------|---------|
| `title`   | Honorific — shown before the name (required in the popup)  | `Anh`, `Cô Chú`, `Gđ Bác` |
| `name`    | Guest's name (required in the popup)                       | `Nguyễn Văn A` |
| `self`    | Tự xưng — appears in the story headings                    | `Chúng mình`, `Chúng cháu`, `Hai cháu` |
| `type`    | `groom`, `bride`, or empty. Picks which gift QR to show    | `bride` |
| `compact` | `1` = hide the love-story + poem section for this guest    | `1` |

Spaces/Vietnamese are auto-encoded. Example encoded link:
`?title=Anh%20Ch%E1%BB%8B&name=Nam%20Lan&type=bride`

> 💡 The language button (top-right, **VI/EN**) lets guests switch language.

## 🖼️ Photos

Original photos live in `raw/images/` (git-ignored — keep a backup). The site
serves resized WebP copies (480 / 960 / 1440 / 2048 px wide) and picks the
smallest one that stays sharp on the guest's screen, loading slideshow photos
only when they are about to be shown. To add or replace a photo:

1. Put the original in `raw/images/<folder>/` (JPG, PNG or iPhone HEIC).
2. Run `npm install` (first time only), then `npm run images`.
3. In `config.js`, refer to it by its original name, e.g.
   `"assets/images/love/love-05.jpg"`.

## 🎵 Music (optional)

Drop `assets/music/background.mp3`. Until then the site plays an online sample
(see `config.music.fallback`). Music starts when the guest opens the invitation.

## 🚀 Deploy to GitHub Pages

1. Create a GitHub repo (e.g. `wedding`).
2. Push this folder:
   ```bash
   git init && git add . && git commit -m "Wedding site"
   git branch -M main
   git remote add origin https://github.com/<user>/<repo>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch → Branch: `main` / `root`** → Save.
4. Live at `https://<user>.github.io/<repo>/` in ~1 minute.

## 🔎 Preview locally

```bash
python3 -m http.server 8080
# open http://localhost:8080/?title=Anh&name=Test&type=groom
```

---
Made with ❤ — chúc mừng hạnh phúc!
