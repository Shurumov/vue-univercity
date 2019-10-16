<template>
  <section class="non-student">
    <div v-for="item of invites" class="non-student__block" :key="item.id">
      <div class="non-student__block-text">
        <a :href="null" class="non-student__block-title">
          {{item.title}}
        </a>
        <div class="non-student__block-description">{{item.description}}</div>
        <div class="non-student__block-button">
          <Button colorStyle="colored">{{item.btnTitle}}</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import lang from './lang';
  import Button from 'components/Button';

  export default {
    name: 'Advantages',
    components: {
      Button,
    },
    props: {
      language: {
        type: String,
        default: 'EN'
      }
    },
    computed: {
      invites: function () {
        return lang[this.language].invites;
      },
    }
  }
</script>

<style lang="scss">
  @import '../../../styles/_variables';

  .non-student {
    background: white;
    display: flex;
    flex-direction: row;
    padding: 30px 0;
    @media (max-width: 768px) {
      flex-direction: column;
      padding-bottom: 22px;
    }

    &__block {
      flex: 1;
      padding: 28px 30px;
      text-align: center;
      &:first-child {
        border-bottom: none;
        @media (max-width: 768px) {
          border-right: none;
        }
      }
      &-text {
        max-width: 80%;
        margin: 0 auto;
      }
      &-title {
        display: block;
        font-size: 19px;
        font-weight: 600;
        line-height: 1.47em;
        color: $button-transparent-color;
        &:hover {
          text-decoration: none;
          color: $button-transparent-color;
        }
      }
      &-description {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5em;
        padding-top: 5px;
        @media (max-width: 768px) {
          padding-top: 3px;
        }
      }
      &-button {
        padding-top: 20px;
        text-align: center;
      }
    }
  }

</style>
