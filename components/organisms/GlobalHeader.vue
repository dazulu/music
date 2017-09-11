<template>
  <div class="content__wrapper">
    <div class="header">
      <Logo />
      <Navigation />
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/atoms/Logo.vue'
  import Navigation from '~/components/molecules/Navigation.vue'
  
  export default {
    components: {
      Logo,
      Navigation
    },
    mounted () {
      const header = document.querySelector('.content__wrapper')
      const sticky = 'sticky'
      let ticking = false

      const toggleStickyHeader = () => {
        const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
        if (scrollTop > 80) {
          header.classList.add(sticky)
        } else {
          header.classList.remove(sticky)
        }
      }

      toggleStickyHeader()

      document.addEventListener('scroll', function (e) {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            toggleStickyHeader()
            ticking = false
          })
        }
        ticking = true
      })
    }
  }
</script>

<style lang="scss">
  .header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 300ms ease;
  }

  .header__sub {
    display: flex;
    justify-content: flex-end;
  }

  @media only screen and (min-width: 768px) {
    .sticky {
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
      background: rgba(255,255,255,0.97);
      position: fixed;
      animation: reveal 150ms ease;
      animation-fill-mode: forwards;
      width: 100%;
      z-index: 11;

      .header {
        height: 53px;
      }
    }
  }

  @keyframes reveal {
    from {
      transform: translateY(-53px);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
