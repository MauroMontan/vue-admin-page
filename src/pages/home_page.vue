<script setup lang="ts" >

</script>

<template>
  <div class="home-page">
    <div class="column">
      <div class="title">
        <h1> Keep your portfolio data in one place</h1>
      </div>
      <div class="info-card content">
        <h3> <i class="fa-solid fa-circle-info"></i> Pourpuse</h3>
        <p>Sabemos que todos los seres vivos crecemos y cambiamos todo el tiempo. Por eso es importante que
          tengas la información que te representa y te define de una manera simple, organizada y escalable. Puede
          llevarte tiempo aprender algo nuevo, pero añadirlo a tu portafolio no tiene que ser tan dificil !</p>
      </div>
      <div class="info-card content get-started">
        <h3> <i class="fa-solid fa-helmet-safety"></i> Get started</h3>
        <p>Contruye las bases para desarrollar tu portafolio.</p>
        <div class="actions">
          <button class="button is-warning is-light ">get started</button>
        </div>

      </div>
    </div>

    <div class="column">
      <img src="../assets/home-img.png" alt="home img">
    </div>
  </div>
</template>

<style scoped>
.home-page {
  width: 90%;
  height: 90%;
  margin: auto;
  border-radius: 1rem;
  padding: 1rem;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow: auto;
  gap: 1rem;

}

h1 {
  font-size: 2.5rem;
}


.actions {
  width: 100%;
  display: flex;
  justify-content: end;
}

.column {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
}

.info-card {
  background-color: #f0f1f3;
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
}

.get-started {
  background-color: #ffea9e;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}


@media (max-width: 768px) {
  .home-page {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
