<template>
  <div class="dropdown" @mouseenter="this.toggleBubble" @mouseleave="this.toggleBubble">
    <slot/>

    <div
      v-if="displayBubble"
      :class="['dropdown__bubble', dropdownClasses]"
      :style="{'width': width}"
    >
    <Menu
        v-if="dropdownType === 'menu'"
        :menu="menu"
    />

    <EmptyCart
      v-else-if="dropdownType === 'emptyCart'"
      :text="text"
      :linkText="linkText"
    />

    </div>
  </div>
</template>

<script>
  import Menu from './Menu'
  import EmptyCart from './EmptyCart'

  export default {
    name: 'Dropdown',
    components: {
      Menu,
      EmptyCart,
    },
    props: {
      dropdownType: String,
      menu: Array,
      text: String,
      linkText: String,
      width: String,
      bubblePosition: String,
      isMobile: Boolean,
    },
    data() {
      return {
        displayBubble: false,
      }
    },
    computed: {
      dropdownClasses: function () {
        return {
          dropdown__bubble_right: this.bubblePosition === 'left',
          dropdown__bubble_mobile: this.isMobile,
        }
      }
    },
    methods: {
      toggleBubble: function () {
        this.displayBubble = !this.displayBubble;
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/_variables';

  .dropdown {
    position: relative;
    height: 100%;
    &__bubble {
      position: absolute;
      top: calc(100% - 2px);
      left: 0;
      z-index: 1000;
      display: block;
      float: left;
      min-width: 160px;
      max-width: calc(100vw - 30px);
      padding: 5px 0;
      margin: 2px 0 0;
      list-style: none;
      font-size: 15px;
      text-align: left;
      background-color: $white;
      border: none;
      box-shadow: 0 4px 16px $button-transparent-hover-background;
      background-clip: padding-box;
      &:before {
        border-color: transparent transparent $gray transparent;
        top: -12px;
        border-style: solid;
        border-width: 0 10px 11px;
        content: '';
        height: 0;
        position: absolute;
        left: 14px;
        width: 0;
      }
      &:after {
        border-style: solid;
        border-width: 0 10px 11px;
        content: '';
        height: 0;
        position: absolute;
        left: 14px;
        width: 0;
        border-color: transparent transparent $white transparent;
        top: -10px;
      }
      &_right {
        left: unset;
        right: 0;
        &:before {
          left: unset;
          right: 14px;
        }
        &:after {
          left: unset;
          right: 14px;
        }
      }
      &_mobile {
        top: calc(100% + 9px);
      }
    }
  }

</style>
