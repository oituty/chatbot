<template>
  <button type="button" :class="[styleBase, buttonVariants[variant]]">
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant: "elevated" | "outlined";
  }>(),
  {
    variant: "elevated",
  }
);

const styleBase =
  "rounded-sm max-w-[14rem] border-2 px-6 py-2.5 w-full transition-all";
const buttonVariants: { elevated: string; outlined: string } = {
  elevated:
    "bg-button-primary text-white border-primary hover:border-secondary hover:bg-secondary ",
  outlined:
    "bg-transparent hover:text-secondary hover:border-secondary text-primary border-primary",
};
</script>
