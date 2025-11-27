import dotenv from 'dotenv';
import { AggressiveBot } from './bots/AggressiveBot';
import { ConservativeBot } from './bots/ConservativeBot';
import { RandomBot } from './bots/RandomBot';

// Load environment variables
dotenv.config();

async function main() {
  console.log('🚀 Starting Trading Bots System...\n');

  // Check if bots are enabled
  if (process.env.BOTS_ENABLED !== 'true') {
    console.log('⚠️  Bots are disabled. Set BOTS_ENABLED=true to start.');
    process.exit(0);
  }

  // Initialize bots
  const aggressiveBot = new AggressiveBot(
    process.env.BOT_AGGRESSIVE_USER_ID!,
    'Aggressive Trader'
  );

  const conservativeBot = new ConservativeBot(
    process.env.BOT_CONSERVATIVE_USER_ID!,
    'Conservative Market Maker'
  );

  const randomBot = new RandomBot(
    process.env.BOT_RANDOM_USER_ID!,
    'Random Chaos Bot'
  );

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down bots...');
    aggressiveBot.stop();
    conservativeBot.stop();
    randomBot.stop();
    process.exit(0);
  });

  // Start all bots
  await Promise.all([
    aggressiveBot.start(),
    conservativeBot.start(),
    randomBot.start()
  ]);
}

main().catch(error => {
  console.error('💥 Fatal error:', error);
  process.exit(1);
});
