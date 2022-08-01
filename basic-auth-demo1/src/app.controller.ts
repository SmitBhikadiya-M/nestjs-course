import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/guards/authenticated.guard';
import { LocalAuthGaurd } from './auth/guards/local-auth.guard';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  // POST /login
  @UseGuards(LocalAuthGaurd)
  @Post('login')
  login(@Request() req): any {
    return req.user;
  }

  // GET /protected
  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}
