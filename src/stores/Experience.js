import { defineStore } from "pinia";
import LetsGrowMore from "@/assets/internships/letsgrowmore.webp";
import RoboCapital from "@/assets/internships/robocapital.webp";
import CSI from "@/assets/internships/csi.webp";
import GDSC from "@/assets/internships/gdsc.webp";

export default defineStore({
  id: "experience",
  state: () => ({
    internships: [
      {
        title: "Lets Grow More",
        role: "Web Developer",
        alt: "Lets Grow More",
        src: LetsGrowMore,
        website: "https://www.letsgrowmore.in/",
      },
      {
        title: "RoboCapital.in",
        role: "Full Stack Web Developer",
        src: RoboCapital,
        alt: "RoboCapital",
        website: "https://www.robocapital.in/",
      },
    ],
    committees: [
      {
        title: "Computer Society of India",
        role: "Technical Team Member",
        alt: "CSI",
        src: CSI,
        website: "https://dmcecsi.tech/",
      },
      {
        title: "Google Developer Student Club",
        role: "Web Team Member",
        alt: "GDSC",
        src: GDSC,
        website: "https://www.robocapital.in/",
      },
    ],
  }),
});
