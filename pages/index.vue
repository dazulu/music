<template>
  <div>
    <Intro />
    <About />
  </div>
</template>

<script>
  import Intro from '~/components/organisms/Intro.vue'
  import About from '~/components/organisms/About.vue'

  export default {
    components: {
      Intro,
      About
    }
  }
</script>

<style lang="scss">
</style>
