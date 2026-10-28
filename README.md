# Media Interaktif Sistem Rangka (Biologi XI)

Situs statis (HTML/CSS/JS), tanpa build step.

## Struktur
- `index.html` – halaman login + aplikasi
- `css/style.css`, `js/app.js`, `js/data.js` (materi, kuis, ID model 3D)
- `assets/` – siswa.gif (karakter), sprite-ekspresi.png (transisi & feedback), sprite-xray.png (animasi rontgen)

## Deploy GitHub + Vercel
1. Buat repo baru di GitHub, lalu dari folder ini:
   `git init && git add . && git commit -m "init" && git branch -M main`
   `git remote add origin https://github.com/USERNAME/rangka-interaktif.git && git push -u origin main`
2. Di vercel.com: **Add New → Project → Import** repo tersebut.
3. Framework Preset: **Other**. Build Command & Output Directory dikosongkan. Klik **Deploy**.
4. Setiap `git push` ke `main` akan otomatis ter-deploy ulang.

Catatan: perlu internet karena font Google dan model 3D dimuat dari Sketchfab.
Mengganti model 3D: ubah `model` di `js/data.js`.
