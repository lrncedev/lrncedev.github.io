<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer>
    <div class="socials">
      <h2 class="message">Follow or Contact Me:</h2>
      <ul class="socialLinks">
        <li><a href="https://www.facebook.com/cadsuu" target="_blank" class="link"><font-awesome-icon icon="fa-brands fa-facebook-f" class="socialIcon"/></a></li>
        <li><a href="https://www.linkedin.com/in/laurencecadag/" target="_blank" class="link"><font-awesome-icon icon="fa-brands fa-linkedin-in" class ="socialIcon"/></a></li>
        <li><a href="https://codepen.io/LaurenceDev"   target="_blank" class="link"><font-awesome-icon icon="fa-brands fa-codepen" class ="socialIcon"/></a></li>
        <li><a href="https://twitter.com/Cadsu3"  target="_blank"  class="link"><font-awesome-icon icon="fa-brands fa-twitter" class ="socialIcon"/></a></li>
      </ul>
    </div>
    <div>
      <span class="copyright">@LrnceDev. All rights reserved. 2022.</span>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"
}
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
  margin-bottom: .5rem;
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
    margin: .5rem 0;
  }
}
</style>