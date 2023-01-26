<template>
  <div class="flex w-full h-full bg-white">
    <div
      class="h-full min-h-screen grid grid-cols-1 grid-rows-[1fr,_auto;] w-full justify-between"
    >
      <main class="font-bold h-full flex justify-center w-full items-center">
        <div class="flex flex-col justify-center text-center">
          <h2>Welcome to my</h2>
          <h1>CHATBOT</h1>
          <p class="max-w-md mx-auto description">
            Here you gonna have answers about me and jokes
          </p>
          <button>Start</button>
        </div>
      </main>
      <PageFooter></PageFooter>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageFooter from "@/components/PageFooter.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    PageFooter,
  },
});
</script>
