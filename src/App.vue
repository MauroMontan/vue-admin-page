<script setup lang="ts">
import SideBar from "./components/sidebar.vue";
</script>

<template>
  <SideBar />
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
@import "bulma/css/bulma.css";
@import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-zoom: none;
  user-select: none;
}

main {
  width: 100%;
  height: 100%;
  display: flex;
}

#app {
  height: 100vh;
  width: 100%;
  gap: 0.5rem;
  overflow: hidden;
  display: flex;
  background-color: #f0f1f3;
  color: #365f95;
  font-family: 'Fredoka', sans-serif;

}


img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: hsl(141, 53%, 53%);
  border-radius: 1rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
