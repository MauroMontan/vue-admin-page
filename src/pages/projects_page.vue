<script setup lang="ts">
import MainLayout from '../components/main_layout.vue';
import ListTile from '../components/list_tile.vue';
import ProjectForm from '../components/project_form.vue';
import { computed, ref, Ref } from 'vue';
import { Project } from '../interfaces';

const projectListTest = ref([
  {
    title: "p1",
    description: "",
    video: "",
    tools: [],
  },

  {
    title: "p2",
    description: "",
    video: "",
    tools: [],
  },


  {
    title: "p2",
    description: "",
    video: "",
    tools: [],
  },
]);


const currentProject = ref({
  title: "",
  description: "",
  video: "",
  tools: [],
}

);

const setPreview = (project: any): void => {

  currentProject.value = project;
  console.log(project)
}


const x = computed(() => {
  return currentProject.value;
});

</script>

<template>
  <h1>{{ x }}</h1>
  <MainLayout>
    <template v-slot:list>
      <ListTile v-for="(p, i) in projectListTest" @preview="setPreview(p)" :key="i" />
    </template>
    <!-- form -->
    <template v-slot:form>
      <ProjectForm :project="x" />
    </template>
  </MainLayout>
</template>


<style scoped>
</style>
