import { 
  Palette, 
  Layout,
  Database,
  Plane,
  Film,
  Brush,
  Scissors,
  PenTool,
  Terminal,
  Globe,
  Music,
  Layers,
  Shapes,
  Image as ImageIcon,
  Users,
  Lightbulb,
  MessageSquare,
  Handshake,
  Briefcase,
  Award
} from 'lucide-react';

import { 
  SiFigma, 
  SiReact,
  SiJavascript,
  SiCss,
  SiPython,
  SiC,
  SiGit,
  SiHtml5,
  SiCanva,
  SiJira
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa';

export const personalInfo = {
  name: "JITHMI SHIHARA",
  role: "Associate UI/UX Engineer",
  location: "Colombo, Sri Lanka",
  phone: "076 569 4707",
  email: "jithmishihara@gmail.com",
  summary: "Creative and detail-oriented UI/UX Engineer with experience designing intuitive, user-centered digital products for web and mobile platforms. Strong background in user research, wireframing, prototyping, and usability testing, combined with front-end development knowledge. Passionate about delivering seamless user experiences that align with business goals.",
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/jithmi-shihara", icon: Globe },
    { name: "GitHub", url: "https://github.com/JithmiShihara", icon: Terminal },
    { name: "Behance", url: "https://behance.net/jithmishihara", icon: Palette },
    { name: "Dribbble", url: "https://dribbble.com/Jithmi_Shihara", icon: PenTool },
  ]
};

export const skills = [
  {
    category: "Design",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    tools: [
      { name: "User Research", level: 90, desc: "User Insights", icon: Users },
      { name: "Wireframing", level: 95, desc: "Structural Layouts", icon: Layout },
      { name: "Prototyping", level: 90, desc: "Interactive Flows", icon: Layers },
      { name: "Interaction Design", level: 85, desc: "User Engagement", icon: Lightbulb },
      { name: "Information Architecture", level: 85, desc: "Data Structure", icon: Database }
    ]
  },
  {
    category: "Tools",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
    tools: [
      { name: "Figma", level: 95, desc: "Main Design Tool", icon: SiFigma },
      { name: "Balsamiq", level: 85, desc: "Low-fi Wireframes", icon: Layout },
      { name: "Adobe Illustrator", level: 80, desc: "Vector Graphics", icon: Shapes },
      { name: "Photoshop", level: 80, desc: "Image Editing", icon: ImageIcon },
      { name: "Canva", level: 90, desc: "Quick Graphics", icon: SiCanva },
      { name: "Jira", level: 85, desc: "Project Mgmt", icon: SiJira },
      { name: "Git", level: 85, desc: "Version Control", icon: SiGit }
    ]
  },
  {
    category: "Technologies",
    icon: Terminal,
    color: "from-emerald-500 to-teal-500",
    tools: [
      { name: "HTML", level: 95, desc: "Web Structure", icon: SiHtml5 },
      { name: "CSS", level: 90, desc: "Web Styling", icon: SiCss },
      { name: "JavaScript", level: 85, desc: "Logic & Interactivity", icon: SiJavascript },
      { name: "React", level: 85, desc: "Modern UI Framework", icon: SiReact },
      { name: "Python", level: 75, desc: "Scripting & Data", icon: SiPython },
      { name: "Java", level: 70, desc: "OOP Development", icon: FaJava },
      { name: "C", level: 75, desc: "Core Programming", icon: SiC }
    ]
  },
  {
    category: "Processes",
    icon: Award,
    color: "from-violet-500 to-purple-500",
    tools: [
      { name: "Design Thinking", level: 95, desc: "Problem Solving", icon: Lightbulb },
      { name: "Human-Centered Design", level: 90, desc: "User Focus", icon: Users },
      { name: "Agile", level: 85, desc: "Workflow", icon: Handshake },
      { name: "Design Sprints", level: 85, desc: "Rapid Iteration", icon: Layers }
    ]
  }
];

export const softSkills = [
  { name: "Management Skills", icon: Briefcase },
  { name: "Creativity", icon: Lightbulb },
  { name: "Interpersonal Skills", icon: Users },
  { name: "Leadership Skills", icon: Award },
  { name: "Communication Skills", icon: MessageSquare },
  { name: "Team Work", icon: Handshake }
];

export const interests = [
  { name: "Painting", icon: Brush },
  { name: "Hand Crafting", icon: Scissors },
  { name: "Music", icon: Music },
  { name: "Travelling", icon: Plane },
  { name: "Movies", icon: Film }
];

export const projects = [
  {
    title: "Employee Management System",
    category: "Software Project",
    description: "Developed an employee management system in collaboration with the Bureau of Rehabilitation.",
    tech: ["ASP.NET", "Figma"],
    link: "https://github.com/JithmiShihara",
    caseStudyUrl: "https://behance.net/jithmishihara",
    figmaUrl: "https://dribbble.com/Jithmi_Shihara",
    featured: true
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A user-friendly platform to buy and sell products, featuring discount scheduling and category management.",
    tech: ["React", "Golang", "MySQL"],
    link: "https://github.com/JithmiShihara",
    caseStudyUrl: "https://behance.net/jithmishihara",
    figmaUrl: "https://dribbble.com/Jithmi_Shihara",
    featured: true
  },
  {
    title: "AI Answer Grading System",
    category: "Research Project",
    description: "An automated Pali language and Sinhala handwritten answers grading feedback system using deep learning techniques.",
    tech: ["ML", "NLP", "CNN", "RNN"],
    link: "https://github.com/JithmiShihara",
    caseStudyUrl: "https://behance.net/jithmishihara",
    figmaUrl: "https://dribbble.com/Jithmi_Shihara",
    featured: true
  },
  {
    title: "Automated Tomato Sauce Machine",
    category: "Embedded Systems",
    description: "An automated machine for making high-quality tomato sauce with less time and effort.",
    tech: ["Embedded Systems", "C"],
    link: "https://github.com/JithmiShihara",
    caseStudyUrl: "https://behance.net/jithmishihara",
    featured: false
  }
];

export const experiences = [
  {
    role: "Associate UI/UX Engineer",
    company: "Glamer International (Pvt) Ltd",
    period: "May 2025 – Present",
    description: "• Design user-centered interfaces for web and mobile platforms\n• Create wireframes, prototypes, and high-fidelity UI designs using Figma\n• Collaborate with developers and stakeholders to ensure smooth implementation\n• Conduct usability testing and iterate designs based on feedback"
  },
  {
    role: "UI/UX Engineer Intern",
    company: "Glamer International (Pvt) Ltd",
    period: "Nov 2024 – May 2025",
    description: "• Designed UI/UX solutions for multiple applications across industries\n• Developed mobile and web interfaces with a focus on usability and accessibility\n• Worked closely with development teams for accurate implementation\n\nKey Projects:\n• E-Warranty Management System (Mobile & Web)\n• Autonova Vehicle Services Platform\n• Agriculture Market Mobile Application\n• Court Reporter Legal App\n• Emission Tracking Dashboard"
  },
  {
    role: "Software Engineer Intern",
    company: "Center for Defence Research and Development",
    period: "Feb 2023 – Aug 2023",
    description: "• Contributed to boat tracking and classification system for Navy & Coast Guard\n• Designed UI components and supported backend development\n• Worked with Python, Java, and MySQL"
  }
];

export const education = [
  {
    degree: "BSc (Hons) Information Technology & Management",
    school: "University of Moratuwa",
    period: "2020 – 2024",
    details: "Graduated with Honors"
  }
];

export const professionalQualifications = [
  "UI/UX Design with Figma (Udemy)",
  "Adobe XD UI/UX Design",
  "Complete Web & Mobile Designer Course",
  "NVQ Level 3 – Computer Application Assistant"
];

export const certifications = [
  "HackMoral 4.0 Mini Hackathon Participant"
];

export const dribbbleShots = [
  {
    title: "CargoTon Website Design",
    image: "https://cdn.dribbble.com/userupload/17053467/file/original-b27cc42ef8c3c7c992e252f923f99259.png",
    link: "https://dribbble.com/shots/25019992-CargoTon-Website-Design"
  },
  {
    title: "OceanOne Hotel Website",
    image: "https://cdn.dribbble.com/userupload/17053398/file/original-d24e3e77333bcd0a4be2629898087d37.png",
    link: "https://dribbble.com/shots/25019967-OceanOne-Hotel-Website"
  },
  {
    title: "Janashakthi Life - Redesign",
    image: "https://cdn.dribbble.com/userupload/17053134/file/original-13753d80c79e43a8cca61ff9d71609ab.png",
    link: "https://dribbble.com/shots/25019883-Home-page-of-Janashakthi-Life-Redesign"
  },
  {
    title: "Barbershop Booking System",
    image: "https://cdn.dribbble.com/userupload/16628222/file/original-ad965952c4ca50f5b9380765ad089591.png",
    link: "https://dribbble.com/shots/24875826-Barbershop-Booking-System-UI-Design"
  },
  {
    title: "Content Creator Profile",
    image: "https://cdn.dribbble.com/userupload/15916455/file/original-4839c2f653561e485bb2a09caf781ac5.png",
    link: "https://dribbble.com/shots/24630674-Content-Creator-Profile-Page"
  },
  {
    title: "Character Design",
    image: "https://cdn.dribbble.com/userupload/12844396/file/original-07589b274ac8449540dba14df3c61e8b.png",
    link: "https://dribbble.com/shots/23570928-Character-Design"
  }
];

export const referees = [
  {
    name: "Sagara Sumathipala, Ph.D.",
    role: "Senior Lecturer, Dept. of Computational Mathematics",
    org: "University of Moratuwa",
    contact: "sagaras@uom.lk"
  },
  {
    name: "Commander K.H.N. Kulapathi",
    role: "Chief Coordinator - IT & GIS Wing",
    org: "Centre for Defence Research and Development",
    contact: "nadeerakulapathi@gmail.com"
  }
];
