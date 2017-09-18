<template>
  <div class="button__wrapper">
    <a
      v-if="type === 'patreon'"
      v-on:click="toPatreon"
      target="_blank"
      rel="noopener"
      class="button button--patreon"
      href="https://www.patreon.com/adrianpayne"
    >
      <svg class="icon icon--patreon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 96">
        <g fill="none" fill-rule="evenodd">
          <path fill="#FFFFFF" d="M64.1102,0.1004 C44.259,0.1004 28.1086,16.2486 28.1086,36.0986 C28.1086,55.8884 44.259,71.989 64.1102,71.989 C83.9,71.989 100,55.8884 100,36.0986 C100,16.2486 83.9,0.1004 64.1102,0.1004"/>
          <polygon fill="#052D49" points=".012 95.988 17.59 95.988 17.59 .1 .012 .1"/>
        </g>
      </svg>
      {{ $t(text) }}
    </a>
    <a
      v-if="type === 'youtube'"
      v-on:click="toYouTube"
      target="_blank"
      rel="noopener"
      class="button button--youtube"
      href="https://www.youtube.com/channel/UCNYBL7n1Jk9CM3NRqapHaqw"
      >
        <svg class="icon icon--youtube" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24z"/></svg>
        {{ $t(text) }}
    </a>
  </div>
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
      }
    },
    props: {
      type: {
        type: String,
        default: 'patreon'
      },
      text: {
        type: String,
        default: 'BECOME A PATRON!'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button__wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .button--patreon {
    background-color: $patreon;
    color: $pure-white;
    position: relative;
    padding-left: 50px;
    margin-right: $paddingButton;
    margin-bottom: $paddingButton;

    &:hover {
      background-color: darken($patreon, 5%);
    }
  }

  .button--youtube {
    color: $pure-white;
    background: $youtube;
    position: relative;
    padding-left: 52px;

    &:hover {
      background-color: darken($youtube, 5%);
    }
  }

  .icon {
    fill: $pure-white;
    position: absolute;
    left: 12px;
  }

  .icon--youtube {
    height: 30px;
    top: 10px;
  }

  .icon--patreon {
    height: 27px;
    top: 12px;
  }
</style>
