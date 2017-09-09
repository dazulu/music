<template>
  <div class="arrow__wrapper">
    <div class="arrow__separator">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  .arrow__wrapper {
    position: relative;
  }

  .arrow__separator {
    height: $padding;
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 100%;
    z-index: 5;
    bottom: 0px;
    display: block;


    > div {
      background: $pure-white;
      display: inline-block;
      height: $padding;
      position: absolute;
      top: 0;
      width: 50%;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        border-bottom: $padding solid $pure-white;
      }

      &:first-child {
        left: -$padding;

        &:after {
          right: -$padding;
          border-right: $padding solid transparent;
        }
      }

      &:last-child {
        right: -$padding;
        
        &:after {
          left: -$padding;
          border-left: $padding solid transparent;
        }
      }
    }
  }
</style>
