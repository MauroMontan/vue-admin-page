<script setup lang="ts">
import { computed } from 'vue';
import { Project } from "../interfaces";
interface Props {
  project: Project,
}

const props = defineProps<Props>();
const project = computed(() => props.project);

</script>


<template>
  <div class="form">

    <div class="field">
      <label class="label">Titulo del proyecto: </label>
      <div class="control">
        <input v-model="project.title" class="input is-primary  " type="text"
          placeholder="Coloca aquí el nombre de tu proyecto ">
      </div>
    </div>


    <div class="field">
      <label class="label">Descripción</label>
      <div class="control">
        <textarea v-model="project.description" class="textarea is-primary has-fixed-size"
          placeholder="Describe tu proyecto brevemente"></textarea>
      </div>
    </div>



    <div class="field">
      <label class="label"> Video del projecto </label>
      <div class="control">
        <input v-model="project.video" class="input is-primary" type="text"
          placeholder="si tu projecto no tiene uno, dejalo en blanco">
      </div>
    </div>



    <label for="onput">Añade etiquetas</label>
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="añade tecnologias que usaste">
      </div>
      <div class="control">
        <a class="button is-info">
          añadir
        </a>
      </div>
    </div>

    <div class="tags are-medium">
      <span v-for="tool in project.tools" class="tag is-warning is-medium">
        {{ tool }}
        <button class="delete is-small"></button>
      </span>

    </div>


    <div class="field is-grouped is-grouped-right ">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
    </div>


  </div>
</template>

<style scoped>
.form {
  width: 100%;
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
}


input {
  font-size: 1.2rem;
  font-family: 'Fredoka', sans-serif;

}
</style>


