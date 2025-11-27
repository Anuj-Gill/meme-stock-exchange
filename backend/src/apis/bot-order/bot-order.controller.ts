import {
  Body,
  Controller,
  Header,
  HttpStatus,
  Res,
  Post,
  HttpException,
  Req,
  Logger,
  UseGuards,
} from '@nestjs/common';
import * as Sentry from '@sentry/nestjs';
import { OrderDto } from '../order/order.dto';
import { OrderService } from '../order/order.service';
import { Response, Request } from 'express';
import { ApiKeyGuard } from 'src/auth/auth.guard';

@Controller('bot-order')
@UseGuards(ApiKeyGuard)
export class BotOrderController {
  private readonly logger = new Logger(BotOrderController.name);

  constructor(private readonly orderService: OrderService) {}

  @Post()
  @Header('Content-Type', 'application/json')
  async BotOrder(
    @Body() requestPayload: OrderDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      // userId is set by ApiKeyGuard
      const userId = req['userId'] as string;

      this.logger.log(
        `Bot order received from ${userId}: ${JSON.stringify(requestPayload)}`,
      );

      await this.orderService.createOrder(requestPayload, userId);

      this.logger.log(`Bot order created successfully for ${userId}`);
      return res.status(HttpStatus.CREATED).json({
        message: 'Order Created!',
      });
    } catch (err) {
      this.logger.error(
        `Error processing bot order: ${err.message}`,
        err.stack,
      );
      Sentry.captureException(err);

      throw new HttpException(
        'There was a problem processing your request. Please try again after some time.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
