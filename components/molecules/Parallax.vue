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
    background: url('~/assets/images/parallax.jpg') center center no-repeat fixed;
    background-size: cover;
    height: 300px;
  }
</style>
