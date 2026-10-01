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
  headline: ['Building Data & AI', 'Products, End to End.'],
  statement:
    'I’m a full-stack developer with a data science focus. I build web apps, dashboards and ML pipelines end to end, ' +
    'from the database and model to the interface people use. A background in biotechnology means I’m at home with messy, scientific data.',
  // tag variants (switcher: ?variants). A: role pills + stack row, B: stack pills + focus row, C: role pills + stack line
  roleTags: ['Full-Stack', 'Machine Learning', 'Data Pipelines', 'Dashboards'],
  stackTags: ['Python', 'TypeScript / React', 'SQL', 'Machine Learning'],
  glance: [
    { icon: 'pin', title: 'Based in the Netherlands', text: '' },
    { icon: 'cap', title: 'MSc Data Science, UvA', text: '2026 · thesis: MODIN (multiomics)' },
    { icon: 'case', title: 'EHA internship (completed)', text: 'Data analyst · Python, Power BI, Excel' },
    { icon: 'code', title: 'Stack', text: 'Python · TypeScript / React · SQL · Machine Learning', variant: 'a' },
    { icon: 'target', title: 'Focus', text: 'Full-stack · ML · data pipelines · dashboards', variant: 'b' },
    { icon: 'doc', title: '4 theses', text: 'aDNA · cave microbes · camera traps · multiomics', variant: 'c' },
    { icon: 'chat', title: 'Languages', text: 'English & Romanian native, Dutch A2' },
  ],
};

export const journey = {
  title: 'Education & Career Journey.',
  subtitle: 'From the wet lab to data science.',
  steps: [
    { kind: 'Education', dates: '2015 – 2019', title: 'BSc Industrial Biotechnology', place: 'Babeș-Bolyai University',
      achievement: 'Thesis: optimising ancient DNA recovery from archaeological wood.', gained: 'Molecular lab methods' },
    { kind: 'Education', dates: '2019 – 2021', title: 'MSc Molecular Biotechnology', place: 'Babeș-Bolyai University',
      achievement: 'Thesis: bioinformatic characterisation of Movile Cave sediment microbiomes.', gained: 'Bioinformatics, metagenomics' },
    { kind: 'Work', dates: 'Jan – Jul 2021', title: 'QC Junior Technician', place: 'Terapia, Cluj',
      achievement: 'Quality control testing with HPLC and UV-Vis under GMP.', gained: 'Regulated lab practice' },
    { kind: 'Education', dates: '2021 – 2025', title: 'BSc Computer Science', place: 'University of Twente',
      achievement: 'Thesis: vision transformers for wildlife camera-trap images.', gained: 'Software engineering, ML, computer vision' },
    { kind: 'Education + Work', dates: '2025 – 2026', title: 'MSc Data Science', place: 'University of Amsterdam · EHA',
      achievement: 'Thesis (MODIN): priors-informed graphical LASSO for multiomics; data analyst internship at EHA.', gained: 'Network biology, statistical ML' },
  ],
};

export type Figure = 'birds' | 'forecast' | 'dashboard' | 'signs' | 'cave' | 'survey' | 'network';
export type Badge = 'featured' | 'new';

export const work = {
  moreProjects: 'https://github.com/luciantrusca?tab=repositories',
  // top three: two featured + one new; the rest sit behind "Expand these projects"
  projects: [
    {
      badge: 'featured' as Badge, area: 'Data analysis', figure: 'survey' as Figure, title: 'Research Impact Analytics',
      role: 'Internship (completed), European Hematology Association',
      problem: 'Show what EHA’s grants and research-training programmes achieve for researchers.',
      // a list renders as bullets
      did: ['Analysed the annual programme survey in Python and Excel', 'Managed Researchfish impact data: collaborations, publications, funding, clinical studies', 'Reported results in Power BI'],
      result: 'Impact evidence for EHA’s grant and training programmes',
      tags: ['Python', 'Power BI', 'Excel', 'Survey analysis'],
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
      role: 'MSc thesis, University of Amsterdam (2026)',
      problem: 'Finding meaningful interactions across several omics layers at once.',
      did: 'Built priors-informed graphical LASSO and network diffusion to explore multiomics data.',
      result: 'Priors-informed network inference pipeline for multiomics data',
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
    { area: 'NLP · data cleaning', title: 'Cottage Listings Cleanup', text: 'NLP cleanup with spaCy, ML imputation', role: 'Data science & AI project',
      problem: 'A real-world JSON dataset of cottage listings had messy text and missing values.',
      did: 'Standardised descriptions with spaCy and filled gaps with ML models (logistic regression, decision trees).',
      result: 'Cleaner, more consistent dataset ready for analysis', tags: ['Python', 'spaCy', 'scikit-learn'] },
  ],
};

export const skills = {
  title: 'Skills.',
  subtitle: 'Where each skill was used; dots show depth.',
  // level: 1 familiar, 2 proficient, 3 advanced
  areas: [
    { area: 'Frontend', capability: 'Build interfaces', impact: 'Turns a script or CLI into a tool people actually use.', rows: [
      { skill: 'Dash · Figma', level: 2, used: 'Security Dashboard' },
      { skill: 'HTML/CSS · JavaScript', level: 2, used: 'Training System' },
      { skill: 'React · TypeScript', level: 2, used: 'Personal blog' },
    ] },
    { area: 'Backend', capability: 'Build services & data', impact: 'Clean data in, reliable endpoints out.', rows: [
      { skill: 'SQL / PostgreSQL', level: 2, used: 'Training System, Security Dashboard' },
      { skill: 'REST APIs', level: 1, used: 'Training System' },
      { skill: 'Node.js', level: 2, used: 'Personal blog' },
      { skill: 'Flask · Java', level: 1, used: 'University projects, UTwente' },
    ] },
    { area: 'Data & ML', capability: 'Model & analyse', impact: 'From raw data to a model you can evaluate and explain.', rows: [
      { skill: 'Python / Pandas', level: 3, used: 'MODIN, EHA internship, Meadow Birds', best: true },
      { skill: 'Computer vision', level: 2, used: 'Meadow Birds, Traffic Signs, Chessmate' },
      { skill: 'Time series', level: 2, used: 'Sales Forecasting' },
      { skill: 'Graphical models & networks', level: 2, used: 'MODIN' },
      { skill: 'scikit-learn · NLP', level: 2, used: 'Cottage Listings Cleanup' },
    ] },
    { area: 'Tooling', capability: 'Ship & collaborate', impact: 'Works in a team and ships reproducibly.', rows: [
      { skill: 'Docker · Git', level: 2, used: 'Security Dashboard, Chessmate' },
      { skill: 'Agile / Scrum', level: 2, used: 'Training System, Chessmate' },
      { skill: 'Power BI · Excel', level: 2, used: 'EHA internship' },
      { skill: 'AI-assisted dev (Copilot, Claude Code)', level: 2, used: 'Day-to-day development' },
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
  now: 'Latest: MODIN, MSc thesis on multiomics networks',
};
