<template>
  <div>
    <Intro />
    <About />
    <Faq />
  </div>
</template>

<script>
  import Intro from '~/components/organisms/Intro.vue'
  import About from '~/components/organisms/About.vue'
  import Faq from '~/components/organisms/Faq.vue'

  export default {
    components: {
      Intro,
      About,
      Faq
    }
  }
</script>

<style lang="scss">
</style>
