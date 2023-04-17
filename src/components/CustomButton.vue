<template>
  <button type="button" :class="[styleBase, buttonVariants[variant]]">
    <slot />
  </button>
</template>

<script setup lang="ts">
export type ButtonVariant = "elevated" | "outlined" | "text";

withDefaults(
  defineProps<{
    variant?: ButtonVariant;
  }>(),
  {
    variant: "elevated",
  }
);

const styleBase =
  "rounded-sm max-w-[14rem] border-2 h-fit px-6 py-2.5 w-full transition-all";
const buttonVariants: Record<ButtonVariant, string> = {
  elevated:
    "bg-button-primary text-white border-primary hover:border-secondary hover:bg-secondary ",
  outlined:
    "bg-transparent hover:text-secondary hover:border-secondary text-primary border-primary",
  text: "hover:!text-secondary border-none !w-fit !text-primary !px-0",
};
</script>
