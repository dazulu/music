<template>
  <div>
    <Intro />
    <About />
    <Parallax showSocialLinks />
    <Faq />
    <Parallax background="parallax--bg3" />
    <Contact />
  </div>
</template>

<script>
  import Intro from '~/components/organisms/Intro.vue'
  import About from '~/components/organisms/About.vue'
  import Parallax from '~/components/molecules/Parallax.vue'
  import Faq from '~/components/organisms/Faq.vue'
  import Contact from '~/components/organisms/Contact.vue'

  export default {
    components: {
      Intro,
      About,
      Faq,
      Parallax,
      Contact
    }
  }
</script>

<style lang="scss">
</style>
