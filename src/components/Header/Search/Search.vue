<template>
  <form
          class="header-search-form"
          @submit.prevent=""
  >
    <TextField
            type="search"
            :placeholder="placeholder"
            :name="name"
    />
    <Button colorStyle="search" type="submit" modificationClass="header-search-form__submit">
      <Icon
              name="search"
              fill="#2727a4"
              :width="20"
              :height="20"
      />
    </Button>
  </form>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { LANGUAGE_CONSTANTS } from 'store/modules';
  import lang from './lang';
  import TextField from 'components/Fields/TextField'
  import Button from 'components/Button'
  import Icon from 'components/Icon';


  export default {
    name: 'HeaderSearch',
    components: {
      TextField,
      Button,
      Icon
    },
    computed: {
      ...mapGetters({
        language: LANGUAGE_CONSTANTS.GET_LANGUAGE,
      }),
      name: function () {
        return lang[this.language].search.name
      },
      placeholder: function () {
        return lang[this.language].search.placeholder
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../styles/_variables';

  .header-search-form {
    max-width: 50%;
    display: flex;
    margin: 0 30px;
    flex: 1;
    border: 1px solid $gray-light;
    background-color: $gray-light;
    outline: none;
    border-radius: 20px;

    button {
      padding: 11px;
    }
  }

  .header-search-form__submit {
    &:hover {
      svg {
        fill: $white;
      }
    }
  }

</style>
