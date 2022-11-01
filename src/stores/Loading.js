import { defineStore } from "pinia";

export default defineStore({
  id: "loading",
  state: () => ({
    isLoading: true,
  }),
});
