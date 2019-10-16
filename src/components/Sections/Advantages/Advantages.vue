<template>
  <section class="advantages-section_wrapper">
    <div class="advantages-section content_container">
      <div
              v-for="item of advantagesList"
              class="advantages-section__item" :key="item.title"
      >
        <div class="advantages-section__item-icon">
          <Icon
                  :name="item.iconType"
                  fill="#ffffff"
                  :width="42"
          />
        </div>
        <div class="advantages-section__item-text">
          <div class="advantages-section__item-title">{{item.title}}</div>
          <div class="advantages-section__item-description">{{item.description}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import lang from './lang'
  import Icon from 'components/Icon'

  export default {
    name: 'Advantages',
    components: {
      Icon,
    },
    props: {
      language: {
        type: String,
        default: 'EN'
      }
    },
    computed: {
      advantagesList: function () {
        return lang[this.language].advantages;
      },
    }
  }
</script>

<style lang="scss">
  @import '../../../styles/_variables';

  .advantages-section {
    display: flex;
    margin: 0 auto 24px;

    &_wrapper {
      background: linear-gradient(-45deg, $button-blue 0, $button-blue-hover 100%);
      @media (max-width: 767px) {
        display: none;
      }
    }

    &__item {
      display: flex;
      width: 33%;
      padding: 20px 25px;
      justify-content: center;

      &:first-of-type {
        padding-left: 0;
        justify-content: flex-start;
      }

      &:last-of-type {
        padding-right: 0;
        justify-content: flex-end;
      }

      &-icon {
        display: flex;
        align-items: flex-start;
        margin-right: 16px;
        width: 48px;
        height: auto;
        font-size: 40px;
        color: $white;
        @media (max-width: 1200px) {
          display: none;
        }
      }

      &-text {
        text-align: left;
        @media (max-width: 1200px) {
          text-align: center;
        }
      }

      &-title {
        font-size: 17px;
        display: block;
        color: $white;
        font-weight: 700;
      }

      &-description {
        font-size: 15px;
        color: $white;
      }
    }
  }

</style>
