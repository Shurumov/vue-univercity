<template>
  <div class="item-comment">
    <div class="item-comment__info">

      <img
              v-if="data.icon !== ''"
              class="item-comment__info_icon"
              :src="data.icon"
              alt=""
      />
      <div
              v-else
              class="item-comment__info_noIcon"
      >
        {{letter}}
      </div>

      <div class="item-comment__info_name">{{data.title}}</div>
    </div>
    <div class="item-comment__description">{{data.description}}</div>
  </div>
</template>

<script>
  export default {
    name: 'ItemComment',
    props: {
      data: Object,
    },
    computed: {
      letter: function() {
        return this.data.title.substr(0, 1);
      },
    }
  }
</script>

<style lang="scss">
  @import '../../styles/variables';

  .item-comment {
    background-color: $gray-light-2;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 260px;
    padding: 32px;
    margin: 10px;
    text-align: left;
  }

  .item-comment__info {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5em;
    align-items: center;
    display: flex;
    margin-bottom: 18px;
  }

  .item-comment__info_icon {
    width: 64px;
    height: 64px;
    margin-right: 18px;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
    max-width: 100%;
  }

  .item-comment__info_noIcon {
    width: 64px;
    height: 64px;
    margin-right: 18px;
    border-radius: 50%;
    background-color: $gray-dark;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: $white;
  }

  .item-comment__info_name {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5em;
  }

  .item-comment__description {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5em;
  }

</style>
