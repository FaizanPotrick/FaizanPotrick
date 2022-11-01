<script setup>
import SkillsStore from "@/stores/Skills.js";

const { skills } = SkillsStore();
</script>
<template>
  <div class="flex flex-col items-center p-5 text-center w-screen snap-start">
    <div class="text-4xl sm:text-5xl font-semibold py-10">Skills</div>
    <div class="max-w-7xl">
      <div
        class="inline-flex flex-col flex-wrap m-3 rounded-lg px-5 py-3 bg-white text-black shadow shadow-white"
        v-for="skill in skills"
        :key="skill"
      >
        <div class="text-2xl sm:text-3xl font-semibold my-2">
          {{ skill.title }}
        </div>
        <div class="flex flex-wrap items-center justify-center">
          <div
            class="flex flex-col justify-center items-center m-4"
            v-for="technology in skill.technologies"
            :key="technology"
          >
            <img
              class="w-10 sm:w-16 rounded-lg"
              loading="lazy"
              :src="technology.src"
              :alt="technology.title"
            />
            <div class="text-sm sm:text-base mt-2">{{ technology.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
