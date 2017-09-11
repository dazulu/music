<template>
  <div class="arrow__wrapper">
    <div class="arrow__separator">
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .arrow__wrapper {
    position: relative;
  }

  .arrow__separator {
    height: $padding;
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 0;
    display: block;


      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        margin-left: -18px;
        width: 36px;
        height: 36px;
        transform: rotateZ(45deg);
        background: $pure-white;
        top: -18px;
      }
  }
</style>
