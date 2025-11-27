import { Bot } from './Bot';
import { OrderRequest } from '../services/OrderService';
import { random, randomInt, randomChoice } from '../utils/randomizers';

export class RandomBot extends Bot {
  getMinDelay(): number {
    return 5000; // 5 seconds
  }

  getMaxDelay(): number {
    return 20000; // 90 seconds
  }

  generateOrder(symbol: string, currentPrice: number): OrderRequest {
    const side = randomChoice(['buy', 'sell'] as const);
    const isMarketOrder = Math.random() < 0.5; // 50% market orders
    
    if (isMarketOrder) {
      return {
        symbol,
        side,
        type: 'market',
        quantity: randomInt(5, 150)
      };
    } else {
      // Completely random price (±1-10% from current)
      const variancePercent = random(1, 5);
      const price = this.enforcePriceBoundaries(
        this.calculateLimitPrice(currentPrice, side, variancePercent)
      );
      
      return {
        symbol,
        side,
        type: 'limit',
        quantity: randomInt(5, 150),
        price
      };
    }
  }
}
