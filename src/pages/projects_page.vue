<script setup lang="ts">
import MainLayout from '../components/main_layout.vue';
import ListTile from '../components/list_tile.vue';
import ProjectForm from '../components/project_form.vue';
import { computed } from 'vue';
import { Project } from '../interfaces';
import { useProject } from '../store';

const projectStore = useProject();


const setPreview = (project: Project): void => {
  projectStore.setCurrentProject(project);
}


const currentProject = computed(() => {
  return projectStore.project;
});

</script>

<template>
  <MainLayout>
    <template v-slot:list>
      <ListTile v-for="(p, i) in projectStore.projectList" @preview="setPreview(p)" :key="i" />
    </template>
    <!-- form -->
    <template v-slot:form>
      <ProjectForm :project="currentProject" />
    </template>
  </MainLayout>
</template>


<style scoped>
</style>
