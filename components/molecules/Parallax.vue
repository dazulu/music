<template>
  <div class="parallax__wrapper">
    <arrow-divider solid />
    <div class="parallax" :class="background">
        <social-links v-if="showSocialLinks" />
    </div>
    <arrow-divider />
  </div>
</template>

<script>
  import ArrowDivider from '~/components/atoms/ArrowDivider.vue'
  import SocialLinks from '~/components/molecules/SocialLinks.vue'

  export default {
    components: {
      ArrowDivider,
      SocialLinks
    },
    props: {
      background: {
        type: String,
        default: 'parallax--bg1'
      },
      showSocialLinks: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .parallax__wrapper {
    position: relative;
  }

  .parallax--bg1 {
    background-image: url('~/assets/images/parallax1_800.jpg');
  }

  .parallax--bg2 {
    background-image: url('~/assets/images/parallax2_800.jpg');
  }

  .parallax--bg3 {
    background-image: url('~/assets/images/parallax3_800.jpg');
  }

  .parallax {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  @media only screen and (min-width: 600px) {
    .parallax {
      height: 300px;
    }
  }

  @media only screen and (min-width: 700px) {
    .parallax {
      height: 400px;
    }
  }

  @media only screen and (min-width: 800px) {
    .parallax--bg1 {
      background-image: url('~/assets/images/parallax1_1024.jpg');
    }

    .parallax--bg2 {
      background-image: url('~/assets/images/parallax2_1200.jpg');
    }

    .parallax--bg3 {
      background-image: url('~/assets/images/parallax3_1024.jpg');
    }
  }

  @media only screen and (min-width: 1024px) {
    .parallax--bg1 {
      background-image: url('~/assets/images/parallax1_1280.jpg');
    }

    .parallax--bg2 {
      background-image: url('~/assets/images/parallax2_1600.jpg');
    }

    .parallax--bg3 {
      background-image: url('~/assets/images/parallax3_1600.jpg');
    }

    .parallax {
      height: 500px;
    }
  }

  @media only screen and (min-width: 1280px) {
    .parallax {
      background-attachment: fixed;
    }
  }
</style>
