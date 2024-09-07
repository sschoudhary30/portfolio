import { Skill } from '@/types/skill';
import {
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
  SmartphoneIcon,
  Tangent
  
} from 'lucide-react';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'Web Development',
    Icon: CodeIcon,
    description: `Web Development involves creating websites and web applications that are both visually appealing and highly functional. It encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance. TOOLS : JavaScript, React.js, Next.js, Tailwind CSS`,
  },
  {
    name: 'UI/UX Design',
    Icon: LayoutIcon,
    description: `UI/UX Design focuses on creating delightful user experiences through visually appealing and highly functional designs. This skill includes a variety of technologies, frameworks, and best practices to enhance user satisfaction and usability. TOOLS: FRAMER, FIGMA, CREATIE.`
  },
  {
    name: 'Database Management',
    Icon: DatabaseIcon,
    description: `Database Management involves efficiently storing and organizing data. This skill covers a range of technologies, frameworks, and best practices to ensure data integrity, security, and performance. TOOLS: SQL, MongoDB, MSSQL.`
  },
  {
    name: 'Graphic Design',
    Icon: Tangent,
    description: `I am proficient in brand identity design, creating compelling logos, mockups, and posters that elevate your brand presence. 🎨✨ My work ensures a cohesive and impactful visual identity. TOOLS: Canva, Adobe Illustrator, Adobe Photoshop, Blender.`
  }
];

export { trimLen, skills };
