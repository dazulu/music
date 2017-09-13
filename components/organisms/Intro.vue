<template>
  <div>
    <div class="content__wrapper intro">
      <div>
        <h2 class="heading">
          <span class="pre">SUPPORT ME</span> <br />
          ONLINE
        </h2>
        <div>
          <a
            v-on:click="toPatreon"
            target="_blank"
            rel="noopener"
            class="button button--patreon"
            href="https://www.patreon.com/bePatron?u=2412507"
          >
            BECOME A PATRON!
          </a>
          <a
            v-on:click="toYouTube"
            target="_blank"
            rel="noopener"
            class="button button--youtube"
            href="https://www.youtube.com/channel/UCNYBL7n1Jk9CM3NRqapHaqw"
            >
              <svg class="icon--youtube" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24z"/></svg>
              YOUTUBE!
          </a>
        </div>
      </div>
      <img class="singer" src="~/assets/images/adrian-payne.png" alt="Adrian Payne" />
    </div>
    <arrow-divider />
  </div>
</template>

<script>
  import ArrowDivider from '~/components/atoms/ArrowDivider.vue'

  const trackEvent = (type) => {
    if (typeof window !== 'undefined' && typeof window.ga !== 'undefined') {
      window.ga('send', 'event', 'social', 'navigate', type)
    }
  }

  const setHeight = () => {
    const viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

    let percentage = 0.72 // 72%

    if (viewWidth >= 1280) {
      percentage = 0.80 // 80%
    }

    const percentageHeight = Math.floor(viewHeight * percentage)
    const introHeight = percentageHeight < 410 ? 410 : percentageHeight

    document.querySelector('.intro').style.height = `${introHeight}px`
  }

  export default {
    components: {
      ArrowDivider
    },
    methods: {
      toYouTube: () => {
        trackEvent('youtube')
      },
      toPatreon: () => {
        trackEvent('patreon')
      }
    },
    mounted () {
      setHeight()
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
    color: #fff;
    background: $patreon url('/assets/images/patreon-logo.png') no-repeat 14px center;
    background-size: 27px;
    padding-left: 54px;
    margin-right: $paddingButton;
    margin-bottom: $paddingButton;

    &:hover {
      background-color: darken($patreon, 5%);
    }
  }

  .button--youtube {
    color: #fff;
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

  .singer {
    display: none;
  }
  
  @media only screen and (min-width: 768px) {
    .singer {
      position: absolute;
      display: block;
      right: 2%;
      bottom: -30px;
      max-width: 55vw;
      width: 100%;
      z-index: -1;
      animation: slideSinger 1s ease-out;
      animation-fill-mode: forwards;
      transform: translateY(30px);
    }
  }

  @media only screen and (min-width: 1024px) {
    .singer {
      width: 700px;
    }
  }

  @media only screen and (min-width: 1280px) {
    .intro {
      height: 80vh;
    }
  }

  @keyframes slideSinger {
    from {
      transform: translateY(30px);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
