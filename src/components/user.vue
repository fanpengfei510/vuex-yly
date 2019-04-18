<template>
  <div class="user">
    <img src="http://attach.bbs.miui.com/forum/201201/01/011257xkfbj9cfxkumxjfz.png" class="header"/>
    <div class="name">
      <h4>
        超级管理员
        <el-button size="small" style="float: right;">编辑用户</el-button>
      </h4>
      <p>你要包容那些意见跟你不同的人，这样子日子比较好过。你要是一直想改变他，那样子你会很痛苦。要学学怎样忍受他才是。你要学学怎样包容他才是。</p>
      <el-row :gutter="20" class="info">
        <el-col :span="8">
          <h5>用户名：fanpengfei</h5>
        </el-col>
        <el-col :span="8">
          <h5>邮箱：598796448@qq.com</h5>
        </el-col>
        <el-col :span="8">
          <h5>电话：135659897</h5>
        </el-col>
        <el-col :span="8">
          <h5>性别：男</h5>
        </el-col>
        <el-col :span="8">
          <h5>地址：北京市朝阳区三元桥国门大厦</h5>
        </el-col>
        <el-col :span="8">
          <h5>邮编：100102</h5>
        </el-col>
        <el-col :span="8">
          <h5>所在地区：北京市</h5>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name : 'user'
}
</script>

<style lang="css">
  .user {
    background: #ffffff;
    margin: 100px 20px 0 20px;
    padding: 20px;
    position: relative;
  }
  .user .header{
    width: 160px;
    height: 160px;
    border: 5px solid #ffffff;
    position: absolute;
    top: -70px;
    left: 50px;
    border-radius: 50%;
  }
  .user .name{
    padding-left: 240px;
  }
  .user .name h4{
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .user .name p{
    color: #999999;
  }

  .user .info{
    margin-top: 30px;
  }

  .user .info h5{
    width: 90%;
    border-bottom: 1px solid #eeeeee;
    font-size: 14px;
    line-height: 50px;
  }
</style>