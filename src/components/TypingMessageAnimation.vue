<template>
  <span class="transition-all">{{ currentText }}</span>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    text: string;
    typingSpeed?: number;
    finished: (finished: boolean) => void;
  }>(),
  {
    typingSpeed: 100,
  }
);

const currentText = ref("");
const typingSpeed = ref(100);

const animateTyping = () => {
  let i = 0;

  const intervalId = setInterval(() => {
    if (i >= props.text.length) {
      clearInterval(intervalId);
      props.finished(true); // definir a propriedade finished como true assim que a animação for concluída

      return;
    }

    currentText.value += props.text.charAt(i);
    i++;
  }, typingSpeed.value);
};

onMounted(() => {
  animateTyping();
});
</script>
