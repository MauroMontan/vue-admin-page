<script setup lang="ts">
import { ref } from 'vue';
import StepItem from '../components/step_item.vue';
import LoginForm from '../components/login_form.vue';

const steps = ref([
  {
    content:
      "For storing your data and start creating your portfolio, you need to create <a href='https://www.deta.sh/' target='_blank'>deta.sh</a> account <a href='https://web.deta.sh/' target='_blank'>here</a>.",
    has_action: false,
  },
  {
    content:
      'Go to your deta project settings and get your project key (dont share it with others), this is for using deta database. <a  target="_blank" >show me how</a>',
    has_action: false,
  },
  {
    content:
      'Click the rocket button to fill the form with the requested data, here is where your deta project key goes, password and username is for login in this page. ',
    has_action: true,
  },
  {
    content:
      'In this page we need your micro url, the user name and password you registered (<a> what is that ?</a>). Hit "Login" and start developing your portfolio',
    has_action: false,
  },
]);
</script>

<template>
  <div class="login-page">
    <div class="column steps">
      <StepItem
        v-for="(step, i) in steps"
        :index="i + 1"
        :step="step.content"
        :has_action="step.has_action"
      />
    </div>
    <div class="column">
      <LoginForm />
    </div>
  </div>
</template>

<style scoped>
.login-page {
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 1rem;
  width: 90%;
  height: 90%;
  margin: auto;
  background-color: white;
}
.column {
  display: grid;
}

.steps {
  align-content: center;
  gap: 1rem;
}

.login-form {
  background-color: rgb(240, 241, 243);
  border-radius: 1rem;
}
</style>
