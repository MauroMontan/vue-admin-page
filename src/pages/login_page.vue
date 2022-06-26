<script setup lang="ts">
import { ref } from 'vue';
import StepItem from '../components/step_item.vue';

const steps = ref([
  {
    content:
      "For storing your data and start creating your portfolio, you need to create <a href='https://www.deta.sh/' target='_blank'>deta.sh</a> account <a href='https://web.deta.sh/' target='_blank'>here</a>.",
  },
  {
    content: 'hol',
  },
]);
</script>

<template>
  <div class="login-page">
    <div class="column steps">
      <StepItem
        v-for="(step, i) in steps"
        :index="i + 1"
        :step="step.content"
      />
    </div>
    <div class="column login-form"></div>
  </div>
</template>

<style scoped>
.login-page {
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 1rem;
  width: 90%;
  height: 90%;
  margin: auto;
  background-color: white;
}
.column {
  display: grid;
}

.steps {
  align-content: center;
  gap: 1rem;
}
</style>
