<template>
  <div id="contact" class="contact__wrapper padding__wrapper">
    <div class="content__wrapper contact">
        <h2>{{ $t("contact.title") }}</h2>

      <form action="https://formspree.io/connect@adrianpayne.me" method="POST" min="1" >
        <div>
          <input name="_replyto" type="email" required />
          <label for="_replyto">{{ $t("contact.emailLabel") }}</label>
        </div>
        <div>
          <textarea name="message" required></textarea>
          <label for="message">{{ $t("contact.commentLabel") }}</label>
        </div>
        <button class="button button--submit" type="submit">{{ $t("contact.button") }}</button>
      </form>
    </div>
  </div>
</template>

<script>
  import ArrowDivider from '~/components/atoms/ArrowDivider.vue'

  const toggleFieldClass = (target) => {
    if (target.value.length > 0) {
      target.classList.add('has--text')
    } else {
      target.classList.remove('has--text')
    }
  }

  export default {
    components: {
      ArrowDivider
    },
    mounted () {
      const inputs = document.querySelectorAll('input')
      const textarea = document.querySelector('textarea')

      toggleFieldClass(textarea)

      for (let i = 0; i < inputs.length; i++) {
        toggleFieldClass(inputs[i])
        inputs[i].addEventListener('change', (e) => {
          toggleFieldClass(e.currentTarget)
        })
      }

      textarea.addEventListener('change', (e) => {
        toggleFieldClass(e.currentTarget)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .contact__wrapper {
    position: relative;
    overflow: hidden;
    padding-bottom: $padding * 4;
  }

  .contact {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:before {
      background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFFFFF00', endColorstr='#FFFFFF',GradientType=0 ); /* IE6-9 */
      content: '';
      position: absolute;
      height: 150px;
      top: 0;
      width: 100vw;
      z-index: 0;
    }
  }

  h2 {
    z-index: 2;
    margin-bottom: $padding * 2;
  }

  form {
    max-width: 500px;
    margin: 0 auto;
    width: 100%;

    > div {
      position: relative;
    }
  }

  label {
    color: $pure-white;
    transition: all 150ms ease-out;
    pointer-events: none;
    position: absolute;
    left: $padding / 2;
    top: 0;
    transform: translateY(19px);
    font-size: 1rem;
  }

  input {
    height: 60px;
  }

  textarea {
    height: 150px;
  }

  button {
    padding: 15px;
  }

  .button--submit {
    border: 0;
    background: darken($emerald, 15%);
    background-size: 27px;

    &:hover {
      background-color: darken($emerald, 20%);
    }
  }

  input,
  textarea {
    background: $pickled-bluewood;
    border: none;
    color: $pure-white;
    margin-bottom: $padding;
    padding: 27px 15px 10px 15px;
  }

  input,
  textarea,
  button {
    display: block;
    font-family: $font-family;
    font-size: 1.1rem;
    width: 100%;
  }

  .has--text,
  input:focus,
  textarea:focus {
    outline: none;

    + label {
      font-weight: 700;
      font-size: 0.8rem;
      transform: translateY(8px);
    }
  }
</style>
