'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default function HomePage() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    import('@google/model-viewer');

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main
      className="min-h-screen relative overflow-hidden text-white"
      style={{
        background: `radial-gradient(at ${position.x}% ${position.y}%,rgb(109, 197, 238) 0%, #1e1b4b 100%)`,
        transition: 'background 0.3s ease',
      }}
    >
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 py-4 w-full z-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <model-viewer
            src="/models/logo.glb"
            auto-rotate
            camera-controls
            style={{ width: '60px', height: '60px' }}
          ></model-viewer>
          <h1 className="text-xl font-bold">Engagify</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 items-center">
          <Link href="/signup">
            <button className="text-white hover:text-blue-500 transition duration-300">
              Sign Up
            </button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0f172a] text-white">
              <nav className="flex flex-col gap-4 mt-10">
                <Link href="/signup">Sign Up</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 h-[80vh]">
        <h2 className="text-5xl font-bold leading-tight drop-shadow-lg">
          Dive into the World of 3D Learning
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-xl">
          Create, explore, and interact with immersive educational experiences powered by Engagify XR.
        </p>
      </section>

      {/* Scroll Down Area */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        {/* Replace below with your Lottie animation */}
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce feather feather-chevron-down">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </main>
  );
}
