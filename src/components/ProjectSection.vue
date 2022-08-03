<template>
  <div class="projectSection" id="projects">
    <h2 class="sectionTitle">PROJECTS</h2>
    <div class="projectList">
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
        </div>
        <div class="cardControl">
          <button class="controls">
            <a href="https://lrncedev.github.io/eCommerceApp/" target="_blank"
              >Demo</a
            >
          </button>
          <button class="controls">
            <a href="https://github.com/lrncedev/eCommerceApp" target="_blank"
              >Github Link</a
            >
          </button>
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
        </div>
        <div class="cardControl">
          <button class="controls">
            <a
              href="https://lrncedev.github.io/odinLandingPage/"
              target="_blank"
              >Demo</a
            >
          </button>
          <button class="controls">
            <a
              href="https://github.com/lrncedev/odinLandingPage"
              target="_blank"
              >Github Link</a
            >
          </button>
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
        </div>
        <div class="cardControl">
          <button class="controls">
            <a href="https://lrncedev.github.io/recipe-app/" target="_blank"
              >Demo</a
            >
          </button>
          <button class="controls">
            <a href="https://github.com/lrncedev/recipe-app" target="_blank"
              >Github Link</a
            >
          </button>
        </div>
      </div>

      <div class="card">
        <div class="cardImg">
          <img
            src="https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_960_720.jpg"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="cardBody">
          <h5 class="card-title">Storey - ECommerce App</h5>
          <p class="card-text">
            An ecommerce app built with HTML, CSS, and JavaScript
          </p>
        </div>
        <div class="cardControl">
          <button class="controls"><a href="" target="_blank">Demo</a></button>
          <button class="controls">
            <a href="" target="_blank">Github Link</a>
          </button>
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
.projectList {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}
.card {
  width: 250px;
  background-color: #333;
  color: white;
  padding: 0.6rem;
  margin-bottom: 0.6rem;
  border-radius: 10px;
}

.cardImg {
  padding: 0.3rem;
}
.card-img-top {
  height: 150px;
  width: 100%;
}
.cardBody {
  padding: 0.2rem;
  margin: 0.4rem 0;
}
.card-title {
  text-transform: uppercase;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
}

.card-text {
  font-size: 0.9rem;
  font-weight: 300;
  text-align: justify;
  padding: 0 0.4rem;
}

.cardControl {
  display: flex;
  justify-content: space-evenly;
}
.controls {
  border: none;
  border-radius: 4px;
  margin-right: 0.5rem;
  padding: 0.4rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  background-color: #49be25;
}

.controls a {
  color: white;
}
</style>
