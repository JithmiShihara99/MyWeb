import { 
  Palette, 
  Code2,
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
  Music
} from 'lucide-react';

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
    category: "Web Development",
    icon: Layout,
    items: ["HTML & CSS", "React", "JavaScript"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Programming",
    icon: Code2,
    items: ["Java", "C", "Python", "Golang", "ASP.NET"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    category: "UI / UX Design",
    icon: Palette,
    items: ["Figma", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop"],
    color: "from-pink-500 to-rose-500"
  },
  {
    category: "Databases & Tools",
    icon: Database,
    items: ["MySQL", "Git", "Postman", "Test Automation"],
    color: "from-violet-500 to-purple-500"
  },
  {
    category: "Quality Assurance",
    icon: TestTube,
    items: ["Manual Testing", "Test Case Design", "Test Execution"],
    color: "from-orange-500 to-amber-500"
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
    title: "Modern Dashboard UI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "https://dribbble.com/Jithmi_Shihara"
  },
  {
    title: "Mobile Banking App",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    link: "https://dribbble.com/Jithmi_Shihara"
  },
  {
    title: "Smart Home Interface",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800&auto=format&fit=crop",
    link: "https://dribbble.com/Jithmi_Shihara"
  },
  {
    title: "E-commerce Redesign",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    link: "https://dribbble.com/Jithmi_Shihara"
  },
  {
    title: "Fitness Tracker UX",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=800&auto=format&fit=crop",
    link: "https://dribbble.com/Jithmi_Shihara"
  },
  {
    title: "Minimalist Portfolio Concept",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=800&auto=format&fit=crop",
    link: "https://dribbble.com/Jithmi_Shihara"
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
