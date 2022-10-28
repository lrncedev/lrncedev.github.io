<template>
  <div class="projectSection" id="projects">
    <h2 class="sectionTitle">PROJECTS</h2>
    <div class="projectGrid">
      <div class="card">
        <div class="cardImg">
          <img loading="lazy"
            src="../assets/ecommerce.png"
            class="card-img-top"
            alt="Thumbnail Image for Storey, an Ecommerce site"
          />
        </div>
        <div class="cardBody">
          <h5 class="card-title text-center">Storey - ECommerce App</h5>
          <p class="card-text">
            An ecommerce app built with HTML, CSS, and JavaScript
          </p>
          <div class="projectLink">
            <a href="https://lrncedev.github.io/eCommerceApp/" target="_blank"
              >Demo</a
            >
            <a href="https://github.com/lrncedev/eCommerceApp" target="_blank"
              >Github</a
            >
        </div>
        </div>
      </div>

      <div class="card">
        <div class="cardImg">
          <img loading="lazy"
            src="../assets/rio.png"
            class="card-img-top"
            alt="Thumbnail for Rio De Janeiro Project"
          />
        </div>
        <div class="cardBody">
          <h5 class="card-title">Rio de Janeiro</h5>
          <p class="card-text">
            An landing page built with HTML, CSS, and JavaScript
          </p>
          <div class="projectLink">
            <a
              href="https://lrncedev.github.io/odinLandingPage/"
              target="_blank"
              >Demo</a
            >
            <a
              href="https://github.com/lrncedev/odinLandingPage"
              target="_blank"
              >Github</a
            >
        </div>
        </div>
      </div>

      <div class="card">
        <div class="cardImg">
          <img loading="lazy"
            src="../assets/recipe-app.png"
            class="card-img-top"
            alt="Thumbnail for Recipe-App"
          />
        </div>
        <div class="cardBody">
          <h5 class="card-title">Recipe app</h5>
          <p class="card-text">
            Site that consumes API to gather recipes on ingredient searching.
          </p>
          <div class="projectLink">
            <a href="https://lrncedev.github.io/recipe-app/" target="_blank"
              >Demo</a
            >
            <a href="https://github.com/lrncedev/recipe-app" target="_blank"
              >Github</a
            >
          </div>
        </div>
      </div>

      <div class="card">
        <div class="cardImg">
          <img  loading="lazy"
            src="../assets/pokemon-app.png"
            class="card-img-top"
            alt="pokemon-app"
          />
        </div>
        <div class="cardBody">
          <h5 class="card-title">Pokemon App using REST API</h5>
          <p class="card-text">
            Classic PokeDex
          </p>
          <div class="projectLink">
            <a href="https://lrncedev.github.io/pokemon-app/" disable target="_blank"
              >Demo</a
            >
            <a href="https://github.com/lrncedev/pokemon-app" disable target="_blank"
              >Github</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSection",
};
</script>

<style scoped>
.projectSection {
  background-color: #eee;
  padding: 2rem;
}
.sectionTitle {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
}
.projectGrid {
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}
.card {
  display: flex;
  background-color: #333;
  color: white;
  transition: scale 1s;
}

.card > * {
  flex-basis: 100%;
}

.card-img-top {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: scale 1s;
}
.card:hover {
  scale: 1.03;
}

/* .card-img-top:hover {
  scale: 1.05;
  object-fit: fill;
} */

.cardBody {
  padding: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cardBody > * {
  margin-bottom: .3em;
}
.card-title {
  text-transform: uppercase;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 400;
}

.card-text {
  font-size: 0.9rem;
  font-weight: 300;
  text-align: justify;
  /* padding: 0 0.4rem; */
}

.projectLink {
  display: flex;
  /* justify-content: space-evenly; */
  padding: .5em 0;
  gap: 1em;
}

.projectLink a {
  margin-top: .5em;
  padding: .3em;
  border-radius: 4px;
  background-color: green;
  color: white;
}

@media screen and (min-width: 40em) {
  .projectGrid {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  .card {
    flex-direction: column;
    justify-content: space-evenly;
  }

  /* .card:first-child {
    height: 100%;
  } */
}

@media screen and (min-width: 45em) {
  .projectGrid {
    grid-template-columns: repeat(4, minmax(150px, 1fr));
    grid-template-rows: 1fr;
    gap: 1em;
  }
}
@media screen and (max-width: 360px) {
  .projectLink  {
    flex-direction: column;
  }

  .projectLink a {
    border-radius: 0;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
