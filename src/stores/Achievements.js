import { defineStore } from "pinia";

export default defineStore({
  id: "achievements",
  state: () => ({
    achievements: [
      {
        title: "Smart India Hackathon 2022",
        description:
          "Winners of our problem statement in the National Level Hackathon.",
      },
      {
        title: "Tech for good",
        description: "Finalist in VESIT National Level Hackathon.",
      },
      {
        title: "Pika Web",
        description:
          "First Postion in Web Development in the Technitude'22.",
      },
      {
        title: "Ideobition",
        description:
          "Second Position in picthing idea in the Technitude'22.",
      },
      {
        title: "Coding Premier League",
        description: "Finalist and Qualified Round 1 with 2nd position.",
      },
      {
        title: "Hacktoberfest 2021-22",
        description:
          "Contributed to open-source and maintained repositories.",
      },
    ],
  }),
});
