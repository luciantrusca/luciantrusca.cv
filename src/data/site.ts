// All site copy, sourced from Resume_DS.tex. Edit here, not in the components.

export const person = {
  name: 'Lucian Trusca',
  email: 'lucianmtrusca@gmail.com',
  github: 'https://github.com/luciantrusca',
  linkedin: 'https://www.linkedin.com/in/lucian-trusca/',
  tagline: ['Data scientist', 'Engineer', 'Problem solver'],
  motto: ['From cells', 'to code.'],
};

export const profile = {
  keywords: ['Questions', 'Data', 'Models', 'Decisions'],
  headline: ['Data Science', 'for Real-World Impact.'],
  statement:
    'I’m a data scientist with a background in biotechnology. I turn messy data into models, pipelines and dashboards ' +
    'that people can actually use, from camera-trap images to multiomics networks.',
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
  subtitle: 'A path from the wet lab to data science, each step adding a new way of looking at the same questions.',
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
  intro: 'Projects from across the path, each turning data into a decision.',
  allProjects: 'https://github.com/luciantrusca?tab=repositories',
  projects: [
    {
      badge: 'featured' as Badge, area: 'Computer vision', figure: 'birds' as Figure, title: 'Meadow Bird Detection',
      text: 'Vision transformers that spot meadow birds in camera-trap images.',
      bullets: ['Benchmarked ViT models on camera-trap data', 'Tested robustness day and night', 'Explained predictions with XAI'],
      tags: ['ViT', 'Detection', 'XAI'],
      role: 'BSc thesis, University of Twente',
    },
    {
      badge: 'new' as Badge, area: 'Time series', figure: 'forecast' as Figure, title: 'Sales Forecasting',
      text: 'An end-to-end pipeline for daily Walmart sales.',
      bullets: ['Forecasts 28 days of demand', 'Found weekly seasonality and shifting volatility', 'Compared seasonal naive, ETS, SARIMAX'],
      tags: ['Python', 'SARIMAX', 'ETS'],
      role: 'Course project, Applied Forecasting',
    },
    {
      area: 'Data viz', figure: 'dashboard' as Figure, title: 'Security Dashboard',
      text: 'An interactive dashboard for the DeepCase security tool.',
      bullets: ['Turned a CLI tool into a Dash app', 'Prototyped the interface in Figma', 'Metrics defined with stakeholders weekly'],
      tags: ['Dash', 'Figma', 'SQL'],
      role: 'Team project',
    },
    {
      area: 'Embedded ML', figure: 'signs' as Figure, title: 'Edge Traffic Signs',
      text: 'A real-time image classifier running on an Arduino.',
      bullets: ['Over 99% accurate on 6 classes', '75% on the full 42-class set', 'Field-tested across distance, angle, light'],
      tags: ['Arduino', 'Edge Impulse'],
      role: 'Course project, Intelligent Embedded Systems',
    },
    {
      area: 'Bioinformatics', figure: 'cave' as Figure, title: 'Life in Movile Cave',
      text: 'Microbial diversity in an isolated Romanian cave.',
      bullets: ['Metagenomic and transcriptomic data', 'Abundance and cluster analysis', 'Patterns in community structure'],
      tags: ['Metagenomics', 'Clustering'],
      role: 'MSc thesis, Babeș-Bolyai University',
    },
  ],
  also: [
    { title: 'Cottage listings', text: 'NLP cleanup with spaCy, ML imputation' },
    { title: 'Training platform', text: 'Role-based web app with progress dashboards' },
    { title: 'Chessmate', text: 'Real-time move assistant with OpenCV' },
    { title: 'Cassini Hackathon', text: 'Flood prediction from time series, 6th place' },
  ],
};

export const skills = {
  keywords: ['Code', 'Domains', 'Next'],
  title: 'Skills & What’s Next.',
  subtitle: 'Technical depth, a life-science background, and a drive for useful problems.',
  // `best` pills are lit by default; hovering another pill moves the light
  groups: [
    { title: 'Technical skills', pills: [
      { name: 'Python', best: true }, { name: 'R' }, { name: 'SQL' }, { name: 'Machine learning', best: true },
      { name: 'Computer vision' }, { name: 'NLP & XAI' }, { name: 'Time series' }, { name: 'Dash' },
      { name: 'Docker & Git' }, { name: 'React, TypeScript' },
    ] },
    { title: 'Domain experience', pills: [
      { name: 'Life sciences', best: true }, { name: 'Biotechnology' }, { name: 'Metagenomics' }, { name: 'Pharma QC' },
      { name: 'Wildlife monitoring' }, { name: 'Security tooling' },
    ] },
  ],
  direction: 'Looking for data science roles in life-science AI, network biology and AI-assisted tools.',
};

export const footer = {
  role: 'Data scientist × Engineer × Problem solver',
  quote: 'Same questions, better tools.',
  open: ['Open to collaborations', 'and new ideas.'],
};
