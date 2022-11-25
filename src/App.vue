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
  </div>
</template>

<script>
import HeroSection from "./components/Hero.vue";
import NavComponent from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    NavComponent,
    HeroSection,
  },
};
</script>

<style lang="scss">
.socials {
  position: absolute;
  bottom: 0;
  left: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;

  ul {
    li {
      width: 100%;
    }
  }
  .socialIcon {
    color: #eee;
    padding: 0.5em;
    border: 2px solid $color-accent;
  }

  .vl {
    margin-top: 1em;
    border-left: 2px solid $color-accent;
    height: 100px;
  }
}
// @import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap");

// html {
//   scroll-behavior: smooth;
// }

// *,
// *::before,
// *::after{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   list-style-type: none;
//   text-decoration: none;
//   font-family: "Lato", sans-serif;
// }

// // #app {
// //   background-color: black;
// // }

// nav {
//   // background-color: black;
//   display: flex;
//   align-items: center;
//   padding: 1.5em 1em;
//   height: 60px;

//   .logo-router {
//     flex-grow: 1;
//     .logo-img {
//       height: 40px;
//     }
//   }

//   .links {
//     display: flex;
//     gap: .8em;
//     margin-right: 1em;

//     a {
//       color: white;
//     }
//   }

//   .show-link-btn {
//     border: none;
//     background: transparent;
//     color: white;
//     font-size: 1.5rem;
//     display: none;
//   }
// }

// @media screen and (max-width: 40em) {
//   nav {
//     position: relative;

//     .links {
//     display: none;
//     }
//     .show-link-btn {
//       display: block;
//     }
//   }
// }
</style>
