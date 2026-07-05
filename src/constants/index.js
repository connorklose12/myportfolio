import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  papeyimage,
  noteswapimage,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
    drawing1,
  drawing2,
  drawing3,  
  drawing4, 
  drawing5, 
  drawing6, 
  drawing7, 
  drawing8, 
  drawing9, 
  drawing10, 
  drawing11, 
  drawing12, 
  drawing13, 
  drawing14, 
  drawing15, 
  drawing16, 
  drawing17, 
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
   {
     title: 'Graphic Design',
     icon: prototyping,
   },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: drawing1,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'A quote poster made from scratch. Made with IbisPaintX using PNGs, fancy font websites, drawn in details, fancy brushes, etc. ',
  },
  {
    title: drawing2,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'A quote poster made from scratch. Made with IbisPaintX using PNGs, fancy font websites, drawn in details, fancy brushes, etc. ',
  },
  {
    title: drawing3,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'A quote poster made from scratch. Made with IbisPaintX using PNGs, fancy font websites, drawn in details, fancy brushes, etc. ',
  },
   {
    title: drawing6,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'A quote poster made from scratch. Made with IbisPaintX using PNGs, fancy font websites, drawn in details, fancy brushes, etc. ',
  },
   
  {
    title: drawing5,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'A simple painting I created at a college event.'  },
     {
    title: drawing7,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'A fancy ceramic project I made of clay.'  },
     {
    title: drawing13,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'A fancy ceramic project I made of clay.'  },
     {
    title: drawing8,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'A card I drew for the Letters of Love at NDSU, where we create cards for children in hospitals.'  },
     {
    title: drawing9,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'School banners I designed for our high school homecoming event.'  },
     {
    title: drawing10,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'A drawing I made of my adorable dog.'  },
     {
    title: drawing11,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'A simple 3D model I made in Tinkercad.'  },
     {
    title: drawing12,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'A simple 3D model I made in Tinkercad.'  },
     {
    title: drawing14,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'A drawing I poured my heart into creating in IbisPaintX. Was a lot of work but very much proud of the result!'  },
     {
    title: drawing15,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'A drawing I poured my heart into creating in IbisPaintX. Was a lot of work but very much proud of the result!'  },
     {
    title: drawing16,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'An advertisement for a Pokémon Club event at our college.'  },
     {
    title: drawing17,
    //company_name: 'Cover Hunt',
  icon: coverhunt,
    iconBg: '#333333',
    date: 'An advertisement for a Pokémon Club event at our college.'  }
];

const projects = [
  {
    id: 'project-1',
    name: 'NDSU NoteSwap',
    description: 'A website where you can swap notes, advice, questions, and discussions with people taking the same class as you at NDSU. The image input function may not be activated currently because you need to pay to store images in Firebase. I would love to expand this app and transfer it to more schools!  -Angular, Firebase, TypeScript, HTML, CSS, EmailJS',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: noteswapimage,
    repo: 'https://github.com/connorklose12/uninotecon',
    demo: 'https://connorklose12.github.io/uninotecon/#/class/Sample%20Class%2011',
  },
  {
    id: 'project-2',
    name: 'Papey Online',
    description:
      'A game based off of popular .io games where you can play online with other players. Take up as much terrain as possible!  -Django, SQL, Python, JavaScript, HTML, CSS, Railway, Daphne',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: papeyimage,
    repo: 'https://github.com/connorklose12/papeyonlinee',
    demo: 'https://papeyonlinee-production.up.railway.app',
  },
  // {
  //   id: 'project-3',
  //   name: 'Math Magicians',
  //   description: 'This is a single-page calculator app built with React',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: math,
  //   repo: 'https://github.com/shaqdeff/Math-Magicians',
  //   demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  // },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
