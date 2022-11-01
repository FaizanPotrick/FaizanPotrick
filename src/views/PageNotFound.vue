<script setup>
import { onMounted } from "vue";
import LoadingStore from "@/stores/Loading.js";

onMounted(() => {
  LoadingStore().isLoading = false;
});
</script>
<template>
  <div
    class="flex flex-col items-center justify-center h-screen text-center p-5"
  >
    <div class="mb-8 font-extrabold text-8xl sm:text-9xl text-[#fff]">404</div>
    <div class="text-2xl font-semibold sm:text-3xl text-[#fff]">
      Sorry, we couldn't find this page
    </div>
    <div class="text-sm sm:text-base mt-4 mb-8 text-[#fff]">
      But don't worry, you can find plenty of other things on our homepage
    </div>
    <RouterLink
      to="/"
      class="bg-[#8a2ce2] text-[#fff] flex items-center justify-center rounded-xl px-6 sm:px-8 py-2.5 sm:py-3 font-semibold duration-200 hover:bg-[#8a2ce2]/80 text-sm sm:text-base shadow shadow-[#8a2ce2]"
    >
      <svg
        class="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="3"
      >
        <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span> Back to home page </span>
    </RouterLink>
  </div>
</template>
