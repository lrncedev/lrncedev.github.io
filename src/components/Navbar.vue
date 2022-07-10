<template>
  <nav id="navbar">
    <div class="logo">
      <a href="#navbar"><img src="../assets/android-chrome-512x512.png" alt="Logo" class="logoImg"></a>
    </div>
    <div class="navlink">
      <ul class="links">
        <li class="link-item"><a href="#hero">Home</a></li>
        <li class="link-item"><a href="#projects">Projects</a></li>
        <li class="link-item"><a href="#techstack">Tech Stack</a></li>
        <li class="link-item"><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar"
}
</script>

<style>
  nav {
    background-color: black;
    display: flex;
    padding: .3rem;
    align-items: center;
    position: fixed;
    width: 100%;
  }
  
  .logo {
    flex-grow: 1;
  }
  .logoImg {
    height: 60px;
    padding-left: 2.5rem;
  }
  
  .links {
    display: flex;
    font-size: 1.5rem;
  }

  .link-item {
    margin-right: 1.2rem;
  }
  
  .link-item  a{
    color: white;
    font-weight: 300;
    text-transform: uppercase;
  }

  .link-item  a:hover {
    border-bottom: 1px solid  white;
  }

  @media screen and (max-width: 630px) {
    .navlink {
      display: none;
    }
    
  }
</style>