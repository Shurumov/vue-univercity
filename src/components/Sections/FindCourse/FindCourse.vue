<template>
  <section class="find-course">
    <div class="content_container">
      <div class="find-course__content">
        <h1 class="find-course__title">{{title}}</h1>
        <div class="find-course__description">{{description}}</div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { LANGUAGE_CONSTANTS } from 'store/modules';
  import lang from './lang'

  export default {
    name: 'FindCourse',
    computed: {
      ...mapGetters({
        language: LANGUAGE_CONSTANTS.GET_LANGUAGE,
      }),
      title: function () {
        return lang[this.language].title;
      },
      description: function () {
        return lang[this.language].description;
      },
    },
  }
</script>

<style lang="scss">
  @import '../../../styles/_variables';

  .find-course {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: $gray-dark-2;
    background-image: url("~@/assets/london-eye.jpeg");
    width: 100%;
    height: 500px;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 576px) {
      height: 300px;
    }
    &__content {
      display: block;
      text-align: center;
      margin: 0 auto;
      @media (max-width: 767px) {
        max-width: 350px;
      }
    }
    &__title {
      color: $white;
      font-size: 44px;
      font-weight: 600;
      line-height: 1.33;
      margin-bottom: 10px;
      text-shadow: 0 2px 4px $gray-medium-2;
      @media (max-width: 576px) {
        font-size: 24px;
        font-weight: 300;
        line-height: 1.17;
      }
    }
    &__description {
      font-size: 18px;
      line-height: 1.46;
      color: $white;
      margin-bottom: 20px;
      text-shadow: 0 2px 4px $gray-medium-2;
      @media (max-width: 576px) {
        font-size: 18px;
        line-height: 1.46;
      }
      @media (max-width: 360px) {
        font-size: 13px;
      }
    }
  }

</style>
