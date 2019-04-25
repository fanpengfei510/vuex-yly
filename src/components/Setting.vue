<template>
  <div class="setting">
    <el-tabs tab-position="left">
      <el-tab-pane label="菜单设置">
        <MenuSetting />
      </el-tab-pane>
      <el-tab-pane label="项目设置">
        <Project />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MenuSetting from './setting/menu';
import Project from './setting/project';
export default {
  name : 'Setting',
  data(){
    return {
      
    }
  },
  components:{
    MenuSetting,
    Project
  }
}
</script>

<style lang="css">
 .setting{
    margin: 20px;
    background: #ffffff;
    padding:20px 0;
  }
  .setting .el-tabs--left .el-tabs__header.is-left{
    width: 200px;
  }
</style>