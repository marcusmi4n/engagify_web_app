// app/experienceView/[id]/data.ts

export const experiences = [
  {
    id: 'solar-system',
    title: 'Solar System Journey',
    description: 'Explore planets in 3D space.',
    image: '/images/space.jpg',
    model: '/models/solar.glb',
    author: {
      name: 'Jane Doe',
      avatar: '/avatars/jane.jpg',
    },
    reviews: [
      { user: 'student1', comment: 'Amazing planets!' },
      { user: 'student2', comment: 'Felt like NASA!' },
    ],
  },
  {
    id: 'human-anatomy',
    title: 'Human Anatomy',
    description: 'Walk through the body in VR.',
    image: '/images/biology.jpg',
    model: '/models/anatomy.glb',
    author: {
      name: 'Dr. Smith',
      avatar: '/avatars/smith.jpg',
    },
    reviews: [],
  },
];
