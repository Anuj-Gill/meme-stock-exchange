import { Injectable, OnModuleInit } from '@nestjs/common';
import { Side, OrderType, OrderStatus } from '@prisma/client';
import { symbols } from 'src/common/symbols.config';

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

interface OrderLocation {
  price: number;
  node: ListNode
}

export class ListNode {
  order: Order;
  next: ListNode | null;
  prev: ListNode | null;

  constructor(order: Order) {
    this.order = order;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    ((this.head = null), (this.tail = null), (this.length = 0));
  }

  //TODO: define required methods for the linked list
  addNodeToTail(node: ListNode) {

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.length++;
  }
}

export class OrderBookSide {
  isBid: boolean;
  priceLevels: number[];
  levelMap: Map<number, LinkedList>;
  orderMap: Map<string, OrderLocation>;

  constructor(isBid: boolean) {
    this.isBid = isBid;
    this.priceLevels = [];
    this.levelMap = new Map();
    this.orderMap = new Map();
  }

  findInsertIndex(price: number, isBid: boolean) {
    let low = 0;
    let high = this.priceLevels.length - 1;
    let mid: number;
    const arr = this.priceLevels;
    while (low < high) {
      mid = Math.floor(low + (high - low) / 2);
      if (isBid) {
        if (price > arr[mid]) high = mid - 1;
        else low = mid + 1;
      } else {
        if (price < arr[mid]) high = mid - 1;
        else low = mid + 1;
      }
    }
    return low;
  }

  addLimitOrder(order: Order) {
    const price = order.price;
    let list = this.levelMap.get(price);
    if (!list) {
      const index = this.findInsertIndex(price, this.isBid);
      this.priceLevels.splice(index, 0, price);
      list = new LinkedList();
      this.levelMap.set(price, list);
    }
    const node = new ListNode(order);
    list.addNodeToTail(node);
    this.orderMap.set(order.id, {price, node})
  }
}

export class OrderBook {
  symbol: string;
  bids: OrderBookSide;
  asks: OrderBookSide;
  lastTradePrice?: number;
  
  constructor(symbol: string) {
    this.symbol = symbol;
    this.bids = new OrderBookSide(true);
    this.asks = new OrderBookSide(false);
    //this is to be fetched from db, and then will be passed from the onModuleInit only from the BrokerService. Hardecoding to 120.00 for now
    this.lastTradePrice = 12000
  }
}

@Injectable()
export class BrokerService implements OnModuleInit {
  private orderBooks: Map<string, OrderBook> = new Map();

  onModuleInit() {
    symbols.forEach((symbol) => {
      this.orderBooks.set(symbol, new OrderBook(symbol));
    })
  }

  handleLimitOrder(order: Order) {
    
  }
  
}
