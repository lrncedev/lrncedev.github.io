<template>
  <div class="projectSection" id="projects">
    <h2 class="sectionTitle">PROJECTS</h2>
    <div class="projectGrid">
      <div class="card">
        <div class="cardImg">
          <img
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
          <img
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
          <img
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

      <!-- <div class="card">
        <div class="cardImg">
          <img
            src="https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_960_720.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="cardBody">
          <h5 class="card-title">Comming Soon</h5>
          <p class="card-text">
            Coming soon..
          </p>
          <div class="projectLink">
            <a href="#" disable target="_blank"
              >Demo</a
            >
            <a href="#" disable target="_blank"
              >Github</a
            >
          </div>
        </div>
      </div> -->
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
}
.card {
  display: flex;
  background-color: #333;
  color: white;
  /* justify-content: space-bet; */
}

.card > * {
  flex-basis: 100%;
}

.card-img-top {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.card-img-top:hover {
  scale: 1.20;
  object-fit: fill;
}
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
    grid-auto-flow: column;
  }

  .card {
    flex-direction: column;
    justify-content: space-evenly;
  }

  /* .card:first-child {
    height: 100%;
  } */
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
