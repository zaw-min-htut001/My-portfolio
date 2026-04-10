import profilePhoto from "../assets/my.jpeg";
import laravelIcon from "../assets/laravel-2.svg";
import phpIcon from "../assets/php-svgrepo-com.svg";
import javascriptIcon from "../assets/logo-javascript.svg";
import vueIcon from "../assets/vue-svgrepo-com.svg";
import reactIcon from "../assets/react.svg";
import awsIcon from "../assets/aws.png";
import livewireIcon from "../assets/livewire.svg";
import laravelForgeIcon from "../assets/laravel-forge.svg";
import githubIcon from "../assets/github-brands-solid.svg";
import linkedinIcon from "../assets/linkedin-brands-solid.svg";
import telegramIcon from "../assets/telegram-brands-solid.svg";

export const currentYear = new Date().getFullYear();

export const navItems = [
  { label: "Home", hash: "#home" },
  { label: "Experience", hash: "#experience" },
  { label: "About", hash: "#about" },
];

export const profile = {
  role: "Backend / Laravel Developer",
  focus: "Laravel, APIs, deployment basics, and practical full-stack delivery",
  email: "htutzawmin66@gmail.com",
  phone: "09 763 122 056",
  phoneLink: "09763122056",
  resumeLink:
    "https://drive.google.com/file/d/14kN3zh20vGmO5MpZdkh1wu-5cP5mwp31/view?usp=drive_link",
  photo: profilePhoto,
};

export const quickStats = [
  { label: "Years Experience", value: "2+" },
  { label: "Primary Stack", value: "Laravel" },
  { label: "Role Targets", value: "3" },
];

export const signalTags = [
  "Laravel APIs",
  "ERP workflow exposure",
  "Livewire",
  "Vue / React",
  "AWS basics",
  "Laravel Forge",
];

export const trustStrip = [
  "Backend-focused",
  "Laravel API development",
  "ERP product exposure",
  "Deployment basics",
  "Full-stack support",
];

export const experience = [
  {
    company: "Pico Innovation",
    role: "Intern Web Developer",
    meta: "ERP product exposure",
    points: [
      "Worked with an ERP product environment and saw how business workflows become application features.",
      "Built hands-on experience with Laravel and Livewire inside a team setting.",
    ],
  },
  {
    company: "Dubai Base Company",
    role: "Junior Backend Developer",
    meta: "API development",
    points: [
      "Developed backend APIs with Laravel for application features and integration needs.",
      "Improved my understanding of backend structure, request handling, and maintainable server-side code.",
    ],
  },
];

export const strengths = [
  {
    title: "Backend-first mindset",
    description:
      "I focus on application logic, APIs, authentication, and business rules that need to remain stable over time.",
  },
  {
    title: "Useful full-stack range",
    description:
      "I can support frontend implementation in Vue or React when a feature needs complete delivery across the stack.",
  },
  {
    title: "Deployment awareness",
    description:
      "I have beginner-level AWS knowledge and experience using Laravel Forge for deployment workflows.",
  },
  {
    title: "Practical product thinking",
    description:
      "I like turning business needs into workflows that feel clear for users and manageable for teams.",
  },
];

export const skills = [
  { name: "PHP", mark: "PHP", icon: phpIcon, note: "Core backend language for server-side application logic." },
  { name: "JavaScript", mark: "JS", icon: javascriptIcon, note: "Frontend behavior and interactive product features." },
  { name: "Laravel", mark: "LV", icon: laravelIcon, note: "Framework for APIs, authentication, and product workflows." },
  { name: "Livewire", mark: "LW", icon: livewireIcon, note: "Dynamic Laravel interfaces with lower frontend overhead." },
  { name: "Vue", mark: "VU", icon: vueIcon, note: "Component-based frontend work and SPA-style features." },
  { name: "React", mark: "RE", icon: reactIcon, note: "Modern UI development when product needs call for it." },
  { name: "AWS", mark: "AWS", icon: awsIcon, wide: true, note: "Basic cloud knowledge for deployment environments." },
  { name: "Laravel Forge", mark: "FG", icon: laravelForgeIcon, note: "Deployment experience for Laravel application delivery." },
];

export const education = [
  {
    year: "2016 - 2023",
    title: "Bachelor of English",
    place: "Mawlamyine University",
  },
  {
    year: "2022",
    title: "Professional Web Design Course",
    place: "Code Lab Academy",
  },
  {
    year: "2022",
    title: "Fullstack Developer Course",
    place: "Code Lab Academy",
  },
  {
    year: "2023",
    title: "Laravel + Vue Fullstack Course",
    place: "Code Lab Academy",
  },
];

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/zaw-min-htut001",
    icon: githubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zaw-min-htut-51a20b296",
    icon: linkedinIcon,
  },
  {
    label: "Telegram",
    href: "https://t.me/zawminh047",
    icon: telegramIcon,
  },
];
