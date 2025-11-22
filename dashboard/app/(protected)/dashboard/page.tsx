'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Get user data from localStorage
    const authData = localStorage.getItem('sb-zuxsdgfqyvltynwigkpc-auth-token');
    
    if (authData) {
      const parsed = JSON.parse(authData);
      setUser(parsed.user);
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard! You are now logged in.</p>
      
      <section>
        <h2>Your Account</h2>
        <p><strong>Email:</strong> {user.email || 'N/A'}</p>
        <p><strong>Name:</strong> {user.user_metadata?.name || user.email || 'N/A'}</p>
        <p><strong>User ID:</strong> {user.id || 'N/A'}</p>
        {user.user_metadata?.avatar_url && (
          <p><strong>Avatar:</strong> <img src={user.user_metadata.avatar_url} alt="avatar" width="50" /></p>
        )}
      </section>

      <section>
        <h2>Quick Stats</h2>
        <ul>
          <li>Total Memes: 0</li>
          <li>Total Trades: 0</li>
          <li>Portfolio Value: $0</li>
        </ul>
      </section>

      <section>
        <h2>Recent Activity</h2>
        <p>No recent activity</p>
      </section>

      <button onClick={() => {
        localStorage.removeItem('sb-zuxsdgfqyvltynwigkpc-auth-token');
        window.location.href = '/';
      }}>
        Logout
      </button>
    </div>
  );
}