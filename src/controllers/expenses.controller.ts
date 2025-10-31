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
import { ExpensesService } from '../services/expenses.service';
import { JwtAuthGuard } from '../common/jwt-auth.guard';
import { CreateExpenseDto, UpdateExpenseDto } from '../dto/expense.dto';

@ApiTags('Expenses')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new expense' })
  create(@Body() dto: CreateExpenseDto) {
    const userId = 1;
    return this.expensesService.create(userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all expenses' })
  findAll() {
    const userId = 1;
    return this.expensesService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const userId = 1;
    return this.expensesService.findOne(userId, Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateExpenseDto) {
    const userId = 1;
    return this.expensesService.update(userId, Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const userId = 1;
    return this.expensesService.remove(userId, Number(id));
  }
}
