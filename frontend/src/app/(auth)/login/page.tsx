'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-fuchsia-800 to-pink-600 px-4">
      <Card className="w-full max-w-md shadow-xl border-white/20 bg-white/10 backdrop-blur-md text-white">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-3xl font-bold text-center">
            {isLogin ? 'Login to Engagify' : 'Create Your Account'}
          </h2>

          <form className="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" />
                </div>
              </>
            )}

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:scale-105 transition-all"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
          </form>

          <p className="text-sm text-center text-white/80">
            {isLogin ? (
              <>
                Don’t have an account?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="underline text-fuchsia-300 hover:text-white"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already registered?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="underline text-fuchsia-300 hover:text-white"
                >
                  Login
                </button>
              </>
            )}
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
