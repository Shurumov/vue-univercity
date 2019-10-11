<template>
  <svg
          :stroke="stroke"
          :strokeWidth="strokeWidth+'px'"
          :height="height+'px'"
          :width="width+'px'"
          :fill="fill"
          :class="['svg-icon', className]"
  >
    <use :href="'#'+glyph.id"></use>
  </svg>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      stroke: String,
      glyph: Object,
      fill: String,
      height: Number,
      width: Number,
      strokeWidth: Number,
      className: String,
    }
  }

  const GLYPH = {};
  GLYPH.catalog = require('../icons/catalog.svg').default;
  // GLYPH.shoppingCart = require('/assets/icons/shoppingCart.svg').default;
  // GLYPH.menu = require('/assets/icons/menu.svg').default;
  // GLYPH.search = require('/assets/icons/search.svg').default;
  // GLYPH.edit = require('/assets/icons/edit.svg').default;
  // GLYPH.check = require('/assets/icons/check.svg').default;
  // GLYPH.clockCircle = require('/assets/icons/clockCircle.svg').default;
  // GLYPH.calculator = require('/assets/icons/calculator.svg').default;
  // GLYPH.barChart = require('/assets/icons/barChart.svg').default;
  // GLYPH.desktop = require('/assets/icons/desktop.svg').default;
  // GLYPH.dashboard = require('/assets/icons/dashboard.svg').default;
  // GLYPH.control = require('/assets/icons/control.svg').default;
  // GLYPH.lock = require('/assets/icons/lock.svg').default;
  // GLYPH.camera = require('/assets/icons/camera.svg').default;
  // GLYPH.sound = require('/assets/icons/sound.svg').default;
  // GLYPH.playCircle = require('/assets/icons/playCircle.svg').default;
  // GLYPH.project = require('/assets/icons/project.svg').default;
  // GLYPH.heart = require('/assets/icons/heart.svg').default;
  // GLYPH.arrowLeft = require('/assets/icons/arrowLeft.svg').default;
  // GLYPH.arrowRight = require('/assets/icons/arrowRight.svg').default;
  // GLYPH.profile = require('/assets/icons/profile.svg').default;
  // GLYPH.deployment = require('/assets/icons/deployment.svg').default;
  // GLYPH.environment = require('/assets/icons/environment.svg').default;
  // GLYPH.contacts = require('/assets/icons/contacts.svg').default;
  // GLYPH.gateway = require('/assets/icons/gateway.svg').default;
  // GLYPH.barChart = require('/assets/icons/barChart.svg').default;
  // GLYPH.form = require('/assets/icons/form.svg').default;
  // GLYPH.paperClip = require('/assets/icons/paperClip.svg').default;
  // GLYPH.wifi = require('/assets/icons/wifi.svg').default;
  // GLYPH.user = require('/assets/icons/user.svg').default;
  // GLYPH.shake = require('/assets/icons/shake.svg').default;

  export { GLYPH };
</script>

<style lang="scss">
  .svg {
    &-icon {
      display: inline-block;
      position: relative;
    }

    &._middle {
      vertical-align: middle;
      line-height: initial;
    }
  }
</style>
