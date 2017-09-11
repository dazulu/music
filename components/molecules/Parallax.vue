<template>
  <div class="parallax__wrapper">
    <arrow-divider-solid />
    <div class="parallax">
        <social-links />
    </div>
    <arrow-divider-trans />
  </div>
</template>

<script>
  import ArrowDividerTrans from '~/components/atoms/ArrowDividerTrans.vue'
  import ArrowDividerSolid from '~/components/atoms/ArrowDividerSolid.vue'
  import SocialLinks from '~/components/molecules/SocialLinks.vue'

  export default {
    components: {
      ArrowDividerSolid,
      ArrowDividerTrans,
      SocialLinks
    }
  }
</script>

<style lang="scss" scoped>
  .parallax__wrapper {
    position: relative;
  }

  .parallax {
    background: url('~/assets/images/parallax2_800.jpg') center center no-repeat;
    background-size: cover;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (min-width: 800px) {
    .parallax {
      height: 400px;
      background-image: url('~/assets/images/parallax2_1024.jpg');
      background-attachment: fixed;
    }
  }

  @media only screen and (min-width: 1024px) {
    .parallax {
      background-image: url('~/assets/images/parallax2_1280.jpg');
    }
  }
</style>
