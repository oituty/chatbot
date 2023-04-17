<template>
  <div class="py-2.5 w-full gap-x-4 px-6 flex justify-between">
    <input
      id="messageInput"
      :class="[
        'w-full bg-tertiary rounded-sm px-4 resize-none border-transparent overflow-hidden border-2 outline-none transition-all focus:outline-none',
        { 'border-2 !border-primary': isFocused },
      ]"
      placeholder="What do you want to know?"
      type="text"
      :value="message"
      @blur="isFocused = false"
      @focus="isFocused = true"
    />
    <CustomButton class="px-6 w-fit">Send</CustomButton>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

import CustomButton from "./CustomButton.vue";

const message = ref("");
const isFocused = ref(false);
</script>
