<template>
  <div class="box" id="projects">
    <h2>Projects built</h2>
    <div class="project-grid">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <img :src="project.img" alt="project image" class="project-img" />
        <div class="project-text">
          <h3>{{ project.title }}</h3>
          <div class="project-description">
            <p>
              {{ project.description }}
            </p>
          </div>
          <div class="project-stack">
            <ul>
              <li v-for="stack in project.stacks" :key="stack">
                <span>{{ stack }}</span>
              </li>
            </ul>
          </div>
          <div class="project-link">
            <a :href="project.demo" target="_blank"
              ><font-awesome-icon icon="fas fa-laptop-code"
            /></a>
            <a :href="project.github" target="_blank"
              ><font-awesome-icon icon="fab fa-github"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSection",
  data() {
    return {
      projects: [
        {
          id: 1,
          img: require("../assets/todo-app.png"),
          title: "Todo App",
          description: "Todo App using Vue Js and Local Storage",
          github: "https://github.com/lrncedev/todo-app-vue",
          demo: "https://lrncedev.github.io/todo-app-vue/",
          stacks: ["Vue", "Vue-router", "SCSS", "Local Storage"],
        },
        {
          id: 2,
          img: require("../assets/pokemon-app.png"),
          title: "Pokemon App",
          description: "API consuming app from PokeApi.co",
          github: "https://github.com/lrncedev/pokemon-app",
          demo: "https://lrncedev.github.io/pokemon-app/",
          stacks: ["Vue", "PokeAPI", "SCSS"],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.box {
  color: #ffffff;

  h2 {
    padding-left: 1.5rem;
    font-size: clamp(1.9rem, 2.5vw, 2.5rem);
    font-weight: 300;
  }
  .project-grid {
    padding: 0 1.5em;
    display: grid;
    grid-auto-rows: 400px;

    .project-card {
      margin: 1em 0;
      gap: 1.2em;
      position: relative;

      .project-img {
        width: 100%;
        margin-top: auto;
        background-image: linear-gradient(
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.78)
        );
        background-size: cover;
        background-repeat: no-repeat;
      }

      .project-img:hover {
        background-image: linear-gradient(
          rgba(255, 243, 243, 0.6),
          rgba(255, 255, 255, 0.78)
        );
        background-size: cover;
        background-repeat: no-repeat;
      }

      .project-text {
        position: absolute;
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 0.9rem;
        background-color: rgba(10, 9, 9, 0.8);
        justify-content: center;
        align-items: center;
        top: 0;
        height: 100%;
        text-align: right;

        h3 {
          text-transform: uppercase;
          font-weight: 300;
          font-size: clamp(2.5rem, 1.5vw, 3.2rem);
        }
        .project-description {
          padding: 0.8em 0.5em;
          text-align: center;

          font-size: clamp(1.6rem, 1.5vw, 3.2rem);
          background-color: rgba(46, 46, 46, 0.9);
        }
        .project-stack {
          ul {
            display: flex;
            justify-content: flex-end;
            gap: 0.9rem;

            li {
              font-weight: 400;
              color: $color-accent;
            }
          }
        }

        .project-link {
          display: flex;
          gap: 1.2em;
          justify-content: flex-end;

          a {
            color: #eee;
            border: 1px solid $color-accent;
            border-radius: 4px;
            padding: 0.4em;
            font-size: clamp(1.3rem, 1.5vh, 1.6rem);
          }
        }
      }
    }

    .project-card:nth-child(even) {
      .project-text {
        align-items: center;

        .project-stack {
          ul {
            display: flex;
            justify-content: flex-start;
            gap: 0.9rem;

            li {
              font-weight: 400;
              color: $color-accent;
            }
          }
        }

        .project-link {
          justify-content: flex-start;
        }
      }
    }
  }
}

@media screen and (min-width: 50em) {
  .box {
    .project-grid {
      .project-card {
        display: grid;
        grid-template-columns: 60% 40%;
        position: relative;
        width: 100%;

        .project-text {
          width: 100%;
          text-align: left;
          position: static;
          order: 1;
          align-items: flex-end;
        }
      }
      .project-card:nth-child(even) {
        grid-template-columns: 40% 60%;
        .project-img {
          order: 2;
        }
        .project-text {
          align-items: flex-start;
          width: 100%;
          text-align: left;
          position: static;
          order: 1;

          .project-stack {
            ul {
              justify-content: flex-start;
            }
          }

          .project-link {
            justify-content: flex-start;
          }
        }
      }
    }
  }
}
</style>