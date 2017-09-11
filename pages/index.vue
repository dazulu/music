<template>
  <div>
    <Intro />
    <About />
    <Parallax />
    <Faq />
  </div>
</template>

<script>
  import Intro from '~/components/organisms/Intro.vue'
  import About from '~/components/organisms/About.vue'
  import Faq from '~/components/organisms/Faq.vue'
  import Parallax from '~/components/molecules/Parallax.vue'

  export default {
    components: {
      Intro,
      About,
      Faq,
      Parallax
    }
  }
</script>

<style lang="scss">
</style>
