<template>
  <div id="faq" class="padding__wrapper">
    <div class="content__wrapper faq">
        <h2 class="faq__title">{{ $t("faq.title") }}</h2>
        <div class="grid">
            <div v-for="item of $t('faq.questions')">
              <h3>{{ item.question }}</h3>
              <div v-html="item.answer"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      toGithub: () => {
        if (typeof window !== 'undefined' && typeof window.ga !== 'undefined') {
          window.ga('send', 'event', 'social', 'navigate', 'github-link')
        }
      }
    }
  }
</script>

<style lang="scss">
  .faq__title {
    text-align: center;
    margin-bottom: $padding * 2;
  }

  ul {
    padding-left: 20px;
  }

  .grid li {
    word-wrap: break-word;
    font-size: 1.2rem;
    line-height: 1.7rem;
    margin-bottom: 3px;
  }

  @media only screen and (min-width:640px) {
    .grid {
        display: grid;
        grid-gap: 4%;
        grid-template-columns: repeat(2, 48%);
    }
  }

    @media only screen and (min-width:1200px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
