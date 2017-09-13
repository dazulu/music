<template>
  <div class="footer__wrapper">
    <arrow-divider solid />
    <div class="content__wrapper footer">
        <span>&lt;3 my patrons</span>
    </div>
  </div>
</template>

<script>
  import ArrowDivider from '~/components/atoms/ArrowDivider.vue'

  export default {
    components: {
      ArrowDivider
    }
  }
</script>

<style lang="scss" scoped>
  .footer__wrapper {
    background-image: url('~/assets/images/parallax2_800.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .footer {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.55);
    padding-top: $padding * 7;
    padding-bottom: $padding * 7;
    text-align: center;
    color: $pure-white;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 40px;
  }

  @media only screen and (min-width: 1024px) {
    .footer__wrapper {
      background-image: url('/assets/images/parallax2_1200.jpg');
    }
  }

  @media only screen and (min-width: 1300px) {
    .footer__wrapper {
      background-image: url('/assets/images/parallax2_1600.jpg');
    }
  }
</style>
