<template>
  <div class="carousel-curses">
    <Carousel :id="id" :data="posts" :options="options" typeItem="course" />
  </div>
</template>

<script>
  import Carousel from './CustomCarousel'

  export default {
    name: 'CarouselCourses',
    components: {
      Carousel,
    },
    props: {
      dataCourses: Object,
    },
    data() {
      return {
        options: {
          slidesToShow: 6,
          responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        }
      }
    },
    computed: {
      posts: function () {
        return this.dataCourses.posts;
      },
      id: function () {
        return this.dataCourses.id;
      },
    }
  }

</script>

<style lang="scss">
  @import 'styles/_variables';

  .button-container {
    border-bottom: 1px solid $button-search-color;
    display: flex;
    margin-bottom: 16px;
  }

</style>
