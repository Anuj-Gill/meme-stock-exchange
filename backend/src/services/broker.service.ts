import { Injectable } from '@nestjs/common';
import { Side, OrderType, OrderStatus } from '@prisma/client';

interface Order {
  id: string;
  userId: string;
  symbol: string;
  side: Side;
  type: OrderType;
  price: number;
  originalQuantity: number;
  remainingQuantity: number;
  ts: number;
}

export class ListNode {
  order: Order;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(order: Order) {
    ((this.order = order), (this.next = null), (this.prev = null));
  }
}

export class LinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  //TODO: define required methods for the linked list
}

export class OrderBookSide {
  isBid: boolean;
  priceLevels: number[];
  levelMap: Map<number, LinkedList>;
  orderMap: Map<string, ListNode>;
}

export class OrderBook {
  symbol: string;
  bids: OrderBookSide;
  asks: OrderBookSide;
  lastTradePrice?: number;
}

@Injectable()
export class BrokerService {
  
}
