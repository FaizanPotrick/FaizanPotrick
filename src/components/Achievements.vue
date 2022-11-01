<script setup>
import AchievementsStore from "@/stores/Achievements.js";

const { achievements } = AchievementsStore();
</script>
<template>
  <div class="p-5 text-center w-screen snap-start">
    <div class="text-4xl sm:text-5xl font-semibold py-10">Achievements</div>
    <div class="flex justify-center gap-8 flex-wrap">
      <div
        v-for="achievement in achievements"
        class="p-4 max-w-sm bg-white text-black rounded-lg w-full shadow shadow-white"
      >
        <div class="mb-2.5 sm:mb-4 text-xl sm:text-2xl font-semibold">
          {{ achievement.title }}
        </div>
        <div class="text-sm sm:text-base">
          {{ achievement.description }}
        </div>
      </div>
    </div>
  </div>
</template>
