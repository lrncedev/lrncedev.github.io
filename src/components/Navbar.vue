<template>
  <nav id="navbar">
    <div class="logo">
      <a href="#navbar">
        <img
          src="../assets/android-chrome-512x512.png"
          alt="Logo"
          class="logoImg"/>
      </a>
    </div>
    <div class="navlinks">
      <a href="#hero">Home</a>
      <a href="#techstack">Tech Stack</a>
      <a href="#projects">Projects</a>
      <a href="#achievements" class="achievements">Achievements</a>
      <a href="#contact">Contact</a>
    </div>
    <button class="showLinks" @click="showLink"><font-awesome-icon icon="fa-solid fa-bars " /></button>
  </nav>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  methods: {
    showLink() {
      const navlink = document.querySelector('.navlinks');
      navlink.classList.toggle("active");
    }
  }
};
</script>

<style>
/* * {
  outline: 1px solid white;
} */
.achievements {
  background-color: red;
}
nav {
  background-color: black;
  display: flex;
  align-items: center;
  padding: 1em;
}
button {
  background: transparent;
  color: white;
  font-size: 1.5rem;
  display: none;
}

.navlinks a{
  padding: .5rem .2rem;
  color: white;
  margin-right: .5rem;
  font-size: 1.3em;
}
.navlinks a:hover {
  border-bottom: 1px solid white;
}

.logo {
  flex-grow: 1;
}
.logoImg {
  height: 40px;
}

.links {
  display: flex;
}


@media screen and (max-width: 40em) {
  nav {
    position: relative;
  }
  .navlinks {
    display: none;
  }
  .showLinks {
    display: block;
  }
}

@media screen and (max-width: 40em) {
  nav {
    padding-left: 0;
  }
  .navlinks.active {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    top: 100%;
    text-transform: uppercase;
  }
  .navlinks.active a {
    padding: .5em 0;
    font-size: 1.2rem;
  }
  .navlinks.active a:hover {
    background-color: rgb(50, 50, 50);
  }
}


</style>