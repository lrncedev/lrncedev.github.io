<template>
  <div class="techSection" id="techstack">
    <div class="sectionTitle">Tech Stacks</div>
    <div class="stackList stack1">
      <div class="stack">
        <font-awesome-icon icon="fa-brands fa-html5" class="stackIcon" />
        <div class="stackName">HTML</div>
      </div>
      <div class="stack">
        <font-awesome-icon icon="fa-brands fa-css3" class="stackIcon" />
        <div class="stackName">CSS</div>
      </div>
      <div class="stack">
        <font-awesome-icon icon="fa-brands fa-js" class="stackIcon" />
        <div class="stackName">JavaScript</div>
      </div>
      <div class="stack">
        <font-awesome-icon icon="fa-brands fa-vuejs" class="stackIcon" />
        <div class="stackName">Vue 3</div>
      </div>
      <div class="stack">
        <font-awesome-icon icon="fa-brands fa-git" class="stackIcon" />
        <div class="stackName">Git</div>
      </div>
      <div class="stack">
        <font-awesome-icon icon="fa-brands fa-sass" class="stackIcon" />
        <div class="stackName">SaSS</div>
      </div>
      <div class="stack">
        <font-awesome-icon icon="fa-brands fa-node-js" class="stackIcon" />
        <div class="stackName">Node JS</div>
      </div>
      <div class="stack">
        <font-awesome-icon icon="fa-brands fa-php" class="stackIcon" />
        <div class="stackName">PHP</div>
      </div>
    </div>
    <!-- <div class="stackList">
      
    </div> -->
  </div>
</template>

<script>
export default {
  name: "TechStack",
};
</script>

<style>
.techSection {
  padding: 1rem;
  color: white;
  background-color: #333;
}

.stackList {
  display: grid;
  grid-template-rows: 200px;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  grid-template-rows: repeat(2, minmax(50px, 1fr));
}

.sectionTitle {
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;
}
/* 
.stackList {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
}
*/


.stack1 {
  margin-bottom: 1em;
}
.stack {
  text-align: center;
}
.stackIcon {
  font-size: 3rem;
}

.stackName {
  margin-top: 0.4rem;
  font-size: 1rem;
  font-weight: 700;
}

@media screen and (max-width: 630px) {
  .stackIcon {
    margin-top: 1rem;
    font-size: 2.8rem;
  }
  .stackName {
    font-weight: 300;
    text-transform: uppercase;
    margin-top: 1.2rem;
  }
  
}


@media screen and (max-width: 30em) {
  .stackList {
    grid-template-columns: repeat(3, 1fr);
  }

} 

@media screen and (max-width: 20em) {
  .stackList {
    grid-template-columns: 1fr;
  }
}
</style>