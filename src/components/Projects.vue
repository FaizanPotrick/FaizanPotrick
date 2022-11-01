<script setup>
import ProjectsStore from "@/stores/Projects.js";

const { projects } = ProjectsStore();
</script>
<template>
  <div class="p-5 text-center w-screen snap-start">
    <div class="text-4xl sm:text-5xl font-semibold py-10">Projects</div>
    <div class="flex justify-center items-center gap-8 flex-wrap">
      <div
        v-for="project in projects"
        :key="project"
        class="w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] rounded-lg shadow shadow-white bg-white"
      >
        <img
          :src="project.src"
          :alt="project.title"
          loading="lazy"
          class="rounded-t-lg duration-500 cursor-pointer hover:scale-125 sm:hover:scale-150 hover:rounded-lg"
        />
        <div class="p-3 shadow-inner rounded-b-lg">
          <div class="text-xl font-semibold text-black">
            {{ project.title }}
          </div>
          <div class="text-sm text-black mb-2">
            {{ project.description }}
          </div>
          <div class="flex justify-center items-center">
            <img
              v-for="technology of project.technology"
              :key="technology"
              :src="technology.src"
              loading="lazy"
              class="w-8 sm:w-[2.25rem] m-1.5 rounded"
              :alt="technology.alt"
            />
          </div>
          <div class="flex justify-around items-center mt-3 text-sm">
            <a
              :href="project.github"
              target="_blank"
              class="rounded-lg px-2.5 sm:px-3 py-2 sm:py-2.5 bg-[#8a2ce2] duration-300 hover:scale-105 border shadow"
            >
              Github
            </a>
            <a
              :href="project.website"
              target="_blank"
              class="rounded-lg px-2.5 sm:px-3 py-2 sm:py-2.5 bg-[#8a2ce2] duration-300 hover:scale-105 border shadow"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
