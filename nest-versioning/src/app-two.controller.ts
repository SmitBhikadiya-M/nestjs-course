import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ path: 'hello', version: '2' })
export class AppTwoController {
  constructor(private readonly appService: AppService) {}

  @Get('world')
  getHello(): string {
    return 'Hello From Second Controller';
  }

  
}
