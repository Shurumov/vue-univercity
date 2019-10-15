<template>
  <slick
          :options="settings">
    <fragment v-if="typeItem === 'comments'">
      <ItemComment v-for="(item, index) of data"
                   :data="item"
                   :key="index"
      />
    </fragment>
    <fragment v-else-if="typeItem === 'course'">
      <ItemCourse v-for="(item, index) of data"
                  :data="item"
                  :key="index"
                  :id="id"
      />
    </fragment>
  </slick>
</template>

<script>
  import ItemComment from './ItemComment';
  import ItemCourse from './ItemCourse';
  import Slick from 'vue-slick';
  import { Fragment } from 'vue-fragment';

  export default {
    name: 'CustomCarousel',
    props: {
      data: Array,
      options: Object,
      typeItem: String,
      id: String,
    },
    components: {
      ItemComment,
      ItemCourse,
      Slick,
      Fragment
    },
    data() {
      return {
        settings: {
          dots: false,
          infinite: true,
          slidesToScroll: 1,
          initialSlide: 0,
          prevArrow: '<div class="carousel__arrow carousel__arrow-left"><</div>',
          nextArrow: '<div class="carousel__arrow carousel__arrow-right">></div>',
          ...this.options,
        }
      }
    },
  }
</script>

<style lang="scss">
  @import '../../styles/_variables';

  .carousel {
    width: 100%;
  }

  .carousel__arrow {
    cursor: pointer;
    box-shadow: 0 2px 8px 2px $button-transparent-hover-background;
    background-color: $white;
    border-radius: 50%;
    border: none;
    color: $button-mobile-login-color;
    font-size: 36px;
    height: 47px;
    width: 47px;
    top: 39%;
    transform: translateY(-50%);
    transition: 300ms;
    z-index: 3;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-slider {
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
  }

  .slick-track {
    align-items: stretch;
    display: flex !important;
    padding-bottom: 2px;
  }

  .slick-slide {
    margin: 0 10px;
    height: auto !important;
  }

  .slick-slide > div {
    height: 100%;
  }

  .slick-list {
    overflow: hidden;
  }

  .carousel__arrow:hover {
    box-shadow: 0 2px 8px 2px $button-transparent-hover-background;

    svg {
      fill: $arrow-hover;
    }
  }

  .carousel__arrow-left {
    left: 0;
    @media (max-width: 768px) {
      left: 0;
    }
  }

  .carousel__arrow-right {
    right: 0;
    transform: translateX(50%) translateY(-50%);
    @media (max-width: 768px) {
      right: 0;
    }
  }


</style>
