<template>
  <div class="app">
    <NavComponent />
    <div class="socials">
      <ul>
        <li>
          <a href="https://github.com/lrncedev" target="_blank" class="link"
            ><font-awesome-icon icon="fa-brands fa-github" class="socialIcon"
          /></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/laurencecadag/"
            target="_blank"
            class="link"
            ><font-awesome-icon
              icon="fa-brands fa-linkedin-in"
              class="socialIcon"
          /></a>
        </li>
        <li>
          <a href="https://codepen.io/LaurenceDev" target="_blank" class="link"
            ><font-awesome-icon icon="fa-brands fa-twitter" class="socialIcon"
          /></a>
        </li>
      </ul>
      <div class="vl"></div>
    </div>
    <HeroSection />
    <AboutMe />
    <ProjectSection />
  </div>
</template>

<script>
import HeroSection from "./components/Hero.vue";
import NavComponent from "./components/Navbar.vue";
import AboutMe from "./components/AboutMe.vue";
import ProjectSection from "./components/ProjectSection.vue";
export default {
  name: "App",
  components: {
    NavComponent,
    HeroSection,
    AboutMe,
    ProjectSection,
  },
};
</script>

<style lang="scss">
.socials {
  position: fixed;
  bottom: 0;
  right: 7%;
  display: flex;
  width: 5%;
  align-items: center;
  flex-direction: column;

  ul {
    li {
      width: 100%;
      color: #eee;
      padding: 0.5em;
      border: 2px solid $accent-fade;
    }
  }
  .socialIcon {
    color: #eee;
  }

  .vl {
    margin-top: 1em;
    border-left: 2px solid $accent-fade;
    height: 100px;
  }
}

@media screen and (min-width: 40em) {
  .socials {
    position: fixed;
    bottom: 0;
    left: 7%;
  }
}
</style>
