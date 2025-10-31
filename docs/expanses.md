Expenses
Paths: /expenses  
Controller: [`ExpensesController`](src/controllers/expenses.controller.ts)  
Service: [`ExpensesService`](src/services/expenses.service.ts)  
Model: [`Expense`](src/models/expense.model.ts)  
DTOs: [`CreateExpenseDto`](src/dto/expense.dto.ts), [`UpdateExpenseDto`](src/dto/expense.dto.ts)

### POST /expenses
- Auth: required
- Body:
  - categoryId (number)
  - amount (number)
  - description? (string)
  - date? (ISO string)
- Example request:
  ```json
  { "categoryId": 1, "amount": 5000, "description": "Lunch" }
  ```
- Response: created expense
  ```json
  { "id": 1, "categoryId": 1, "amount": 5000, "description": "Lunch", "date": "2025-10-31T..." }
  ```

### GET /expenses
- Auth: required
- Response: array of expenses for current user

### GET /expenses/:id
- Auth: required
- Response: single expense

### PATCH /expenses/:id
- Auth: required
- Body: any of UpdateExpenseDto fields
- Response: updated expense

### DELETE /expenses/:id
- Auth: required
- Response:
  ```json
  { "deleted": true }
  ```

Referensi:  
- [src/controllers/expenses.controller.ts](src/controllers/expenses.controller.ts)  
- [src/services/expenses.service.ts](src/services/expenses.service.ts)  
- [src/dto/expense.dto.ts](src/dto/expense.dto.ts)
