<template>
  <div class="item">
    <div class="item__wrapper">
      <div class="item__wrapper_header">
        <img :src="data.img" alt="" />
      </div>
      <div class="item__wrapper_body">
        <div>
          <div class="title">{{data.title}}</div>
          <div class="author">{{data.author}}</div>
          <div class="stars">
            <StarRatings
                    :rating="4.5"
                    active-color="#f4c150"
                    :star-size="15"
                    :show-rating="false"
                    :read-only="true"
                    :round-start-rating="false"
                    name="rating"
            />
            <span class="stars__rating">
                  <span class="stars__rating_reviews">{{data.stars}}</span>
                  <span class="stars__rating_count">({{data.rating}})</span>
                </span>
          </div>
          <div class="price">
            <div class="price__container">
              <div class="price__container_discount">{{data.currentPrice}}</div>
              <div class="price__container_regular">{{data.price}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import StarRatings from 'vue-star-rating';

  export default {
    name: 'Item',
    props: {
      data: Object,
    },
    components: {
      StarRatings,
    }
  }
</script>

<style lang="scss">
  @import '../../../styles/_variables';

  .item {
    display: inline-block;
    position: relative;
    text-align: left;
    vertical-align: top;
    width: 215px;
    height: 290px;
    margin: 5px;
    border: none;
    box-sizing: border-box;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
    transition: all 0.3s;
    border-radius: 10px;
    @media (max-width: 500px) {
      width: 100%;
      height: auto;
    }
    &:hover {

      .item__wrapper_header {
        background: $banner-background-color;
      }

      img {
        opacity: 0.5;
      }
    }
  }

  .item__wrapper {
    background: $white;
    height: 290px;
    display: block;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    @media (max-width: 500px) {
      width: 100%;
      height: auto;
    }
  }

  .item__wrapper_header {
    position: relative;
  }

  .item__wrapper_header img {
    width: 100%;
    display: block;
    height: 122px;
    object-fit: cover;
    box-shadow: 0 1px 0 0 $shadow;
    filter: sepia(0.1) grayscale(0.1) saturate(0.8);
    @media (max-width: 500px) {
      height: auto;
    }
  }

  .item__wrapper_body {
    position: relative;
    display: block;
    padding: 15px 10px 0 15px;
    font-size: small;
  }

  .item__wrapper_body .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    font-weight: 600;
    height: 42px;
    font-size: 15px;
    color: $banner-background-color;
    margin-bottom: 10px;
  }

  .item__wrapper_body .author {
    margin-bottom: 14px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: $button-bordered-color;
  }

  .item__wrapper_body .price {
    display: flex;
    justify-content: flex-end;
    min-height: 36px;
  }

  .price__container {
    flex-direction: row-reverse;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }

  .price__container_discount {
    margin-right: 0;
    white-space: nowrap;
    font-weight: 600;
    font-size: 18px;
    color: $banner-background-color;
  }

  .price__container_regular {
    margin-right: 10px;
    font-size: 13px;
    font-weight: 400;
    color: $button-bordered-color;
    text-decoration: line-through;
  }

  .item__wrapper_body .stars {
    display: flex;
    padding-top: 2px;
    margin-top: -2px;
    background: 0 0;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .stars .star-ratings {
    line-height: 1;
  }

  .stars__rating {
    margin-left: 5px;
  }

  .stars__rating_reviews {
    font-weight: 600;
    color: $button-transparent-color;
  }

  .stars__rating_count {
    font-size: 12px;
    font-weight: 400;
    color: $button-bordered-color;
    margin-left: 5px;
  }


</style>
