import { defineStore } from "pinia";

export default defineStore({
  id: "achievements",
  state: () => ({
    achievements: [
      {
        title: "Smart India Hackathon 2022",
        description:
          "Winners in our problem statement in the National Level Hackathon conducted by Gov. of India.",
      },
      {
        title: "Tech for good",
        description: "Finalist in VESIT National Level Hackathon.",
      },
      {
        title: "Pika Web",
        description:
          "First Postion in Web Development in the Technitude conducted by GITS.",
      },
      {
        title: "Ideobation",
        description:
          "Second Position in presenting an idea of the project in the Technitude conducted by CSI.",
      },
      {
        title: "Coding Premier League",
        description: "Finalist and Qualified Round 1 with 2nd position.",
      },
      {
        title: "Hacktoberfest 2021-22",
        description:
          "Contributed to open-source and maintained repositories in the month of October.",
      },
    ],
  }),
});
