import fetch from 'node-fetch';

export interface OrderRequest {
  symbol: string;
  side: 'buy' | 'sell';
  type: 'limit' | 'market';
  quantity: number;
  price?: number;
}

export class OrderService {
  private backendUrl: string;
  private apiKey: string;

  constructor() {
    this.backendUrl = process.env.BACKEND_URL || 'http://localhost:4000';
    this.apiKey = process.env.BOT_API_KEY!;
  }

  async placeOrder(order: OrderRequest, userId: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.backendUrl}/bot-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.apiKey,
          'x-user-id': userId
        },
        body: JSON.stringify(order)
      });

      if (response.ok) {
        console.log(`✅ [${userId}] ${order.side.toUpperCase()} ${order.quantity} ${order.symbol} @ ${order.price ? (order.price / 100).toFixed(2) : 'MARKET'}`);
        return true;
      } else {
        const error = await response.text();
        console.error(`❌ [${userId}] Order failed:`, error);
        return false;
      }
    } catch (error) {
      console.error(`❌ [${userId}] Network error:`, error);
      return false;
    }
  }
}
