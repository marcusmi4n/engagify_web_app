export const experiences = [
  {
    id: 'solar-system',
    title: 'Solar System Journey',
    description: 'Explore planets in 3D space.',
    model: '/models/solar.glb',
    author: {
      name: 'Mr. Cosmos',
      avatar: '/images/avatar1.jpg',
    },
    reviews: [
      { user: 'Amina', comment: 'Absolutely stellar experience!' },
      { user: 'Joel', comment: 'Felt like I was flying through space!' },
    ],
  },
  {
    id: 'human-anatomy',
    title: 'Human Anatomy',
    description: 'Walk through the body in VR.',
    model: '/models/anatomy.glb',
    author: {
      name: 'Dr. Bio',
      avatar: '/images/avatar2.jpg',
    },
    reviews: [
      { user: 'Kato', comment: 'I never understood anatomy this clearly!' },
    ],
  },
  {
    id: 'ww2-map',
    title: 'World War II Map',
    description: 'Interactive battles timeline.',
    model: '/models/ww2.glb',
    author: {
      name: 'Professor History',
      avatar: '/images/avatar3.jpg',
    },
    reviews: [],
  },
];
