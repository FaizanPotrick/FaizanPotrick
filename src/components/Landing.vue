<script setup>
import { onMounted, ref } from "vue";
import Typed from "typed.js";
import LandingStore from "@/stores/Landing.js";

const { social_media, typed_options } = LandingStore();

onMounted(() => {
  new Typed("#typed_js", typed_options).start();
});

const Toggle = ref(false);

const ToggleMenu = (e) => {
  Toggle.value = !Toggle.value;
};

const ScrollToNext = () => {
  document.getElementById("scroll_container").scrollTop += window.outerHeight;
};
</script>
<template>
  <div
    class="relative flex flex-col items-center p-5 text-center h-screen min-w-full w-screen snap-start"
  >
    <nav class="flex justify-around items-center w-full">
      <div
        class="text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap"
      >
        Faizan Potrick
      </div>
      <div class="relative">
        <button
          @click="ToggleMenu"
          class="px-4 sm:px-5 py-1.5 sm:py-2 bg-[#8a2ce2] mb-2 rounded-lg text-sm sm:text-base duration-300 hover:scale-110 shadow shadow-[#8a2ce2]"
        >
          Menu
        </button>
        <div
          :class="{
            flex: Toggle,
            hidden: !Toggle,
          }"
          class="flex-col gap-1 absolute right-0 z-50 w-40 sm:w-44 p-1 bg-white rounded-lg text-black shadow shadow-white"
        >
          <RouterLink
            to="resume"
            class="py-2 hover:bg-[#8a2ce2] hover:text-white rounded-lg duration-300 text-sm sm:text-base font-semibold"
            >Resume</RouterLink
          >
          <RouterLink
            to="chatbot"
            class="py-2 hover:bg-[#8a2ce2] hover:text-white rounded-lg duration-300 text-sm sm:text-base font-semibold"
            >Talk to Kiwi</RouterLink
          >
        </div>
      </div>
    </nav>
    <div class="flex flex-col items-center justify-center w-full h-full">
      <div
        class="lg:text-6xl md:text-5xl text-4xl font-semibold text-[#8a2ce2]"
      >
        <span id="typed_js"></span>
      </div>
      <div
        class="max-w-6xl lg:text-lg md:text-sm text-xs mt-5 p-3 text-white/80"
      >
        I'm an undergraduate pursuing my bachelor's in Datta Meghe College of
        Engineering. Currently I'm in third year with the specialization in
        Computer Science. I have successfully completed my 1st Internship as a
        front-end web developer at let's grow more virtual internship program in
        my 1st year. I have a deep interest in development. I am a self-taught
        programmer. I have made more than 10 projects, which are full-stack
        projects using MERN, React JS, Next JS, Node JS, Express JS, and
        javascript. I am a member of technical team of computer society of india
        students' chapter and also a member of web team of google
        development students club. I wish to learn new technologies and ideas to
        creates a positive impact on World.
      </div>
      <div class="flex justify-center items-center mt-5">
        <a
          :href="icon.link"
          v-for="icon in social_media"
          :key="icon"
          target="_blank"
        >
          <img
            :src="icon.src"
            :alt="icon.alt"
            loading="lazy"
            class="h-12 sm:h-[60px] p-2 cursor-pointer duration-500 hover:scale-110"
          />
        </a>
      </div>
    </div>
    <button
      @click="ScrollToNext"
      class="border-2 absolute bottom-8 rounded-full border-[#8a2ce2] text-[#8a2ce2] duration-500 hover:scale-110"
    >
      <div
        class="arrow text-2xl sm:text-3xl animate-[mouse_1.8s_infinite_ease-in-out_reverse] font-extrabold px-2 sm:px-2.5 py-1.5 sm:py-2"
      >
        .
      </div>
    </button>
  </div>
</template>
