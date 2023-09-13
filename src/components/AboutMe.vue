<template>
  <div class="w-80">
    <div class="about-me">
      <div class="about-me-txt" id="techstacks">
        <h2>About me</h2>
        <h3>
          A Full Stack Web Developer and an academe educator,
          that teaches the fundamentails of the web: <br /><span>HTML</span>,
          <span>CSS</span>, and <span>JavaScript</span>.
        </h3>
        <h3>
          I also teach back-end languages such as <span>PHP</span>, and
          <span>Laravel</span>.
        </h3>
        <p class="tech-intro">
          Additionally, here are some of the technologies im currently using:
        </p>
        
        <div class="grid" style="margin-top: 1em;">
          <div v-for="(stack, index) in stacks" :key="index"  ref="gridItems">
            <div class="grid-item" :class="getAnimationClass(index)">{{ stack }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutMe",
  data() {
    return {
      stacks: [
      "Vue JS", "Quasar", "PHP", "Laravel",
      "Tailwind CSS", "Express JS", "Node", "MySQL", "MongoDB", "Git"
    ]
    }
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '-150px',
      threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.toggle("animate");
        
        observer.unobserve(entry.target);
      });
    }, options);

    this.$nextTick(() => {
      const gridItems = this.$refs.gridItems;
      if (gridItems) {
        gridItems.forEach(item => {
          observer.observe(item);
        });
      }
    });
  },
  methods: {
    getAnimationClass(index) {
      return `animation-delay-${index + 1}`;
    }
  }
};
</script>
<style lang="scss">
.w-80 {

  .about-me {
    width: 80%;
    margin: 0 auto;
    padding: 1.5em 1em;
    display: grid;
    grid-template-columns: 1fr;
    color: rgb(249, 246, 246);

    .about-me-txt {
      padding: 0.5em 0;

      h2 {
        font-weight: 900;
        font-size: clamp(1.5em, 2.5vw, 3.5rem);
        color: rgb(232, 228, 228);
        margin-bottom: 0.9rem;
      }
      h3 {
        font-weight: 300;
        font-size: clamp(1.2em, 1.8vw, 1.9rem);
        color: rgb(233, 229, 229);
        margin-bottom: .5em;
      }
      span {
        color: $color-accent;
        font-weight: 700;
      }

      .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;

          .grid-item {
            border: 1px solid $accent-fade;
            padding: .5em;
          }

          .animate {
            opacity: 0;
            transform: translateX(-80%);
            animation: fade-in 1.5s ease-in-out forwards;
          }


          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateX(-50%);
            }
            66% {
              opacity: .5;
              background-color: $accent-fade;
            }
            100% {
              opacity: 1;
              background-color: $color-accent;
    
              transform: translateX(0);
            }
          }
        }


      .tech-intro {
        font-size: clamp(1.3rem, 1.9vw, 1.5rem);
      }
      #stacks {
        display: flex;
        margin-top: 0.8em;
        gap: 2.5em;

        ul {
          margin-left: 1em;
          position: relative;
          list-style: none;

          li::before {
            content: "▶";
            color: $accent-fade;
            position: absolute;
            font-size: 70%;
            left: -15px;
          }

          li {
            font-size: clamp(1.1em, 1.3vw, 1.9rem);
          }
        }
      }
    }

    .about-me-img {
      background: url("@/assets/about.png");
      background-size: cover;
      display: none;
    }
  }
}

@media screen and (min-width: 40em) {
  .w-80 {
    .about-me {
      padding: 1.5em 1em;
      width: 80%;
      padding: 0;
      margin: 0 auto;

      .about-me-txt {
        width: 80%;
        margin: 0 auto;
        padding: 1.5em 0;

        .grid {
          display: grid;
          column-gap: 2em;
          grid-template-columns: 150px 150px
        }

      }
    }
  }
}

</style>