'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import '@google/model-viewer';

export default function CreateExperiencePage() {
  const [modelFile, setModelFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState('');

  const handleModelUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setModelFile(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handlePDFUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPdfFile(file);
    }
  };

  const handleSubmit = () => {
    // Placeholder for form submission
    console.log({
      title,
      description,
      author,
      category,
      modelFile,
      pdfFile,
    });
    alert('Experience saved successfully (mock).');
  };

  return (
    <main className="min-h-screen bg-[#071a2f] text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-cyan-300">
        Create a New 3D Experience
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* 🔺 Model Preview */}
        <div className="relative">
          {previewURL ? (
            <model-viewer
              src={previewURL}
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
          ) : (
            <div className="w-full h-[500px] bg-black/50 flex items-center justify-center rounded-xl border border-cyan-600 border-dashed">
              <span className="text-white/60 text-sm">Upload a .glb model to preview</span>
            </div>
          )}
        </div>

        {/* 🔶 Experience Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Experience Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#0e223a] text-white border border-cyan-500 focus:outline-none"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 rounded bg-[#0e223a] text-white border border-cyan-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Creator Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#0e223a] text-white border border-cyan-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 rounded bg-[#0e223a] text-white border border-cyan-500 focus:outline-none"
          />

          {/* Uploaders */}
          <div>
            <label className="text-sm text-white/70">Upload .glb Model</label>
            <input
              type="file"
              accept=".glb"
              onChange={handleModelUpload}
              className="w-full mt-1 text-sm text-white"
            />
          </div>

          <div>
            <label className="text-sm text-white/70">Upload PDF / Notes</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handlePDFUpload}
              className="w-full mt-1 text-sm text-white"
            />
          </div>

          <Button onClick={handleSubmit} className="w-full bg-cyan-600 hover:bg-cyan-700">
            ✅ Save Experience
          </Button>
        </div>
      </div>

      {/* Future: Hotspot Editor UI Placeholder */}
      <section className="mt-12 bg-[#0c1e30] p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-cyan-300">🧠 Coming Soon</h2>
        <p className="text-white/80">
          Soon you’ll be able to add <strong>hotspots</strong>, <strong>audio narrations</strong>, <strong>images</strong>, and even
          <strong>quiz questions</strong> right onto the 3D model.
        </p>
      </section>
    </main>
  );
}
