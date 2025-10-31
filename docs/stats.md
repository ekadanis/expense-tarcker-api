## 4. Stats
Paths: /stats  
Controller: [`StatsController`](src/controllers/stats.controller.ts)  
Service: [`StatsService`](src/services/stats.service.ts)  
DTOs: [`StatsPeriodDto`](src/dto/stats.dto.ts), [`StatsOverviewDto`](src/dto/stats.dto.ts)

### GET /stats/total-per-category
- Auth: required
- Deskripsi: Mengembalikan daftar kategori beserta expenses (lihat implementasi di [`StatsService.totalPerCategory`](src/services/stats.service.ts)).
- Response: categories dengan include expenses

### GET /stats/total
- Auth: required
- Deskripsi: Total pengeluaran untuk user saat ini (lihat [`StatsService.totalSpending`](src/services/stats.service.ts)).
- Response:
  ```json
  12345.67
  ```

Referensi:  
- [src/controllers/stats.controller.ts](src/controllers/stats.controller.ts)  
- [src/services/stats.service.ts](src/services/stats.service.ts)  
- [src/dto/stats.dto.ts](src/dto/stats.dto.ts)
