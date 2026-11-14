# Developer Jaka

Website portofolio **Jaka Al Akbar**, Software Engineer di Indonesia.

## Teknologi

- Next.js 16 dengan App Router dan React 19.
- TypeScript untuk kode aplikasi.
- Once UI untuk komponen dan token desain.
- MDX untuk artikel dan studi kasus proyek.
- SCSS Modules untuk styling tambahan.

## Menjalankan secara lokal

Siapkan **Node.js minimal 20.9** dan npm.

```sh
git clone https://github.com/jakaalakbar/developerjaka.git
cd developerjaka
npm ci
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Untuk mengakses halaman yang dilindungi password, salin `.env.example` menjadi `.env.local`, kemudian ubah nilainya:

```dotenv
PAGE_ACCESS_PASSWORD=ganti-dengan-password-anda
```

Restart server setelah mengubah environment variable. Jangan commit `.env.local`; file ini sudah diabaikan Git. Halaman publik tidak membutuhkan password tersebut.

Pada Windows PowerShell, gunakan `npm.cmd` atau `npx.cmd` jika kebijakan eksekusi sistem memblokir skrip `npm.ps1` atau `npx.ps1`.

## Halaman

| Route | Isi |
| --- | --- |
| `/` | Beranda dan perkenalan |
| `/about` | Profil, pengalaman, pendidikan, dan keterampilan |
| `/projects` | Proyek nyata |
| `/work` | Daftar proyek contoh dari template |
| `/work/[slug]` | Detail proyek berbasis MDX |
| `/blog` | Daftar artikel |
| `/blog/[slug]` | Detail artikel berbasis MDX |
| `/gallery` | Galeri foto |

Navigasi utama saat ini menampilkan Home, About, dan Projects. Route Work, Blog, dan Gallery tetap aktif meskipun tombol navigasinya dikomentari dalam [Header](src/components/Header.tsx).

## Mengubah konten dan tampilan

| Kebutuhan | Lokasi |
| --- | --- |
| Profil, kontak, pengalaman, dan konten halaman | [src/resources/content.tsx](src/resources/content.tsx) |
| Domain, route aktif, proteksi halaman, font, dan tema | [src/resources/once-ui.config.ts](src/resources/once-ui.config.ts) |
| Kartu proyek nyata di `/projects` | [src/app/projects/page.tsx](src/app/projects/page.tsx) |
| Studi kasus proyek contoh | [src/app/work/projects](src/app/work/projects) |
| Artikel blog | [src/app/blog/posts](src/app/blog/posts) |
| Komponen antarmuka | [src/components](src/components) |
| Aset gambar | [public/images](public/images) |

### Artikel dan studi kasus

Tambahkan file `.mdx` pada folder blog atau proyek yang sesuai. Nama file menjadi slug URL. Ikuti format frontmatter pada file yang sudah tersedia, misalnya:

```mdx
---
title: "Judul konten"
publishedAt: "2026-11-14"
summary: "Ringkasan singkat konten."
images: []
---

Isi artikel atau studi kasus di sini.
```

Untuk gambar lokal, simpan file dalam `public/images` dan gunakan URL berawalan `/images/`. Untuk proyek MDX, field `link` dapat digunakan sebagai tautan ke situs live.

### Route dan proteksi halaman

Objek `routes` mengatur halaman yang aktif, sedangkan `protectedRoutes` menentukan halaman yang meminta password. Keduanya berada dalam konfigurasi Once UI. Saat ini, salah satu studi kasus contoh di `/work` dilindungi password dan menggunakan `PAGE_ACCESS_PASSWORD` di server.

## Perintah pengembangan

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan |
| `npx tsc --noEmit --incremental false` | Memeriksa tipe TypeScript tanpa menghasilkan file |
| `npm run build` | Membuat build produksi |
| `npm start` | Menjalankan hasil build produksi |
| `npm run biome-write` | Memformat file; perintah ini mengubah file |

Skrip `npm run lint` dan `npm run export` masih tercantum dalam `package.json`, tetapi memakai `next lint` dan `next export` yang tidak tersedia pada Next.js terpasang. Gunakan pemeriksaan TypeScript dan build untuk pemeriksaan dasar; kedua skrip lama tersebut perlu diperbarui sebelum digunakan.

## Menjalankan di produksi

Ganti `baseURL` dalam konfigurasi Once UI dari domain demo menjadi domain portofolio yang sebenarnya. Nilai ini digunakan oleh metadata, schema, dan sitemap. Atur juga `PAGE_ACCESS_PASSWORD` pada environment hosting jika memakai halaman yang dilindungi.

```sh
npm ci
npm run build
npm start
```

Gunakan hosting yang mendukung aplikasi Next.js beserta route server/API. Proyek ini memiliki endpoint autentikasi, RSS, dan gambar Open Graph. Build juga memuat font Google melalui `next/font/google`, sehingga lingkungan build perlu dapat mengakses sumber font tersebut.

## Atribusi dan lisensi

Portofolio ini dikembangkan dari **Magic Portfolio** dengan komponen **Once UI**. Informasi lisensi repository tercantum dalam [LICENSE](LICENSE), yaitu **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.
