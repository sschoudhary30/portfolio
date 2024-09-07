import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Personal Portfolio Website',
    slug: 'portfolio',
    description:
      'A personal portfolio to showcase your coding projects, resume, and skills in a beautifully designed format.',
    thumbnail: '/images/projects/portfolio/cover.jpg',
    tags: ['NextJS', 'Shadcn UI', 'TailwindCSS', 'ReactJs']
  },
  {
    name: 'NewBoard App',
    slug: 'newboard',
    description:
      'A video chat app for secure video meet where users can schedule, share invite, with user centric design.',
    thumbnail: '/images/projects/recipe_app/cover.jpg',
    tags: ['Next.JS', 'Next UI', 'Stream.API', 'TailwindCSS','Figma']
  },
  {
    name: 'Sankshipt App',
    slug: 'Sankshipt',
    description:
      'Gemini AI Powered powerfull summarization of pdf document with length, size, type and custome prompt.',
    thumbnail: '/images/projects/study_group/cover.png',
    tags: ['PYTHON', 'StreamLit', 'Gemini.API','Langchain']
  },
  {
    name: 'FoodDelivery APP UI',
    slug: 'FoodDelivery',
    description:
      'A mobile app for food delivery with smooth animation and transition and user centric UX.',
    thumbnail: '/images/projects/fitness_tracker/cover.png',
    tags: ['Figma']
  },
  {
    name: 'DairyX APP',
    slug: 'dairyX',
    description:
      'DairyX is a milk collection app that streamlines supplier selection, milk quality tracking, and receipt generation. It offers a user-friendly interface for managing milk collections, reports, and billing.',
    thumbnail: '/images/projects/DairyX/cover.png',
    tags: ['Figma', 'Adobe Photoshop']
  },
  {
    name: 'TrainMe Fitness APP',
    slug: 'TrainMe',
    description:
      'The project manages gym details, machines, and customer schedules, ensuring efficient usage of gym equipment. It allows adding, removing, and modifying gyms, machines, and customer information with personalized workout schedules.',
    thumbnail: '/images/projects/coding_tutorials/cover.png',
    tags: ['ReactJS', 'ExpressJS', 'NodeJS','MYSQL']
  },
  {
    name: 'Impacti APP',
    slug: 'Impacti',
    description:
      'The Pro Planet app faces usability and engagement challenges across its key features, limiting its effectiveness in promoting sustainable lifestyle changes.',
    thumbnail: '/images/projects/Impacti/cover.png',
    tags: ['Figma', 'Adobe Photoshop']
  }
];

export { projects };
