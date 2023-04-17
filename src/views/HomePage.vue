<template>
  <div class="flex w-full h-full bg-white">
    <div
      class="h-full min-h-screen grid grid-cols-1 grid-rows-[1fr_auto] w-full justify-between"
    >
      <div class="flex flex-col lg:flex-row">
        <HomeHeader
          :class="[
            'transition-all lg:min-h-max',
            chatIsOn ? 'lg:w-1/2 hidden lg:flex ' : 'lg:w-full',
          ]"
        ></HomeHeader>
        <Chat v-show="chatIsOn" class="h-full lg:w-1/2"></Chat>
      </div>
      <CustomFooter></CustomFooter>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { computed } from "vue";

import Chat from "../components/Chat.vue";
import CustomFooter from "../components/CustomFooter.vue";
import HomeHeader from "../components/HomeHeader.vue";

const chatIsOn = computed(() => router.currentRoute.value?.hash === "#ACTIVE");
</script>
