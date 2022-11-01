import { defineStore } from "pinia";
import ApnaShop from "@/assets/projects/apnashop.webp";
import DMCECommitteePortal from "@/assets/projects/dmcecommitteeportal.webp";
import ResumeB from "@/assets/projects/resumeb.webp";
import MyTodos from "@/assets/projects/mytodos.webp";
import React from "@/assets/technologies/react.webp";
import Next from "@/assets/technologies/next.webp";
import Vue from "@/assets/technologies/vue.webp";
import Bootstrap from "@/assets/technologies/bootstrap.webp";
import Tailwind from "@/assets/technologies/tailwind.webp";
import Node from "@/assets/technologies/nodejs.webp";
import Express from "@/assets/technologies/express.webp";
import MongoDB from "@/assets/technologies/mongodb.webp";

export default defineStore({
  id: "projects",
  state: () => ({
    projects: [
      {
        title: "Apna Shop",
        description: "E-Commerce Website",
        src: ApnaShop,
        technology: [
          { alt: "NextJS", src: Next },
          { alt: "Bootstrap", src: Bootstrap },
          { alt: "NodeJS", src: Node },
          { alt: "MongoDB", src: MongoDB },
        ],
        github: "https://github.com/FaizanPotrick/Apna-Shop.git",
        website: "https://apnashops.vercel.app/",
      },
      {
        title: "DMCE Committee Portal",
        description: "Committee Portal for DMCE",
        src: DMCECommitteePortal,
        technology: [
          { alt: "VueJS", src: Vue },
          { alt: "TailwindCSS", src: Tailwind },
          { alt: "NodeJS", src: Node },
          { alt: "ExpressJS", src: Express },
          { alt: "MongoDB", src: MongoDB },
        ],
        github: "https://github.com/FaizanPotrick/DMCE-Committee-Portal.git",
        website: "https://dmcecommitteeportal.herokuapp.com/",
      },
      {
        title: "ResumeB",
        description: "Online Resume Builder",
        src: ResumeB,
        technology: [
          { alt: "ReactJS", src: React },
          { alt: "Bootstrap", src: Bootstrap },
        ],
        github: "https://github.com/FaizanPotrick/ResumeB.git",
        website: "https://resumeb.netlify.app/",
      },
      {
        title: "My Todos",
        description: "Todo List App",
        src: MyTodos,
        technology: [
          { alt: "ReactJS", src: React },
          { alt: "Bootstrap", src: Bootstrap },
        ],
        github: "https://github.com/FaizanPotrick/my-todos.git",
        website: "https://faizanpotrick.github.io/my-todos/",
      },
    ],
  }),
});
