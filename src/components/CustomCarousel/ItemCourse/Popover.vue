<template>
  <div class="item__popover">
    <div class="item__popover_update">
      {{titles.updated}} {{data.update}}
    </div>
    <div class="item__popover_title">{{data.title}}</div>
    <div class="item__popover_category">
      <span>{{data.category}}</span> | {{id}}
    </div>
    <div class="item__popover_info">
      <div class="item-info">
        <Icon name="playCircle" :width="10"/>
        <span>
          {{data.lectures}} {{titles.lectures}}
        </span>
      </div>
      <div class="item-info">
        <Icon name="clockCircle" :width="10"/>
        <span>
          {{data.hours}} {{titles.hours}}
        </span>
      </div>
      <div class="item-info">
        <Icon name="project" :width="10"/>
        <span>{{data.levels}}</span>
      </div>
    </div>
    <div class="item__popover_description">{{data.description}}</div>
    <ul class="item__popover_objective">
      <li
              v-for="(item, index) of objective"
              :key="index"
      >
        {{item}}
      </li>
    </ul>
    <div class="item__popover_buttons">
      <div class="item__popover_add-card">{{titles.cart}}</div>
      <div class="item__popover_add-wishlist">
        <Icon name="heart" :width="30" :height="30" fill="$button-blue"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Icon from '../../Icon'

  export default {
    name: 'Popover',
    props: {
      data: {
        type: Object,
        default: () => {
        },
      },
      objective: {
        type: Array,
        default: () => [],
      },
      titles: {
        type: Object,
        default: () => {
        },
      },
      id: {
        type: String,
        default: ''
      }
    },
    components: {
      Icon,
    },
  }
</script>

<style lang="scss">
  @import '../../../styles/_variables';

  .tooltip {
    display: block !important;
    z-index: 10000;

    .tooltip-inner {
      color: white;
      border-radius: 16px;
      padding: 0;
    }

    .tooltip-arrow {
      width: 0;
      height: 0;
      border-style: solid;
      position: absolute;
      margin: 5px;
      z-index: 1;
    }

    &[x-placement^="top"] {
      margin-bottom: 5px;

      .tooltip-arrow {
        border-width: 5px 5px 0 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        bottom: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &[x-placement^="bottom"] {
      margin-top: 5px;

      .tooltip-arrow {
        border-width: 0 5px 5px 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        top: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &[x-placement^="right"] {
      margin-left: 5px;

      .tooltip-arrow {
        border-width: 5px 5px 5px 0;
        border-left-color: transparent !important;
        border-top-color: transparent !important;
        border-bottom-color: transparent !important;
        left: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
      }
    }

    &[x-placement^="left"] {
      margin-right: 5px;

      .tooltip-arrow {
        border-width: 5px 0 5px 5px;
        border-top-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        right: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
      }
    }

    &.popover {
      $color: #f9f9f9;

      .popover-inner {
        max-width: 100%;
        background: $color;
        color: black;
        padding: 0;
        border-radius: 5px;
        box-shadow: 0 5px 30px rgba(black, .1);
      }

      .popover-arrow {
        border-color: $color;
      }
    }

    &[aria-hidden='true'] {
      visibility: hidden;
      opacity: 0;
      transition: opacity .15s, visibility .15s;
    }

    &[aria-hidden='false'] {
      visibility: visible;
      opacity: 1;
      transition: opacity .15s;
    }
  }

  .item__popover {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
    background-color: $white;
    width: 320px;
    padding: 15px;
    left: 200px;
    text-align: left;
    z-index: 100;
    @media (max-width: 500px) {
      width: 250px;
    }
  }

  .item__popover_update {
    color: $button-bordered-color;
    font-size: 13px;
    line-height: 1.43;
    margin-bottom: 10px;
  }

  .item__popover_title {
    visibility: visible;
    display: block !important;
    /*line-clamp: 3;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
    letter-spacing: -0.3px;
    color: $button-transparent-color;
  }

  .item__popover_description {
    display: block !important;
    /*line-clamp: 3;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    visibility: visible;
    font-size: 15px;
    line-height: 1.53;
    letter-spacing: -0.2px;
    color: $button-bordered-color;
    padding-top: 10px;
  }

  .item__popover_category {
    color: $button-bordered-color;
    display: block;
    font-size: 11px;
    overflow: auto;
    margin-top: 5px;
  }

  .item__popover_category span {
    color: $button-mobile-login-color;
    letter-spacing: -0.2px;
  }

  .item__popover_buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  .item__popover_add-card {
    color: $white;
    background-color: $button-blue;
    border: 1px solid transparent;
    padding: 16px 12px;
    font-size: 15px;
    line-height: 1.35135;
    border-radius: 2px;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }

  .item__popover_add-card:hover {
    background-color: $button-blue-hover;
  }

  .item__popover_add-wishlist {
    margin-left: 15px;
    color: $button-blue;
    font-size: 24px;
    cursor: pointer;
    line-height: 1;
  }

  .item__popover_info {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    line-height: 1.43;
    font-size: 13px;
    color: $button-bordered-color;
    font-weight: 400;
    padding: 5px 0;
  }

  .item__popover_info .item-info {
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
    }
  }

  .item__popover_objective {
    padding-left: 20px;
    margin-top: 10px;
  }

  .item__popover_objective li {
    margin-bottom: 10px;
    max-height: 54px;
    font-size: 13px;
    letter-spacing: -0.2px;
    color: $button-bordered-color;
  }

</style>
