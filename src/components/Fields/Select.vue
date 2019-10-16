<template>
  <vSelect
          class="select-base"
          @input="onInput"
          :options="options"
          :contents="{Deselect}"
          :clearable="false"
          v-model="selected"
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
      defaultInputValue: Object,
      onInput: Function,
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
  width: 180px;
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
    width: 180px;
    padding: 0;

    &:active {
      background-color: #f7f8fa;
    }
  }
  .vs__dropdown-menu {
    margin-bottom: 1px;
    background-color: #fff;
    box-shadow: 0 4px 16px rgba(20,23,28,.25);
  }
  .vs__actions {
    padding: 8px;
    transform: rotate(180deg);
  }
}
</style>
