<template>
  <div class="comments">
    <div class="comments__wrapper content_container">
      <div class="comments__wrapper_title">{{title}}</div>
      <CustomCarousel v-if="commentsStore.length > 0" id="comments" :data="commentsStore" :options="options" typeItem="comments"/>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex';
  import {LANGUAGE_CONSTANTS} from 'store/modules';
  import CustomCarousel from 'components/CustomCarousel';
  import lang from './lang';

  export default {
    name: 'Comments',
    components: {
      CustomCarousel,
    },
    data() {
      return {
        options: {
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        },
        comments: [
          {
            "title": "Borivoje",
            "icon": "",
            "description": "I don't have the time or money for a college education. My goal is to become a freelance web developer, I'm really close."
          },
          {
            "title": "Dipesh",
            "icon": "",
            "description": "I believe in lifelong learning. I've learned a lot and recommend it to all my friends.\n"
          },
          {
            "title": "Kathy",
            "icon": "",
            "description": "The courses are fantastic and the instructors are so fun and knowledgeable. I only wish we found it sooner.\n"
          },
          {
            "title": "Zulaika",
            "icon": "",
            "description": "I work in project management and joined because I get great courses for less. The instructors are fantastic, interesting, and helpful.\n"
          },
          {
            "title": "Marco",
            "icon": "",
            "description": "Thank you! You've renewed my passion for learning and my dream of becoming a web developer."
          },
          {
            "title": "Justin",
            "icon": "",
            "description": "The best part is the selection. You can find a course for anything you want to learn!"
          }
        ]
      }
    },
    computed: {
      ...mapState({
        commentsStore: state => state.commentsState.payload,
      }),
      ...mapGetters({
        language: LANGUAGE_CONSTANTS.GET_LANGUAGE,
      }),
      title: function () {
        return lang[this.language].title;
      }
    },
    methods: {
      ...mapActions([
        'fetchComments',
      ])
    },
    created() {
      this.fetchComments();
    },
  }
</script>

<style lang="scss">
  @import 'styles/_variables';

  .comments {
    background-color: white;
    position: relative;
    width: 100%;
    margin: 30px 0;
    box-shadow: 0 4px 20px 0 rgba(32, 34, 36, 0.2);
  }

  .comments__wrapper {
    margin: 30px auto 0;
    padding: 30px 15px;
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

  .comments__wrapper_title {
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    line-height: 1.33em;
    color: $banner-background-color;
    margin-bottom: 15px;
  }

</style>
