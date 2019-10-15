<template>
  <div class="course-item">
    <v-popover
            trigger="click"
            position="auto"
    >
      <Item :data="data"/>
      <Popover
              :data="data"
              :objective="data.objective"
              :titles="titles"
              slot="popover"
      />
    </v-popover>
  </div>
</template>

<script>
  import {VPopover} from 'v-tooltip';
  import Item from './Item';
  import Popover from './Popover';
  import lang from './lang';

  export default {
    name: 'ItemCourse',
    props: {
      data: {
        type: Object,
        default: () => {
        },
      },
      language: {
        type: String,
        default: 'EN',
      }
    },
    components: {
      VPopover,
      Item,
      Popover,
    },
    computed: {
      titles: function () {
        return lang[this.language];
      }
    }
  }
</script>

<style lang="scss">
  .course-item {
    position: relative;
  }

  .popup-content {
    width: 320px !important;
    max-width: 320px !important;
    border: none !important;
    padding: 0 !important;
  }

</style>
