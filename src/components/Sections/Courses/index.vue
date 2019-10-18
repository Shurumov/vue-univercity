<template>
  <div class="courses">
    <div class="content_container">
      <div class="courses__block-selection">
        <div class="courses__block-selection_unit-container">
          <div class="courses__block-selection_unit-container-content">
            <ButtonCoursesType :clickButton="clickButton"/>
            <CarouselCourses v-if="courses" :dataCourses="courses"/>
          </div>
        </div>
        <div class="courses__block-selection_description">
          <div class="courses__block-selection_lead-test">{{title}}</div>
          <div class="courses__block-selection_sub-test">{{description}}</div>
        </div>
      </div>
      <div class="courses__block-popular">
        <div class="courses__block-popular_title">{{viewing}}</div>
        <CarouselCourses v-if="coursesPopular" :dataCourses="coursesPopular"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';
  import { LANGUAGE_CONSTANTS } from 'store/modules';
  import ButtonCoursesType from 'components/ButtonCoursesType';
  import CarouselCourses from 'components/CarouselCourses';
  import lang from './lang';

  export default {
    name: 'Courses',
    components: {
      ButtonCoursesType,
      CarouselCourses,
    },
    computed: {
      ...mapState({
        courses: state => state.coursesState.payload,
        coursesPopular: state => state.coursesState.payloadPopular,
      }),
      ...mapGetters({
        language: LANGUAGE_CONSTANTS.GET_LANGUAGE,
      }),
      title: function () {
        return lang[this.language].title;
      },
      description: function () {
        return lang[this.language].description;
      },
      viewing: function () {
        return lang[this.language].viewing;
      },
    },
    methods: {
      clickButton: function (values) {
        this.fetchCourses(values);
      },
      ...mapActions([
        'fetchCourses',
        'fetchCoursesPopular',
      ])
    },
    created() {
      this.fetchCourses('Development');
      this.fetchCoursesPopular('Popular');
    }
  }
</script>

<style lang="scss">
  @import '../../../styles/_variables';

  .courses {
    position: relative;
    margin: 0 auto 20px;
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

  .courses__block-selection {
    display: block;
  }

  .courses__block-popular {
    width: 100%;
    margin: 25px auto;
  }

  .courses__block-popular_title {
    font-size: 19px;
    font-weight: 400;
    line-height: 1.47em;
    color: $button-transparent-color;
    margin: 0 0 10px;
  }

  .courses__block-selection_description {
    background: $white;
    text-align: center;
    margin: 100px 0;
    max-width: 100%;
  }

  .courses__block-selection_lead-test {
    font-weight: 600;
    font-size: 36px;
    text-align: center;
    line-height: 1.33em;
    margin-bottom: 8px;
  }

  .courses__block-selection_sub-test {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5em;
  }

  .courses__block-selection_unit-container {
    width: 100%;
  }

  .courses__block-selection_unit-container-content {
    width: 100%;
  }

</style>
