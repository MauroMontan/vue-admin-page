<script setup lang="ts">
</script>

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
  grid-auto-rows: 8rem;
}

.list::-webkit-scrollbar {
  display: initial;
}
</style>
