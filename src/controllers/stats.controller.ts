import { Controller, Get, UseGuards, Req } from "@nestjs/common";
import { StatsService } from "../services/stats.service";
import { JwtAuthGuard } from "../common/jwt-auth.guard";

@Controller("stats")
@UseGuards(JwtAuthGuard)
export class StatsController {
  constructor(private service: StatsService) {}

  @Get("total-per-category")
  totalPerCategory(@Req() req: any) {
    return this.service.totalPerCategory(req.user.sub);
  }

  @Get("total")
  totalSpending(@Req() req: any) {
    return this.service.totalSpending(req.user.sub);
  }
}
