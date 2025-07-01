'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Button } from '@/components/ui/button';
import '@google/model-viewer';

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '' });

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal */}
      <Dialog.Panel className="relative z-50 w-full max-w-md mx-auto rounded-2xl bg-white/10 backdrop-blur-xl border border-cyan-500/30 p-6 shadow-lg">
        {/* Glow Border */}
        <div className="absolute inset-0 rounded-2xl border border-cyan-500/20 pointer-events-none shadow-[0_0_20px_2px_rgba(0,255,255,0.3)]" />

        {/* 3D Model Logo */}
        <div className="flex justify-center mb-4">
          <model-viewer
            src="/models/gibb.glb"
            auto-rotate
            camera-controls
            style={{ width: '140px', height: '140px' }}
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition ${
              isLogin ? 'bg-cyan-500 text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`ml-4 px-4 py-1 rounded-full text-sm font-medium transition ${
              !isLogin ? 'bg-cyan-500 text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert(`${isLogin ? 'Logging in' : 'Signing up'} with email: ${form.email}`);
          }}
        >
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 rounded bg-[#112f4c] text-white text-sm border border-cyan-600 placeholder:text-white/60"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-2 rounded bg-[#112f4c] text-white text-sm border border-cyan-600 placeholder:text-white/60"
          />

          <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 w-full">
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </form>

        {/* Divider */}
        <div className="mt-6 flex items-center gap-4">
          <hr className="flex-1 border-white/20" />
          <span className="text-sm text-white/60">OR</span>
          <hr className="flex-1 border-white/20" />
        </div>

        {/* Google Login */}
        <button className="mt-4 w-full py-2 border border-cyan-300/40 rounded text-sm text-white hover:bg-white/10 transition">
          😁👍 Continue with Google
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}
