<template>
  <div class="courses">
    <div class="content_container">
      <div class="courses__block-selection">
        <div class="courses__block-selection_unit-container">
          <div class="courses__block-selection_unit-container-content">
            <ButtonCoursesType :clickButton="clickButton"/>
            <CarouselCourses :dataCourses="payload"/>
          </div>
        </div>
        <div class="courses__block-selection_description">
          <div class="courses__block-selection_lead-test">{{title}}</div>
          <div class="courses__block-selection_sub-test">{{description}}</div>
        </div>
      </div>
      <div class="courses__block-popular">
        <div class="courses__block-popular_title">{{viewing}}</div>
        <CarouselCourses :dataCourses="payloadPopular"/>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonCoursesType from 'components/ButtonCoursesType';
  import CarouselCourses from 'components/CarouselCourses';
  import lang from './lang';

  export default {
    name: 'Courses',
    components: {
      ButtonCoursesType,
      CarouselCourses,
    },
    props: {
      language: {
        type: String,
        default: 'EN',
      }
    },
    data() {
      return {
        payload: {
          "id": "Development",
          "posts": [
            {
              "title": "Complete Python Bootcamp: Go from zero to hero in Python 3",
              "author": "Pierian Data International by Jose Portilla",
              "img": "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              "price": "руб.19,299",
              "currentPrice": "руб.899",
              "stars": 4.5,
              "rating": "149,783",
              "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
              "update": "01/2019",
              "category": "iPhone",
              "lectures": "50",
              "hours": "12,5",
              "levels": "All levels",
              "objective": [
                "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
                "You will learn how to use Databases",
                "You will learn MySQL"
              ]
            },
            {
              "title": "The Web Developer Bootcamp",
              "author": "Colt Steele",
              "img": "/assets/images/courses/625204_436a_2.jpg",
              "price": "руб.19,799",
              "currentPrice": "руб.899",
              "stars": 4.7,
              "rating": "118,998",
              "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
              "update": "01/2019",
              "category": "iPhone",
              "lectures": "50",
              "hours": "12,5",
              "levels": "All levels",
              "objective": [
                "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
                "You will learn how to use Databases",
                "You will learn MySQL"
              ]
            },
            {
              "title": "The Complete Web Developer Course 2.0",
              "author": "Rob Percival",
              "img": "/assets/images/courses/764164_de03_2.jpg",
              "price": "руб.19,799",
              "currentPrice": "руб.899",
              "stars": 4.5,
              "rating": "47,230",
              "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
              "update": "01/2019",
              "category": "iPhone",
              "lectures": "50",
              "hours": "12,5",
              "levels": "All levels",
              "objective": [
                "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
                "You will learn how to use Databases",
                "You will learn MySQL"
              ]
            },
            {
              "title": "The Complete JavaScript Course 2019: Build Real Projects!",
              "author": "Jonas Schmedtmann",
              "img": "/assets/images/courses/851712_fc61_5.jpg",
              "price": "руб.19,799",
              "currentPrice": "руб.899",
              "stars": 4.6,
              "rating": "42,953",
              "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
              "update": "01/2019",
              "category": "iPhone",
              "lectures": "50",
              "hours": "12,5",
              "levels": "All levels",
              "objective": [
                "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
                "You will learn how to use Databases",
                "You will learn MySQL"
              ]
            },
            {
              "title": "Adobe Lightroom Classic CC & CC: Photo Editing Masterclass",
              "author": "Phil Ebiner",
              "img": "/assets/images/courses/926234_4a1a_3.jpg",
              "price": "руб.19,799",
              "currentPrice": "руб.899",
              "stars": 4.4,
              "rating": "3,595",
              "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
              "update": "01/2019",
              "category": "iPhone",
              "lectures": "50",
              "hours": "12,5",
              "levels": "All levels",
              "objective": [
                "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
                "You will learn how to use Databases",
                "You will learn MySQL"
              ]
            },
            {
              "title": "The Complete Video Production Bootcamp",
              "author": "William Carnahan",
              "img": "/assets/images/courses/1027180_475e_5.jpg",
              "price": "руб.19,799",
              "currentPrice": "руб.899",
              "stars": 4.5,
              "rating": "3,639",
              "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
              "update": "01/2019",
              "category": "iPhone",
              "lectures": "50",
              "hours": "12,5",
              "levels": "All levels",
              "objective": [
                "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
                "You will learn how to use Databases",
                "You will learn MySQL"
              ]
            },
            {
              "title": "The Complete JavaScript Course 2019: Build Real Projects!",
              "author": "Jonas Schmedtmann",
              "img": "/assets/images/courses/851712_fc61_5.jpg",
              "price": "руб.19,799",
              "currentPrice": "руб.899",
              "stars": 4.6,
              "rating": "42,953",
              "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
              "update": "01/2019",
              "category": "iPhone",
              "lectures": "50",
              "hours": "12,5",
              "levels": "All levels",
              "objective": [
                "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
                "You will learn how to use Databases",
                "You will learn MySQL"
              ]
            },
            {
              "title": "Unreal Engine C++ Developer: Learn C++ and Make Video Games",
              "author": "Ben Tristem",
              "img": "/assets/images/courses/657932_c7e0_3.jpg",
              "price": "руб.19,799",
              "currentPrice": "руб.899",
              "stars": 4.4,
              "rating": "24,850",
              "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
              "update": "01/2019",
              "category": "iPhone",
              "lectures": "50",
              "hours": "12,5",
              "levels": "All levels",
              "objective": [
                "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
                "You will learn how to use Databases",
                "You will learn MySQL"
              ]
            }
          ]
        },
        payloadPopular: {
          "id": "Popular",
          "posts": [
            {
              "title": "Complete Python Bootcamp: Go from zero to hero in Python 3",
              "author": "Pierian Data International by Jose Portilla",
              "img": "/assets/images/courses/567828_67d0.jpg",
              "price": "руб.19,299",
              "currentPrice": "руб.899",
              "stars": 4.5,
              "rating": "149,783",
              "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
              "update": "01/2019",
              "category": "iPhone",
              "lectures": "50",
              "hours": "12,5",
              "levels": "All levels",
              "objective": [
                "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
                "You will learn how to use Databases",
                "You will learn MySQL"
              ]
            },
            {
              "title": "Photography Masterclass: A Complete Guide to Photography",
              "author": "Phil Ebiner",
              "img": "/assets/images/courses/1462428_639f_7.jpg",
              "price": "руб.19,799",
              "currentPrice": "руб.899",
              "stars": 4.6,
              "rating": "16,318",
              "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
              "update": "01/2019",
              "category": "iPhone",
              "lectures": "50",
              "hours": "12,5",
              "levels": "All levels",
              "objective": [
                "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
                "You will learn how to use Databases",
                "You will learn MySQL"
              ]
            },
            {
              "title": "The Complete JavaScript Course 2019: Build Real Projects!",
              "author": "Jonas Schmedtmann",
              "img": "/assets/images/courses/851712_fc61_5.jpg",
              "price": "руб.19,799",
              "currentPrice": "руб.899",
              "stars": 4.6,
              "rating": "42,953",
              "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
              "update": "01/2019",
              "category": "iPhone",
              "lectures": "50",
              "hours": "12,5",
              "levels": "All levels",
              "objective": [
                "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
                "You will learn how to use Databases",
                "You will learn MySQL"
              ]
            },
            {
              "title": "Adobe Lightroom Classic CC & CC: Photo Editing Masterclass",
              "author": "Phil Ebiner",
              "img": "/assets/images/courses/926234_4a1a_3.jpg",
              "price": "руб.19,799",
              "currentPrice": "руб.899",
              "stars": 4.4,
              "rating": "3,595",
              "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
              "update": "01/2019",
              "category": "iPhone",
              "lectures": "50",
              "hours": "12,5",
              "levels": "All levels",
              "objective": [
                "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
                "You will learn how to use Databases",
                "You will learn MySQL"
              ]
            },
            {
              "title": "The Complete Video Production Bootcamp",
              "author": "William Carnahan",
              "img": "/assets/images/courses/1027180_475e_5.jpg",
              "price": "руб.19,799",
              "currentPrice": "руб.899",
              "stars": 4.5,
              "rating": "3,639",
              "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
              "update": "01/2019",
              "category": "iPhone",
              "lectures": "50",
              "hours": "12,5",
              "levels": "All levels",
              "objective": [
                "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
                "You will learn how to use Databases",
                "You will learn MySQL"
              ]
            },
            {
              "title": "The Complete Web Developer Course 2.0",
              "author": "Rob Percival",
              "img": "/assets/images/courses/764164_de03_2.jpg",
              "price": "руб.19,799",
              "currentPrice": "руб.899",
              "stars": 4.5,
              "rating": "47,230",
              "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
              "update": "01/2019",
              "category": "iPhone",
              "lectures": "50",
              "hours": "12,5",
              "levels": "All levels",
              "objective": [
                "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
                "You will learn how to use Databases",
                "You will learn MySQL"
              ]
            },
            {
              "title": "Unreal Engine C++ Developer: Learn C++ and Make Video Games",
              "author": "Ben Tristem",
              "img": "/assets/images/courses/657932_c7e0_3.jpg",
              "price": "руб.19,799",
              "currentPrice": "руб.899",
              "stars": 4.4,
              "rating": "24,850",
              "description": "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!",
              "update": "01/2019",
              "category": "iPhone",
              "lectures": "50",
              "hours": "12,5",
              "levels": "All levels",
              "objective": [
                "You will learn to create a (CMS) Content Management System like WordPress, Drupal or Joomla",
                "You will learn how to use Databases",
                "You will learn MySQL"
              ]
            }
          ]
        }
      }
    },
    computed: {
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
      clickButton: function () {
        // eslint-disable-next-line
        console.log(1);
      }
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
