<script setup lang="ts">
interface Props {
  index: number;
  step?: string;
  has_action: boolean;
}

const props = defineProps<Props>();
</script>
<template>
  <div class="step-item">
    <a
      v-if="props.has_action"
      href="https://go.deta.dev/deploy?repo=https://github.com/MauroMontan/express-micro-with-deta"
      target="_blank"
      class="fa-solid fa-rocket action"
    ></a>
    <div class="icon">
      <p v-text="props.index" />
    </div>
    <div class="item-content">
      <p class="content" v-html="step"></p>
    </div>
  </div>
</template>

<style scoped>
.step-item {
  background-color: rgb(240, 241, 243);
  width: 100%;
  height: 7rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0.5rem;
  position: relative;
}

.action {
  background-color: rgb(244, 120, 179);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  position: absolute;
  bottom: -1rem;
  right: -0.5rem;
  transition: all 0.5s ease;
}

.action:hover {
  color: rgb(86, 51, 121);
  transform: scale(105%);
}

.item-content {
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  text-align: left;
  align-items: center;
}

:deep(.content a) {
  color: tomato;
}

.icon {
  background-color: white;
  width: 4rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border-radius: 1rem;
  left: 1rem;
  position: absolute;
}
</style>
