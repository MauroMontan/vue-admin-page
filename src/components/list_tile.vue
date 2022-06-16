<script setup lang="ts" ></script>

<template>
  <div class="tile">
    <div class="image">
      <img src="http://via.placeholder.com/640x360" alt="tile image">
    </div>



    <div class="contents">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem error a accusantium neque, quos mollitia sit
        quibusdam.</p>


    </div>

    <div class="buttons">

      <button class="button is-primary is-small">
        <span class="icon is-small">
          <i class="fa-solid fa-eye"></i>
        </span>
      </button>
      <button class="button is-warning is-small ">
        <span class="icon is-small ">
          <i class="fa-solid fa-pencil"></i>
        </span>
      </button>
      <button class="button is-danger is-small ">
        <span class="icon is-small">
          <i class="fa-solid fa-trash"></i>
        </span>
      </button>
    </div>
  </div>
</template>


<style scoped>
.tile {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.buttons {
  width: min-content;
}

.image {
  width: 30%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
}

.button {
  border-radius: 2rem;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.buttons .button {
  border-radius: 0.5rem;
}

.contents {

  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  align-items: center;
  text-overflow: ellipsis;
}
</style>
