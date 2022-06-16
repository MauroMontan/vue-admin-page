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
}

main {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
</style>
