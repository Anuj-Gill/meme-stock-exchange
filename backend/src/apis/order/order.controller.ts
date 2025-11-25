import {
  Body,
  Controller,
  Header,
  HttpStatus,
  Res,
  SetMetadata,
  Post,
  HttpCode,
  UseGuards,
  HttpException,
  Req,
  Logger,
} from '@nestjs/common';
import { apiIdentifiers } from 'src/auth/auth.config';
import * as Sentry from '@sentry/nestjs';
import { JWTGuard } from 'src/auth/auth.guard';
import { OrderDto } from './order.dto';
import { OrderService } from './order.service';
import { Response } from 'express';


@Controller('order')
export class OrderController {

  constructor(private readonly orderService: OrderService) {}

  @Post()
  @Header('Content-Type', 'application/json')
  @SetMetadata('apiIdentifier', apiIdentifiers.order)
  @UseGuards(JWTGuard)
  async Order(@Body() requestPayload: OrderDto, @Req() req: Request, @Res() res: Response) {
    try {
      Logger.log(req['user'].sub, requestPayload);
      await this.orderService.createOrder(requestPayload, req['user'].sub);

      return res.status(HttpStatus.CREATED).json({
        message: 'Order Created!',
      });

    } catch (err) {
      Sentry.captureException(err);

      throw new HttpException(
        'There was a problem processing your request. Please try again after some time.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
