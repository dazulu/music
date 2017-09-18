<template>
  <div>
    <GlobalHeader />
    <nuxt />
    <GlobalFooter />
  </div>
</template>

<script>
  import GlobalHeader from '~/components/organisms/GlobalHeader.vue'
  import GlobalFooter from '~/components/organisms/GlobalFooter.vue'

  export default {
    components: {
      GlobalHeader,
      GlobalFooter
    }
  }
</script>

<style lang="scss">
  html, body {
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
      background: url('/assets/images/bg_800.jpg') top left no-repeat;
      background-size: cover;
      font-family: "Quicksand", sans-serif;
      overflow-x: hidden;
      margin: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  @media only screen and (min-width: 1024px) {
    body {
      background-image: url('/assets/images/bg_1200.jpg');
    }
  }

  @media only screen and (min-width: 1300px) {
    body {
      background-image: url('/assets/images/bg_1600.jpg');
    }
  }
</style>
