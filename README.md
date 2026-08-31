# 🐆 Puldeng Landing Page (Persona Celana Totol Hitam) - Gen Z Media Kit & Rate Card

Official Landing Page & Media Kit Creator TikTok berpersona unik *"Celana Totol Hitam"*. Didesain dengan standar **Gen Z Neo-Brutalism / Dark Streetwear**, super cepat, responsif, dan siap di-deploy secara gratis ke **GitHub Pages** dengan dukungan **Custom Domain**.

---

## 🚀 Fitur Utama & Keunggulan
1. **Persona Hook & Stopping Power**: Menampilkan visual persona celana totol hitam ikonik dengan aksen leopard glowing aura.
2. **Statistik Lengkap & Interaktif**:
   - **48.5M+** Monthly Views (30 Hari Terakhir)
   - **6.8M+** Monthly Likes
   - **1.42M+** TikTok Followers
   - **8.8%** Avg. Engagement Rate (3.2x di atas rata-rata industri)
   - Counter angka beranimasi otomatis saat di-scroll.
3. **Profil Demografi Audiens**: Grafik visual usia (Gen Z 56%, Milenial 32%), gender (54% Pria vs 46% Wanita), dan top kota (Jabodetabek, Surabaya, Bandung, Medan, dll).
4. **Portofolio & Hall of Fame**:
   - Marquee logo brand-brand ternama (Shopee, Gojek, Erigo, Scarlett, Mixue, Indomie).
   - Filterable Campaign Showcase (Fashion, FnB, Tech) dengan mockup TikTok dan simulated video preview modal.
5. **Interactive Rate Card & Smart WhatsApp Generator**:
   - Pilihan paket (Single Dedicated Video, Viral Growth Bundle, Event / Brand Ambassador).
   - Form pintar: saat calon klien memilih paket dan mengisi nama brand, sistem otomatis men-generate template pesan WhatsApp resmi siap kirim ke nomor admin.
6. **FAQ & Syarat Endorse**: Accordion tanya jawab seputar SLA (3-5 hari), Spark Ads (whitelist code), dan sistem pembayaran.
7. **Mobile Optimized**: Dilengkapi sticky bottom CTA bar untuk konversi instan di perangkat HP.

---

## 📂 Struktur File
```
puldeng-landing/
├── index.html                 # Halaman utama landing page SEO-ready
├── CNAME                      # File nama domain kustom untuk GitHub Pages
├── README.md                  # Panduan deploy & custom domain
├── css/
│   └── style.css              # Styling Gen Z dark streetwear & leopard theme
├── js/
│   └── main.js                # Interaktivitas (counter, WA generator, modal, FAQ)
└── assets/
    └── images/
        ├── creator-photo.png   # Foto persona kreator (celana totol hitam)
        └── leopard-pattern.jpg # Tekstur motif leopard/totol
```

---

## 🌐 Cara Deploy ke GitHub Pages (Step by Step)

### 1. Inisialisasi Git & Push ke Repository GitHub
Buka terminal di folder project ini:
```bash
git init
git add .
git commit -m "feat: initial release puldeng landing page gen z"
git branch -M main
git remote add origin https://github.com/USERNAME-LO/puldeng-landing.git
git push -u origin main
```

### 2. Aktifkan Fitur GitHub Pages
1. Buka repository Anda di browser: `https://github.com/USERNAME-LO/puldeng-landing`.
2. Masuk ke tab **Settings** > pilih menu **Pages** di sebelah kiri.
3. Pada bagian **Build and deployment**:
   - Source: pilih **Deploy from a branch**.
   - Branch: pilih **main** dan folder `/(root)`.
   - Klik **Save**.
4. Dalam 1-2 menit, website Anda sudah aktif di: `https://USERNAME-LO.github.io/puldeng-landing/`.

---

## 🏷️ Cara Menghubungkan Domain Kustom (Beli Domain Sendiri)

Jika Anda sudah membeli domain (misal `puldeng.com` dari Niagahoster, Domainesia, Rumahweb, Namecheap, Cloudflare, dll):

### 1. Edit File `CNAME`
Buka file [`CNAME`](file:///Users/awan/Documents/personal/puldeng-landing/CNAME) dan isi dengan nama domain Anda, contoh:
```
puldeng.com
```

### 2. Atur DNS Management di Penyedia Domain Anda
Masuk ke dashboard tempat Anda membeli domain, lalu tambahkan DNS Records berikut:

| Type | Name / Host | Target / Value | Keterangan |
|---|---|---|---|
| **A** | `@` | `185.199.108.153` | GitHub Pages IP 1 |
| **A** | `@` | `185.199.109.153` | GitHub Pages IP 2 |
| **A** | `@` | `185.199.110.153` | GitHub Pages IP 3 |
| **A** | `@` | `185.199.111.153` | GitHub Pages IP 4 |
| **CNAME** | `www` | `USERNAME-LO.github.io.` | Alias www |

### 3. Aktifkan Enforce HTTPS di GitHub Pages
1. Masuk kembali ke **Settings** > **Pages** di repository GitHub Anda.
2. Pastikan domain Anda muncul di bagian **Custom domain**.
3. Centang opsi **Enforce HTTPS** (sertifikat SSL gratis dari GitHub).

---

## ⚙️ Cara Kustomisasi Data (Nomor WhatsApp & Statistik)

1. **Mengubah Nomor WhatsApp Admin**:
   - Buka file [`index.html`](file:///Users/awan/Documents/personal/puldeng-landing/index.html), cari input `#adminPhone` dan ubah `value="6281234567890"` menjadi nomor WhatsApp Anda yang sebenarnya (gunakan format `628...`).
   - Ubah juga link `href="https://wa.me/6281234567890"` di bagian footer dan tombol CTA jika diperlukan.

2. **Mengubah Angka Statistik**:
   - Cari atribut `data-target="48.5"` atau `data-target="1.42"` pada elemen `<span class="counter">` di [`index.html`](file:///Users/awan/Documents/personal/puldeng-landing/index.html) untuk menyesuaikan angka views atau followers terbaru.

---
*Built with 🐆 Celana Totol Energy for Gen Z Excellence.*
