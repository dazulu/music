<template>
  <nav>
    <ul class="nav">
      <li class="nav__item"><a class="nav__link" href="#">Home</a></li>
      <li class="nav__item"><a class="nav__link" href="#">YouTube</a></li>
      <li class="nav__item"><a class="nav__link" href="#">Patreon</a></li>
      <li class="nav__item"><a class="nav__link" href="#">FAQ</a></li>
      <li class="nav__item"><a class="nav__link" href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
</script>

<style lang="scss">
  .nav {
    list-style-type: none;
    display: flex;
  }

  .nav__item {
    padding: 0 8px;

    $colors-list: $sunglow $dodger-blue $bright-sun $emerald $medium-purple;
    @for $i from 1 through length($colors-list) {
      &:nth-child(#{$i}) {
        a::after {
          background: nth($colors-list, $i);
        }
      }
    }
  }

  .nav__link {
    color: $pure-white;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;

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
</style>
