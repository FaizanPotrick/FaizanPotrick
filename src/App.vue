<script setup>
import { onMounted } from "vue";
import AppStore from "@/stores/App.js";
import Loading from "@/components/Loading.vue";
import axios from "axios";

const { click_effect, append_balls, display_balls } = AppStore();

const WebHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};

onMounted(async () => {
  WebHeight();
  append_balls();
  display_balls();
  await axios.get(`https://frozen-savannah-13770.herokuapp.com/hi`);
});

window.addEventListener("resize", WebHeight);
document.addEventListener("click", click_effect);
</script>
<template>
  <div
    id="scroll_container"
    class="relative h-screen w-screen scroll-smooth overflow-x-hidden"
  >
    <div id="balls" class="fixed h-screen w-full overflow-hidden -z-10"></div>
    <RouterView />
    <Loading v-if="AppStore().isLoading" />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
html {
  scroll-behavior: smooth;
}
* {
  font-family: "Poppins";
}
body {
  background-color: #121212;
  color: white;
}
:root {
  --doc-height: 100%;
}
#scroll_container::-webkit-scrollbar {
  display: none;
}
</style>
