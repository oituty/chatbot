<template>
  <main class="flex flex-col justify-between">
    <template v-if="chatIsOn">
      <ChatHeader />
      <section
        class="background-shadow h-full flex justify-end flex-col w-full"
      >
        <ChatFooter />
      </section>
    </template>
  </main>
</template>

<script setup lang="ts">
import router from "@/router";
import { computed } from "vue";

import ChatFooter from "./ChatFooter.vue";
import ChatHeader from "./ChatHeader.vue";

const chatIsOn = computed(() => router.currentRoute.value?.hash === "#ACTIVE");
</script>
<style scoped>
.background-shadow {
  --tw-shadow: inset 0px 2px 10px 0px rgb(0 0 0 / 0.05);
  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
