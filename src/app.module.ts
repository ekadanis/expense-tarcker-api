import { Module } from "@nestjs/common";
import { AuthController } from "./controllers/auth.controller";
import { CategoriesController } from "./controllers/categories.controller";
import { ExpensesController } from "./controllers/expenses.controller";
import { StatsController } from "./controllers/stats.controller";
import { AuthService } from "./services/auth.service";
import { CategoriesService } from "./services/categories.service";
import { ExpensesService } from "./services/expenses.service";
import { StatsService } from "./services/stats.service";
import { PrismaModule } from "./prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: Number(process.env.JWT_EXPIRES_IN) || '3600s' },
    }),
  ],
  controllers: [
    AuthController,
    CategoriesController,
    ExpensesController,
    StatsController,
  ],
  providers: [AuthService, CategoriesService, ExpensesService, StatsService],
})
export class AppModule {}
