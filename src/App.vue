<template>
  <div id="app">
    <Header/>
    <FindCourse/>

    <Select
      :options="[{label: 'Canada', value: 'ca'}, {label: 'United States',value: 'us'}]"
      :defaultInputValue="{label: 'Canada', value: 'ca'}"
    />

    <div style="width: 330px">
      <Dropdown
              dropdownType="menu"
              :menu="menuStructure"
      >
        <Button
                colorStyle="transparent"
                cssModify="font-weight: normal"
        >
          Меню
        </Button>
      </Dropdown>
      <Dropdown
              dropdownType="emptyCart"
              text="Здесь мог быть ваш текст"
              linkText="А здесь ссылка"
              width="330px"
              bubblePosition="left"
      >
        <Button
                colorStyle="transparent"
                cssModify="font-weight: normal"
        >
          Кнопка дропдауна
        </Button>
      </Dropdown>
    </div>

    <Button
            type="bordered"
            :onClick="test"
            modificationClass="modClass"
    >
      123
    </Button>
    <br>
    <ButtonCoursesType
            :clickButton="test"
    />
    <br>
    <img alt="Vue logo" src="./assets/logo.png">

  </div>
</template>

<script>
  import Dropdown from './components/Dropdown';
  import ButtonCoursesType from './components/ButtonCoursesType';
  import Button from './components/Button';
  import Select from './components/Fields/Select';
  import Header from './components/Header';
  import { FindCourse } from './components/Sections'

  export default {
    name: 'app',
    components: {
      Dropdown,
      Button,
      ButtonCoursesType,
      Select,
      Header,
      FindCourse
    },
    data: function() {
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
        ]
      }
    },
    methods: {
      test: function () {
        // eslint-disable-next-line
        console.log(1);
      }
    }
  }
</script>

<style lang="scss">
  @import "./styles/global";

  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
