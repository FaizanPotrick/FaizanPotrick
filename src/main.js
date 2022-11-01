import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import AppStore from "@/stores/App.js";

const app = createApp(App);

app.use(createPinia());
app.use(
  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "home",
        beforeEnter: (to, from, next) => {
          AppStore().isLoading = true;
          next();
        },
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/resume",
        name: "resume",
        beforeEnter: (to, from, next) => {
          AppStore().isLoading = true;
          next();
        },
        component: () => import("@/views/Resume.vue"),
      },
      {
        path: "/chatbot",
        name: "chatbot",
        beforeEnter: (to, from, next) => {
          AppStore().isLoading = true;
          next();
        },
        component: () => import("@/views/ChatBot.vue"),
      },
      {
        path: "/:catchAll(.*)",
        name: "page not found",
        beforeEnter: (to, from, next) => {
          AppStore().isLoading = true;
          next();
        },
        component: () => import("@/views/PageNotFound.vue"),
      },
    ],
  })
);

app.mount("#app");
