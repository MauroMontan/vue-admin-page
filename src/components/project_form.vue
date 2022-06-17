<script setup lang="ts">
import { ref, computed } from 'vue';
import { Project } from "../interfaces";

interface Props {
  project: Project,
}

interface Emits {
  (event: "cancel"): void,
}

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

const currentTag = ref("");

const addTag = (tag: string): void => {
  if (props.project.tools!.length <= 6) {

    if (currentTag.value.length <= 20 && currentTag.value !== "") {
      props.project.tools!.push(tag);
      currentTag.value = "";
    }
  }
}

const tagColors = ref(
  ["is-primary", "is-info", "is-warning", "is-danger", "is-link", "is-success", "is-dark"]
);
const removeSelectedTag = (tool: string): void => {
  let newTools = props.project.tools?.filter((tag) => tag !== tool);

  props.project.tools = newTools;
}

const isProjecteEmpty = computed(() => props.project.title !== "" && props.project.description !== "");
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
      <label class="label">Imagen del proyecto: </label>
      <div class="control">
        <input v-model="project.image" class="input is-primary" type="text" placeholder="preview image">
      </div>
    </div>
    <div class="field">
      <label class="label"> Video del proyecto </label>
      <div class="control">
        <input v-model="project.video" class="input is-primary" type="text"
          placeholder="si tu projecto no tiene uno, dejalo en blanco">
      </div>
    </div>

    <label class="label">Añade etiquetas</label>
    <div class="field has-addons">
      <div class="control">
        <input @keypress.enter="addTag(currentTag)" v-model="currentTag" class="input is-info " type="text"
          placeholder="Máximo 6 etiquetas">
      </div>
      <div class="control">
        <a @click="addTag(currentTag)" class="button is-info">
          añadir
        </a>
      </div>
    </div>

    <div class="tags are-medium">
      <TransitionGroup name="list" tag="div">
        <span v-for="(tool, i) in project.tools" :class="tagColors[i]" class="tag is-medium" :key="i">
          {{ tool }}
          <button @click="removeSelectedTag(tool)" class="delete is-small"></button>
        </span>
      </TransitionGroup>
    </div>


    <div class="field is-grouped is-grouped-right ">
      <div class="control">
        <button v-if="isProjecteEmpty" @click="emit('cancel')" class="button is-danger">cancelar</button>
      </div>

      <div class="control">
        <button class="button is-link">submit</button>
      </div>
    </div>


  </div>
</template>

<style scoped>
.form {
  width: 100%;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  transition: all 1s ease;
  height: fit-content;
}


input {
  font-size: 1rem;
  font-family: 'Fredoka', sans-serif;

}


.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>


