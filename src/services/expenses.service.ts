import { Injectable } from '@nestjs/common';
import { CreateExpenseDto, UpdateExpenseDto } from '../dto/expense.dto';

@Injectable()
export class ExpensesService {
  private expenses: Array<{
    id: number;
    userId: number;
    categoryId: number;
    amount: number;
    description?: string;
    date: string;
  }> = [];

  async create(userId: number, dto: CreateExpenseDto) {
    const expense = {
      id: this.expenses.length + 1,
      userId,
      categoryId: dto.categoryId,
      amount: dto.amount,
      description: dto.description,
      date: dto.date || new Date().toISOString(),
    };
    this.expenses.push(expense);
    return expense;
  }

  async findAll(userId: number) {
    return this.expenses.filter((e) => e.userId === userId);
  }

  async findOne(userId: number, id: number) {
    return this.expenses.find((e) => e.userId === userId && e.id === id);
  }

  async update(userId: number, id: number, dto: UpdateExpenseDto) {
    const expense = this.expenses.find(
      (e) => e.userId === userId && e.id === id,
    );
    if (!expense) return null;
    if (dto.amount !== undefined) expense.amount = dto.amount;
    if (dto.categoryId !== undefined) expense.categoryId = dto.categoryId;
    if (dto.description !== undefined) expense.description = dto.description;
    if (dto.date !== undefined) expense.date = dto.date;
    return expense;
  }

  async remove(userId: number, id: number) {
    const index = this.expenses.findIndex(
      (e) => e.userId === userId && e.id === id,
    );
    if (index > -1) this.expenses.splice(index, 1);
    return { deleted: index > -1 };
  }
}
