import { Bot } from './Bot';
import { OrderRequest } from '../services/OrderService';
import { random, randomInt } from '../utils/randomizers';

export class ConservativeBot extends Bot {
  getMinDelay(): number {
    return 3000; // 30 seconds
  }

  getMaxDelay(): number {
    return 10000; // 60 seconds
  }

  generateOrder(symbol: string, currentPrice: number): OrderRequest {
    const isMarketOrder = Math.random() < 0.1; // 10% market orders
    
    if (isMarketOrder) {
      return {
        symbol,
        side: Math.random() > 0.5 ? 'buy' : 'sell',
        type: 'market',
        quantity: randomInt(10, 50)
      };
    } else {
      // Market making: place orders on both sides
      // Randomly pick buy or sell for this iteration
      const side = Math.random() > 0.5 ? 'buy' : 'sell';
      
      // Wider spread (2-5% from current price)
      const spread = random(2, 5);
      const price = this.enforcePriceBoundaries(
        this.calculateLimitPrice(currentPrice, side, spread)
      );
      
      return {
        symbol,
        side,
        type: 'limit',
        quantity: randomInt(10, 50),
        price
      };
    }
  }
}
