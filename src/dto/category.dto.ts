export class CreateCategoryDto {
  name: string;
}

export class UpdateCategoryDto {
  name?: string;
}

export class CategoryResponseDto {
  id: number;
  name: string;
  totalExpenses: number;
}
