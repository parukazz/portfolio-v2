import heroVideo from "../assets/videos/hero-video.mp4";
import uedashika from "../assets/projects/uedashika.png";
import sohara from "../assets/projects/sohara.png";

export const heroBG = heroVideo;

export const tagline = "Love build things for the web.";
export const quoteHero =
  "Technology is anything that amplifies human potential. Any sufficiently advanced technology is equivalent to magic.";

export const navigation = [
  { id: 0, label: "about", href: "#about" },
  { id: 1, label: "projects", href: "#projects" },
  { id: 2, label: "contact", href: "#contact" },
];

export const roletitle = [
  { label: "student" },
  { label: "it support" },
  { label: "front-end" },
];

export const abouttext = [
  {
    text: "Passionate about technology, especially web development. I pour all my creativity  into web technology, creating innovation and delivering unique projects.",
  },
  {
    text: "When I’m not creating or exploring web technologies, I’m probably watching movies, football or playing games.",
  },
];

export const projects = [
  {
    id: 0,
    title: "UedashikA - Landing Page",
    link: "https://parukazz.github.io/uedashika",
    category: "Dental Clinic",
    tech: "Vanilla JS, TailwindCSS",
    repo: "parukazz/uedashika",
    linkRepo: "https://github.com/parukazz/uedashika",
    img: uedashika,
    alt: "Ueda Project"
  },
  {
    id: 1,
    title: "Sohara - Landing Page",
    link: "https://parukazz.github.io/sohara",
    category: "URL Shortener",
    tech: "HTML, CSS, Javascript",
    repo: "parukazz/sohara",
    linkRepo: "https://github.com/parukazz/sohara",
    img: sohara,
    alt: "Sohara Project",
  },
];

export const myMail = "talk@parukazziyi.link";