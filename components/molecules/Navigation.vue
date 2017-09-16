<template>
  <div>
    <nav role="navigation">
      <ul class="nav">
        <li class="nav__item"><a v-on:click="toAbout" class="nav__link" href="#">{{ $t("nav.about") }}</a></li>
        <li class="nav__item">
          <a v-on:click="toYouTube" class="nav__link" href="https://www.youtube.com/channel/UCNYBL7n1Jk9CM3NRqapHaqw" target="_blank" rel="noopener">
            <svg class="social__icon youtube__icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24z"/></svg>
            YouTube
            </a>
        </li>
        <li class="nav__item">
          <a v-on:click="toPatreon" class="nav__link" href="https://www.patreon.com/adrianpayne" target="_blank" rel="noopener">
            <svg class="social__icon patreon__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 96">
              <g fill-rule="evenodd">
                <path d="M64.1102,0.1004 C44.259,0.1004 28.1086,16.2486 28.1086,36.0986 C28.1086,55.8884 44.259,71.989 64.1102,71.989 C83.9,71.989 100,55.8884 100,36.0986 C100,16.2486 83.9,0.1004 64.1102,0.1004"/>
                <polygon points=".012 95.988 17.59 95.988 17.59 .1 .012 .1"/>
              </g>
            </svg>
            Patreon
          </a>
        </li>
        <li class="nav__item"><a v-on:click="toFaq" class="nav__link" href="#">{{ $t("nav.faq") }}</a></li>
        <li class="nav__item"><a v-on:click="toContact" class="nav__link" href="#">{{ $t("nav.contact") }}</a></li>
      </ul>
    </nav>
    <BurgerButton />
  </div>
</template>

<script>
  import jump from 'jump.js'
  import BurgerButton from '~/components/atoms/BurgerButton.vue'

  const jumpParams = {
    duration: 800,
    offset: -30
  }

  let scrolling

  const end = () => {
    scrolling = false
  }

  const scroll = (to, options) => {
    if (scrolling) {
      return
    }

    if (document.querySelector('.menu__button').classList.contains('is--open')) {
      document.querySelector('.menu__button').classList.remove('is--open')
      document.querySelector('.nav').classList.remove('nav--open')
      document.body.classList.remove('no-touchy-action')
    }

    scrolling = true
    setTimeout(end, options.duration || 0)
    jump(to, options)
  }

  const trackEvent = (type) => {
    if (typeof window !== 'undefined' && typeof window.ga !== 'undefined') {
      window.ga('send', 'event', 'navigation', 'navigate', type)
    }
  }

  export default {
    components: {
      BurgerButton
    },
    methods: {
      toAbout: () => {
        scroll('#about', { ...jumpParams })
        trackEvent('about')
      },
      toFaq: () => {
        scroll('#faq', { ...jumpParams })
        trackEvent('faq')
      },
      toContact: () => {
        scroll('#contact', { ...jumpParams })
        trackEvent('contact')
      },
      toYouTube: () => {
        trackEvent('youtube')
      },
      toPatreon: () => {
        trackEvent('patreon')
      }
    }
  }
</script>

<style lang="scss">
  .nav {
    background: rgba(0, 0, 0, 0.88);
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 50%,rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    list-style-type: none;
    padding: 0;
    margin: 0;
    pointer-events: none;
    opacity: 0;
    transform-origin: bottom center;
    transform: translateY(100%);
    transition: all 400ms ease;
  }

  .nav--open {
    border-bottom: 10px solid $sunglow;
    transform: translateY(0);
    pointer-events: auto;
    opacity: 1;

    .nav__item {
      transform: translateY(3vh);
    }
  }

  .nav__link {
    align-items: center;
    color: $pure-white !important;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    height: 100%;
    font-size: 4.2vh;
  }

  .nav__item {
    max-height: 13vh;
    flex: 1;
    transition-delay: 500ms;
    transform: translateY(15vh);
    transition: all 1s ease;
  }

  .social__icon {
    fill: $pure-white;
    height: 30px;
    margin-right: 5px;
  }

  .youtube__icon {
    height: 30px;
  }

  .patreon__icon {
    height: 22px;
  }

  @media (pointer: fine) and (min-width: 1024px){
    .nav__item {
      $colors-list: $dodger-blue $sunglow $bright-sun $emerald $medium-purple;
      @for $i from 1 through length($colors-list) {
        &:nth-child(#{$i}) {
          &::after {
            background: nth($colors-list, $i);
          }
        }
      }
    
      &::after {
        content: '';
        display: block;
        height: 3px;
        width: 0;
        transition: width 150ms ease-out;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .nav {
      opacity: 1;
      transform: scale(1);
      transition: none;
      display: flex;
      background: none;
      flex-direction: row;
      position: relative;
      top: auto;
      left: auto;
      height: auto;
      width: auto;
      pointer-events: auto;
      border: 0;
    }

    .nav__item {
      margin: 0 12px;
      flex: 0 1 auto;
      transform: translateY(0) !important;
      transition: none;

      &:last-child {
        margin-right: 0;
      }
    }

    .nav__link {
      height: 30px;
      font-size: 16px;
    }

    .social__icon {
      fill: $pure-white;
      height: 30px;
      margin-right: 8px;
    }

    .youtube__icon {
      height: 30px;
    }

    .patreon__icon {
      height: 22px;
    }

    .sticky {
      .navigation {
        position: relative;
      }

      .nav__link {
        color: #333 !important;
      }

      .social__icon {
        fill: #333;
      }
    }
  }
</style>
