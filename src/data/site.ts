// All site copy, sourced from Resume_DS.tex. Edit here, not in the components.

export const person = {
  name: 'Lucian Trusca',
  email: 'lucianmtrusca@gmail.com',
  github: 'https://github.com/luciantrusca',
  linkedin: 'https://www.linkedin.com/in/lucian-trusca/',
  tagline: ['Data scientist', 'Life sciences'],
  motto: ['From cells', 'to code.'],
};

export const profile = {
  keywords: ['Questions', 'Data', 'Models', 'Decisions'],
  headline: ['Data Science', 'for Real-World Impact.'],
  statement:
    'I started in the lab as a biotechnologist and retrained in computer science. Now I build machine learning models, ' +
    'data pipelines and web tools for the life sciences, from camera-trap images to multiomics networks.',
  pills: ['Machine Learning', 'Data Analysis', 'Explainable AI', 'Bioinformatics'],
  glance: [
    { icon: 'pin', title: 'Based in the Netherlands', text: 'Studying in Amsterdam' },
    { icon: 'cap', title: 'MSc Data Science', text: 'University of Amsterdam (ongoing)' },
    { icon: 'case', title: 'Data analyst at EHA', text: 'Plus biotech research and pharma QC' },
    { icon: 'chat', title: 'Languages', text: 'English & Romanian native, Dutch A2' },
  ],
};

export const journey = {
  keywords: ['Curiosity', 'Discipline', 'The pivot', 'Convergence'],
  title: 'Education & Career Journey.',
  subtitle: 'From the wet lab to data science.',
  steps: [
    { dates: '2015 – 2019', title: 'BSc Industrial Biotechnology', place: 'Babeș-Bolyai University', text: 'Thesis on recovering ancient DNA from archaeological wood.' },
    { dates: '2019 – 2021', title: 'MSc Molecular Biotechnology', place: 'Babeș-Bolyai University', text: 'Bioinformatics thesis on Movile Cave sediment microbiomes.' },
    { dates: '2021', title: 'QC Junior Technician', place: 'Terapia, Cluj', text: 'Pharmaceutical QC with HPLC and UV-Vis under GMP.' },
    { dates: '2021 – 2025', title: 'BSc Computer Science', place: 'University of Twente', text: 'Thesis on vision transformers for wildlife camera traps.' },
    { dates: '2025 – ', now: 'Present', title: 'MSc Data Science', place: 'University of Amsterdam', text: 'Multiomics network thesis; data analyst at EHA.' },
  ],
};

export type Figure = 'birds' | 'forecast' | 'dashboard' | 'signs' | 'cave';
export type Badge = 'featured' | 'new';

export const work = {
  keywords: ['Theses', 'Course projects', 'Hackathons', 'Prototypes'],
  moreProjects: 'https://github.com/luciantrusca?tab=repositories',
  projects: [
    {
      badge: 'featured' as Badge, area: 'Computer vision', figure: 'birds' as Figure, title: 'Meadow Bird Detection',
      bullets: ['Benchmarked ViT models on camera-trap data', 'Tested robustness day and night', 'Explained predictions with XAI'],
      tags: ['ViT', 'Detection', 'XAI'],
      role: 'BSc thesis, University of Twente',
    },
    {
      badge: 'new' as Badge, area: 'Time series', figure: 'forecast' as Figure, title: 'Sales Forecasting',
      bullets: ['Forecasts 28 days of demand', 'Found weekly seasonality and shifting volatility', 'Compared seasonal naive, ETS, SARIMAX'],
      tags: ['Python', 'SARIMAX', 'ETS'],
      role: 'Course project, Applied Forecasting',
    },
    {
      area: 'Data viz', figure: 'dashboard' as Figure, title: 'Security Dashboard',
      bullets: ['Turned a CLI tool into a Dash app', 'Prototyped the interface in Figma', 'Metrics defined with stakeholders weekly'],
      tags: ['Dash', 'Figma', 'SQL'],
      role: 'Team project',
    },
    {
      area: 'Embedded ML', figure: 'signs' as Figure, title: 'Edge Traffic Signs',
      bullets: ['Over 99% accurate on 6 classes', '75% on the full 42-class set', 'Field-tested across distance, angle, light'],
      tags: ['Arduino', 'Edge Impulse'],
      role: 'Course project, Intelligent Embedded Systems',
    },
    {
      area: 'Bioinformatics', figure: 'cave' as Figure, title: 'Life in Movile Cave',
      bullets: ['Characterised taxonomic diversity of cave sediment microbiomes', 'Metagenomic and transcriptomic profiling', 'Abundance and cluster analysis across samples'],
      tags: ['Metagenomics', 'Clustering'],
      role: 'MSc thesis, Babeș-Bolyai University',
    },
  ],
  // revealed by "See more projects"
  extra: [
    { area: 'NLP', title: 'Cottage Listings Cleanup', text: 'NLP cleanup with spaCy, ML imputation', role: 'Data science & AI project',
      bullets: ['Cleaned a real-world JSON dataset of listings', 'Standardised descriptions with spaCy', 'Filled missing values with ML models'],
      tags: ['Python', 'spaCy', 'NLP'] },
    { area: 'Web app', title: 'Training Management System', text: 'Role-based web app with progress dashboards', role: 'Course project, Data & Information',
      bullets: ['Role-based app for admins, trainers, trainees', 'Courses, groups and progress tracking', 'Trainee dashboards with schedules'],
      tags: ['JavaScript', 'SQL', 'REST'] },
    { area: 'HCI', title: 'Chessmate Helper', text: 'Real-time move assistant with OpenCV', role: 'Course project, Human Computer Interaction',
      bullets: ['AI chess assistant with real-time object detection', 'User research with players of all levels', 'Personas and feedback flows'],
      tags: ['Python', 'OpenCV', 'Figma'] },
    { area: 'Hackathon', title: 'Flood Prediction', text: 'Flood prediction from time series, 6th place', role: 'Cassini Hackathon, 6th place',
      bullets: ['Humanitarian-focused team hackathon', 'ML flood prediction from time series', 'Presented the solution to a jury'],
      tags: ['Python', 'ML', 'Geospatial'] },
  ],
};

export const skills = {
  keywords: ['Code', 'Domains', 'Next'],
  title: 'Skills.',
  subtitle: 'Technical depth, a life-science background, and a drive for useful problems.',
  // `best` pills are lit by default; hovering another pill moves the light
  groups: [
    // level: 1 familiar, 2 proficient, 3 advanced
    { title: 'Technical skills', pills: [
      { name: 'Python', level: 3, best: true }, { name: 'Machine learning', level: 3, best: true },
      { name: 'R', level: 2 }, { name: 'SQL', level: 2 }, { name: 'Computer vision', level: 2 },
      { name: 'NLP & XAI', level: 2 }, { name: 'Time series', level: 2 }, { name: 'Dash', level: 2 },
      { name: 'Docker & Git', level: 2 }, { name: 'React, TypeScript', level: 1 },
    ] },
    { title: 'Domain experience', pills: [
      { name: 'Life sciences', level: 3, best: true }, { name: 'Biotechnology', level: 3 }, { name: 'Metagenomics', level: 2 },
      { name: 'Pharma QC', level: 1 }, { name: 'Wildlife monitoring', level: 1 }, { name: 'Security tooling', level: 1 },
    ] },
  ],
  direction: 'Looking for data science roles in life-science AI, network biology and AI-assisted tools.',
};

export const footer = {
  role: 'MSc Data Science · University of Amsterdam',
  quote: 'From pipettes to pipelines, one curiosity.',
  open: ['Open to collaborations', 'and new ideas.'],
};
