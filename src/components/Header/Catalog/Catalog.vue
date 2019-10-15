<template>
  <Dropdown
          dropdownType="menu"
          :menu="data"
          bubbleIndent="-2px"
  >
    <Wrapper
            margin="0 2px"
            padding="9px 0"
    >
      <div class="header-catalog">
        <Icon
                name="catalog"
                :width="13"
                :height="13"
        />
        {{catalogTitle}}
      </div>
    </Wrapper>
  </Dropdown>
</template>

<script>
  import Icon from '../../Icon';
  import Dropdown from '../../Dropdown';
  import Wrapper from '../../Wrapper';

  import lang from './lang';

  export default {
    name: 'Catalog',
    props: {
      language: {
        type: String,
        default: 'EN'
      }
    },
    components: {
      Icon,
      Dropdown,
      Wrapper
    },
    data: function () {
      return {
        data: [
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
    computed: {
      catalogTitle: function () {
        return lang[this.language].catalogTitle
      }
    }
  }
</script>

<style lang="scss">
  .header-catalog {
    height: 44px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-left: 10px;
    cursor: pointer;
  }
</style>
