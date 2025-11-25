import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { OrderDto } from "./order.dto";


@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder(requestPayload: OrderDto, userId: string) {

    const {symbol, price, type, side, quantity} = requestPayload;

    const order = await this.prisma.order.create({
      data: {
        userId,
        symbol,
        side,
        type, 
        price,
        originalQuantity: quantity,
        remainingQuantity: quantity
      }
    });

    //orderId = order.id
    //call the next service from the stock broker

  }

}