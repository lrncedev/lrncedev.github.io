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
        <button class="know">Know more</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeroSection",
};
</script>

<style>
@media screen and (max-width: 630px) {
  .heroText {
    text-align: center;
  }
  .owner {
    font-size: 3rem;
  }
  .ownerTitle {
    font-size: 2.4rem;
  }
  .ownerDescription {
    font-size: 1.5rem;
  }
}
</style>