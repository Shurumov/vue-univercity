<template>
  <div class="categories">
    <div class="content_container">
      <div class="categories__title">{{title}}</div>
      <div class="categories__items">
        <ItemCategory v-for="(item, index) of categories" :data="item" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';
  import { LANGUAGE_CONSTANTS } from 'store/modules';
  import ItemCategory from './ItemCategory'
  import lang from './lang';

  export default {
    name: 'TopCategories',
    components: {
      ItemCategory
    },

    computed: {
      ...mapState({
        categories: state => state.categoriesState.payload,
      }),
      ...mapGetters({
        language: LANGUAGE_CONSTANTS.GET_LANGUAGE,
      }),
      title: function () {
        return lang[this.language].title;
      }
    }
  }
</script>

<style lang="scss">
  @import 'styles/_variables';

  .categories {
    position: relative;
    margin: 100px auto;
    min-width: 320px;
    @media (min-width: 768px) {
      width: 750px;
    }
    @media (min-width: 992px) {
      width: 970px;
    }
    @media (min-width: 1200px) {
      width: 1170px;
    }
    @media (min-width: 1440px) {
      max-width: 1405px;
      width: 100%;
    }
  }

  .categories__title {
    font-size: 36px;
    text-align: center;
    font-weight: 600;
    line-height: 1.33em;
    margin-bottom: 8px;
    color: $banner-background-color;
  }

  .categories__items {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

</style>
