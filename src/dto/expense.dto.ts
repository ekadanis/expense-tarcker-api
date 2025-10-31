export class CreateExpenseDto {
  categoryId: number;
  amount: number;
  description?: string;
  date?: string; // ISO string
}

export class UpdateExpenseDto {
  categoryId?: number;
  amount?: number;
  description?: string;
  date?: string;
}

export class ExpenseResponseDto {
  id: number;
  categoryId: number;
  amount: number;
  description?: string;
  date: string;
}
