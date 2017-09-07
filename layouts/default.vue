<template>
  <div class="wrapper">
    <GlobalHeader />
    <nuxt />
  </div>
</template>

<script>
  import GlobalHeader from '~/components/GlobalHeader.vue'

  export default {
    components: {
      GlobalHeader
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');

  html, body {
    height: 100%;
  }

  body {
      background: url('/assets/images/bg.jpg') top center no-repeat;
      background-size: cover;
      font-family: "Quicksand", sans-serif;
      margin: 0;
      padding: $padding;
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

  *, *:before, *:after {
    box-sizing: inherit;
  }

  .wrapper {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }
</style>
