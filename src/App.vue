<template>
  <div id="app">
    <Menu v-show="isShowMenu"/>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'App',
  data(){
    return {
      isShowMenu : true
    }
  },
  components : {
    Menu
  },
  created(){
    if(this.$route.name == "Login" || this.$route.name == "LoginUp"){
      this.isShowMenu = false
    }else{
      this.isShowMenu = true
    }
  },
  watch : {
    $route(to){
      if(to.name == "Login" || to.name == "LoginUp"){
        this.isShowMenu = false
      }else{
        this.isShowMenu = true
      }
    }
  }
}
</script>

<style>
  body,html{
    padding: 0;
    margin: 0;
    font-size: 14px;
    color: #666666;
    background: #f5f5f5;
    height: 100%;
  }
  ul,li{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a{
    color: #409EFF;
    text-decoration: none;
  }
  p,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    font-weight: 400;
  }
</style>
