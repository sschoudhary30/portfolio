import { Contact } from '@/types/contact';
import {
  SiBehance,
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'sureshchoudhary.work@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/sschoudhary30',
      Icon: SiGithub
    },
    {
      name: 'Behance',
      href: 'https://www.behance.net/desyn_suresh',
      Icon: SiBehance
    },
    {
      name: 'X',
      href: 'https://twitter.com/suracechoudhary',
      Icon: SiX
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/sschoudhary30',
      Icon: SiLinkedin
    }
  ]
};

export { contact };
