<template>
  <div class="wrapper intro">
  <div>
    <h2 class="heading">
      <span class="pre">SUPPORT ME ON</span> <br />
      PATREON
    </h2>
    <a class="button button--patreon" href="https://www.patreon.com/bePatron?u=2412507">BECOME A PATRON!</a>
  </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .intro {
    display: flex;
    align-items: center;
    height: 87vh 
  }

  .heading {
    margin: 0 0 $padding * 2 0;
    font-size: calc(1rem + 9vh);
    color: $pure-white;
    letter-spacing: -3px;
    line-height: 7.5vh;
  }

  .pre {
    font-size: calc(1rem + 3vh);
  }

  .button--patreon {
    background: $patreon url('/assets/images/patreon-logo.png') no-repeat 14px center;
    background-size: 27px;
    padding-left: 54px;

    &:hover {
      background-color: darken($patreon, 5%);
    }
  }
</style>
