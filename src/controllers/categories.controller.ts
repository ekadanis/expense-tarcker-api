import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { CategoriesService } from '../services/categories.service';
import { JwtAuthGuard } from '../common/jwt-auth.guard';
import { CreateCategoryDto, UpdateCategoryDto } from '../dto/category.dto';

@ApiTags('Categories')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new category' })
  @ApiResponse({ status: 201, description: 'Category created successfully.' })
  create(@Body() dto: CreateCategoryDto) {
    const userId = 1; // sementara hardcode
    return this.categoriesService.create(userId, dto.name);
  }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  findAll() {
    const userId = 1;
    return this.categoriesService.findAll(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get category by id' })
  findOne(@Param('id') id: string) {
    const userId = 1;
    return this.categoriesService.findOne(userId, Number(id));
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update category' })
  update(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
    const userId = 1;
    return this.categoriesService.update(userId, Number(id), dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete category' })
  remove(@Param('id') id: string) {
    const userId = 1;
    return this.categoriesService.remove(userId, Number(id));
  }
}
