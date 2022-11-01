<script setup>
import { onMounted } from "vue";
import LoadingStore from "@/stores/Loading.js";
import Resume from "@/assets/resume.pdf";

onMounted(() => {
  LoadingStore().isLoading = false;
});
</script>
<template>
  <div>
    <embed :src="Resume" class="w-full h-screen" type="application/pdf" />
  </div>
</template>
