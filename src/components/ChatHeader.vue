<template>
  <section class="h-fit items-center justify-between py-2.5 w-full px-6 flex">
    <div class="flex relative gap-x-6 items-center">
      <span class="flex relative items-end">
        <img
          class="h-14 w-14 object-cover rounded-full"
          :src="getImage('profile_picture.jpg')"
        />
        <span
          class="absolute items-end rounded-full shadow bg-success h-4 w-4 right-0"
        ></span>
      </span>

      <div class="flex flex-col gap-y-1">
        <h3>Tayná Alves</h3>
        <span class="font-light">Front-end Developer</span>
      </div>
    </div>
    <CustomButton variant="text" class="h-fit">Download CV</CustomButton>
  </section>
</template>

<script setup lang="ts">
import { getImage } from "../utils";

import CustomButton from "./CustomButton.vue";
</script>
