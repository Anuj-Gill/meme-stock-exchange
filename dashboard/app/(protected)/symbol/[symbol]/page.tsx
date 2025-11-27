'use client';

import { use, useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePriceStream } from '@/hooks/usePriceStream';
import { ArrowLeft, TrendingUp, Activity } from 'lucide-react';
import Link from 'next/link';

interface PricePoint {
  time: number;
  price: number;
}

export default function SymbolPage({ params }: { params: Promise<{ symbol: string }> }) {
  const resolvedParams = use(params);
  const symbol = resolvedParams.symbol;
  const [priceHistory, setPriceHistory] = useState<PricePoint[]>([]);
  const [orderType, setOrderType] = useState<'limit' | 'market'>('limit');
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { prices, lastUpdate, isConnected } = usePriceStream({ symbol });

  // Update price history when new prices come in
  useEffect(() => {
    if (lastUpdate && lastUpdate.symbol === symbol) {
      setPriceHistory((prev) => [
        ...prev,
        { time: lastUpdate.timestamp, price: lastUpdate.price }
      ].slice(-50)); // Keep last 50 points
    }
  }, [lastUpdate, symbol]);

  const currentPrice = prices.get(symbol);

  const formatPrice = (price: number | undefined) => {
    if (price === undefined) return '---';
    return (price / 100).toFixed(2);
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const orderData = {
        symbol,
        side,
        type: orderType,
        quantity: parseInt(quantity),
        ...(orderType === 'limit' && { price: Math.round(parseFloat(price) * 100) }) // Convert to cents
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'}/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Send cookies with request
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        // alert('Order placed successfully!');
        setQuantity('');
        setPrice('');
      } else {
        const error = await response.json();
        alert(`Order failed: ${error.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Order submission error:', error);
      alert('Failed to place order');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>

      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">{symbol}</h1>
        <div className="flex items-center gap-4">
          <div className="text-3xl font-bold">${formatPrice(currentPrice)}</div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Activity className="h-4 w-4" />
            <span>{isConnected ? 'Live' : 'Disconnected'}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Price Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Live Price Chart
            </CardTitle>
            <CardDescription>Real-time price updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 relative">
              {priceHistory.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Waiting for price updates...
                </div>
              ) : (
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Calculate min/max for scaling */}
                  {(() => {
                    const maxPrice = Math.max(...priceHistory.map(p => p.price));
                    const minPrice = Math.min(...priceHistory.map(p => p.price));
                    const range = maxPrice - minPrice || 1;
                    
                    // Create path points
                    const points = priceHistory.map((point, idx) => {
                      const x = (idx / (priceHistory.length - 1)) * 100;
                      const y = 100 - ((point.price - minPrice) / range) * 100;
                      return `${x},${y}`;
                    }).join(' ');

                    // Create area path
                    const areaPath = `M 0,100 L ${priceHistory.map((point, idx) => {
                      const x = (idx / (priceHistory.length - 1)) * 100;
                      const y = 100 - ((point.price - minPrice) / range) * 100;
                      return `${x},${y}`;
                    }).join(' L ')} L 100,100 Z`;

                    return (
                      <>
                        {/* Gradient fill under line */}
                        <defs>
                          <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                          </linearGradient>
                        </defs>
                        
                        {/* Area under the line */}
                        <path
                          d={areaPath}
                          fill="url(#priceGradient)"
                        />
                        
                        {/* The line itself */}
                        <polyline
                          points={points}
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="0.5"
                          vectorEffect="non-scaling-stroke"
                        />
                      </>
                    );
                  })()}
                </svg>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Order Form */}
        <Card>
          <CardHeader>
            <CardTitle>Place Order</CardTitle>
            <CardDescription>Buy or sell {symbol}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              {/* Side Selection */}
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={side === 'buy' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => setSide('buy')}
                >
                  Buy
                </Button>
                <Button
                  type="button"
                  variant={side === 'sell' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => setSide('sell')}
                >
                  Sell
                </Button>
              </div>

              {/* Order Type */}
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={orderType === 'limit' ? 'default' : 'outline'}
                  size="sm"
                  className="flex-1"
                  onClick={() => setOrderType('limit')}
                >
                  Limit
                </Button>
                <Button
                  type="button"
                  variant={orderType === 'market' ? 'default' : 'outline'}
                  size="sm"
                  className="flex-1"
                  onClick={() => setOrderType('market')}
                >
                  Market
                </Button>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-sm font-medium mb-2 block">Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter quantity"
                  required
                  min="1"
                />
              </div>

              {/* Price (only for limit orders) */}
              {orderType === 'limit' && (
                <div>
                  <label className="text-sm font-medium mb-2 block">Price ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter price"
                    required
                  />
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Placing Order...' : `Place ${side.toUpperCase()} Order`}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
