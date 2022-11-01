import { defineStore } from "pinia";
import Java from "@/assets/technologies/java.webp";
import Python from "@/assets/technologies/python.webp";
import JavaScript from "@/assets/technologies/javascript.webp";
import Html from "@/assets/technologies/html.webp";
import CSS from "@/assets/technologies/css.webp";
import React from "@/assets/technologies/react.webp";
import Next from "@/assets/technologies/next.webp";
import Vue from "@/assets/technologies/vue.webp";
import Bootstrap from "@/assets/technologies/bootstrap.webp";
import Tailwind from "@/assets/technologies/tailwind.webp";
import Node from "@/assets/technologies/nodejs.webp";
import Express from "@/assets/technologies/express.webp";
import MongoDB from "@/assets/technologies/mongodb.webp";
import Netlify from "@/assets/technologies/netlify.webp";
import Heroku from "@/assets/technologies/heroku.webp";
import Vercel from "@/assets/technologies/vercel.webp";
import Git from "@/assets/technologies/git.webp";
import Github from "@/assets/technologies/github.webp";

export default defineStore({
  id: "skills",
  state: () => ({
    skills: [
      {
        title: "Languages",
        technologies: [
          { title: "Java", src: Java },
          { title: "Python", src: Python },
          { title: "JavaScript", src: JavaScript },
        ],
      },
      {
        title: "Front-End",
        technologies: [
          { title: "HTML", src: Html },
          { title: "CSS", src: CSS },
          { title: "ReactJS", src: React },
          { title: "NextJS", src: Next },
          { title: "VueJS", src: Vue },
          { title: "Bootstrap", src: Bootstrap },
          { title: "TailwindCSS", src: Tailwind },
        ],
      },
      {
        title: "Back-End",
        technologies: [
          { title: "NodeJS", src: Node },
          { title: "ExpressJS", src: Express },
        ],
      },
      {
        title: "Database",
        technologies: [{ title: "MongoDB", src: MongoDB }],
      },
      {
        title: "Hosting",
        technologies: [
          { title: "Netlify", src: Netlify },
          { title: "Heroku", src: Heroku },
          { title: "Vercel", src: Vercel },
        ],
      },
      {
        title: "Tools",
        technologies: [
          { title: "Git", src: Git },
          { title: "Github", src: Github },
        ],
      },
    ],
  }),
});
