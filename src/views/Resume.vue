<script setup>
import { onMounted } from "vue";
import AppStore from "@/stores/App.js";
import Resume from "@/assets/resume.pdf";

onMounted(() => {
  AppStore().isLoading = false;
});
</script>
<template>
  <div>
    <embed :src="Resume" class="w-full h-screen" type="application/pdf" />
  </div>
</template>
