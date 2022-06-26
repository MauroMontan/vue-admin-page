<script setup lang="ts">
interface Props {
  link: any;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="sidebar-item">
    <i class="fa-solid" :class="props.link.icon"></i>
    <h2>{{ props.link.name }}</h2>
  </div>
</template>

<style scoped>
.sidebar-item {
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  width: 100%;
  height: 3rem;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sidebar-item:hover {
  opacity: 0.5;
}
</style>
