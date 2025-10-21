
// src/data/portfolioData.js
export const navItems = ['Home', 'About', 'Skills', 'Projects', 'Publications', 'Contact'];

export const skills = {
  'Environmental Health': [
    { name: 'Environmental Impact Assessment', level: 95 },
    { name: 'Public Health Policy', level: 90 },
    { name: 'Water Quality Management', level: 88 },
    { name: 'Air Quality Monitoring', level: 85 },
    { name: 'Waste Management Systems', level: 92 },
    { name: 'Environmental Epidemiology', level: 87 }
  ],
  'Frontend Development': [
    { name: 'React.js / Next.js', level: 93 },
    { name: 'TypeScript', level: 88 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Redux / Context API', level: 85 },
    { name: 'GraphQL', level: 82 },
    { name: 'React Native', level: 78 }
  ],
  'Backend Development': [
    { name: 'Node.js / Express', level: 90 },
    { name: 'Python / Django', level: 85 },
    { name: 'PostgreSQL / MongoDB', level: 88 },
    { name: 'REST APIs', level: 92 },
    { name: 'Docker / Kubernetes', level: 80 },
    { name: 'AWS / Cloud Services', level: 83 }
  ],
  'Data & Analytics': [
    { name: 'Environmental Data Analysis', level: 91 },
    { name: 'GIS Mapping', level: 86 },
    { name: 'R / Statistical Modeling', level: 84 },
    { name: 'Machine Learning', level: 79 },
    { name: 'Data Visualization', level: 88 },
    { name: 'SQL', level: 90 }
  ]
};

export const projects = [
  {
    title: 'EcoTrack Pro',
    category: 'Environmental + Tech',
    description: 'Full-stack environmental monitoring platform for tracking air and water quality metrics in real-time across urban areas.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'IoT Sensors', 'D3.js', 'AWS'],
    features: ['Real-time data visualization', 'Predictive analytics', 'Mobile responsive', 'API integration'],
    github: 'https://github.com/minaallison/ecotrack-pro',
    live: 'https://ecotrack-pro.demo',
    impact: '50+ cities monitored, 30% improvement in response time to environmental hazards'
  },
  {
    title: 'HealthMap Dashboard',
    category: 'Public Health',
    description: 'Interactive GIS-based dashboard for visualizing disease patterns and environmental health correlations.',
    tech: ['React', 'Python', 'Leaflet.js', 'FastAPI', 'MongoDB', 'Docker'],
    features: ['Geospatial analysis', 'Predictive modeling', 'Report generation', 'Multi-language support'],
    github: 'https://github.com/minaallison/healthmap',
    live: 'https://healthmap.demo',
    impact: 'Used by 15 health departments, processing 1M+ data points daily'
  },
  {
    title: 'WasteWise AI',
    category: 'Sustainability Tech',
    description: 'ML-powered waste management optimization system for smart cities with route optimization and recycling analytics.',
    tech: ['Next.js', 'TensorFlow.js', 'Express', 'Redis', 'PostgreSQL', 'Mapbox'],
    features: ['AI route optimization', 'Waste classification', 'Carbon tracking', 'Admin dashboard'],
    github: 'https://github.com/minaallison/wastewise-ai',
    live: 'https://wastewise.demo',
    impact: '25% reduction in collection costs, 40% increase in recycling rates'
  },
  {
    title: 'AquaGuard Mobile',
    category: 'Mobile Development',
    description: 'React Native app for community-based water quality reporting with crowd-sourced data collection.',
    tech: ['React Native', 'Firebase', 'Node.js', 'Google Maps API', 'Push Notifications'],
    features: ['Offline capability', 'Photo evidence', 'Community alerts', 'Data validation'],
    github: 'https://github.com/minaallison/aquaguard',
    live: 'https://aquaguard.app',
    impact: '10,000+ active users, 500+ water sources monitored'
  }
];

export const publications = [
  { title: 'Integration of IoT Technologies in Environmental Health Monitoring: A Comprehensive Framework', journal: 'Journal of Environmental Health Science', year: '2024', doi: '10.1234/jehs.2024.001', citations: 45 },
  { title: 'Machine Learning Applications in Predicting Air Quality Index: Urban Case Studies', journal: 'Environmental Technology & Innovation', year: '2023', doi: '10.1234/eti.2023.112', citations: 62 },
  { title: 'Digital Transformation in Public Health: Building Resilient Environmental Health Systems', journal: 'International Journal of Public Health Informatics', year: '2023', doi: '10.1234/ijphi.2023.089', citations: 38 },
];

export const certifications = [
  { name: 'Certified Environmental Health Specialist (CEHS)', org: 'NEHA', year: '2021' },
  { name: 'AWS Certified Solutions Architect', org: 'Amazon', year: '2023' },
  { name: 'Google Cloud Professional Data Engineer', org: 'Google', year: '2023' },
  { name: 'Certified Kubernetes Administrator', org: 'CNCF', year: '2024' }
];
