<template>
  <div class="projectSection" id="projects">
    <h2 class="sectionTitle">PROJECTS</h2>
    <div class="projectList">
      <div class="card">
        <div class="cardImg">
          <img src="../assets/ecommerce.png" class="card-img-top" alt="...">
        </div>
        <div class="cardBody">
          <h5 class="card-title text-center">Storey - ECommerce App</h5>
          <p class="card-text">An ecommerce app built with HTML, CSS, and JavaScript</p>
        </div>
        <div class="cardControl">
          <button class="controls">Demo</button>
          <button class="controls">Github Link</button>
        </div>
      </div>

      <div class="card">
        <div class="cardImg">
          <img src="https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_960_720.jpg" class="card-img-top" alt="...">
        </div>
        <div class="cardBody">
          <h5 class="card-title">Storey - ECommerce App</h5>
          <p class="card-text">An ecommerce app built with HTML, CSS, and JavaScript</p>
        </div>
        <div class="cardControl">
          <button class="controls">Demo</button>
          <button class="controls">Github Link</button>
        </div>
      </div>

      <div class="card">
        <div class="cardImg">
          <img src="https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_960_720.jpg" class="card-img-top" alt="...">
        </div>
        <div class="cardBody">
          <h5 class="card-title">Storey - ECommerce App</h5>
          <p class="card-text">An ecommerce app built with HTML, CSS, and JavaScript</p>
        </div>
        <div class="cardControl">
          <button class="controls">Demo</button>
          <button class="controls">Github Link</button>
        </div>
      </div>
      
      <div class="card">
        <div class="cardImg">
          <img src="https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_960_720.jpg" class="card-img-top" alt="...">
        </div>
        <div class="cardBody">
          <h5 class="card-title">Storey - ECommerce App</h5>
          <p class="card-text">An ecommerce app built with HTML, CSS, and JavaScript</p>
        </div>
        <div class="cardControl">
          <button class="controls">Demo</button>
          <button class="controls">Github Link</button>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSection"
}
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
  padding: .6rem;
  margin-bottom: .6rem;
  border-radius: 10px;
}

.cardImg {
padding: .3rem;
}
.card-img-top {
  height: 150px;
  width: 100%;
}
.cardBody {
  padding: .2rem;
  margin: .4rem 0;
}
.card-title {
  text-transform: uppercase;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
}

.card-text {
  font-size: .9rem;
  font-weight: 300;
  text-align: justify;
  padding: 0 .4rem;
}

.cardControl {
  display: flex;
  justify-content: space-evenly;
}
.controls {
  border: none;
  border-radius: 4px;
  margin-right: .5rem;
  padding: .4rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  background-color: #49be25;
}
</style>

