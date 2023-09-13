<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="hero">
      <h5>Hi, i am</h5>
      <h1>Laurence Cadag</h1>
      <h2>Web Developer</h2>
      <h4>
        Equipped with modern web technologies,<br />
        we can build the future.
      </h4>
      <a
      :href="`${publicPath}LAURENCE_CADAG.pdf`"
      download="LAURENCE_CADAG"
      class="cta resumeBtn contact"
      >Download CV</a
    >
    </div>
  </div>
</template>
<script>
export default {
  name: "HeroSection",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss">
.container {
  text-align: left;
  width: 100%;
  line-height: 1.2;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  // background-image: linear-gradient(rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0.69)),
  //   url("../assets/background.jpg");
  height: calc(100vh - 60px);
  background-repeat: no-repeat;
  background-size: cover;

  .hero {
    width: 80%;
    padding: 1.5em 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    // height: 80vh;
    margin: 0 auto;
    color: #eee;

    h5 {
      font-size: clamp(1.8rem, 2.5vw, 2.5rem);
      font-weight: 300;
      color: #eee;
    }

    h1 {
      font-size: clamp(2.5rem, 3.5vw, 4.8rem);
      font-weight: 300;
    }

    h2 {
      color: $color-saturated;
      font-weight: 700;
      font-size: clamp(1.5rem, 3.8vw, 3.5rem);
    }

    h4 {
      font-weight: 300;
      margin-bottom: 0.7rem;
      font-size: clamp(1.3rem, 2.5vw, 1.5rem);
      opacity: .8;
    }

    .contact {
      padding: .6em;
      color: white;
      border-radius: 6px;
      border: 2px solid $color-accent;
      transition: .5s;
    }

    .contact:hover {
      color: white;
    }
  }
}
@media screen and (min-width: 40em) {
  .container {
    .hero {
      width: 60%;
    }
  }
}
</style>