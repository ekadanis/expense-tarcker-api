import { Injectable } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../dto/category.dto';

@Injectable()
export class CategoriesService {
  private categories: Array<{ id: number; userId: number; name: string }> = [];

  async create(userId: number, name: string) {
    const category = {
      id: this.categories.length + 1,
      userId,
      name,
    };
    this.categories.push(category);
    return category;
  }

  async findAll(userId: number) {
    return this.categories.filter((c) => c.userId === userId);
  }

  async findOne(userId: number, id: number) {
    return this.categories.find((c) => c.userId === userId && c.id === id);
  }

  async update(userId: number, id: number, dto: UpdateCategoryDto) {
    const category = this.categories.find(
      (c) => c.userId === userId && c.id === id,
    );
    if (category && dto.name) category.name = dto.name;
    return category;
  }

  async remove(userId: number, id: number) {
    const index = this.categories.findIndex(
      (c) => c.userId === userId && c.id === id,
    );
    if (index > -1) this.categories.splice(index, 1);
    return { deleted: index > -1 };
  }
}
