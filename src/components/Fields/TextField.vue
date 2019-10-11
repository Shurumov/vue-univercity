<template>
  <input
          v-if="type === 'search'"
          :name="name"
          :placeholder="placeholder"
          class="header-search-form__control header-search-form__input"
  />
  <input
          v-else
          :name="name"
          :placeholder="placeholder"
  />
</template>

<script>

  export default {
    name: 'TextField',
    props: {
      type: String,
      placeholder: String,
      name: String,
      meta: Object,
    },
    components: {},
    data() {
      return {}
    },
    computed: {
    },
    methods: {}
  }
</script>

<style lang="scss">
  @import '../../styles/_variables';

  .header-search-form {
    &__control {
      display: block;
      width: 100%;
      padding: 10px 12px;
      border-radius: 20px;
      font-size: 16px;
      line-height: 1.43;
      color: $banner-background-color;
      background-color: transparent;
      background-image: none;
      border: 0;
      box-shadow: none;
      transition: border-color ease-in-out 0.08s, box-shadow ease-in-out 0.08s;

      &:focus {
        border-color: $button-search-color;
        border-right-color: transparent;
        box-shadow: none;
      }
    }

    &__input {
      width: 100%;
      background-color: transparent;
      font-size: 13px;
      outline: none;
      border-radius: 20px;
    }
  }

</style>
