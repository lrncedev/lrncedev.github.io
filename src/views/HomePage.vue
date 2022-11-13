<template>
  <div class="router-view-div">
    <Hero />
    <TechStack />
  </div>
</template>
<script>
import Hero from '@/components/Hero.vue';
import TechStack from '@/components/TechStack.vue';
export default {
  components: {
    Hero,
    TechStack
  }
}
</script>
<style lang="scss">
</style>