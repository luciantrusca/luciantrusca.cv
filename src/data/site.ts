// All site copy, sourced from Resume_DS.tex. Edit here, not in the components.

export const person = {
  name: 'Lucian Trusca',
  email: 'lucianmtrusca@gmail.com',
  github: 'https://github.com/luciantrusca',
  linkedin: 'https://www.linkedin.com/in/lucian-trusca/',
  tagline: ['Data scientist', 'Life sciences'],
  motto: ['Current focus', 'computational biology & ML'],
};

export const profile = {
  keywords: ['Questions', 'Data', 'Models', 'Decisions'],
  headline: ['Data Science', 'for Real-World Impact.'],
  statement:
    'I started in the lab as a biotechnologist and retrained in computer science. Now I build machine learning models, ' +
    'data pipelines and web tools for the life sciences, from camera-trap images to multiomics networks.',
  pills: ['ML & XAI', 'Computer Vision', 'Bioinformatics', 'Multiomics'],
  glance: [
    { icon: 'pin', title: 'Based in the Netherlands', text: 'Studying in Amsterdam' },
    { icon: 'cap', title: 'MSc Data Science, UvA', text: 'Thesis: multiomics networks (graphical LASSO)' },
    { icon: 'case', title: 'Data analyst, EHA', text: 'Survey & Researchfish impact data (Power BI)' },
    { icon: 'doc', title: '4 theses', text: 'aDNA · cave microbes · camera traps · multiomics' },
    { icon: 'chat', title: 'Languages', text: 'English & Romanian native, Dutch A2' },
  ],
};

export const journey = {
  keywords: ['Curiosity', 'Discipline', 'The pivot', 'Convergence'],
  title: 'Education & Career Journey.',
  subtitle: 'From the wet lab to data science.',
  // the main areas worked in, shown above the timeline
  highlights: [
    { area: 'Molecular Biotechnology', years: '2015 – 21' },
    { area: 'Bioinformatics', years: '2019 –' },
    { area: 'Computer Science', years: '2021 – 25' },
    { area: 'Data Science & ML', years: '2021 –' },
    { area: 'Embedded ML', years: 'Course project' },
  ],
  steps: [
    { kind: 'Education', dates: '2015 – 2019', title: 'BSc Industrial Biotechnology', place: 'Babeș-Bolyai University',
      achievement: 'Thesis: optimising ancient DNA recovery from archaeological wood.', gained: 'Molecular lab methods' },
    { kind: 'Education', dates: '2019 – 2021', title: 'MSc Molecular Biotechnology', place: 'Babeș-Bolyai University',
      achievement: 'Thesis: bioinformatic characterisation of Movile Cave sediment microbiomes.', gained: 'Bioinformatics, metagenomics' },
    { kind: 'Work', dates: 'Jan – Jul 2021', title: 'QC Junior Technician', place: 'Terapia, Cluj',
      achievement: 'Quality control testing with HPLC and UV-Vis under GMP.', gained: 'Regulated lab practice' },
    { kind: 'Education', dates: '2021 – 2025', title: 'BSc Computer Science', place: 'University of Twente',
      achievement: 'Thesis: vision transformers for wildlife camera-trap images.', gained: 'Software engineering, ML, computer vision' },
    { kind: 'Education + Work', dates: '2025 – ', now: 'Present', title: 'MSc Data Science', place: 'University of Amsterdam · EHA',
      achievement: 'Thesis: priors-informed graphical LASSO for multiomics; data analyst at EHA.', gained: 'Network biology, statistical ML' },
  ],
};

export type Figure = 'birds' | 'forecast' | 'dashboard' | 'signs' | 'cave';
export type Badge = 'featured' | 'new';

export const work = {
  keywords: ['Theses', 'Course projects', 'Hackathons', 'Prototypes'],
  moreProjects: 'https://github.com/luciantrusca?tab=repositories',
  // featured first: Meadow Birds spans two columns, Traffic Signs sits beside it
  projects: [
    {
      badge: 'featured' as Badge, wide: true, area: 'Computer vision', figure: 'birds' as Figure, title: 'Meadow Bird Detection',
      role: 'BSc thesis, University of Twente',
      problem: 'Monitoring meadow birds in camera-trap images, where light changes from day to night.',
      did: 'Benchmarked vision-transformer models and explained their predictions with XAI.',
      result: 'ViT models benchmarked day vs night, with XAI maps of failure cases',
      facts: [['Data', 'Camera-trap images'], ['Conditions', 'Day & night'], ['Models', 'Vision transformers'], ['Explained with', 'XAI attention maps']],
      tags: ['ViT', 'Detection', 'XAI'],
    },
    {
      badge: 'featured' as Badge, area: 'Embedded ML', figure: 'signs' as Figure, title: 'Edge Traffic Signs',
      role: 'Course project, Intelligent Embedded Systems',
      problem: 'Recognising traffic signs in real time on tiny hardware.',
      did: 'Trained a lightweight classifier in Edge Impulse, deployed it to an Arduino and field-tested it.',
      result: '>99% accuracy on 6 classes · 75% on all 42',
      tags: ['Arduino', 'Edge Impulse'],
    },
    {
      badge: 'new' as Badge, area: 'Time series', figure: 'forecast' as Figure, title: 'Sales Forecasting',
      role: 'Course project, Applied Forecasting',
      problem: 'Forecasting daily Walmart demand with weekly peaks and shifting volatility.',
      did: 'Built diagnostics (rolling stats, differencing, ACF/PACF) and compared three models.',
      result: 'End-to-end pipeline, 28-day horizon, 3 models compared',
      tags: ['Python', 'SARIMAX', 'ETS'],
    },
    {
      area: 'Data viz', figure: 'dashboard' as Figure, title: 'Security Dashboard',
      role: 'Team project',
      problem: 'DeepCase, a security analysis tool, was command-line only.',
      did: 'Prototyped in Figma and built a Dash app, with weekly stakeholder feedback.',
      result: 'CLI tool turned into an interactive dashboard with stakeholder-defined metrics',
      tags: ['Dash', 'Figma', 'SQL'],
    },
    {
      area: 'Bioinformatics', figure: 'cave' as Figure, title: 'Life in Movile Cave',
      role: 'MSc thesis, Babeș-Bolyai University',
      problem: 'Little is known about microbial life in an isolated Romanian cave.',
      did: 'Analysed sediment microbiomes from metagenomic and transcriptomic data.',
      result: 'Community structure mapped via abundance and cluster analysis',
      tags: ['Metagenomics', 'Clustering'],
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
    { area: 'Hackathon', title: 'Flood Prediction', text: 'Flood prediction from time series, 6th place', role: 'Cassini Hackathon', result: '6th place',
      bullets: ['Humanitarian-focused team hackathon', 'ML flood prediction from time series', 'Presented the solution to a jury'],
      tags: ['Python', 'ML', 'Geospatial'] },
  ],
};

export const skills = {
  keywords: ['Code', 'Domains', 'Next'],
  title: 'Skills.',
  subtitle: 'Grouped by area; dots show depth.',
  // level: 1 familiar, 2 proficient, 3 advanced. `best` pills are lit by default; hovering another moves the light
  groups: [
    { title: 'Data & analytics', pills: [
      { name: 'Python / Pandas', level: 3, best: true }, { name: 'SQL (PostgreSQL)', level: 2 }, { name: 'R', level: 2 },
      { name: 'Dash', level: 2 }, { name: 'Power BI', level: 2 }, { name: 'Matplotlib', level: 2 },
    ] },
    { title: 'ML & AI', pills: [
      { name: 'Classical ML', level: 3, best: true }, { name: 'scikit-learn', level: 2 }, { name: 'Computer vision', level: 2 },
      { name: 'NLP', level: 2 }, { name: 'Explainable AI', level: 2 }, { name: 'Time series', level: 2 },
    ] },
    { title: 'Software', pills: [
      { name: 'Docker & Git', level: 2 }, { name: 'TypeScript', level: 1 }, { name: 'React', level: 1 },
      { name: 'Node.js', level: 1 }, { name: 'Flask', level: 1 }, { name: 'Java', level: 1 },
    ] },
    { title: 'Life sciences', pills: [
      { name: 'Molecular biotechnology', level: 3, best: true }, { name: 'Metagenomics', level: 2 }, { name: 'Phylogenetics', level: 2 },
      { name: 'Ancient DNA', level: 2 }, { name: 'HPLC / UV-Vis', level: 2 }, { name: 'GMP QC', level: 1 },
    ] },
  ],
  focus: [
    'Computational biology & multiomics networks (MSc thesis)',
    'Explainable ML for scientific data',
    'Scientific software & data tools people use',
    'Edge / embedded ML',
  ],
};

export const footer = {
  role: 'MSc Data Science · University of Amsterdam',
  now: 'Now: MSc thesis on multiomics networks, UvA',
  open: ['Open to collaborations', 'and new ideas.'],
};
