<template>
  <li class="dropdown__menu-item" @mouseenter="this.toggleLevel" @mouseleave="this.toggleLevel">
    <a :href="null" class="dropdown__link">
      <img v-if="item.icon" :src="item.icon" alt=""/>
      <span class="text">{{item.title}}</span>
      <Icon
              v-if="item.subitems"
              name="arrowRight"
              :width="10"
              :height="10"
      />
    </a>
    <ul v-if="item.subitems && displaySubLevel" class="dropdown__menu-sub-level">
      <DropdownItem
              v-for="(item, index) in this.item.subitems"
              :item="item"
              :key="index"
      />
    </ul>
  </li>
</template>

<script>
  import Icon from 'components/Icon';

  export default {
    name: 'DropdownItem',
    props: {
      item: Object,
    },
    components: {
      Icon,
    },
    data() {
      return {
        displaySubLevel: false,
      }
    },
    computed: {},
    methods: {
      toggleLevel: function () {
        this.displaySubLevel = !this.displaySubLevel;
      }
    }
  }
</script>

<style lang="scss">
  @import 'styles/_variables';

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
