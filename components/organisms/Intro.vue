<template>
  <div class="wrapper intro">
  <div>
    <h2 class="heading">
      <span class="pre">SUPPORT ME</span> <br />
      ONLINE
    </h2>
    <div>
      <a class="button button--patreon" href="https://www.patreon.com/bePatron?u=2412507">
        BECOME A PATRON!
      </a>
      <a class="button button--youtube" href="https://www.youtube.com/channel/UCNYBL7n1Jk9CM3NRqapHaqw">
        <svg class="icon--youtube" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24z"/></svg>
        YOUTUBE!
      </a>
    </div>
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
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.55);
  }

  .pre {
    font-size: calc(1rem + 3vh);
  }

  .button--patreon {
    background: $patreon url('/assets/images/patreon-logo.png') no-repeat 14px center;
    background-size: 27px;
    padding-left: 54px;
    margin-right: $padding;
    margin-bottom: $padding;

    &:hover {
      background-color: darken($patreon, 5%);
    }
  }

  .button--youtube {
    background: $youtube;
    position: relative;
    padding-left: 52px;

    &:hover {
      background-color: darken($youtube, 5%);
    }
  }

  .icon--youtube {
    fill: $pure-white;
    position: absolute;
    height: 30px;
    top: 10px;
    left: 12px;
  }
</style>
