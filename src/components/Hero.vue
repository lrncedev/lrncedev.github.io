<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- <div class="hero" id="hero">
    <div class="heroText">
      <h1 class="owner">Hi, im Laurence</h1>
      <h3 class="ownerTitle">Front-End Web Developer</h3>
      <p class="ownerDescription">
        An Information Technology Graduate, IT Educator, and a Gamer.
      </p>
      <div class="cta">
        <a
          :href="`${publicPath}Cadag_Laurence_Resume.pdf`"
          download="LaurenceCadag_resume"
          class="resumeBtn"
          >Download resume</a
        >
      </div>
    </div>
  </div> -->
  <div class="container">
    <div class="hero">
      <h5>Hi, i am</h5>
      <h1>Laurence Cadag</h1>
      <h3>Vue JS Developer</h3>
      <h4>
        IT educator, gamer by heart, <br />
        and a web developer fascinated by Vue
      </h4>
      <button>Contact Me</button>
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

  .hero {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 80vh;
    margin: 0 auto;
    color: #eee;
  }
}
/* .hero {
  height: 100%;
}
@media screen and (max-width: 630px) {
  .owner {
    font-size: 2rem;
  }
  .ownerTitle {
    font-size: 2.4rem;
  }
  .ownerDescription {
    font-size: 1.5rem;
  }
} */

/* .hero {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.8)),
    url("../assets/background.jpg");
  height: calc(100vh - 60px);
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

.resumeBtn {
  padding: 0.5rem;
  font-weight: 900;
  text-transform: uppercase;
  background-color: #e28743;
  color: white;
  border-radius: 4px;
  border: none;
}

@media screen and (max-width: 40em) { 
  .heroText {
    width: 90%;
    margin-inline: auto;
    
  }
  
  .owner {
    font-size: 3rem;
  }
  .ownerTitle {
    font-size: 2.5rem;
  }
  
  .ownerDescription {
    font-size: 1.5rem;
  }
} */
</style>