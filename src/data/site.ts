// All site copy, sourced from Resume_DS.tex. Edit here, not in the components.

export const person = {
  name: 'Lucian Trusca',
  email: 'lucianmtrusca@gmail.com',
  github: 'https://github.com/luciantrusca',
  linkedin: 'https://www.linkedin.com/in/lucian-trusca/',
  tagline: ['Biology', 'Computation', 'Data'],
  motto: ['From cells', 'to code.'],
};

export const profile = {
  headline: ['Curiosity', 'Bridges Worlds.'],
  statement:
    'I’m a data scientist with a background in biotechnology. I turn messy data into models, pipelines and dashboards ' +
    'that people can actually use, from camera-trap images to multiomics networks.',
  kicker: ['Biotechnology', 'Computer science', 'Data science'],
  quote: ['Different', 'disciplines.', 'A more complete', 'picture.'],
  triad: ['Biology asks.', 'Computation gives tools.', 'Data builds answers.'],
  artNote: ['From', 'cells', 'to systems', 'to code.'],
  handNote: 'Ideas connect the natural and the possible.',
};

export const journey = {
  subtitle: 'A nonlinear path, one direction.',
  text:
    'I trained as a biotechnologist, then retrained in computer science. Each step added a new way of looking at the same ' +
    'questions, and my Data Science thesis now brings both sides together.',
  quote: 'Biology gave me the questions. Computing gave me the tools.',
  quoteNote: ['Same questions.', 'Better tools.'],
  steps: [
    { dates: '2015 – 2019', phase: 'Foundations', title: 'BSc Industrial Biotechnology', text: 'Babeș-Bolyai University. Thesis on recovering ancient DNA from archaeological wood.' },
    { dates: '2019 – 2021', phase: 'Specialisation', title: 'MSc Molecular Biotechnology', text: 'Babeș-Bolyai University. Bioinformatics thesis on Movile Cave sediment microbiomes.' },
    { dates: '2021', phase: 'Industry', title: 'QC Junior Technician', text: 'Terapia, Cluj. Pharmaceutical QC with HPLC and UV-Vis under GMP.' },
    { dates: '2021 – 2025', phase: 'The pivot', title: 'BSc Computer Science', text: 'University of Twente. Thesis on vision transformers for wildlife camera traps.' },
    { dates: '2025 – ', now: 'Present', phase: 'Convergence', title: 'MSc Data Science', text: 'University of Amsterdam. Multiomics network thesis; data analyst at EHA.' },
  ],
  end: ['New questions.', 'More to build.'],
};

export type Figure = 'birds' | 'forecast' | 'dashboard' | 'signs' | 'cave';

export const work = {
  intro: 'Projects from across the path, from camera traps to cave sediment, each turning data into a decision.',
  projects: [
    {
      area: 'Computer vision', figure: 'birds' as Figure, title: 'Meadow Bird Detection',
      text: 'Vision transformers that spot meadow birds in camera-trap images, day and night, explained with XAI.',
      tags: ['ViT', 'Detection', 'XAI'],
      role: 'BSc thesis, University of Twente',
      outcome: 'Benchmarked models across lighting conditions and showed where they work and where they fail.',
    },
    {
      area: 'Time series', figure: 'forecast' as Figure, title: 'Sales Forecasting',
      text: 'An end-to-end pipeline predicting 28 days of daily Walmart sales, from diagnostics to model comparison.',
      tags: ['Python', 'SARIMAX', 'ETS'],
      role: 'Course project, Applied Forecasting',
      outcome: 'Found weekend peaks, non-stationarity and shifting volatility; compared seasonal naive, ETS and SARIMAX.',
    },
    {
      area: 'Data viz', figure: 'dashboard' as Figure, title: 'Security Dashboard',
      text: 'An interactive Dash dashboard for the DeepCase security tool, prototyped in Figma with weekly stakeholder feedback.',
      tags: ['Dash', 'Figma', 'SQL'],
      role: 'Team project',
      outcome: 'Turned a command-line tool into an interactive dashboard, with metrics and requirements defined together with stakeholders.',
    },
    {
      area: 'Embedded ML', figure: 'signs' as Figure, title: 'Edge Traffic Signs',
      text: 'A lightweight image classifier running in real time on an Arduino, over 99% accurate on 6 classes.',
      tags: ['Arduino', 'Edge Impulse'],
      role: 'Course project, Intelligent Embedded Systems',
      outcome: 'Over 99% accuracy on 6 classes, 75% on all 42; field-tested across distance, angle and light.',
    },
    {
      area: 'Bioinformatics', figure: 'cave' as Figure, title: 'Life in Movile Cave',
      text: 'Microbial diversity in an isolated Romanian cave, from metagenomic and transcriptomic data.',
      tags: ['Metagenomics', 'Clustering'],
      role: 'MSc thesis, Babeș-Bolyai University',
      outcome: 'Abundance and cluster analysis revealed patterns in microbial community structure.',
    },
  ],
  also: [
    { title: 'Cottage listings', text: 'NLP cleanup with spaCy, ML imputation' },
    { title: 'Training platform', text: 'Role-based web app with progress dashboards' },
    { title: 'Chessmate', text: 'Real-time move assistant with OpenCV' },
    { title: 'Cassini Hackathon', text: 'Flood prediction from time series, 6th place' },
  ],
};

export const toolkit = {
  subtitle: 'Skills today. Bigger questions tomorrow.',
  languages: 'English & Romanian native · Dutch A2',
  columns: [
    { icon: 'dna', title: 'Biology', items: ['Molecular biotech', 'Metagenomics', 'Phylogenetics', 'Ancient DNA', 'Pharma QC, HPLC'] },
    { icon: 'code', title: 'Computation', items: ['Python, R, SQL', 'Machine learning', 'NLP & XAI', 'Computer vision', 'Time series'] },
    { icon: 'gear', title: 'Engineering', items: ['React, TypeScript', 'Flask, Node.js', 'Docker & Git', 'Embedded ML', 'Figma prototyping'] },
    { icon: 'compass', title: 'Direction', items: ['Life-science AI', 'Network biology', 'AI-assisted tools', 'Data people use', 'The bigger picture'] },
  ],
};

export const footer = {
  role: 'Data scientist with a biotech background',
  quote: 'Same questions, better tools.',
  open: ['Open to collaborations', 'and new ideas.'],
};
