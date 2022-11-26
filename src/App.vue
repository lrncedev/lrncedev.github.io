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
    <ContactForm />
    <footer>
      <span class="copyright">@LrnceDev. All rights reserved. 2022.</span>
    </footer>
  </div>
</template>

<script>
import HeroSection from "./components/Hero.vue";
import NavComponent from "./components/Navbar.vue";
import AboutMe from "./components/AboutMe.vue";
import ProjectSection from "./components/ProjectSection.vue";
import ContactForm from "./components/ContactForm.vue";

export default {
  name: "App",
  components: {
    NavComponent,
    HeroSection,
    AboutMe,
    ProjectSection,
    ContactForm,
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
      font-size: clamp(0.9rem, 1.5vw, 1.1rem);
      border: 4px solid $color-accent;
    }
  }
  .socialIcon {
    color: #eee;
  }

  .vl {
    margin-top: 1em;
    border-left: 4px solid $color-accent;
    height: 100px;
  }
}

footer {
  padding: 1em;
  text-align: center;
  color: #eee;
}

@media screen and (min-width: 40em) {
  .socials {
    position: fixed;
    bottom: 0;
    left: 7%;
  }
}
</style>
