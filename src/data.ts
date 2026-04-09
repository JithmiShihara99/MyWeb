import { 
  Palette, 
  Layout,
  Database,
  TestTube,
  Plane,
  Film,
  Brush,
  Scissors,
  PenTool,
  Terminal,
  Globe,
  Music,
  ClipboardCheck,
  FileEdit,
  CheckCircle,
  Layers,
  Shapes,
  Image as ImageIcon
} from 'lucide-react';

import { 
  SiFigma, 
  SiReact,
  SiJavascript,
  SiCss,
  SiPython,
  SiGo,
  SiDotnet,
  SiC,
  SiMysql,
  SiGit,
  SiPostman,
  SiSelenium
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa';

export const personalInfo = {
  name: "JITHMI SHIHARA",
  role: "Frontend Developer & UI/UX Designer",
  location: "Colombo, Sri Lanka",
  phone: "+94 765 694 707",
  email: "jithmishihara@gmail.com",
  summary: "I am a committed and enthusiastic person who loves learning and facing new challenges. With a solid understanding of the basics, I am well-prepared to adapt to different situations. My communication skills enable me to work effectively in a team. My ultimate life goal is to become a leader in a respected company, and I have actively pursued this ambition.",
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/jithmi-shihara", icon: Globe },
    { name: "GitHub", url: "https://github.com/JithmiShihara", icon: Terminal },
    { name: "Behance", url: "https://behance.net/jithmishihara", icon: Palette },
    { name: "Dribbble", url: "https://dribbble.com/Jithmi_Shihara", icon: PenTool },
  ]
};

export const skills = [
  {
    category: "UI / UX Design",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    tools: [
      { name: "Figma", level: 95, desc: "Design Systems", icon: SiFigma },
      { name: "Adobe XD", level: 85, desc: "Prototyping", icon: Layers },
      { name: "Illustrator", level: 80, desc: "Vector Art", icon: Shapes },
      { name: "Photoshop", level: 75, desc: "Visuals", icon: ImageIcon }
    ]
  },
  {
    category: "Web Development",
    icon: Layout,
    color: "from-blue-500 to-cyan-500",
    tools: [
      { name: "React", level: 90, desc: "Modern UI", icon: SiReact },
      { name: "JavaScript", level: 85, desc: "ES6+ Logic", icon: SiJavascript },
      { name: "HTML & CSS", level: 95, desc: "Responsive Design", icon: SiCss }
    ]
  },
  {
    category: "Programming",
    icon: Terminal,
    color: "from-emerald-500 to-teal-500",
    tools: [
      { name: "Java", level: 80, desc: "OOP Systems", icon: FaJava },
      { name: "Python", level: 75, desc: "Data & Scripts", icon: SiPython },
      { name: "Golang", level: 70, desc: "Backend", icon: SiGo },
      { name: "ASP.NET", level: 75, desc: "Web Apps", icon: SiDotnet },
      { name: "C", level: 80, desc: "Core Logic", icon: SiC }
    ]
  },
  {
    category: "Databases & Tools",
    icon: Database,
    color: "from-violet-500 to-purple-500",
    tools: [
      { name: "MySQL", level: 85, desc: "Data Mgmt", icon: SiMysql },
      { name: "Git", level: 90, desc: "Version Control", icon: SiGit },
      { name: "Postman", level: 85, desc: "API Testing", icon: SiPostman },
      { name: "Test Automation", level: 70, desc: "Scripts", icon: SiSelenium }
    ]
  },
  {
    category: "Quality Assurance",
    icon: TestTube,
    color: "from-orange-500 to-amber-500",
    tools: [
      { name: "Manual Testing", level: 95, desc: "Execution", icon: ClipboardCheck },
      { name: "Test Case Design", level: 90, desc: "Architecture", icon: FileEdit },
      { name: "Test Execution", level: 95, desc: "Quality Control", icon: CheckCircle }
    ]
  }
];

export const softSkills = [
  "Management Skills", "Creativity", "Interpersonal Skills", 
  "Leadership Skills", "Communication Skills", "Team Work"
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
    title: "Automated Handwritten Answers Grading System",
    category: "Final Year Research | Ongoing",
    description: "An automated Pali language and Sinhala handwritten answers grading feedback system using deep learning techniques.",
    tech: ["Python", "CNN", "RNN", "ML", "NLP"],
    link: "https://github.com/JithmiShihara",
    featured: true
  },
  {
    title: "Image Analysis Boat Tracking System",
    category: "Intern Project",
    description: "Designed and implemented a boat identification and classification system for the Sri Lanka Navy and Coast Guard to automate port management.",
    tech: ["Python", "Java", "MySQL", "Figma (UI Design)"],
    link: "https://github.com/JithmiShihara",
    featured: true
  },
  {
    title: "Employee Management System (BCGR)",
    category: "Intern Project",
    description: "Developed an employee management system in collaboration with the Bureau of Rehabilitation.",
    tech: ["ASP.NET", "Figma (UI Design)"],
    link: "https://github.com/JithmiShihara",
    featured: false
  },
  {
    title: "Web Based Online Shopping System",
    category: "Software Project | 2021–2022",
    description: "A user-friendly platform to buy and sell products, featuring discount scheduling and category management.",
    tech: ["React", "Golang", "MySQL"],
    link: "https://github.com/JithmiShihara",
    featured: false
  },
  {
    title: "Automated Tomato Sauce Machine",
    category: "Hardware Project | 2020–2021",
    description: "An automated machine for making high-quality tomato sauce with less time and effort.",
    tech: ["Atmega32A", "Atmel Studio", "Proteus 8", "C", "Kicad (PCB Design)"],
    link: "https://github.com/JithmiShihara",
    featured: false
  }
];

export const experiences = [
  {
    role: "Software Engineer | Intern",
    company: "Center for Defence Research and Development, Ministry of Defence",
    period: "February 2023 – August 2023",
    description: "Completed 6 months internship as a trainee software engineer. Worked on the Image Analysis Boat Tracking System and the Employee Management System (BCGR)."
  }
];

export const education = [
  {
    degree: "BSc. (Hons) in Information Technology & Management",
    school: "University of Moratuwa",
    period: "Reading - Expected in 2024",
    details: "Faculty of Information Technology"
  },
  {
    degree: "G.C.E Advanced Level",
    school: "H/ Debarawewa Central College",
    period: "2018",
    details: "Results: 3As | Z-score: 2.004 | District Rank: 06"
  },
  {
    degree: "G.C.E Ordinary Level",
    school: "H/ Debarawewa Central College",
    period: "2015",
    details: "Results: Passed with distinction"
  }
];

export const professionalQualifications = [
  "Learn User Experience Design from A-Z: Adobe XD UI/UX Design (Udemy)",
  "Complete Web & Mobile Designer in 2021: UI/UX, Figma (Udemy)",
  "Mobile Application Design & Development: Figma, Android Studio, Firebase",
  "Computer Application Assistant: National Certificate | NVQ Level 3"
];

export const certifications = [
  "Hack Moral 4.0 - Mini Hackathon Competition (2022)",
  "INTECS - Faculty of Information Technology, University of Moratuwa"
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
    name: "Commander K.H. Nadeera",
    role: "Kulapathi, Chief Coordinator - IT & GIS Wing",
    org: "Centre for Defence Research and Development",
    contact: "nadeerakulapathi@gmail.com"
  }
];
