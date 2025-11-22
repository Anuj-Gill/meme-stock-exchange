import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import * as Sentry from "@sentry/nestjs"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health-status')
  getHealthStatus(): string {
    return this.appService.getHealthStatus();
  }
  
}
