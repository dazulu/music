<template>
  <div id="about" class="padding__wrapper">
    <div class="content__wrapper about">

      <div class="text">
        <h2>{{ $t("about.title") }}</h2>
        <div v-html="$t('about.text')"></div>
      </div>

      <div class="video">
        <div class='embed-container'>
          <iframe src='https://www.youtube.com/embed/kBYbkUJE53A' frameborder='0' allowfullscreen></iframe>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.about__wrapper {
  background: $pure-white;
  padding-top: $padding * 2;
  padding-bottom: $padding * 3;
}

.text {
  margin-bottom: $padding * 2;
}

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media only screen and (min-width: 800px) {
  .about {
    display: flex;
  }

  .text {
    flex: 1.3;
    margin-right: $padding;
    margin-bottom: 0;
  }

  .video {
    position: relative;
    margin-top: 2%;
    flex: 1;
  }
}
</style>
