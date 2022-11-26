<template>
  <nav>
    <div class="logo">
      <a href="#navbar">
        <img
          src="../assets/android-chrome-512x512.png"
          alt="Logo"
          class="logoImg"
        />
      </a>
    </div>
    <div class="navlinks">
      <a class="nav-link" href="/">Home</a>
      <a class="nav-link" href="#techstacks">Tech Stack</a>
      <a class="nav-link" href="#projects">Projects</a>
      <!-- <a class="nav-link achievements" href="#achievements">Achievements</a> -->
      <a class="nav-link" href="">Contact</a>
    </div>
    <button class="btn-show" @click="show">
      <font-awesome-icon icon="fa-solid fa-bars " />
    </button>
    <a
      :href="`${publicPath}Cadag_Laurence_Resume.pdf`"
      download="LaurenceCadag_resume"
      class="cta resumeBtn"
      >Resume</a
    >
    <div class="modal" v-if="shown">
      <div class="modal-close">
        <font-awesome-icon icon="fas fa-times-circle" @click="show" />
      </div>
      <div class="modal-links">
        <!-- <a class="nav-link" href="#hero">Home</a> -->
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
      shown: false,
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    show() {
      this.shown = !this.shown;
    },
  },
};
</script>

<style lang="scss">
nav {
  background-color: rgb(23, 23, 23);
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    .logoImg {
      height: 40px;
    }
  }

  .navlinks {
    display: none;
    margin-right: 1em;

    .nav-link {
      color: rgb(188, 188, 188);
      font-size: clamp(0.9rem, 2vw, 1.3rem);
    }
  }

  .btn-show {
    border: none;
    background-color: transparent;
    font-size: 120%;
    color: $color-accent;
    order: 2;
  }

  .resumeBtn {
    color: $color-accent;
    font-weight: 400;
    padding: 0.4em;
    border: 2px solid rgb(151, 151, 151);
    border-radius: 3px;
    text-transform: none;
    background-color: transparent;
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
      margin: 1em 1em 0 0;
    }

    .modal-links {
      margin-top: 2em;

      display: flex;
      width: 60%;
      margin-inline: auto;
      flex-direction: column;
      text-align: center;
      gap: 0.6em;

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
      display: flex;
      gap: 0.8em;
      font-size: 120%;
    }

    .btn-show,
    .modal {
      display: none;
    }
  }
}
</style>