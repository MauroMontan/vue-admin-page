<script setup lang="ts"></script>

<template>
  <div class="grid">
    <section class="list">
      <slot name="list" />
    </section>
    <section class="form">
      <slot name="form" />
    </section>
  </div>
</template>

<style scoped>
.grid {
  height: 100%;
  width: 100%;
  background-color: white;
  margin: auto;
  border-radius: 1rem;
  height: 95%;
  width: 95%;
  overflow: hidden;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
}

section {
  overflow: auto;
  padding: 1rem;
}

.list {
  display: grid;
  gap: 2rem;
  grid-auto-rows: min-content;
}

.form {
  display: flex;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
    overflow: auto;
  }

  section {
    overflow: unset;
  }
}
</style>
