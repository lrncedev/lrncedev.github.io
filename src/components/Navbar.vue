<template>
  <nav>
    <div class="logo">
      <a href="#navbar">
        <img
          src="../assets/android-chrome-512x512.png"
          alt="Logo"
          class="logoImg"/>
      </a>
    </div>
    <div class="navlinks" >
      <a class="nav-link" href="#hero">Home</a>
      <a class="nav-link" href="#techstack">Tech Stack</a>
      <a class="nav-link" href="#projects">Projects</a>
      <!-- <a class="nav-link achievements" href="#achievements">Achievements</a> -->
      <a class="nav-link" href="#contact">Contact</a>
    </div>
    <button class="btn-show" @click="show"><font-awesome-icon icon="fa-solid fa-bars " /></button>
    <div class="modal" v-if="shown">
      <div class="modal-close">
        <font-awesome-icon icon="fas fa-times-circle" @click="show"/>
      </div>
      <div class="modal-links" >
        <a class="nav-link" href="#hero">Home</a>
        <a class="nav-link" href="#techstack">Tech Stack</a>
        <a class="nav-link" href="#projects">Projects</a>
        <!-- <a class="nav-link achievements" href="#achievements">Achievements</a> -->
        <a class="nav-link" href="#contact">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data() {
    return {
      shown: false
    }
  },
  methods: {
    show() {
      this.shown = !this.shown;
    }
  }
};
</script>

<style lang="scss">

nav {
  display: flex;

  .logo {
    flex-grow: 1;

    .logoImg {
      height: 40px;
    }
  }

  .navlinks {
    display: none;
    margin-right: 1em;

    .nav-link {
      color: black;
    }
  }

  .btn-show {
    border: none;
    background-color: transparent;
    font-size: 130%;
    color: black;
  }
  
  .modal {
    width: 100%;
    background-color: rgb(17, 11, 11);
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    font-size: 180%;
    padding: 2em 1em;
    
    display: flex;
    flex-direction: column;

    .modal-close {
      position: absolute;
      top: 0;
      right: 0;
      margin: 1em 1em 0 0 ;
    }

    .modal-links {
      
      margin-top: 2em;
      
      display: flex;
      width: 60%;
      margin-inline: auto;
      flex-direction: column;
      text-align: center;
      gap: .6em;

      a {
        color: white; 
        border-bottom: 2px solid white;
      }
    }
  }
}


@media screen and (min-width: 40em) {
  nav {

    .navlinks {
      display: block;
    }
    
    .btn-show, .modal {
      display: none;
    }
  }
}
</style>