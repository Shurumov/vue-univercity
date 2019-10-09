<template>
  <div class="dropdown__empty-cart">
    {{text}}
    <a :href="null" class="dropdown__empty-cart-link">
      {{linkText}}
    </a>
  </div>
</template>

<script>
  export default {
    name: 'EmptyCart',
    props: {
      text: {
        type: String,
        default: ''
      },
      linkText: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import '../../styles/_variables';

  .dropdown__empty-cart {
    display: block;
    border-top: none;
    text-align: center;
    padding: 20px;
    &-link {
      color: $button-mobile-login-color;
      display: block;
      margin-top: 20px;
      text-align: center;
      font-weight: 600;
      font-size: 13px;
      text-decoration: none;
      &:hover {
        color: $blue-dark;
        text-decoration: none;
      }
    }
  }
</style>
