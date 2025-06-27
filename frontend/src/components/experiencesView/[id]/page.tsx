// app/experienceView/[id]/page.tsx

'use client';

import { useParams } from 'next/navigation';
import { experiences } from '../data';
import Image from 'next/image';

export default function ExperienceViewPage() {
  const { id } = useParams();
  const experience = experiences.find((exp) => exp.id === id);

  if (!experience) return <p className="text-white p-10">Experience not found.</p>;

  return (
    <main className="min-h-screen bg-[#0f2c2c] text-white p-6">
      {/* Experience Viewer */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-black rounded-lg p-2">
          <model-viewer
            src={experience.model}
            ar
            ar-modes="webxr scene-viewer quick-look"
            auto-rotate
            camera-controls
            disable-zoom
            style={{ width: '100%', height: '500px' }}
          ></model-viewer>
          <button className="mt-4 w-full py-2 bg-cyan-600 hover:bg-cyan-700 transition rounded text-white font-semibold">
            ▶️ Play Experience
          </button>
        </div>

        {/* Right: Review Panel */}
        <div className="bg-white/10 backdrop-blur rounded-lg p-6">
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

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Student Reviews</h3>
            {experience.reviews.length ? (
              experience.reviews.map((r, i) => (
                <p key={i} className="text-sm text-white/60 border-b py-1">
                  <strong>{r.user}</strong>: {r.comment}
                </p>
              ))
            ) : (
              <p className="text-sm text-white/50">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Chatbot Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg text-xl">
          💬
        </button>
      </div>
    </main>
  );
}
