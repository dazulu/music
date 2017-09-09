<template>
  <div>
    <nav role="navigation">
      <ul class="nav">
        <li class="nav__item"><a class="nav__link" href="#">About</a></li>
        <li class="nav__item">
          <a class="nav__link" href="https://www.youtube.com/channel/UCNYBL7n1Jk9CM3NRqapHaqw">
            <svg class="social__icon youtube__icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24z"/></svg>
            YouTube
            </a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="https://www.patreon.com/adrianpayne">
            <svg class="social__icon patreon__icon" aria-labelledby="simpleicons-patreon-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="simpleicons-patreon-icon">Patreon icon</title><path d="M0 11.669C0 6.079 4.54.839 10.527.089c4.289-.499 7.534 1.148 9.78 3.294 2.093 1.995 3.341 4.542 3.642 7.538.249 3-.398 5.594-2.145 8.038-1.745 2.402-5.19 5.041-9.48 5.041H6.486V12.479c.051-2.545.899-4.742 3.99-5.79 2.695-.799 5.839.697 6.787 3.543.99 3.045-.45 5.09-2.145 6.338-1.711 1.248-4.35 1.248-6.09.051v3.943c1.139.557 2.594.707 3.645.645 3.779-.539 6.735-2.684 7.98-5.938 1.289-3.436.39-7.44-2.295-9.93-3.24-2.655-6.796-3.301-10.576-1.455-2.654 1.35-4.5 4.094-4.949 7.094v13.018H.045L0 11.669z"/></svg>
            Patreon
          </a>
        </li>
        <li class="nav__item"><a class="nav__link" href="#">F.A.Q.</a></li>
        <li class="nav__item"><a class="nav__link" href="#">Contact</a></li>
      </ul>
    </nav>
    <BurgerButton />
  </div>
</template>

<script>
  import BurgerButton from '~/components/atoms/BurgerButton.vue'

  export default {
    components: {
      BurgerButton
    }
  }
</script>

<style lang="scss" scoped>
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
    color: $pure-white;
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

  @media only screen and (min-width: 768px) {
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

      $colors-list: $dodger-blue $sunglow $bright-sun $emerald $medium-purple;
      @for $i from 1 through length($colors-list) {
        &:nth-child(#{$i}) {
          &::after {
            background: nth($colors-list, $i);
          }
        }
      }

      &:last-child {
        margin-right: 0;
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
  }
</style>
