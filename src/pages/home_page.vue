<script setup lang="ts" >

</script>

<template>
  <div class="home-page">
    <div class="column">
      <div class="title">
        <h1>Create simple things</h1>
      </div>
      <div class="info-card content">
        <h3>For who is this?</h3>
        <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
          pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud
          nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
          pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem
          duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt
          duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris
          sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
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

.column {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
}

.info-card {
  background-color: #f0f1f3;
  padding: 1rem;
  border-radius: 1rem;
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
