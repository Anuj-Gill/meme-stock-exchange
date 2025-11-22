'use client';
import React, { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function AuthCallbackPage() {
  const router = useRouter();
  const [status, setStatus] = useState('Processing...');

  useEffect(() => {
    async function handleCallback() {
      try {
        // Get session from Supabase
        const { data: { session }, error } = await supabaseClient.auth.getSession();
        
        if (error) {
          setStatus(`Error: ${error.message}`);
          console.error('Auth error:', error);
          return;
        }

        if (session) {
          setStatus('Setting up your account...');
          console.log('Session established:', session);

          // Send tokens to backend
          try {
            const response = await axios.post(
              'http://localhost:4000/oauth/register',
              {
                accessToken: session.access_token,
                refreshToken: session.refresh_token,
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                },
                withCredentials: true, // Important: to receive cookies
              }
            );

            console.log('Backend response:', response.data);
            setStatus('Success! Redirecting...');

            // await supabaseClient.auth.signOut();

            // Redirect to dashboard
            setTimeout(() => {
              router.push('/dashboard');
            }, 1000);

          } catch (apiError) {
            console.error('API error:', apiError);
            setStatus('Failed to setup session. Please try again.');
          }
        } else {
          setStatus('No session found');
        }
      } catch (e) {
        console.error('Callback error:', e);
        setStatus(`Error: ${e}`);
      }
    }

    handleCallback();
  }, [router]);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>Auth Callback</h1>
      <p>{status}</p>
    </div>
  );
}