# Template Personal Web

Template personal website pribadi multi-bahasa sederhana yang dibangun dengan React, TS, dan Vite
Dirancang untuk dapat dideploy di GitHub Pages, dengan dukungan konten dinamis melalui konfigurasi terpusat `portfolioData.ts`.

## 🚀 Fitur

- 🔤 Terjemahan bahasa Indonesia & Inggris
- ⚙️ Antarmuka data ber-typo penuh (TypeScript) untuk menghindari error saat runtime
- 🖼️ Pipeline optimisasi gambar (lihat `scripts/optimize-images.cjs`)
- 📦 Build Vite dengan penanganan `base` yang benar untuk GitHub Pages
- 🛡️ Nomor kontak yang diobfuscate dihapus demi kesederhanaan
- 🧠 Helper `resolveUrl` untuk memperbaiki URL aset berdasarkan `BASE_URL`

## 📁 Struktur Proyek

```
.
├─ public/
│  └─ images/optimized/          # generated image variants
├─ src/
│  ├─ components/                # React UI components
│  ├─ data/                      # `portfolioData.ts` config
│  ├─ hooks/                     # custom hooks (e.g. useLanguage)
│  ├─ styles/                    # global CSS
│  ├─ types/                     # TypeScript interfaces
│  ├─ utils/                     # helpers (e.g. resolveUrl)
│  └─ main.tsx, App.tsx          # app entry points
├─ scripts/                      # image processing helpers
├─ vite.config.ts
└─ README.md
```

## 🔧 Pengembangan

### Persyaratan

- [bun](https://bun.sh/) (terpasang secara global)
- Node 18+ (bun sudah menyertakan runtime sendiri)

### Setup

```bash
bun install
```

### Menjalankan Secara Lokal

```bash
bun run dev
```

Server akan berjalan di `http://localhost:5173/` (atau `:3000` tergantung konfigurasi).

### Membangun untuk Produksi

```bash
bun run build
```

Perintah ini mengompilasi TypeScript, membundel aset, dan mengoptimalkan gambar; hasilnya berada di folder `dist/`.

### Deploy ke GitHub Pages

1. Pastikan `vite.config.ts` mengatur `base` seperti berikut:
   ```ts
   base: process.env.GITHUB_ACTIONS ? "/template-personal-web/" : "/",
   ```
2. Dorong konten folder `dist/` ke branch `gh-pages`, atau gunakan GitHub Actions.
3. Situs akan bisa diakses di `https://<username>.github.io/template-personal-web/`.


## 🛠️ Menyesuaikan Konten

Semua data yang tampil disimpan di `src/data/portfolioData.ts`. Perbarui file ini untuk mengubah teks, tautan, gambar, atau pengaturan bagian. File tersebut ber-typing ketat melalui `src/types/index.ts` untuk mencegah kesalahan.

### Menambahkan Gambar

- Letakkan gambar asli di bawah `public/images/` dalam subfolder apa pun.
- Jalankan `bun run optimize-images` (atau skrip di `package.json`) untuk menghasilkan varian `/optimized/`.
- Rujuk mereka dalam file data dengan jalur seperti `/images/optimized/namafile-medium.webp`.

## 🧪 Typing & Validasi

Proyek ini dilengkapi dengan antarmuka lengkap di `src/types/index.ts`. Saat mengedit `portfolioData.ts`, TypeScript akan memberi tahu jika ada ketidakcocokan selama pengembangan atau build.

## 📦 Skrip

- `bun run dev` – jalankan server pengembangan
- `bun run build` – kompilasi dan bundel untuk produksi
- `bun run optimize-images` – hasilkan ulang gambar yang dioptimalkan
- `bun run lint` – (belum dikonfigurasikan) tambahkan jika dibutuhkan

## 💡 Tips

- Gunakan helper `resolveUrl` untuk setiap jalur aset agar sesuai dengan base URL.
- Biarkan `projects.enabled` bernilai false jika ingin menyembunyikan bagian Proyek.
- Toggle bahasa dikelola oleh `LanguageContext` (lihat `src/context/LanguageContext.tsx`).

## 🎓 Lisensi

Template ini bersifat open source dan bebas digunakan.  Modifikasi sesuai kebutuhan!

---