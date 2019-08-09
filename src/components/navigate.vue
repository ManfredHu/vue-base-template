<template>
  <ul class="navigate">
    <li
      class="navigate-item"
      v-for="(item, key, index) in categories"
      :key="index"
    >
      <a
        class="navigate-item-link"
        :href="item.link"
      >{{ item.text }}</a>
    </li>
  </ul>
</template>

<script>
import baseComponent from '../base/baseComponent'
export default {
  extends: baseComponent,
  name: 'global-navigate',
  data() {
    return {
      categories: [
        {
          text: 'home',
          link: 'https://manfredhu.com/'
        },
        {
          text: 'archives',
          link: 'https://manfredhu.com/archives/'
        },
        {
          text: 'categories',
          link: 'https://manfredhu.com/categories/'
        },
        {
          text: 'tags',
          link: 'https://manfredhu.com/tags/'
        },
        {
          text: 'about',
          link: 'https://manfredhu.com/about/'
        }
      ]
    }
  },
  created() {
    console.log('inherited from baseComponent: ', this.$data._baseName)
  }
}
</script>

<style scope lang="less">
@bg: #1aad19;
.navigate {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  list-style-type: none;
  display: flex;
  justify-content: center;
  font-size: 26 / @rem;
  &-item {
    display: flex;
    justify-content: space-between;
    // &+&{ //tips: using brother selector
    //   margin-left: 5/@rem;
    // }
    &-link {
      display: block;
      color: #fff;
      text-align: center;
      padding: 4px 8px;
      text-transform: uppercase;
      background-color: #bebebe;
      text-decoration: none;
      transition: 0.5s background linear;
      &:hover {
        transition: 0.5s background linear;
        background: @bg;
      }
    }
  }
}
</style>
