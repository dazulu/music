<template>
  <div>
    <img class="actor slide-in" src="~/static/images/actor/adrian1.png" alt="Adrian Payne" />
  </div>
</template>

<script>
  import prefetchImages from 'prefetch-image'

  export default {
    mounted () {
      const viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      if (viewWidth < 768) return

      const actor = document.querySelector('.actor')

      const images = [
        '/images/actor/adrian2.png',
        '/images/actor/adrian3.png',
        '/images/actor/adrian4.png',
        '/images/actor/adrian5.png',
        '/images/actor/adrian6.png',
        '/images/actor/adrian1.png'
      ]

      const indexTotal = images.length - 1

      let next = 0

      const changeImage = () => {
        actor.classList.remove('slide-in')

        if (next === 1) {
          actor.style.maxWidth = '700px'
          actor.style.right = '-14%'
        } else if (next === 4) {
          actor.style.maxWidth = '1000px'
          actor.style.right = ''
        } else {
          actor.style.maxWidth = ''
          actor.style.right = ''
        }

        actor.src = images[next]

        if (next === indexTotal) {
          next = 0
        } else {
          next += 1
        }

        setTimeout(() => {
          actor.classList.add('slide-in')
        }, 50)
      }

      prefetchImages(images)
        .then(() => {
          setInterval(() => {
            changeImage()
          }, 5500)
        })
    }
  }
</script>

<style lang="scss">
  .actor {
    display: none;
    opacity: 0;
  }

  .slide-in {
    animation: slideActor .8s ease-out;
    transition: opacity .2s ease-in;
    opacity: 1;
  }

  @media only screen and (min-width: 768px) {
    .actor {
      position: absolute;
      display: block;
      right: -18%;
      bottom: -30px;
      max-width: 800px;
      width: 100%;
      z-index: -1;
      animation-fill-mode: forwards;
      transform: translateY(30px);
    }
  }

  @media only screen and (min-width: 1024px) {
    .actor {
      max-width: 900px;
      width: 100%;
    }
  }

  @keyframes slideActor {
    from {
      transform: translateY(30px);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
