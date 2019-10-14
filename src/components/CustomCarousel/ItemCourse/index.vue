<template>
  <div class="course-item">
    <v-popover
            trigger="click"
            position="auto"
    >
      <Item :data="data"/>
        <Popover
          :data="data"
          slot="popover"
        />
    </v-popover>
  </div>
</template>

<script>
  import { VPopover } from 'v-tooltip';
  import Item from './Item';
  import Popover from './Popover';
  export default {
    name: 'ItemCourse',
    props: {
      data: {
        type: Object,
        default: () => {},
      }
    },
    components: {
      VPopover,
      Item,
      Popover,
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
