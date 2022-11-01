<script setup>
import { onMounted } from "vue";
import Landing from "@/components/Landing.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import Experience from "@/components/Experience.vue";
import Achievements from "@/components/Achievements.vue";
import Footer from "@/components/Footer.vue";
import LoadingStore from "@/stores/Loading.js";

onMounted(() => {
  LoadingStore().isLoading = false;
});
</script>
<template>
  <div>
    <Landing />
    <Skills />
    <Projects />
    <Experience />
    <Achievements />
    <Footer />
  </div>
</template>
