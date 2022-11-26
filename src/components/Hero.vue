<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="hero">
      <h5>Hi, i am</h5>
      <h1>Laurence Cadag</h1>
      <h2>Vue JS Developer</h2>
      <h4>
        I build things for the web using <br />
        Using Vue JS for fast, easy, <br />
        and reactive development.
      </h4>
      <a href="#contact" class="contact cta">Hire Me</a>
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
  width: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.92)),
    url("../assets/background.jpg");
  height: calc(100vh - 60px);
  background-repeat: no-repeat;
  background-size: cover;

  .hero {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 80vh;
    margin: 0 auto;
    color: #eee;

    h5 {
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      font-weight: 300;
      color: #eee;
    }

    h1 {
      font-size: clamp(3.5rem, 5.9vw, 4.8rem);
      font-weight: 900;
    }

    h2 {
      color: $color-accent;
      font-weight: 400;
      font-size: clamp(3rem, 4.5vw, 3.5rem);
    }

    h4 {
      font-weight: 300;
      margin-bottom: 0.7rem;
      font-size: clamp(1.3rem, 2.5vw, 1.5rem);
    }

    .contact {
      padding: 1em 1.5em;
      color: $color-accent;
      border-radius: 6px;
      border: 2px solid rgb(117, 117, 117);
    }

    .contact:hover {
      color: $bg-main;
    }
  }
}
@media screen and (min-width: 40em) {
  .container {
    .hero {
      width: 60%;
      align-items: center;
    }
  }
}
</style>