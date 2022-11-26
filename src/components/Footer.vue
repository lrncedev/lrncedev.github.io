<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer>
    <div class="socials">
      <h2 class="message">Follow or Contact Me:</h2>
    </div>
    <div>
      <span class="copyright">@LrnceDev. All rights reserved. 2022.</span>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
};
</script>

<style>
footer {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.socialLinks {
  display: flex;
  justify-content: space-evenly;
}

.socials {
  margin: 1rem 0;
}
.message {
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: 300;
}
.socialIcon {
  font-size: 2rem;
}
.link {
  color: black;
}

.copyright {
  color: #333;
}

@media screen and (max-width: 630px) {
  .message {
    font-size: 1.2rem;
  }
  .socialIcon {
    font-size: 1rem;
  }
  .socials {
    margin: 0.5rem 0;
  }
}
</style>