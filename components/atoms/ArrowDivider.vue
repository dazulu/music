<template>
  <div class="arrow__wrapper">
    <div v-if="solid" class="solid__separator solid"></div>
    <div v-if="!solid" class="trans__separator" :class="color">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      solid: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'default--color'
      }
    }
  }
</script>

<style lang="scss">
  .arrow__wrapper {
    position: relative;
  }

  .solid__separator {
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

  .trans__separator {
    height: $padding;
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 100%;
    z-index: 5;
    bottom: 0px;
    display: block;

    &.default--color {
      > div {
        background: $pure-white;

        &:after {
          border-bottom: $padding solid $pure-white;
        }
      }
    }

    &.blue--color {
      > div {
        background: $pickled-bluewood;

        &:after {
          border-bottom: $padding solid $pickled-bluewood;
        }
      }
    }

    > div {
      display: inline-block;
      height: $padding;
      position: absolute;
      top: 0;
      width: 50%;

      &:after {
        content: '';
        position: absolute;
        top: 0;
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
