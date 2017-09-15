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
    },
    mounted () {
      console.log('%c Support me on Patreon at patreon.com/adrianpayne ', 'background: #F96854; font-size: 20px; color: #FFFFFF')
      console.log('%c Github repo for you dev tools lurkers <3 github.com/dazulu/music ', 'background: #333333; font-size: 14px; color: #BBBBBB')
    }
  }
</script>

<style lang="scss">
</style>
