<template>
  <div class="header-controls">
    <Wrapper
            margin="0 2px"
            padding="10px 0"
    >
      <Button
              colorStyle="bordered"
      >
        {{loginTitle}}
      </Button>
    </Wrapper>
    <Wrapper
            margin="0 2px"
            padding="10px 0"
    >
      <Button
              colorStyle="colored"
      >
        {{signTitle}}
      </Button>
    </Wrapper>
  </div>
</template>

<script>
  import Button from '../../Button'
  import Wrapper from '../../Wrapper';
  import lang from './lang'

  export default {
    name: 'Cart',
    components: {
      Button,
      Wrapper,
    },
    props: {
      language: {
        type: String,
        default: 'EN'
      }
    },
    computed: {
      loginTitle: function () {
        return lang[this.language].loginTitle;
      },
      signTitle: function () {
        return lang[this.language].signTitle;
      }
    }
  }
</script>

<style lang="scss">
  .header-controls {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>
