<template>
  <div class="logo">
    <img class="logo" src="~/assets/images/logo.png" :alt="$t('logoAlt')" />
  </div>
</template>

<style lang="scss">
  .logo {
    padding-right: 10px;
    max-width: 280px;
    width: 100%;
    z-index: 11;
  }

  @media only screen and (min-width: 1024px) {
    .sticky {
      .logo {
        filter: brightness(30%);
      }
    }
  }
</style>
