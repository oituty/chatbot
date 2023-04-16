<template>
  <div class="flex w-full h-full bg-white">
    <div
      class="h-full min-h-screen grid grid-cols-1 grid-rows-[1fr_auto] w-full justify-between"
    >
      <HomeHeader
        :class="[
          'min-h-[40rem] transition-all lg:min-h-max',
          chatIsOn ? 'w-1/2' : 'w-full',
        ]"
      ></HomeHeader>
      <CustomFooter></CustomFooter>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { computed } from "vue";

import CustomFooter from "../components/CustomFooter.vue";
import HomeHeader from "../components/HomeHeader.vue";

const chatIsOn = computed(() => router.currentRoute.value?.hash === "#ACTIVE");
</script>
