import Project1 from './assets/project1.jpeg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.jpeg';
import Project4 from './assets/project4.jpeg';
import Project5 from './assets/project5.jpg';
import Project6 from './assets/project6.jpg';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Testimonials',
    path: 'testimonial',
  },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  {
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Full Stack Development',
    title: 'Modern Web Applications',
    description:
      'Building scalable, high-performance web applications using Next.js, React, TypeScript, and modern backend technologies. Specializing in responsive design and optimal user experience.',
  },
  {
    id: 2,
    name: 'FinTech Solutions',
    title: 'Banking & Financial Platforms',
    description:
      'Developing secure financial applications, banking platforms, and payment systems with advanced security measures, real-time data processing, and regulatory compliance.',
  },
  {
    id: 3,
    name: 'AI Integration',
    title: 'Machine Learning & AI Features',
    description:
      'Integrating AI and machine learning capabilities into web applications, creating intelligent user experiences, and building data-driven solutions with modern AI frameworks.',
  },
  {
    id: 4,
    name: 'Enterprise Solutions',
    title: 'Business Process Automation',
    description:
      'Creating custom enterprise applications, workflow automation, and business intelligence tools that streamline operations and improve productivity.',
  },
  {
    id: 5,
    name: 'DevOps & Deployment',
    title: 'Cloud Infrastructure & CI/CD',
    description:
      'Setting up robust deployment pipelines, cloud infrastructure management, and ensuring optimal performance with modern DevOps practices and monitoring.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'Next.js',
    percentage: 95,
    description: 'Advanced React framework for production-ready applications',
  },
  {
    id: 2,
    name: 'TypeScript',
    percentage: 90,
    description: 'Type-safe JavaScript for scalable applications',
  },
  {
    id: 3,
    name: 'React.js',
    percentage: 95,
    description: 'Modern UI library with hooks and state management',
  },
  {
    id: 4,
    name: 'Tailwind CSS',
    percentage: 90,
    description: 'Utility-first CSS framework for rapid UI development',
  },
  {
    id: 5,
    name: 'Python/Django',
    percentage: 85,
    description: 'Backend development and API creation',
  },
  {
    id: 6,
    name: 'PostgreSQL',
    percentage: 80,
    description: 'Advanced database design and optimization',
  },
  {
    id: 7,
    name: 'tRPC',
    percentage: 85,
    description: 'Type-safe APIs and full-stack development',
  },
  {
    id: 8,
    name: 'ShadCN UI',
    percentage: 90,
    description: 'Modern component library and design systems',
  },
  {
    id: 9,
    name: 'Framer Motion',
    percentage: 85,
    description: 'Advanced animations and micro-interactions',
  },
  {
    id: 10,
    name: 'Web3/Blockchain',
    percentage: 75,
    description: 'Smart contracts and decentralized applications',
  }
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'FinTech',
    title: 'Global Finance Guarantee',
    description: 'Bank guarantee platform built with Next.js and Tailwind CSS, offering Tier-1 bank guarantees, SBLCs, and Letters of Credit.',
    link: 'https://www.globalfinanceguarantee.com/',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 2,
    img: Project2,
    category: 'FinTech',
    title: 'Heritage Cayman Bank',
    description: 'Immersive banking platform mockup with smooth animations and responsive design using ShadCN UI and Tailwind CSS.',
    link: 'https://hltd.vercel.app/',
    tech: ['Next.js', 'ShadCN UI', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 3,
    img: Project3,
    category: 'FinTech',
    title: 'Cayora Finance',
    description: 'Full-stack financial platform with tRPC, NextAuth, and PostgreSQL for secure financial operations.',
    link: 'https://cayorafinance.com/',
    tech: ['Next.js', 'tRPC', 'NextAuth', 'PostgreSQL', 'TypeScript']
  },
  {
    id: 4,
    img: Project4,
    category: 'Web3',
    title: 'Master of Complications',
    description: 'Advanced Web3 platform with authentication and complex data management using modern TypeScript stack.',
    link: 'https://masterofcomplications.guru/',
    tech: ['Next.js', 'tRPC', 'NextAuth', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 5,
    img: Project5,
    category: 'Tools',
    title: 'BG Lookup',
    description: 'CSV parsing and data management tool with modern UI components and efficient data processing.',
    link: 'https://bglookup.vercel.app/',
    tech: ['Next.js', 'ShadCN UI', 'Tailwind CSS', 'CSV Processing']
  },
  {
    id: 6,
    img: Project6,
    category: 'Tools',
    title: 'BG EGN Validator',
    description: 'Advanced data validation and processing platform with intuitive user interface.',
    link: 'https://bgegn.vercel.app/',
    tech: ['Next.js', 'ShadCN UI', 'Tailwind CSS', 'Data Validation']
  },
  {
    id: 7,
    img: Project1,
    category: 'Full Stack',
    title: 'ViraChemical',
    description: 'Comprehensive chemical management system built with Python Django, featuring secure operations and inventory management.',
    link: 'https://virachemical.com/',
    tech: ['Python', 'Django', 'PostgreSQL', 'Full Stack']
  },
  {
    id: 8,
    img: Project2,
    category: 'Agency',
    title: 'GenCoders Digital',
    description: 'Digital agency website offering realtor lead generation services with modern Python Flask backend.',
    link: 'https://gencoders.digital/',
    tech: ['Python', 'Flask', 'Tailwind CSS', 'Lead Generation']
  },
  {
    id: 9,
    img: Project3,
    category: 'Agency',
    title: 'Walls Agency',
    description: 'Professional web development agency showcase with Vue.js and modern design principles.',
    link: 'https://wallsagency-radoslavatanasov1s-projects.vercel.app/',
    tech: ['Vue.js', 'Tailwind CSS', 'Vercel', 'Modern UI']
  },
  {
    id: 10,
    img: Project4,
    category: 'Business',
    title: 'GDN Solution',
    description: 'Enterprise business solution platform with comprehensive service offerings and client management.',
    link: 'https://gdnsolution.com/',
    tech: ['PHP', 'Laravel', 'MySQL', 'Enterprise']
  },
  {
    id: 11,
    img: Project5,
    category: 'E-commerce',
    title: 'Buati Price',
    description: 'E-commerce pricing platform with dynamic pricing algorithms and user-friendly interface.',
    link: 'https://buatiprice.com/',
    tech: ['PHP', 'Laravel', 'MySQL', 'E-commerce']
  },
  {
    id: 12,
    img: Project6,
    category: 'Logistics',
    title: 'Alpha Cargo Line',
    description: 'Professional cargo and logistics management platform with tracking and scheduling capabilities.',
    link: 'https://alphacargoline.com/',
    tech: ['React', 'Node.js', 'Logistics', 'Tracking']
  },
  {
    id: 13,
    img: Project1,
    category: 'AI/ML',
    title: 'ViWatch AI',
    description: 'Innovative AI-powered watch platform with machine learning capabilities and modern interface.',
    link: 'https://viwatchai.com/',
    tech: ['AI/ML', 'React', 'Python', 'Machine Learning']
  },
  {
    id: 14,
    img: Project2,
    category: 'Portfolio',
    title: 'Personal Portfolio',
    description: 'Modern portfolio website showcasing skills, projects, and experience with React and modern animations.',
    link: 'https://radoslav.site',
    tech: ['React', 'Vite', 'Framer Motion', 'Modern UI']
  }
];

export const cv = [
  {
    id: 1,
    title: 'Software Engineering',
    subtitle: 'Self-Taught & Continuous Learning',
    date: '2021 - Present',
    description:
      'Continuously expanding knowledge in modern web technologies, focusing on React, Next.js, TypeScript, and full-stack development through hands-on projects and industry best practices.',
    category: 'education',
  },
  {
    id: 2,
    title: 'CY Hristov Botev',
    subtitle: 'High School Graduate',
    date: '2020 - 2023',
    description:
      'Completed secondary education while simultaneously building a career in web development and gaining practical experience in software engineering.',
    category: 'education',
  },
  {
    id: 3,
    title: 'Senior Full Stack Developer',
    subtitle: 'DevDone.io',
    date: '2022 - Present',
    description:
      'Leading development of complex web applications using Next.js, TypeScript, and modern frameworks. Specializing in FinTech solutions, AI integration, and scalable architecture design.',
    category: 'experience',
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    subtitle: 'Freelance & Agency Work',
    date: '2021 - Present',
    description:
      'Delivered 14+ successful projects including banking platforms, e-commerce solutions, and AI-powered applications. Expertise in React, Next.js, Python, and modern development practices.',
    category: 'experience',
  },
  {
    id: 5,
    title: 'Frontend Specialist',
    subtitle: 'Walls Agency',
    date: '2021 - 2022',
    description:
      'Developed responsive web applications using Vue.js and React. Focused on creating pixel-perfect designs and optimizing user experience across multiple client projects.',
    category: 'experience',
  },
  {
    id: 6,
    title: 'Web Developer',
    subtitle: 'Various Clients',
    date: '2020 - 2021',
    description:
      'Started career building websites and learning modern web technologies. Gained experience with HTML, CSS, JavaScript, and basic backend development.',
    category: 'experience',
  }
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Sarah Johnson',
    author: 'CEO, FinTech Startup',
    description:
      'Radoslav delivered an exceptional banking platform that exceeded our expectations. His expertise in Next.js and modern UI design helped us launch ahead of schedule with a product our users love.',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Michael Chen',
    author: 'Product Manager, Tech Corp',
    description:
      'Working with Radoslav was a game-changer for our project. His full-stack skills and attention to detail resulted in a robust, scalable solution that handles our complex business requirements perfectly.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Emma Rodriguez',
    author: 'Startup Founder',
    description:
      'Radoslav built our entire e-commerce platform from scratch. His knowledge of modern frameworks and ability to deliver pixel-perfect designs made him an invaluable partner in our success.',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'David Thompson',
    author: 'CTO, Digital Agency',
    description:
      'I highly recommend Radoslav for any complex web development project. His expertise in React, TypeScript, and backend technologies helped us deliver multiple client projects on time and within budget.',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Lisa Park',
    author: 'Business Owner',
    description:
      'Radoslav transformed our business with a custom web application that streamlined our operations. His professional approach and technical expertise made the entire process smooth and efficient.',
  },
];
