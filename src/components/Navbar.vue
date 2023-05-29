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
      <a class="nav-link" href="#techstacks">Tech Stack</a>
      <a class="nav-link" href="#projects">Projects</a>
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
  background-color:#1B1C22;
  padding: 0.5em;
  display: flex;
  box-shadow: 1px 1px 5px $accent-fade;
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
      color: #FFFFFF;
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
    padding: 0.2em;
    border: 2px solid rgb(151, 151, 151);
    border-radius: 3px;
    text-transform: none;
    background-color: transparent;
  }

  .modal {
    position: absolute;
    top: 0;
    width: 100%;
    background-color: black;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    font-size: 180%;
    padding: 2em 1em;

    display: flex;
    align-items: center;
    justify-content: center;
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
      width: 100%;
      align-items: center;
      justify-content: center;
      margin-inline: auto;
      flex-direction: column;
      text-align: center;
      gap: 0.6em;
      min-height: 100%;
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