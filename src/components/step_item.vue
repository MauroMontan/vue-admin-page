<script setup lang="ts">
interface Props {
  index: number;
  step?: string;
}

const props = defineProps<Props>();
</script>
<template>
  <div class="step-item">
    <div class="icon">
      <p v-text="props.index" />
    </div>
    <div class="item-content">
      <p v-html="step"></p>
    </div>
  </div>
</template>

<style scoped>
.step-item {
  background-color: rgb(240, 241, 243);
  width: 100%;
  height: 7rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0.5rem;
  position: relative;
}

.item-content {
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  text-align: left;
  align-items: center;
}

a {
  color: rgb(169, 144, 229);
}

.icon {
  background-color: white;
  width: 4rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border-radius: 1rem;
  left: 1rem;
  position: absolute;
}
</style>
