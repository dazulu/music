<template>
  <div>
    <div class="header">
      <Logo />
      <Navigation />
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/atoms/Logo.vue'
  import Navigation from '~/components/molecules/Navigation.vue'

  export default {
    components: {
      Logo,
      Navigation
    }
  }
</script>

<style lang="scss">
  .header {
    height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__sub {
    display: flex;
    justify-content: flex-end;
  }
</style>
