<template>
  <Navbar />
  <HeroSection />
  <TechStack />
  <ProjectSection />
  <Footer></Footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/Hero.vue";
import TechStack from "./components/TechStack.vue";
import ProjectSection from "./components/ProjectSection.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    HeroSection,
    TechStack,
    ProjectSection,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap");
html {
  scroll-behavior: smooth;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  font-family: "Lato", sans-serif;
}
#app {
  font-family: "Lato", sans-serif, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
