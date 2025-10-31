## Categories
Paths: /categories  
Controller: [`CategoriesController`](src/controllers/categories.controller.ts)  
Service: [`CategoriesService`](src/services/categories.service.ts)  
Model: [`Category`](src/models/category.model.ts)  
DTOs: [`CreateCategoryDto`](src/dto/category.dto.ts), [`UpdateCategoryDto`](src/dto/category.dto.ts)

### POST /categories
- Auth: required
- Body: { name: string } (lihat [`CreateCategoryDto`](src/dto/category.dto.ts))
- Response: created category
- Example:
  Request:
  ```json
  { "name": "Food" }
  ```
  Response:
  ```json
  { "id": 1, "name": "Food", "userId": 1 }
  ```

### GET /categories
- Auth: required
- Response: list of categories for current user
- Example:
  ```json
  [{ "id": 1, "name": "Food", "userId": 1 }]
  ```

### GET /categories/:id
- Auth: required
- Response: single category or 404/null

### PATCH /categories/:id
- Auth: required
- Body: { name?: string } (see [`UpdateCategoryDto`](src/dto/category.dto.ts))
- Response: updated category

### DELETE /categories/:id
- Auth: required
- Response:
  ```json
  { "deleted": true }
  ```

Referensi:  
- [src/controllers/categories.controller.ts](src/controllers/categories.controller.ts)  
- [src/services/categories.service.ts](src/services/categories.service.ts)  
- [src/dto/category.dto.ts](src/dto/category.dto.ts)
