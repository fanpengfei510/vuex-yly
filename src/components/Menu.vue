<template>
  <div class="menu">
    <el-header height="80">
      <div class="header-logo">
        <img src="../assets/nimage001.png" height="55">
        <div class="base-options">
          <i class="el-icon-bell"></i>
          <i class="el-icon-message"></i>
          <router-link to="/setting">
            <i class="el-icon-setting"></i>
          </router-link>
          <div class="user-box">
            <img src="http://attach.bbs.miui.com/forum/201201/01/011257xkfbj9cfxkumxjfz.png"/>
            <router-link to="/user">系统管理员</router-link>
          </div>
        </div>
      </div>
      <div class="header-menu">
        <div class="app-toggle" @click="bolAppDialog = true">
          <i class="el-icon-menu" style="margin-right:5px;"></i>
          {{objApp.title}}
        </div>
        <ul class="header-menu-list">
          <router-link to="/home">
            <li>首页</li>
          </router-link>
          <router-link :to="item.href" v-for="item in arrApp[0].children" :key="item.id">
            <li @click="handleMenuId(item.id)">{{item.label}}</li>
          </router-link>
        </ul>
      </div>
    </el-header>

    <el-dialog title="应用选择" :visible.sync="bolAppDialog">
      <el-row :gutter="12">
        <el-col :span="8" v-for="item in arrApp" :key="item._id">
          <el-card shadow="hover">
            <a href="javascript:void(0)" @click="handleAppClick(item)">{{item.title}}</a>
          </el-card>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "Menu",
  data() {
    return {
      bolAppDialog: false
    };
  },
  computed : {
    ...mapState({
      arrApp : state => state.menu.arrApp,
    })
  },
  methods: {
    handleAppClick(result) {
      this.$router.push("/home");
      // this.objApp = result;
      this.bolAppDialog = false;
    },
    handleMenuId(id){
      sessionStorage.setItem('menuId',id)
      this.$store.dispatch('menu/getMenuId',id)
    }
  },
  created() {
    this.$store.dispatch('menu/getApp')
    this.objApp = this.$store.state.menu.arrApp[0]
  }
};
</script>

<style lang="css">
.menu .el-header {
  border-bottom: 1px solid #eeeeee;
  background: #ffffff;
}
.menu .header-logo {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu .header-menu {
  display: flex;
  line-height: 40px;
}
.menu .header-menu .app-toggle {
  width: 200px;
  cursor: pointer;
  font-size: 16px;
}
.menu .header-menu-list li {
  padding: 0 15px;
  margin: 0 5px;
  color: #666666;
  border-top: 2px solid #ffffff;
  cursor: pointer;
  display: inline-block;
  border-left: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
  transition: all 0.2s;
  position: relative;
  top: 1px;
}
.menu .header-menu-list li:hover {
  border-top: 2px solid #409eff;
  border-left: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;
  background: #f5f5f5;
  color: #409EFF;
  position: relative;
  top: 1px;
}
.base-options{
  display: flex;
  align-items: center;
}
.base-options i {
  font-size: 21px;
  color: #999999;
  margin: 0 10px;
  cursor: pointer;
}
.base-options i:hover {
  color: #666666;
}
.user-box{
  display: flex;
  margin-left: 20px;
  align-items: center;
}
.user-box img{
  width: 35px;
  margin-right: 10px;
  border: 2px solid #999999;
  height: 35px;
  border-radius: 50%;

}
</style>