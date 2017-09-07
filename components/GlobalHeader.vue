<template>
  <div>
    <div class="header">
      <Logo />
      <Navigation />
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import Navigation from '~/components/Navigation.vue'

  export default {
    components: {
      Logo,
      Navigation
    }
  }
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: $padding;
  }

  .header__sub {
    display: flex;
    justify-content: flex-end;
  }
</style>
