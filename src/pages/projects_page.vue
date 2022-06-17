<script setup lang="ts">
import MainLayout from '../components/main_layout.vue';
import ListTile from '../components/list_tile.vue';
import ProjectForm from '../components/project_form.vue';
import { ref } from 'vue';

const project = ref(
  {
    title: "name",
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    video: "http://www.youtube.com/watch",
    tools: [],
  }
);

</script>

<template>
  <MainLayout>
    <template v-slot:list>
      <ListTile v-for="i in 5" />
    </template>
    <!-- form -->
    <template v-slot:form>
      <ProjectForm :project="project" />
    </template>
  </MainLayout>
</template>


<style scoped>
</style>
