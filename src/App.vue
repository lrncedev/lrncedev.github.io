<template>
  <Navbar />
  <HeroSection />
  <ProjectSection />
  <TechStack />
  <Footer></Footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/Hero.vue";
import ProjectSection from "./components/ProjectSection.vue";
import TechStack from "./components/TechStack.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    HeroSection,
    ProjectSection,
    TechStack,
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
  list-style-type: none;
  text-decoration: none;
  font-family: "Lato", sans-serif;
}
#app {
  font-family: "Lato", sans-serif, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.8)),
    url("./assets/background.jpg");
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
}

.heroText {
  padding: 0 2rem;
}

.owner,
.ownerTitle,
.ownerDescription {
  margin-bottom: 1.2rem;
}

.owner {
  font-size: 4.5rem;
  font-weight: 700;
}

.ownerTitle {
  font-size: 3rem;
  font-weight: 300;
}

.ownerDescription {
  font-size: 2rem;
  font-weight: 200;
  text-shadow: 2px 1px 0px rgba(0, 0, 0, 1);
}

.know {
  padding: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
  background-color: #e28743;
  color: white;
  border-radius: 4px;
  border: none;
}
</style>
