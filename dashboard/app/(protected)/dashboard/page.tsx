'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { usePriceStream } from '@/hooks/usePriceStream';
import { SYMBOLS } from '@/lib/constants';
import Link from 'next/link';
import { ArrowUpIcon, ActivityIcon } from 'lucide-react';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const { prices, isConnected } = usePriceStream();

  useEffect(() => {
    // Get user data from localStorage
    const authData = localStorage.getItem('sb-zuxsdgfqyvltynwigkpc-auth-token');
    
    if (authData) {
      const parsed = JSON.parse(authData);
      setUser(parsed.user);
    }
  }, []);

  const formatPrice = (price: number | undefined) => {
    if (price === undefined) return '---';
    return (price / 100).toFixed(2); // Convert from cents to dollars
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Meme Stock Exchange</h1>
        <p className="text-muted-foreground mb-4">Welcome back, {user.user_metadata?.name || user.email}!</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ActivityIcon className="h-4 w-4" />
          <span>{isConnected ? 'Live Market Data' : 'Connecting...'}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SYMBOLS.map((symbol) => {
          const currentPrice = prices.get(symbol);
          
          return (
            <Link href={`/symbol/${symbol}`} key={symbol}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{symbol}</span>
                    <div className="flex items-center gap-1 text-sm font-normal">
                      {currentPrice !== undefined ? (
                        <>
                          <ArrowUpIcon className="h-4 w-4 text-green-500" />
                          <span className="text-green-500">Live</span>
                        </>
                      ) : (
                        <span className="text-muted-foreground">Loading...</span>
                      )}
                    </div>
                  </CardTitle>
                  <CardDescription>Meme Stock</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    ${formatPrice(currentPrice)}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Click to view details and trade
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <button 
        className="mt-8 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => {
          localStorage.removeItem('sb-zuxsdgfqyvltynwigkpc-auth-token');
          window.location.href = '/';
        }}
      >
        Logout
      </button>
    </div>
  );
}