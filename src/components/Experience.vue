<script setup>
import ExperienceStore from "@/stores/Experience.js";

const { internships, committees } = ExperienceStore();
</script>
<template>
  <div
    v-for="experience in [
      { title: 'Internships', data: internships },
      { title: 'Committees', data: committees },
    ]"
    :key="experience"
    class="p-5 text-center w-screen snap-start"
  >
    <div class="text-4xl sm:text-5xl font-semibold py-10">
      {{ experience.title }}
    </div>
    <div class="flex justify-center items-center gap-8 flex-wrap">
      <a
        v-for="data in experience.data"
        :key="data"
        :href="data.website"
        target="_blank"
        class="flex items-center bg-white rounded-lg max-w-sm md:max-w-lg w-full text-black shadow shadow-white"
      >
        <img
          class="rounded-l-lg w-32 md:w-40"
          loading="lazy"
          :src="data.src"
          :alt="data.alt"
        />
        <div class="flex flex-col justify-between p-3 w-full">
          <div class="mb-2 text-xl md:text-2xl font-semibold">
            {{ data.title }}
          </div>
          <div class="text-sm md:text-base">
            {{ data.role }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
