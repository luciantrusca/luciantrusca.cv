// All site copy, sourced from Resume_DS.tex. Edit here, not in the components.
// ponytail: plain typed module; move projects to a content collection when there are more than a handful.

export const person = {
  name: 'Lucian Trusca',
  email: 'lucianmtrusca@gmail.com',
  github: 'https://github.com/luciantrusca',
  linkedin: 'https://www.linkedin.com/in/lucian-trusca/',
  location: 'The Netherlands',
};

export const profile = {
  headline: ['From Cells', 'to Code.'],
  statement:
    'I started in biotechnology, recovering ancient DNA and mapping cave microbiomes, then retrained in computer science. ' +
    'Now I am doing an MSc in Data Science at the University of Amsterdam, building machine learning models, pipelines and dashboards ' +
    'that turn messy data into something people can use.',
  quote: ['Different', 'disciplines.', 'A more complete', 'picture.'],
  triad: ['Biology asks', 'Data answers', 'Software delivers'],
  caption: 'From cells to systems.',
};

export const journey = {
  subtitle: 'A nonlinear path',
  text:
    'Two biotechnology degrees, the second ending in a bioinformatics thesis. Then a second bachelor’s, in Computer Science at Twente. ' +
    'Now my Data Science thesis at Amsterdam brings both sides together: network methods for multiomics data.',
  quote: 'Same questions, better tools.',
  caption: 'Career phylogeny. Solid lines are degrees; the dashed line is the bioinformatics thread that returns in the MSc thesis.',
};

export type Figure = 'birds' | 'forecast' | 'signs' | 'cave';

export interface Project {
  title: string;
  area: string;
  size: 'large' | 'regular';
  figure: Figure;
  caption: string;
  summary: string;
  role: string;
  methods: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    title: 'Meadow birds, day and night',
    area: 'Computer vision',
    size: 'large',
    figure: 'birds',
    caption: 'Detection by day and night, with an XAI attention map (schematic).',
    summary: 'Can vision transformers identify meadow bird species in camera-trap images, by day and by night?',
    role: 'BSc thesis · Twente',
    methods: 'Vision transformers, object detection, explainable AI, Docker',
    outcome: 'Benchmarked models across day/night conditions and used XAI to show where they work and where they fail.',
  },
  {
    title: 'Forecasting 28 days of Walmart sales',
    area: 'Time series',
    size: 'regular',
    figure: 'forecast',
    caption: 'Daily demand with weekly seasonality and a 28-day forecast band (schematic).',
    summary: 'An end-to-end daily sales forecasting pipeline, from EDA and diagnostics to model comparison.',
    role: 'Applied Forecasting course',
    methods: 'Seasonal naive, ETS, SARIMAX with exogenous regressors, ACF/PACF',
    outcome: 'Found weekend demand peaks, non-stationarity and shifting volatility before modelling.',
  },
  {
    title: 'Traffic signs on an Arduino',
    area: 'Embedded ML',
    size: 'regular',
    figure: 'signs',
    caption: 'Real-time classification on a microcontroller: accuracy on 6 vs 42 classes.',
    summary: 'A lightweight image classifier for traffic signs, deployed on an Arduino with Edge Impulse and tested in the field.',
    role: 'Embedded Systems course',
    methods: 'Computer vision, Edge Impulse, Arduino, Python',
    outcome: 'Over 99% accuracy on 6 classes in good conditions, 75% on all 42; field-tested across distance, angle and light.',
  },
  {
    title: 'What lives in Movile Cave sediment',
    area: 'Bioinformatics',
    size: 'large',
    figure: 'cave',
    caption: 'Taxonomic composition per sample, clustered by similarity (schematic).',
    summary: 'Microbiome diversity in Movile Cave, an isolated Romanian cave ecosystem, from metagenomic and transcriptomic data.',
    role: 'MSc thesis · Babeș-Bolyai',
    methods: 'Metagenomics, phylogenetics, cluster analysis, statistics',
    outcome: 'Species abundance and cluster analysis revealed patterns in microbial community structure.',
  },
];

export const alsoBuilt = [
  'Security dashboard for the DeepCase tool (Dash, Figma)',
  'NLP cleanup of cottage listings (spaCy, ML imputation)',
  'Role-based training management web app',
  'Chessmate: real-time chess move assistant (OpenCV)',
  'Flood prediction, Cassini Hackathon, 6th place',
];

export const capabilities = [
  {
    group: 'Biology',
    icon: 'dna',
    items: ['Molecular & industrial biotechnology', 'Metagenomics and phylogenetics', 'Microbial community analysis', 'Pharma QC: GMP, HPLC, UV-Vis'],
  },
  {
    group: 'Data & ML',
    icon: 'network',
    items: ['Pandas, SQL, R: cleaning and EDA', 'Classical ML, NLP, explainable AI', 'Object detection, vision transformers', 'Time series forecasting'],
  },
  {
    group: 'Software',
    icon: 'code',
    items: ['Python, Java, TypeScript, SQL', 'React, Node.js, Flask, Dash', 'Git, Docker, Agile/Scrum', 'Figma prototyping, UI/UX'],
  },
  {
    group: 'Systems & Embedded',
    icon: 'chip',
    items: ['Embedded ML on Arduino', 'Edge Impulse deployment', 'Real-time computer vision', 'Field testing and evaluation'],
  },
];

export const languages = 'English, Romanian (native) · Dutch (A2)';

export const direction = {
  statement: 'AI tools for the life sciences.',
  now: 'Thesis now: priors-informed graphical LASSO and network diffusion on multiomics data.',
  aim: 'Drawn to AI-assisted tooling that turns data into something businesses and end-users actually use.',
};
