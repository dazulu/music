<template>
  <ul class="social">
      <li class="social__item">
        <a
          v-on:click="toYouTube"
          target="_blank"
          rel="noopener"
          class="social__link youtube__link"
          href="https://www.youtube.com/channel/UCNYBL7n1Jk9CM3NRqapHaqw"
        >
          <svg class="social__icon youtube__icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24z"/></svg>
        </a>
      </li>
      <li class="social__item">
        <a
          v-on:click="toPatreon"
          target="_blank"
          rel="noopener"
          class="social__link patreon__link"
          href="https://www.patreon.com/adrianpayne"
        >
        <svg class="social__icon patreon__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 96">
          <g>
            <path d="M64.1102,0.1004 C44.259,0.1004 28.1086,16.2486 28.1086,36.0986 C28.1086,55.8884 44.259,71.989 64.1102,71.989 C83.9,71.989 100,55.8884 100,36.0986 C100,16.2486 83.9,0.1004 64.1102,0.1004"/>
            <polygon points=".012 95.988 17.59 95.988 17.59 .1 .012 .1"/>
          </g>
        </svg>
        </a>
      </li>
      <li class="social__item">
        <a
          v-on:click="toInstagram"
          target="_blank"
          rel="noopener"
          class="social__link instagram__link"
          href="https://www.instagram.com/adrianpaynemusic/"
        >
          <svg class="social__icon instagram__icon" aria-labelledby="simpleicons-instagram-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-instagram-icon">Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
        </a>
      </li>
      <li class="social__item">
        <a
          v-on:click="toTwitter"
          target="_blank"
          rel="noopener"
          class="social__link twitter__link"
          href="https://twitter.com/dazulu"
        >
          <svg class="social__icon twitter__icon" aria-labelledby="simpleicons-twitter-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-twitter-icon">Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
        </a>
      </li>
  </ul>
</template>

<script>
  const trackEvent = (type) => {
    if (typeof window !== 'undefined' && typeof window.ga !== 'undefined') {
      window.ga('send', 'event', 'social', 'navigate', type)
    }
  }

  export default {
    methods: {
      toYouTube: () => {
        trackEvent('youtube')
      },
      toPatreon: () => {
        trackEvent('patreon')
      },
      toInstagram: () => {
        trackEvent('instagram')
      },
      toTwitter: () => {
        trackEvent('twitter')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .social  {
    display: flex;
    list-style-type: none;
    margin-top: 0;
    padding-left: 0;
  }

  .social__item {
    &:not(:first-child) {
      padding-left: 10vw;
    }
  }

  .social__icon {
    fill: $pure-white;
    height: 40px;
    width: 40px;
  }


  @media only screen and (min-width: 700px) {
    .social__icon {
      height: 70px;
      width: 70px;
    }
  }

  @media only screen and (min-width: 1024px) {
    .social__icon {
      transition: all 150ms ease-out;
    }

    .youtube__link:hover {
      svg {
        fill: $youtube;
      }
    }

    .patreon__link:hover {
      svg {
        fill: $patreon;
      }
    }

    .instagram__link:hover {
      svg {
        fill: $instagram;
      }
    }

    .twitter__link:hover {
      svg {
        fill: $twitter;
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    .social__icon {
      height: 70px;
      width: 70px;
    }
  }
</style>
