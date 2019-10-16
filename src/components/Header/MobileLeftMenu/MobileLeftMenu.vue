<template>
  <div class="mobile-menu_wrapper">
    <div
            :class="['mobile-menu__overlay', { 'mobile-menu__overlay_show': show }]"
            @click="toggleMenu"
    >

    </div>
    <nav
            :class="['mobile-nav', { 'mobile-nav_open': show }]"
    >
      <Button colorStyle="mobileLogin">{{loginTitle}}</Button>
      <hr class="mobile-nav__divider" />
      <div class="mobile-nav__menu">
        <div class="mobile-nav__menu-title">{{menuTitle}}</div>
        <ul class="mobile-nav__menu-list">
          <li v-for="item of menu" :key="item.id" >
            <a class="mobile-nav__menu-item" :href="null">
              {{item.title}}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import Button from 'components/Button';
  import lang from './lang.json';

  export default {
    name: 'MobileLeftMenu',
    props: {
      show: {
        type: Boolean,
        default: false,
      },
      toggleMenu: {
        type: Function,
        default: Function.prototype,
      },
      languageState: {
        type: Object,
      },
      language: {
        type: String
      }
    },
    components: {
      Button
    },
    data() {
      return {
      }
    },
    computed: {
      menuTitle: function () {
        return lang[this.language].menuTitle
      },
      loginTitle: function () {
        return lang[this.language].loginTitle
      },
      menu: function () {
        return lang[this.language].menu
      },
    },

    methods: {
    }
  }
</script>

<style lang="scss">
  @import '../../../styles/variables';


  .mobile-menu {
    &__overlay {
      cursor: pointer;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      transition: opacity 200ms ease-out;
      background-color: $gray-medium-2;
      visibility: hidden;
      opacity: 0;
      &_show {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  .mobile-nav {
    background: $white;
    height: 100%;
    left: 0;
    max-width: 80%;
    position: fixed;
    overflow: hidden;
    top: 0;
    width: 285px;
    transition: transform 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transform: translate3d(-100%, 0, 0);
    z-index: 110;
    &_open {
      transform: translate3d(0, 0, 0);
    }
    &__divider {
      margin: 0 16px;
      height: 0;
      background-color: $button-search-color;
      border: 0;
      border-top: 1px solid $gray;
    }
    &__menu {
      &-list {
        list-style: none;
        padding-left: 0;
      }
      &-title {
        font-size: 13px;
        color: $button-bordered-color;
        text-transform: uppercase;
        padding: 8px 16px 0;
        letter-spacing: 1px;
      }
      &-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: $banner-background-color;
        padding: 11px 16px;
        font-size: 15px;
        font-weight: 400;
        width: 100%;
        position: relative;
        &:hover {
          text-decoration: none;
          background-color: $gray-light;
          color: inherit;
        }
      }
    }
  }

</style>
