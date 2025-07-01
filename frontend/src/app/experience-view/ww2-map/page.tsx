'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function SolarSystemPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([
    'Mind-blowing visuals! - Jane',
    'Felt like I was in space! - Alex',
    'Great for learning planets. - Sam',
  ]);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleAddReview = () => {
    if (review.trim()) {
      setReviews([...reviews, `You: ${review}`]);
      setReview('');
    }
  };

  return (
    <main className="min-h-screen bg-[#071a2f] text-white px-4 md:px-12 py-10 relative">
      {/* 🔳 Fullscreen Model Viewer */}
      {isFullscreen ? (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
          <model-viewer
            src="/models/black_arm.glb" // Change to your actual model e.g., /models/solar-system.glb
            auto-rotate
            camera-controls
            ar
            ar-modes="webxr scene-viewer quick-look"
            style={{ width: '100vw', height: '100vh', background: '#000' }}
          ></model-viewer>

          <Button
            onClick={() => setIsFullscreen(false)}
            className="absolute bottom-6 right-6 bg-red-600 hover:bg-red-700"
          >
            ✖ Exit
          </Button>
        </div>
      ) : (
        <>
          {/* Normal Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 3D Model */}
            <div className="md:col-span-2 relative">
              <model-viewer
                src="/models/black_arm.glb"
                auto-rotate
                camera-controls
                ar
                ar-modes="webxr scene-viewer quick-look"
                style={{
                  width: '100%',
                  height: '500px',
                  background: '#000',
                  borderRadius: '12px',
                }}
              ></model-viewer>

              <button
                className="absolute bottom-4 right-4 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full shadow-lg transition"
                onClick={() => setIsFullscreen(true)}
              >
                ▶ Play Experience
              </button>
            </div>

            {/* Review Panel */}
            <div className="bg-[#0e223a] rounded-lg p-6 shadow-lg flex flex-col justify-between h-[650px]">
              <div>
                <h3 className="text-xl font-semibold mb-2">User Reviews</h3>
                <p className="text-sm text-white/80 mb-4">⭐ 4.7 (32 ratings)</p>
                <ul className="space-y-2 text-sm max-h-40 overflow-y-auto pr-2">
                  {reviews.map((r, i) => (
                    <li key={i} className="text-white/70">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <input
                  type="text"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Write your review..."
                  className="flex-1 px-3 py-2 rounded bg-[#112f4c] text-sm text-white border border-cyan-600 focus:outline-none"
                />
                <Button
                  onClick={handleAddReview}
                  className="bg-cyan-600 hover:bg-cyan-700"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>

          {/* Experience Details */}
          <section className="mt-12 bg-[#0c1e30] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">World War II Map</h2>
            <p className="text-white/80 mb-6 max-w-3xl">
              Explore the solar system in immersive 3D using AR and VR. Learn about planets,
              moons, and the sun like never before.
            </p>

            <div className="flex items-center gap-4">
              <img
                src="/images/profile.jpeg"
                alt="Prof. Marcus"
                className="w-12 h-12 rounded-full border-2 border-cyan-500"
              />
              <span className="text-white/80">
                Created by <strong>Prof. Marcus</strong>
              </span>
            </div>
          </section>
        </>
      )}

      {/* 🗨️ Floating Chat Button */}
      <div
        className="fixed z-[999] cursor-move"
        style={{ bottom: '24px', right: '24px' }}
        onDragStart={(e) => e.preventDefault()}
      >
        <Button
          onClick={() => setChatOpen(!chatOpen)}
          className="rounded-full w-14 h-14 p-0 bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg text-xl"
        >
          💬
        </Button>

        {/* Chat Popup */}
        {chatOpen && (
          <div className="absolute bottom-20 right-0 bg-[#0f2c2c] text-white p-4 rounded-lg shadow-xl w-80 z-50">
            <p className="text-sm mb-2 font-semibold">Ask your assistant anything!</p>
            <textarea
              rows={3}
              placeholder="Type a message..."
              className="w-full text-sm p-2 rounded bg-[#132f3f] text-white resize-none focus:outline-none"
            />
            <Button className="mt-2 w-full bg-cyan-500 hover:bg-cyan-600">Send</Button>
          </div>
        )}
      </div>
    </main>
  );
}
