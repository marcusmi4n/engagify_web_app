'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import Link from 'next/link';

const categories = ['All', 'Biology', 'Space', 'History', 'Math', 'Physics'];

const dummyExperiences = [
  {
    id: 'solar-system',
    title: 'Solar System Journey',
    description: 'Explore planets in 3D space.',
    category: 'Space',
    image: '/images/space.jpg',
  },
  {
    id: 'human-anatomy',
    title: 'Human Anatomy',
    description: 'Walk through the body in VR.',
    category: 'Biology',
    image: '/images/human.jpeg',
  },
  {
    id: 'ww2-map',
    title: 'World War II Map',
    description: 'Interactive battles timeline.',
    category: 'History',
    image: '/images/ww2.png',
  },
];

export default function ExperienceGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? dummyExperiences
      : dummyExperiences.filter((exp) => exp.category === activeCategory);

  return (
    <section className="py-20 px-6 text-white bg-[#0f2c2c]" id="explore">
      <h2 className="text-4xl font-bold mb-12 text-center text-cyan-300 drop-shadow-lg">
        Experiences
      </h2>

      {/* Category Filters */}
      <div className="flex gap-4 overflow-x-auto pb-6 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
              activeCategory === cat
                ? 'bg-cyan-600 text-white border-cyan-300'
                : 'bg-white/10 text-white border-white/10 hover:bg-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/experience/${exp.id}`}>
              <Card className="relative bg-white/10 backdrop-blur-md border border-cyan-200/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-400/80 cursor-pointer group">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold text-cyan-100">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-white/70 mt-2">
                    {exp.description}
                  </p>
                </CardContent>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-xl pointer-events-none group-hover:shadow-[0_0_18px_2px_rgba(0,255,255,0.25)] transition duration-300" />
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
