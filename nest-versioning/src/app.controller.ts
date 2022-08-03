import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller({ path: 'hello', version: '1' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Version('1')
  @Get('world')
  getHello1(): string {
    return this.appService.getHello();
  }

  @ApiHeader({
    name: 'version-header',
    enum: ['1', '2'],
    description: 'Please select a version of api',
    required: true
  })
  @Version('2')
  @Get('world')
  getHello2(): string {
    return 'Second Version';
  }

  @Version(VERSION_NEUTRAL)
  @Get('like')
  getAnother(): string{
    return 'This is nutural version'
  }
}
