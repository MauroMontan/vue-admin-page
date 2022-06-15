<script setup lang="ts">
import SideBar from "./components/sidebar.vue";
</script>

<template>
  <SideBar />

  <main>
    <p v-for="i in 300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, ab excepturi. Est ipsa
      architecto itaque ea,
      dolorem blanditiis nam debitis consequuntur minima, dicta odio ullam labore soluta iste, nesciunt numquam!</p>
  </main>
</template>

<style>
@import "bulma/css/bulma.css";
@import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

main {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 1rem;
  display: grid;
  gap: 2rem;
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

::-webkit-scrollbar {
  display: none;
}
</style>
