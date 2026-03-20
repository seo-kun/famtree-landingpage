# FamTree Landing Page (Astro Conversion)

Landing page untuk **FamTree**, aplikasi pencatat silsilah keluarga modern. Proyek ini merupakan hasil konversi dari template HTML statis menjadi proyek **Astro** yang modular, performan, dan memiliki navigasi ala SPA (Single Page Application).

## ✨ Fitur Utama
- **Astro 6.0**: Framework web modern untuk performa maksimal.
- **ClientRouter (View Transitions)**: Navigasi antar halaman yang mulus tanpa reload (SPA-like).
- **Fleksibel & Dinamis**: Konten teks dipisahkan ke [src/data/content.json](src/data/content.json). Perubahan konten cukup dilakukan di file JSON tersebut tanpa menyentuh kode.
- **Tailwind CSS**: Desain responsif dan pixel-perfect sesuai template asli dengan palet warna brand kustom.
- **Lucide Icons**: Integrasi ikon modern yang ringan.

## 📁 Struktur Proyek
- `src/layouts/`: Template global untuk seluruh halaman.
- `src/components/`: Komponen UI modular (`Header`, `Footer`, `TreePreview`).
- `src/pages/`: Routing halaman (`/`, `/tentang`, `/panduan`).
- `src/data/`: Pusat konfigurasi dan konten website.

## 🚀 Cara Menjalankan
Pastikan Anda memiliki [pnpm](https://pnpm.io/) terinstall di sistem.

1.  **Install Dependencies:**
    ```bash
    pnpm install
    ```
2.  **Start Development Server:**
    ```bash
    pnpm dev
    ```
3.  **Build untuk Produksi:**
    ```bash
    pnpm build
    ```

## 🛠️ Konfigurasi Konten
Untuk merubah teks pada halaman Beranda, Tentang, atau Panduan, silakan edit file:
`/src/data/content.json`

---
*Dibuat dengan niat baik untuk merawat kenangan keluarga.*
