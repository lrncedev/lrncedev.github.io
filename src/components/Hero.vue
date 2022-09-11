<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="hero" id="hero">
    <div class="heroText">
      <h1 class="owner">Hi, im Laurence</h1>
      <h3 class="ownerTitle">Front-End Web Developer</h3>
      <p class="ownerDescription">
        An Information Technology Graduate, IT Educator, and a Gamer.
      </p>
      <div class="cta">
        <!-- <a href="~" class="resumeBtn" download>Download Resume</a> -->
        <a :href="`${publicPath}cadag_resume.pdf`" download="LaurenceCadag_resume" class="resumeBtn">Download resume</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeroSection",
  data () {
  return {
    publicPath: process.env.BASE_URL
  }
}
};
</script>

<style>
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

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.8)),
    url("../assets/background.jpg");
  height: 90vh;
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
/* .resumeBtn {
  padding
} */
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
}
</style>