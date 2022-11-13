<template>
  <div class="app">
    <nav>
      <router-link to="/" class="logo-router">
        <img src="@/assets/android-chrome-512x512.png" alt="Logo" class="logo-img"/>
      </router-link>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/achievements">Achievements</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <button class="show-link-btn" @click="showLink"><font-awesome-icon icon="fa-solid fa-bars " /></button>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap");

html {
  scroll-behavior: smooth;
}

*,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  font-family: "Lato", sans-serif;
}

// #app {
//   background-color: black;
// }

nav {
  background-color: black;
  display: flex;
  align-items: center;
  padding: 1.5em 1em;
  height: 60px;

  .logo-router {
    flex-grow: 1;
    .logo-img {
      height: 40px;
    }
  }

  .links {
    display: flex;
    gap: .8em;
    margin-right: 1em;
    
    a {
      color: white;
    }
  }
  
  .show-link-btn {
    border: none;
    background: transparent;
    color: white;
    font-size: 1.5rem;
    display: none;
  }
}

@media screen and (max-width: 40em) {
  nav {
    position: relative;

    .links {
    display: none;
    }
    .show-link-btn {
      display: block;
    }
  }
}
</style>
