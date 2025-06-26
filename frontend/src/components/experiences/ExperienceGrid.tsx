'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const categories = ['All', 'Biology', 'Space', 'History', 'Math', 'Physics'];

const dummyExperiences = [
  {
    title: 'Solar System Journey',
    description: 'Explore planets in 3D space.',
    category: 'Space',
    image: '/images/space.jpg',
  },
  {
    title: 'Human Anatomy',
    description: 'Walk through the body in VR.',
    category: 'Biology',
    image: '/images/biology.jpg',
  },
  {
    title: 'World War II Map',
    description: 'Interactive battles timeline.',
    category: 'History',
    image: '/images/history.jpg',
  },
];

export default function ExperienceGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? dummyExperiences
    : dummyExperiences.filter(exp => exp.category === activeCategory);

  return (
    <section className="bg-white py-16 px-6 text-black" id="explore">
      <h2 className="text-3xl font-bold mb-8 text-center">Experiences</h2>

      {/* Category Filters */}
      <div className="flex gap-4 overflow-x-auto pb-4 justify-center mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((exp, idx) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-48 object-cover rounded-t-md"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-600">{exp.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
