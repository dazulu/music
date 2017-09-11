<template>
  <div class="parallax__wrapper">
    <arrow-divider-solid />
    <div class="parallax"></div>
    <arrow-divider-trans />
  </div>
</template>

<script>
  import ArrowDividerTrans from '~/components/atoms/ArrowDividerTrans.vue'
  import ArrowDividerSolid from '~/components/atoms/ArrowDividerSolid.vue'

  export default {
    components: {
      ArrowDividerSolid,
      ArrowDividerTrans
    }
  }
</script>

<style lang="scss" scoped>
  .parallax__wrapper {
    position: relative;
  }

  .parallax {
    background: url('~/assets/images/parallax_800.jpg') center center no-repeat fixed;
    background-size: cover;
    height: 300px;
  }

  @media only screen and (min-width: 800px) {
    .parallax {
      background-image: url('~/assets/images/parallax_1024.jpg');
      background-size: cover;
    }
  }

  @media only screen and (min-width: 1024px) {
    .parallax {
      background-image: url('~/assets/images/parallax_1600.jpg');
      background-size: cover;
    }
  }
</style>
