

<template>
  <div>
    <div :class="{ red: isRed }" @click="setBackgroundRed">{{ fullName }}</div>
    <div class="mt" v-on:click="toggle">Toggle</div>
    <div v-show="display">Now you see me</div>
    <div class="mt" v-for="(item, index) in list" :key="item.id">{{`${item.title} ${index}`}}</div>

    <form @submit.prevent="onSubmit"></form>
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'Example',
    props: {
      list: Array,
    },
    data() {
      return {
        firsName: 'Vasya',
        lastName: 'Pupkin',
        isRed: false,
        display: false,
      }
    },
    computed: {
      fullName: function () {
        return `${this.firsName} ${this.lastName}`
      }
    },
    methods: {
      onSubmit(){},
      setBackgroundRed() {
        this.isRed = !this.isRed;
      },
      toggle() {
        this.display = !this.display;
      }
    }
  }
</script>

<style lang="scss">
  $red: red;
  .red {
    background-color: $red;
  }
  .mt {
    margin-top: 10px;
  }
</style>
