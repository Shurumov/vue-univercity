<template>
  <div id="app">
    <Header/>
    <FindCourse/>
    <Advantages/>
    <Courses/>
    <Recommendations/>
    <TopCategories/>
    <Comments/>
    <NonStudents/>
    <Partners/>
    <Footer/>
  </div>
</template>

<script>
  import Header from 'components/Header';
  import Footer from 'components/Footer/Footer';
  import { FindCourse, Advantages, Recommendations, NonStudents, Partners, Comments, TopCategories, Courses } from './components/Sections'

  export default {
    name: 'app',
    components: {
      Header,
      FindCourse,
      Advantages,
      Recommendations,
      NonStudents,
      Partners,
      Footer,
      Comments,
      TopCategories,
      Courses,
    },
    data: function () {
      return {
        menuStructure: [
          {
            title: 'Develop',
            icon: 'https://img.icons8.com/ios/50/000000/source-code-filled.png',
            subitems: [
              {
                title: 'All development',
              },
              {
                title: 'Web Development',
                subitems: [
                  {
                    title: 'Popular topics',
                  },
                  {
                    title: 'JS',
                  },
                  {
                    title: 'React',
                  },
                  {
                    title: 'Angular',
                  },
                  {
                    title: 'CSS',
                  },
                  {
                    title: 'PHP',
                  },
                ],
              },
              {
                title: 'Mobile apps',
                subitems: [
                  {
                    title: 'Popular topics',
                  },
                  {
                    title: 'Kotlin',
                  },
                  {
                    title: 'Xamarin',
                  },
                  {
                    title: 'XCode',
                  },
                ],
              },
            ],
          },
          {
            title: 'Business',
            icon: 'https://img.icons8.com/ios/50/000000/statistics.png',
            subitems: [
              {
                title: 'All Business',
              },
              {
                title: 'Finance',
                subitems: [
                  {
                    title: 'Popular topics',
                  },
                  {
                    title: 'Finance analise',
                  },
                  {
                    title: 'Statistics',
                  },
                ],
              },
              {
                title: 'Networking',
                subitems: [
                  {
                    title: 'Popular topics',
                  },
                  {
                    title: 'Prepare text',
                  },
                  {
                    title: 'Public speak',
                  },
                ],
              },
            ],
          },
          {
            title: 'IT',
            icon: 'https://img.icons8.com/pastel-glyph/50/000000/monitor.png',
          },
          {
            title: 'Design',
            icon: 'https://img.icons8.com/ios/50/000000/web-design.png',
          },
          {
            title: 'Marketing',
            icon: 'https://img.icons8.com/wired/50/000000/marketing.png',
          },
        ],
        itemCourse: {
          "title": "iPhone Photography | Take Professional Photos On Your iPhone",
          "author": "Dale McManus",
          "img": "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "price": "руб.4,799",
          "currentPrice": "руб.899",
          "stars": 4.8,
          "rating": "2,860",
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
      }
    },
  }
</script>

<style lang="scss">
  @import "./styles/global";
  @import "./styles/bootstrap";

  body {
    margin: 0;
  }

  #app {
    text-align: left;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
