<template>
  <div class="button-container">
    <Button
      v-for="(option, index) of btnTitles"
      :key="index"
      :modificationClass="getClass('btn_category-toggle_active', index)"
      :onClick="() => {stateBtn(option, index); clickButton()}"
      colorStyle="category"
    >
      {{option}}
    </Button>
  </div>
</template>

<script>
  import Button from './Button';

  export default {
    name: 'ButtonCoursesType',
    components: {
      Button
    },
    props: {
      clickButton: {
        type: Function,
        default: () => {}
      },
    },
    data() {
      return {
        active: 0,
        btnTitles: [
          'Development',
          'Design',
          'Business',
          'Photography',
        ]
      }
    },
    computed: {
    },
    methods: {
      stateBtn: function (event, index) {
        this.active = index;
      },
      getClass: function(name, index) {
        if (index === this.active) return name;
        return '';
      },
    }
  }
</script>

<style lang="scss">
  @import "../styles/variables";
  .button-container {
    border-bottom: 1px solid $button-search-color;
    display: flex;
    margin-bottom: 16px;
    width: 100%;
    @media (max-width: 768px) {
      overflow-x: scroll;
    }
  }
</style>
