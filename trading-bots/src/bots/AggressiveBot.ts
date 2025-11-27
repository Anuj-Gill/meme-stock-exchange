import { Bot } from './Bot';
import { OrderRequest } from '../services/OrderService';
import { randomChoice, randomInt } from '../utils/randomizers';

export class AggressiveBot extends Bot {
  getMinDelay(): number {
    return 1000; // 10 seconds
  }

  getMaxDelay(): number {
    return 10000; // 30 seconds
  }

  generateOrder(symbol: string, currentPrice: number): OrderRequest {
    const side = randomChoice(['buy', 'sell'] as const);
    const isMarketOrder = Math.random() < 0.7; // 70% market orders
    
    if (isMarketOrder) {
      return {
        symbol,
        side,
        type: 'market',
        quantity: randomInt(50, 200)
      };
    } else {
      // Limit order very close to current price (±0.5%)
      const price = this.enforcePriceBoundaries(
        this.calculateLimitPrice(currentPrice, side, 0.2)
      );
      
      return {
        symbol,
        side,
        type: 'limit',
        quantity: randomInt(50, 80),
        price
      };
    }
  }
}
