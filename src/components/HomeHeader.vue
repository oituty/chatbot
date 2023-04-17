<template>
  <header
    :class="[
      'relative font-bold py-6 px-6 flex  h-full bg-tertiary justify-center items-center',
      chatIsOn ? 'lg:px-4' : 'lg:px-12',
    ]"
  >
    <div class="w-full h-full flex opacity-20">
      <div class="flex w-full h-full flex-col">
        <div
          class="opacity-70 h-full gap-y-2 flex flex-col text-white w-[18rem] max-w-[50vw]"
        >
          <template v-for="(message, index) in messages" :key="index">
            <span
              v-if="index <= currentIndex"
              v-show="index !== 0 || currentIndex === 0"
              :class="[
                { 'cursor-pointer': message.onClick },
                'flex flex-col bg-primary w-fit rounded-sm min-h-[2.25rem] duration-200 transition-all px-4 py-2.5',
              ]"
            >
              <TypingMessageAnimation
                :text="message.text"
                :finished="() => nextMessage()"
            /></span>
          </template>
        </div>
        <div class="h-full w-full flex items-end">
          <h3 class="cursor-not-allowed">
            DON`T<br />
            CLICK <br />HERE
          </h3>
        </div>
      </div>

      <div class="w-full grid grid-rows-[1fr_1fr]">
        <div class="relative w-full flex justify-end">
          <img
            class="absolute max-w-[8rem] w-auto h-full max-h-min self-start"
            :src="getIcon('arrow_header.svg')"
          />
        </div>
        <div class="w-full flex justify-end items-end">
          <h4 class="-rotate-12 text-center pb-2">
            this is a small <br />
            project made to test <br />
            <span class="bg-primary text-tertiary px-2 cursor-pointer"
              >my knowledge</span
            >
          </h4>
        </div>
      </div>
    </div>

    <div
      class="absolute flex flex-col justify-center gap-y-2.5 text-center items-center"
    >
      <h2>Welcome to my</h2>
      <h1 class="break-all">CHATBOT</h1>
      <span
        class="h-1 bg-primary w-full max-w-xl opacity-40 rounded-full"
      ></span>
      <p class="max-w-xs mx-auto">
        Here you gonna have answers about me and
        <span class="cursor-pointer font-normal text-base leading-6"
          >some jokes</span
        >
      </p>

      <CustomButton
        class="mt-4"
        :variant="chatIsOn ? 'outlined' : 'elevated'"
        @click="toggleChat"
        >{{ chatIsOn ? "Restart" : "Start" }}</CustomButton
      >
    </div>
  </header>
</template>
<script setup lang="ts">
import router from "@/router";
import { computed, ref } from "vue";

import { getIcon } from "../utils";

import CustomButton from "./CustomButton.vue";
import TypingMessageAnimation from "./TypingMessageAnimation.vue";

const chatIsOn = computed(() => router.currentRoute.value?.hash === "#ACTIVE");

const messages: { text: string; onClick?: () => void }[] = [
  { text: "......................" },
  { text: "Sometimes I don't work great, but I make jokes to get through it" },
  { text: "Like my creator.", onClick: () => console.log("open cv") },
];

const currentIndex = ref(0);

const nextMessage = () => {
  if (currentIndex.value < messages.length - 1) {
    if (currentIndex.value + 1 >= messages.length) {
      return;
    }

    currentIndex.value++;
  }
};

function toggleChat() {
  if (chatIsOn.value) {
    router.replace({ path: "/" });

    return;
  }

  router.replace({ path: "/", hash: "#ACTIVE" });
}
</script>
