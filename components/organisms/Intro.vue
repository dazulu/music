<template>
  <div>
    <div class="content__wrapper intro">
      <div>
        <h2 class="heading">
          <span class="pre">{{ $t("intro.preTitle") }}</span> <br />
          {{ $t("intro.title") }}
        </h2>
          <link-button type="patreon" text="intro.patreonButton" />
          <link-button type="youtube" text="intro.youtubeButton" />
      </div>
      <image-switcher />
    </div>
    <arrow-divider />
  </div>
</template>

<script>
  import ArrowDivider from '~/components/atoms/ArrowDivider.vue'
  import LinkButton from '~/components/atoms/LinkButton.vue'
  import ImageSwitcher from '~/components/organisms/ImageSwitcher.vue'

  const setHeight = (introElement) => {
    const viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    let percentage = 0.72 // 72%

    if (viewWidth >= 1280) {
      percentage = 0.80 // 80%
    }

    const percentageHeight = Math.floor(viewHeight * percentage)
    const introHeight = percentageHeight < 410 ? 410 : percentageHeight
    introElement.style.height = `${introHeight}px`
  }

  const setHeightOnResize = (introElement) => {
    let ticking = false
    window.addEventListener('resize', function (e) {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setHeight(introElement)
          ticking = false
        })
      }
      ticking = true
    })
  }

  export default {
    components: {
      LinkButton,
      ArrowDivider,
      ImageSwitcher
    },
    mounted () {
      let introElement = document.querySelector('.intro')
      setHeight(introElement)
      setHeightOnResize(introElement)
    }
  }
</script>

<style lang="scss" scoped>
  .intro {
    display: flex;
    align-items: center;
    height: 72vh;
    position: relative;
  }

  .heading {
    margin: 0 0 $padding * 2 0;
    font-size: 4rem;
    color: $pure-white;
    letter-spacing: -3px;
    line-height: 3rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.55);
  }

  .pre {
    font-size: 2rem;
  }
  
  @media only screen and (min-width: 768px) {
    .heading {
      font-size: 5.2rem;
      line-height: 3.3rem;
    }

    .pre {
      font-size: 2.8rem;
    }
  }

  @media only screen and (min-width: 1280px) {
    .intro {
      height: 80vh;
    }
  }
</style>
