// All site copy, sourced from Resume_DS.tex. Edit here, not in the components.

export const person = {
  name: 'Lucian Trusca',
  email: 'lucianmtrusca@gmail.com',
  github: 'https://github.com/luciantrusca',
  linkedin: 'https://www.linkedin.com/in/lucian-trusca/',
  tagline: ['Full-stack developer', 'Data & AI'],
  motto: ['Current focus', 'data & AI products'],
};

export const profile = {
  keywords: ['Questions', 'Data', 'Models', 'Decisions'],
  headline: ['Building Data & AI', 'Products, End to End.'],
  statement:
    'I’m a full-stack developer with a data science focus. I build web apps, dashboards and ML pipelines end to end, ' +
    'from the database and model to the interface people use. A background in biotechnology means I’m at home with messy, scientific data.',
  // tag variants (switcher: ?variants). A: role pills + stack row, B: stack pills + focus row, C: role pills + stack line
  roleTags: ['Full-Stack', 'Machine Learning', 'Data Pipelines', 'Dashboards'],
  stackTags: ['Python', 'TypeScript / React', 'SQL', 'Machine Learning'],
  glance: [
    { icon: 'pin', title: 'Based in the Netherlands', text: 'Studying in Amsterdam' },
    { icon: 'cap', title: 'MSc Data Science, UvA', text: 'Thesis: MODIN, multiomics networks' },
    { icon: 'case', title: 'Data analyst intern, EHA', text: 'Impact data & reporting (Power BI)' },
    { icon: 'code', title: 'Stack', text: 'Python · TypeScript / React · SQL · Machine Learning', variant: 'a' },
    { icon: 'target', title: 'Focus', text: 'Full-stack · ML · data pipelines · dashboards', variant: 'b' },
    { icon: 'doc', title: '4 theses', text: 'aDNA · cave microbes · camera traps · multiomics', variant: 'c' },
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
      achievement: 'Thesis (MODIN): priors-informed graphical LASSO for multiomics; data analyst intern at EHA.', gained: 'Network biology, statistical ML' },
  ],
};

export type Figure = 'birds' | 'forecast' | 'dashboard' | 'signs' | 'cave' | 'survey' | 'network';
export type Badge = 'featured' | 'new';

export const work = {
  keywords: ['Theses', 'Course projects', 'Hackathons', 'Prototypes'],
  moreProjects: 'https://github.com/luciantrusca?tab=repositories',
  // top three: two featured + one new; the rest sit behind "Expand these projects"
  projects: [
    {
      badge: 'featured' as Badge, area: 'Data analysis', figure: 'survey' as Figure, title: 'Research Impact Analytics',
      role: 'Internship, European Hematology Association',
      problem: 'EHA needed to show what its grants and research-training programmes achieve.',
      did: 'Analysed the annual survey and managed Researchfish data on collaborations, publications, funding and clinical studies.',
      result: 'Impact reporting on grants & training programmes in Power BI',
      tags: ['Power BI', 'Excel', 'Survey analysis'],
    },
    {
      badge: 'featured' as Badge, area: 'Computer vision', figure: 'birds' as Figure, title: 'Meadow Bird Detection',
      role: 'BSc thesis, University of Twente',
      problem: 'Monitoring meadow birds in camera-trap images, where light changes from day to night.',
      did: 'Benchmarked vision-transformer models and explained their predictions with XAI.',
      result: 'ViT models benchmarked day vs night, with XAI maps of failure cases',
      tags: ['Python', 'ViT', 'XAI'],
    },
    {
      badge: 'new' as Badge, area: 'ML · multiomics', figure: 'network' as Figure, title: 'MODIN',
      role: 'MSc thesis, University of Amsterdam (ongoing)',
      problem: 'Finding meaningful interactions across several omics layers at once.',
      did: 'Developing priors-informed graphical LASSO and network diffusion to explore multiomics data.',
      result: 'In progress: a priors-informed network inference pipeline',
      tags: ['Python', 'Graphical LASSO', 'Networks'],
    },
  ],
  // "Also built": one-line preview, expanded to evidence cards
  extra: [
    { area: 'Full-stack · data viz', title: 'Security Dashboard', text: 'Dash app for the DeepCase security tool', role: 'Team project',
      problem: 'DeepCase, a security analysis tool, was command-line only.',
      did: 'Prototyped in Figma and built a Dash app, with weekly stakeholder feedback.',
      result: 'CLI tool turned into an interactive dashboard', tags: ['Dash', 'Figma', 'SQL', 'Docker'] },
    { area: 'Time series', title: 'Sales Forecasting', text: '28-day Walmart demand pipeline', role: 'Course project, Applied Forecasting',
      problem: 'Forecasting daily demand with weekly peaks and shifting volatility.',
      did: 'Built diagnostics (rolling stats, differencing, ACF/PACF) and compared three models.',
      result: 'End-to-end pipeline, 28-day horizon, 3 models compared', tags: ['Python', 'SARIMAX', 'ETS'] },
    { area: 'Embedded ML', title: 'Edge Traffic Signs', text: 'Real-time classifier on an Arduino', role: 'Course project, Intelligent Embedded Systems',
      problem: 'Recognising traffic signs in real time on tiny hardware.',
      did: 'Trained a lightweight classifier in Edge Impulse and deployed it to an Arduino.',
      result: '>99% accuracy on 6 classes · 75% on all 42', tags: ['Arduino', 'Edge Impulse'] },
    { area: 'Web app', title: 'Training Management System', text: 'Role-based web app with progress dashboards', role: 'Course project, Data & Information',
      problem: 'Trainers needed one place for courses, groups and trainee progress.',
      did: 'Built a role-based web app for admins, trainers and trainees on a REST API and SQL.',
      result: 'Course, group and progress tracking with trainee dashboards', tags: ['JavaScript', 'SQL', 'REST'] },
    { area: 'Computer vision · HCI', title: 'Chessmate Helper', text: 'Real-time move assistant with OpenCV', role: 'Course project, Human Computer Interaction',
      problem: 'Helping players of different levels see good moves on a physical board.',
      did: 'Built real-time board detection with OpenCV and ran user research with players.',
      result: 'Working prototype, shaped by personas and feedback flows', tags: ['Python', 'OpenCV', 'Figma'] },
  ],
};

export const skills = {
  keywords: ['Build', 'Model', 'Ship'],
  title: 'Skills.',
  subtitle: 'Where each skill was used; dots show depth.',
  // One data set, three layouts (switcher: ?variants): S1 capability cards, S2 stack columns, S3 proof table.
  // level: 1 familiar, 2 proficient, 3 advanced
  areas: [
    { area: 'Frontend', capability: 'Build interfaces', impact: 'Turns a script or CLI into a tool people actually use.', rows: [
      { skill: 'Dash · Figma', level: 2, used: 'Security Dashboard' },
      { skill: 'HTML/CSS · JavaScript', level: 2, used: 'Training System' },
      { skill: 'React · TypeScript', level: 1, used: '' },
    ] },
    { area: 'Backend', capability: 'Build services & data', impact: 'Clean data in, reliable endpoints out.', rows: [
      { skill: 'SQL / PostgreSQL', level: 2, used: 'Training System, Security Dashboard' },
      { skill: 'REST APIs', level: 1, used: 'Training System' },
      { skill: 'Node.js · Flask · Java', level: 1, used: '' },
    ] },
    { area: 'Data & ML', capability: 'Model & analyse', impact: 'From raw data to a model you can evaluate and explain.', rows: [
      { skill: 'Python / Pandas', level: 3, used: 'MODIN, Meadow Birds, Sales Forecasting', best: true },
      { skill: 'Computer vision', level: 2, used: 'Meadow Birds, Traffic Signs, Chessmate' },
      { skill: 'Time series', level: 2, used: 'Sales Forecasting' },
      { skill: 'Graphical models & networks', level: 2, used: 'MODIN' },
      { skill: 'scikit-learn · NLP', level: 2, used: 'Cottage listings project' },
    ] },
    { area: 'Tooling', capability: 'Ship & collaborate', impact: 'Works in a team and ships reproducibly.', rows: [
      { skill: 'Docker · Git', level: 2, used: 'Security Dashboard, Chessmate' },
      { skill: 'Agile / Scrum', level: 2, used: 'Training System, Chessmate' },
      { skill: 'Power BI · Excel', level: 2, used: 'EHA internship' },
      { skill: 'AI-assisted dev (Copilot, Claude Code)', level: 2, used: '' },
    ] },
  ],
  domain: 'Domain: bioinformatics · metagenomics · lab & biomedical data',
  focus: [
    'Full-stack apps with ML inside',
    'Data pipelines & dashboards',
    'AI-assisted developer tooling',
    'Scientific & biomedical data',
  ],
};

export const footer = {
  role: 'MSc Data Science · University of Amsterdam',
  now: 'Now: MSc thesis (MODIN) on multiomics networks, UvA',
  open: ['Open to collaborations', 'and new ideas.'],
};
