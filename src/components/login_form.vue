<script setup lang="ts"></script>

<template>
  <div class="form">
    <a class="link"> Need help?. watch this 5 minutos video to get started. </a>

    <div class="field">
      <label class="label">Micro url: </label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Here goes your micro url "
        />
      </div>
    </div>

    <div class="field">
      <label class="label">username: </label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Here goes the username you entered in the micro"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">password: </label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Here goes the password you entered in the micro"
        />
      </div>
    </div>

    <div class="control">
      <button class="button is-primary">Login</button>
    </div>
  </div>
</template>

<style scoped>
.form {
  background-color: rgb(240, 241, 243);
  border-radius: 1rem;
  padding: 2rem;
  gap: 2rem;
  display: grid;
  align-content: space-around;
  position: relative;
}

.button {
  border-radius: 0.5rem;
  border: none;
}
.control {
  display: flex;
  justify-content: end;
}

.input {
  border-radius: 0.5rem;
  height: 3.4rem;
  border: none;
}
</style>
