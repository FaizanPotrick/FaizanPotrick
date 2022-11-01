import { defineStore } from "pinia";
import Linkedin from "@/assets/social_media/linkedin.webp";
import Github from "@/assets/social_media/github.webp";
import Instagram from "@/assets/social_media/instagram.webp";

export default defineStore({
  id: "landing",
  state: () => ({
    typed_options: {
      strings: ["Hi 👋, I'm a", "Full Stack Web Developer", "&", "Programmer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    },
    social_media: [
      {
        alt: "Linkedin",
        src: Linkedin,
        link: "https://linkedin.com/in/faizan-potrick",
      },
      {
        alt: "Github",
        src: Github,
        link: "https://github.com/FaizanPotrick",
      },
      {
        alt: "Instagram",
        src: Instagram,
        link: "https://instagram.com/faizan_potrick",
      },
    ],
  }),
});
