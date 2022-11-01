<script setup>
import { onMounted } from "vue";
import AppStore from "@/stores/App.js";
import { ref } from "vue";
import axios from "axios";
const input = ref("");

onMounted(() => {
  AppStore().isLoading = false;
});

const Input_Chat = async () => {
  const chat = document.getElementById("chat");
  const input_chat = ` <div class="flex justify-start items-end flex-row-reverse">
          <div
            class="p-2.5 sm:p-4 max-w-[18rem] sm:max-w-xs text-sm sm:text-base w-full rounded-bl-xl rounded-tr-xl rounded-tl-xl bg-[#8a2ce2] text-[#fff]"
          >
            ${input.value}
          </div>
        </div>`;

  chat.innerHTML += input_chat;
  chat.scrollTop = chat.scrollHeight;
  const message = input.value;
  input.value = "";
  const { data } = await axios.get(
    `https://frozen-savannah-13770.herokuapp.com/${message}`
  );
  const bot_chat = `<div class="flex justify-start items-end">
          <div
            class="p-2.5 sm:p-4 max-w-[18rem] sm:max-w-xs text-sm sm:text-base w-full rounded-br-xl rounded-tr-xl rounded-tl-xl bg-[#fff] text-black"
          >
            ${data}
          </div>
        </div>`;
  chat.innerHTML += bot_chat;
  chat.scrollTop = chat.scrollHeight;
};
</script>
<template>
  <div
    class="flex justify-center items-center px-5 h-screen w-full bg-[#121212]"
  >
    <div
      class="flex flex-col justify-between items-center h-full w-full gap-6 px-2.5 py-5 bg-white/20 max-w-7xl shadow shadow-white/20"
    >
      <div
        class="flex flex-col gap-6 w-full h-full overflow-y-scroll"
        id="chat"
      >
        <div class="flex justify-start items-end">
          <div
            class="p-2.5 sm:p-4 max-w-[18rem] sm:max-w-xs text-sm sm:text-base w-full rounded-br-xl rounded-tr-xl rounded-tl-xl bg-[#fff] text-black"
          >
            Hi, KIWI here, How may I help you :)
          </div>
        </div>
      </div>
      <form
        class="relative w-full text-sm sm:text-base"
        @submit.prevent="Input_Chat"
      >
        <input
          type="text"
          class="p-2.5 sm:p-3 w-full bg-white text-black rounded-lg focus:outline-none"
          placeholder="Enter your message..."
          v-model="input"
          required
        />
        <button
          type="submit"
          class="text-white absolute right-1 bottom-0.5 sm:bottom-1 bg-[#121212] hover:bg-[#121212]/90 rounded-xl px-4 py-2"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>
