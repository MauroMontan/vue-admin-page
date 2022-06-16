<script setup lang="ts">
import MainLayout from '../components/main_layout.vue';
import ListTile from '../components/list_tile.vue';


</script>

<template>
  <MainLayout>
    <template v-slot:list>
      <ListTile v-for="i in 5" />
    </template>
  </MainLayout>
</template>


<style scoped>
</style>
