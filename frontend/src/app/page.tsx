'use client';

import '@google/model-viewer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 bg-gradient-to-br from-purple-900 via-fuchsia-800 to-pink-600 text-white">
      <h1 className="text-5xl font-bold drop-shadow-lg text-center">
        Engagify XR Platform
      </h1>

      {/* 3D Model Viewer Section */}
      <section className="w-full max-w-xl flex flex-col items-center">
        <model-viewer
          src="/models/logo.glb"
          alt="Platform Logo"
          auto-rotate
          camera-controls
          ar
          style={{ width: '300px', height: '300px' }}
          className="drop-shadow-lg rounded-lg"
        ></model-viewer>
        <p className="mt-4 text-lg text-center">Experience our immersive 3D logo in action!</p>
      </section>

      {/* Interactive Card */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20 w-full max-w-sm shadow-xl">
        <CardContent className="p-6 text-center">
          <p className="text-lg">Explore our platform and dive into immersive learning experiences.</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:scale-105 transition-all">
                Try Demo
              </Button>
            </DialogTrigger>
            <DialogContent>
              <p>🚀 This dialog could open a detailed 3D interactive experience in the future!</p>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </main>
  );
}
