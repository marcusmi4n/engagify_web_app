'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { experiences } from '../data';
import Image from 'next/image';

export default function ExperienceViewPage() {
  const { id } = useParams();
  const experience = experiences.find((exp) => exp.id === id);
  const [openChat, setOpenChat] = useState(false);

  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  if (!experience) return <p className="text-white p-10">Experience not found.</p>;

  return (
    <main className="min-h-screen bg-[#0f2c2c] text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Viewer + Review Panel */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* 🔍 3D Viewer */}
          <div className="bg-black rounded-lg p-2 shadow-lg">
            <model-viewer
              src={experience.model}
              ar
              ar-modes="webxr scene-viewer quick-look"
              auto-rotate
              camera-controls
              autoplay
              disable-zoom
              style={{ width: '100%', height: '500px', borderRadius: '12px' }}
            ></model-viewer>
            <button className="mt-4 w-full py-2 bg-cyan-600 hover:bg-cyan-700 transition rounded text-white font-semibold">
              ▶️ Play Experience
            </button>
          </div>

          {/* 📝 Review Panel */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-2">{experience.title}</h2>
            <p className="text-white/70 mb-4">{experience.description}</p>

            <div className="flex items-center gap-4 mt-6">
              <Image
                src={experience.author.avatar}
                alt={experience.author.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-sm text-white/80">By {experience.author.name}</span>
            </div>

            {/* 💬 Reviews */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">Student Reviews</h3>
              {experience.reviews.length ? (
                experience.reviews.map((r, i) => (
                  <p key={i} className="text-sm text-white/60 border-b border-white/20 py-2">
                    <strong>{r.user}</strong>: {r.comment}
                  </p>
                ))
              ) : (
                <p className="text-sm text-white/50">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* 📃 Experience Description Below */}
        <div className="mt-16 max-w-3xl">
          <h3 className="text-xl font-bold mb-2 text-cyan-300">About this Experience</h3>
          <p className="text-white/70 leading-relaxed">
            {experience.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            This is a placeholder extended description for demo purposes. You can replace this with real data later.
          </p>
        </div>
      </div>

      {/* 💬 Chatbot Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="w-14 h-14 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg text-xl"
          onClick={() => setOpenChat(!openChat)}
        >
          💬
        </button>
        {openChat && (
          <div className="absolute bottom-20 right-0 w-72 bg-white text-black rounded-lg shadow-lg p-4">
            <p className="text-sm font-semibold mb-2">Chat Assistant</p>
            <p className="text-sm">Hey! How can I help you with this experience?</p>
          </div>
        )}
      </div>
    </main>
  );
}
