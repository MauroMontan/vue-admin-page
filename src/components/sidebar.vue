<script setup lang="ts" >
import { reactive } from 'vue';


const links = reactive([
  {
    to: "/personal-info",
    icon: "fa-user",
    name: "Profile"
  },
  {
    to: "/about-you",
    icon: "fa-music",
    name: "About you"
  },
  {
    to: "/images",
    icon: "fa-image",
    name: "Images"
  },
  {
    to: "/projects",
    icon: "fa-folder",
    name: "Projects"
  },
  {
    to: "/skills",
    icon: "fa-brain",
    name: "Skills"
  },
  {
    to: "/blogs",
    icon: "fa-book",
    name: "Blogs"
  },
  {
    to: "/documentation",
    icon: "fa-file",
    name: "Docs"
  },
]);

</script>

<template>
  <aside class="sidebar">

    <div class="account">
      <div class="user-info">
        <div class="photo">
          <img class="is-rounded" src="https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png" alt="avatar">
        </div>
        <div class="email">
          <p>mauroanastacio@outlook.com</p>
        </div>
      </div>
    </div>

    <div class="list">
      <button v-for="link in links" class="button is-light">
        <span class="icon">
          <i class="fa-solid" :class="link.icon"></i>
        </span>
        <span>{{ link.name }}</span>
      </button>
    </div>
    <div class="bottom-content">
      <span class="icon-text">
        <span>cerrar sesión</span>
        <span class="icon">
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </span>
      </span>
    </div>
  </aside>
</template>

<style scoped >
.sidebar {
  width: 12rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: #bca0ff;
}

.account {
  width: 100%;
  height: 7rem;
  display: flex;
  padding: 0.5rem;
}

.user-info {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-around;
}

.email {
  width: 50%;
  height: fit-content;
  overflow: hidden;
}

.email p {
  overflow: hidden;
  text-overflow: ellipsis;
}

.photo {
  background-color: red;
  border-radius: 1rem;
  overflow: hidden;
  width: 40%;
  height: 90%;
}


img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.list {
  width: 100%;
  height: 100%;
  display: grid;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
}

button {
  gap: 0.1rem;
  justify-content: unset;
}

.bottom-content {
  width: 100%;
  height: fit-content;
  font-size: 1.3rem;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  justify-content: flex-end;
}

@media (max-width:768px) {
  .sidebar {
    display: none;
  }
}
</style>
