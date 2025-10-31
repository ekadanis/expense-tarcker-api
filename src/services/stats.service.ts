import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class StatsService {
  constructor(private prisma: PrismaService) {}

  async totalPerCategory(userId: number) {
    return this.prisma.category.findMany({
      where: { userId },
      include: { expenses: true },
    });
  }

  async totalSpending(userId: number) {
    const expenses = await this.prisma.expense.findMany({
      where: { category: { userId } },
    });
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }
}
