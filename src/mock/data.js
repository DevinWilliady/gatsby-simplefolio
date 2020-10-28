import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Devin Williady', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome To My Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am ',
  name: 'Devin Liestian Williady',
  subtitle: 'A person who still learn programming',
  cta: 'Know More About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'Foto.jpg',
  paragraphOne:
    'Hello, My Name is Devin Liestian Williady. I am a Computer Science Student at Bina Nusantara University. I was born in Solo at 19 December 1999',
  paragraphTwo:
    'I am currently a Computer Science undergraduate student. I am still learn about programming, some programming language that i have tried such as C, Java, HTML, CSS, JavaScript, C#, ASP.NET and lately i learn about PHP, Laravel, and Android',
  paragraphThree:
    'When i am not coding my project, I enjoy spending my time to watching movie, fixing some broken stuff, and lately i like to build a program in android studio ',
  resume: 'http://bit.ly/DevinsResume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Miku.jpg',
    title: 'Miku E-SKpo',
    info: 'Miku E-SKpo is a prototype Ticketing Music Festival Website',
    info2: 'Build in HTML and CSS',
    url: 'http://bit.ly/MikuEshop',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Lelangin.jpg',
    title: 'Lelangin',
    info: 'Lelangin is a prototype website for online auction based in indonesia',
    info2: 'Build in ASP.NET, C#, HTML, and SQL ',
    url: 'http://bit.ly/LelanginWeb',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Sudoh.jpg',
    title: 'SudohBucks',
    info:
      'SudohBucks is interactive application build for give some information about SudohBucks Coffee Shop',
    info2: 'Build in Adobe Animate CC 2018 and Java Script',
    url: 'http://bit.ly/SudohBucks',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'skin.jpg',
    title: 'SkinTech',
    info: 'SkinTech is a prototype website for online selling recomendation beauty product',
    info2: 'Build in HTML and CSS',
    url: 'http://bit.ly/SkinTechDevin',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Another Project',
    info: 'There are many project that i have done before, Just take a Look :)',
    info2: '',
    url: 'https://bit.ly/Devin-Williady',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome! :)',
  btn: 'Hit Me UP!',
  email: 'dwilliady@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://linktr.ee/DevinWilliady',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/devin-williady-b738b31a8',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/DevinWilliady',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
