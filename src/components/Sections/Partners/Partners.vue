<template>
  <section class="partners_main-page-wrapper">
    <div class="partners_main-page">
      <div class="partners__text">{{title}}</div>
      <a :href="null">
        <div class="partners__logos">

          <div v-for="item of partners" class="partners__logo-item" :key="item.id">
            <img :src="item.link" :width="item.width" :height="item.height" alt="" />
          </div>

        </div>
      </a>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { LANGUAGE_CONSTANTS } from 'store/modules';
  import lang from './lang';
  import adidas from './partners/adidas-logo.png'
  import booking from './partners/booking-logo.png'
  import volkswagen from './partners/volkswagen-logo.png'
  import mercedes from './partners/mercedes-logo.png'
  import pinterest from './partners/pinterest-logo.png'
  import eventbrite from './partners/eventbrite-logo.png'

  export default {
    name: 'Partners',
    data() {
      return {
        partners: [
          {
            id: 1,
            link: booking,
            width: 151,
            height: 26,
          },
          {
            id: 2,
            link: volkswagen,
            width: 32,
            height: 32,
          },
          {
            id: 3,
            link: mercedes,
            width: 118,
            height: 28,
          },
          {
            id: 4,
            link: pinterest,
            width: 115,
            height: 28,
          },
          {
            id: 5,
            link: adidas,
            width: 47,
            height: 32,
          },
          {
            id: 6,
            link: eventbrite,
            width: 115,
            height: 19,
          },
        ]
      }
    },
    computed: {
      ...mapGetters({
        language: LANGUAGE_CONSTANTS.GET_LANGUAGE,
      }),
      title: function () {
        return lang[this.language].title
      },
    }
  }
</script>

<style lang="scss">
  @import '../../../styles/_variables';

  .partners {
    &_main-page {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &-wrapper {
        padding: 30px 0 100px;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #e8e9eb;
      }
    }

    &__text {
      font-size: 36px;
      font-weight: 600;
      text-align: center;
      line-height: 1.33em;
      color: #29303b;
      margin-bottom: 15px;
      padding-top: 16px;
    }

    &__logos {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-top: 32px;
      width: 100%;
      @media (max-width: 768px) {
        width: 300px;
      }
    }

    &__logo-item {
      margin: 0 32px 8px;
      @media (max-width: 992px) {
        margin: 0 16px 8px;
      }
      @media (max-width: 768px) {
        margin: 8px 16px;
      }
    }
  }

</style>
