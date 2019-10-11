<template>
  <div
          class="wrapper"
          :style="styleObject"
  >
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'Wrapper',
    props: {
      margin: String,
      padding: String
    },
    data() {
      return {
        styleObject: {
          margin: this.margin,
          padding: this.padding
        }
      }
    }
  }
</script>

<style lang="scss">
  .wrapper {
    max-width: 400px;
    /*height: 100%;*/
    display: flex;
  }
</style>
