<template>
  <footer
    class="font-bold grid lg:grid-cols-3 px-4 lg:px-10 gap-4 items-center py-3 w-full h-fit justify-items-center bg-white shadow-inner"
  >
    <span class="lg:col-start-2 font-[300] gap-x-1 flex items-center">
      Developed by
      <a
        :href="getSocialMediaByLabel('Linkedin')?.url"
        target="_blank"
        class="font-extrabold"
        >@oituty</a
      >
    </span>

    <div class="flex lg:justify-self-end">
      <ul class="flex gap-x-2.5">
        <li
          v-for="socialMedia in socialMedias"
          :key="socialMedia.label"
          class="cursor-pointer rounded-sm border-secondary hover:border-primary shadow-inner h-9 w-9 border-[0.063rem]"
        >
          <a
            :href="socialMedia.url"
            class="h-full w-full flex justify-center items-center"
            target="_blank"
          >
            <img
              :src="getIcon(socialMedia.iconPath)"
              :alt="`Ícone ${socialMedia.label}`"
            />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { getIcon, socialMedias } from "../utils";

function getSocialMediaByLabel(label: "Instagram" | "Linkedin") {
  return socialMedias.find((media) => media.label === label);
}
</script>
