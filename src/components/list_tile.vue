<script setup lang="ts">
import { computed } from '@vue/reactivity';

interface Emits {
  (event: 'preview'): void;
}

interface Props {
  listItem: any;
}
const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const project = computed(() => props.listItem);
</script>

<template>
  <div class="tile">
    <div class="image">
      <img :src="project.image" alt="tile image" />
    </div>

    <div class="contents">
      <h1>{{ project.title }}</h1>
      <p v-text="project.description" />
    </div>
    <div class="buttons">
      <button @click="emit('preview')" class="button is-primary is-small">
        <span class="icon is-small">
          <i class="fa-solid fa-eye"></i>
        </span>
      </button>
      <button class="button is-warning is-small">
        <span class="icon is-small">
          <i class="fa-solid fa-pencil"></i>
        </span>
      </button>
      <button class="button is-danger is-small">
        <span class="icon is-small">
          <i class="fa-solid fa-trash"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.tile {
  background-color: rgb(240, 241, 243);
  width: 100%;
  height: 100%;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  justify-content: space-between;
}

.buttons {
  width: min-content;
}

.image {
  width: 7rem;
  height: 7rem;
  overflow: hidden;
  border-radius: 0.5rem;
}

.button {
  border-radius: 2rem;
}

img {
  width: 100%;
  height: 100%;
  user-select: none;
  object-fit: cover;
  object-position: center;
}

.buttons .button {
  border-radius: 0.5rem;
}

.contents {
  width: 20rem;
  height: fit-content;
  overflow-wrap: break-word;
}

.comntents p {
  color: blue;
  word-break: break-all;
  word-wrap: break-word;
}

.contents h1 {
  color: tomato;
  font-size: 1.3rem;
}
</style>
