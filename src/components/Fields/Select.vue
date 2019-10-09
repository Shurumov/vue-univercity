<template>
  <vSelect
          class="select-base"
          v-model="selected"
          :options="options"
          :contents="{Deselect}"
  />
</template>

<script>
  import vSelect from 'vue-select';
  import 'vue-select/dist/vue-select.css';

  export default {
    name: 'Select',
    components: {
      vSelect,
    },
    props: {
      options: Array,
      defaultInputValue: String,
    },
    data() {
      return {
        selected: this.defaultInputValue,
        Deselect: {
          render: createElement => createElement('div', ''),
        }
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
.select-base {
  width: 160px;
  border: 1px solid #686f7a;
  border-radius: 3px;
  &:hover, &:focus {
    border-color: #29303b;
  }
  &:active {
    background-color: #f7f8fa;
  }
  .vs__dropdown-toggle {
    border: 1px solid transparent;
    border-radius: 3px;
    width: 160px;
    &:hover, &:focus {
      border-color: #29303b;
    }
    &:active {
      background-color: #f7f8fa;
    }
  }
  .vs__dropdown-menu {
    margin-bottom: 1px;
    background-color: #fff;
    box-shadow: 0 4px 16px rgba(20,23,28,.25);
  }
}
</style>
