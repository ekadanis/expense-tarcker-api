export class StatsPeriodDto {
  from: string; // ISO date string
  to: string; // ISO date string
}

export class StatsCategorySummaryDto {
  categoryId: number;
  categoryName: string;
  total: number;
}

export class StatsOverviewDto {
  totalExpenses: number;
  topCategory: {
    categoryId: number;
    categoryName: string;
    total: number;
  };
  monthlyMax: {
    month: string;
    total: number;
  };
}
