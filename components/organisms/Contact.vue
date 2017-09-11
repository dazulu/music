<template>
  <div id="contact" class="padding__wrapper">
    <div class="content__wrapper contact">
        <h2>Contact</h2>
        <p>Coming Soon.</p>
        <p>Probably tomorrow.</p>
    </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  .contact__wrapper {
    height: 400px;
    position: relative;
    background: url('~/assets/images/hamburg-map_800.jpg') center center no-repeat;
    background-size: cover;
  }

  @media only screen and (min-width: 800px) {
    .contact__wrapper {
      background-image: url('~/assets/images/hamburg-map_1024.jpg');
    }
  }

  @media only screen and (min-width: 1024px) {
    .contact__wrapper {
      background-image: url('~/assets/images/hamburg-map_1600.jpg');
    }
  }
</style>
