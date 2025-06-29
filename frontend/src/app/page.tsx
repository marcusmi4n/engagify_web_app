'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import ExperienceGrid from '@/components/experiences/ExperienceGrid';
// import Lottie from 'lottie-react';
// import scrollAnimation from '@/lotties/scroll-down.json';

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
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        background: `radial-gradient(at ${position.x}% ${position.y}%, #135858 0%, #071a2f 100%)`,
        transition: 'background 0.3s ease',
      }}
    >
      {/* ✨ Stars Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(white_0.6px,transparent_1px)] bg-[length:40px_40px] opacity-10"></div>
      </div>

      {/* 🔷 Navbar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <model-viewer
            src="/models/logo.glb"
            auto-rotate
            disable-zoom
            style={{ width: '80px', height: '80px' }}
          ></model-viewer>
          <h1 className="text-xl font-bold">Engagify</h1>
        </div>

        <nav className="hidden md:flex gap-4 items-center">
          <Link href="/signup">
            <button className="text-white hover:text-cyan-300 transition duration-300">
              Sign Up
            </button>
          </Link>
        </nav>

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

      {/* 🔶 Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-[80vh] z-10">
        <div className="relative z-20 max-w-3xl">
          <h2 className="text-5xl font-bold drop-shadow-lg">
            Dive into the World of 3D Learning
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Create, explore, and interact with immersive educational experiences powered by Engagify XR.
          </p>
        </div>

        {/* 🎥 3D Model Animation on the Right */}
        <div className="absolute bottom-10 right-8 z-30 w-[320px] h-[320px]">
          <model-viewer
            src="/models/bluewhale.glb"
            camera-controls
            disable-zoom
            autoplay
            style={{ width: '100%', height: '100%' }}
          ></model-viewer>
        </div>
      </section>

      {/* ⬇️ Scroll Indicator */}
      <div className="relative z-30 flex justify-center pb-10">
        {/* <Lottie animationData={scrollAnimation} loop autoplay className="w-10 h-10" /> */}
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce drop-shadow-lg"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* 🌈 Gradient Fade */}
      <div className="h-20 bg-gradient-to-b from-transparent to-[#071a2f] z-10 -mt-4 pointer-events-none" />

      {/* 📦 Experience Grid */}
      <div className="relative z-20">
        <ExperienceGrid />
      </div>
    </main>
  );
}