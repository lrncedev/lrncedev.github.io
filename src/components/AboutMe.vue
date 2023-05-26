<template>
  <div class="w-80">
    <div class="about-me">
      <div class="about-me-txt" id="techstacks">
        <h2>About me</h2>
        <h3>
          I am Laurence, a Vue JS developer. Currently an educator,
          that teaches the holy trinity of the web: <br /><span>HTML</span>,
          <span>CSS</span>, and <span>JavaScript</span>.
        </h3>
        <h3>
          I also teach back-end languages such as <span>PHP</span>, and
          <span>Laravel</span>.
        </h3>
        <p class="tech-intro">
          Additionally, here are some of the technologies im currently using:
        </p>
        <div id="stacks">
          <ul>
            <li>Laravel</li>
            <li>Quasar</li>
            <li>MongoDB</li>
          </ul>
          <ul>
            <li>Node JS</li>
            <li>Express</li>
            <li>PHP</li>
          </ul>
          <ul>
            <li>MySQL</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
      <!-- <div class="about-me-img"></div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutMe",
};
</script>
<style lang="scss">
.w-80 {
  background-color: rgb(35, 35, 35);

  .about-me {
    width: 80%;
    margin: 0 auto;
    padding: 1.5em 1em;
    display: grid;
    grid-template-columns: 1fr;
    color: rgb(249, 246, 246);

    .about-me-txt {
      padding: 0.5em 0;

      h2 {
        font-weight: 900;
        font-size: clamp(1.5em, 2.5vw, 3.5rem);
        color: rgb(232, 228, 228);
        margin-bottom: 0.9rem;
      }
      h3 {
        font-weight: 300;
        font-size: clamp(1.2em, 1.8vw, 1.9rem);
        color: rgb(233, 229, 229);
        margin-bottom: 1.2em;
      }
      span {
        color: $color-accent;
        font-weight: 700;
      }

      // span:hover {
      //   font-size: 110%;
      // }

      .tech-intro {
        font-size: clamp(1.3rem, 1.9vw, 1.5rem);
      }
      #stacks {
        display: flex;
        margin-top: 0.8em;
        gap: 2.5em;

        ul {
          margin-left: 1em;
          position: relative;
          list-style: none;

          li::before {
            content: "▶";
            color: $accent-fade;
            position: absolute;
            font-size: 70%;
            left: -15px;
          }

          li {
            font-size: clamp(1.1em, 1.3vw, 1.9rem);
          }
        }
      }
    }

    .about-me-img {
      background: url("@/assets/about.png");
      background-size: cover;
      display: none;
    }
  }
}

@media screen and (min-width: 40em) {
  .w-80 {
    .about-me {
      padding: 1.5em 1em;
      width: 80%;
      padding: 0;
      margin: 0 auto;

      .about-me-txt {
        width: 80%;
        margin: 0 auto;
        padding: 1.5em 0;
      }
    }
  }
}

</style>