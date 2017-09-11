<template>
  <div id="faq" class="padding__wrapper">
    <div class="content__wrapper faq">
        <h2>Frequently Asked Questions</h2>
        <div class="columns">
          <div>
            <h3>What gear do you use to record audio?</h3>
            <p>I switch between using a <a href="http://www.rode.com/microphones/nt-usb"><em>RØDE NT-USB</em></a> and a <a href="http://www.rode.com/microphones/nt1-a"><em>RØDE NT1-A</em></a> condenser mic put through a <a href="https://us.focusrite.com/usb-audio-interfaces/scarlett-2i2"><em>Focusrite Scarlett 2i2</em></a>. Sadly, my laptop has trouble with the latter combination so I only record with that on my PC.</p>
          </div>

          <div>
            <h3>What gear do you use to record video?</h3>
            <p>I use a <a href="http://www.logitech.com/en-us/product/c922-pro-stream-webcam"><em>Logitech Pro Stream C922</em></a>. It's okay but it's not really made for this type of video recording so I don't get the quality I'd like with it. Looking out for a cheap Canon T3i (600D)!</p>
          </div>
              
          <div>
            <h3>What software do you use to create videos?</h3>
            <p>While I'd love to get my hands on Adobe Premiere and After Affects, I currently use <a href="https://www.google.de/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwitmqrI8pzWAhUGPRQKHXOXC80QFgg4MAA&url=https%3A%2F%2Ffilmora.wondershare.com%2F&usg=AFQjCNHtgaOZZj3Vq5-dV98eQQQhcxNJOg"><em>Wondershare Filmora</em></a> which I picked up cheap in a deal. It gets the job done for now!</p>
          </div>
              
          <div>
            <h3>What software do you use to edit audio?</h3>
            <p>I use the completely free program <a href="http://www.audacityteam.org/"><em>Audacity</em></a> for all audio editing.</p>
          </div>
              
          <div>
            <h3>Where are you from?</h3>
            <p>Born and raised in the Republic of Ireland 🇮🇪</p>
          </div>
              
          <div>
            <h3>Who made your website?</h3>
            <p>All me! When not singing, I'm a web developer, which is what I learned in that blurry university period of life.</p>
          </div>
              
          <div>
            <h3>Have you ever had voice training?</h3>
            <p>I started getting voice lessons recently with <a href="http://www.birtekoenigshoff.de/">birtekoenigshoff.de</a>. Up until last year I had no training apart from listening to my dad rehearsing musical theatre when I was a kid. It stuck with me and I love that stuff!</p>
          </div>
              
          <div>
            <h3>Where can I find you on social media?</h3>
            <ul>
              <li><strong>YouTube: </strong> <a href="https://www.youtube.com/channel/UCNYBL7n1Jk9CM3NRqapHaqw">Adrian Payne's YouTube channel</a></li>
              <li><strong>Patreon: </strong> <a href="https://www.patreon.com/adrianpayne">patreon.com/adrianpayne</a></li>
              <li><strong>Twitter: </strong> <a href="https://twitter.com/dazulu">twitter.com/dazulu</a></li>
              <li><strong>Instagram: </strong> <a href="https://www.instagram.com/teach_solais/">instagram.com/teach_solais</a> and <a href="https://www.instagram.com/adrianpaynemusic/">instagram.com/adrianpaynemusic</a></li>
            </ul>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  h2 {
    font-size: 2.2rem;
    margin-top: 0;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }

  li {
    word-wrap: break-word;
    font-size: 1.2rem;
    margin-bottom: 3px;
  }

  @media only screen and (min-width: 700px) {
    .columns {
      column-gap: $padding * 2;
      column-count: 2;
      column-rule: 1px dotted #ddd;
      break-inside: avoid;
    }
  }
</style>
