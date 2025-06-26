'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 bg-gradient-to-br from-purple-900 via-fuchsia-800 to-pink-600 text-white">
      <h1 className="text-5xl font-bold drop-shadow-lg text-center">Engagify XR</h1>

      <Card className="bg-white/10 backdrop-blur-md border-white/20 w-full max-w-sm shadow-xl">
        <CardContent className="p-6 text-center">
          <p className="text-lg">Welcome to the future of immersive learning.</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:scale-105 transition-all">
                Try Demo
              </Button>
            </DialogTrigger>
            <DialogContent>
              <p>🚀 Imagine this opening a 3D experience or game!</p>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </main>
  );
}
