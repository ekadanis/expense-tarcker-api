# Expense Tracker API

API untuk mencatat dan mengelola pengeluaran harian dengan fitur autentikasi pengguna dan manajemen kategori.

## ⚡ Fitur Utama

- Registrasi dan login pengguna
- Manajemen kategori pengeluaran (CRUD)
- Manajemen pengeluaran (CRUD)
- Statistik pengeluaran per pengguna (opsional, endpoint `/stats`)
- Keamanan dengan JWT

## 🛠 Teknologi

- NestJS (Framework Node.js)
- Prisma (ORM)
- PostgreSQL / MySQL / SQLite
- JWT (Autentikasi)
- Swagger (Dokumentasi API)

## 🚀 Instalasi

1. Clone repository:

```bash
git clone <repository-url>
```

2. Masuk folder project:

```bash
cd expense-tracker-api
```

3. Install dependencies:

```bash
npm install
```

4. Buat `.env` dan konfigurasi database serta JWT secret.

5. Jalankan migration Prisma:

```bash
npx prisma migrate dev
```

6. Jalankan aplikasi:

```bash
npm run start:dev
```

## 📌 Endpoints (Ringkasan)

| Method | Route             | Keterangan                             |
| ------ | ----------------- | -------------------------------------- |
| POST   | `/auth/register`  | Registrasi pengguna baru               |
| POST   | `/auth/login`     | Login dan mendapatkan token JWT        |
| GET    | `/categories`     | Ambil semua kategori                   |
| POST   | `/categories`     | Buat kategori baru                     |
| PATCH  | `/categories/:id` | Update kategori                        |
| DELETE | `/categories/:id` | Hapus kategori                         |
| GET    | `/expenses`       | Ambil semua pengeluaran                |
| POST   | `/expenses`       | Buat pengeluaran baru                  |
| PATCH  | `/expenses/:id`   | Update pengeluaran                     |
| DELETE | `/expenses/:id`   | Hapus pengeluaran                      |
| GET    | `/stats`          | Ambil statistik pengeluaran (opsional) |

> Catatan: Untuk semua endpoint kategori dan pengeluaran, header `Authorization: Bearer <token>` (JWT) diperlukan.

## Notes

- Gunakan Swagger (jika dikonfigurasi di aplikasi) untuk dokumentasi interaktif.
- Pastikan `JWT_SECRET` dan koneksi database di `.env` sudah benar.
- Endpoint `/stats` bersifat opsional tergantung implementasi; bisa berisi ringkasan pengeluaran per kategori atau total pengeluaran untuk periode tertentu.

---

Dokumentasi ini dibuat otomatis dari input yang Anda berikan. Ingin saya juga membuat file terpisah per model (`docs/categories.md`, `docs/expenses.md`, `docs/auth.md`, `docs/stats.md`)?
