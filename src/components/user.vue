<template>
  <div class="user">
    <el-upload
      action=" "
      :show-file-list="false"
      :http-request="handleUpload"
    >
      <img :src="strImg" class="header"/>
    </el-upload>
    <div class="name">
      <h4>
        超级管理员
        <el-button size="small" style="float: right;" @click="bolEditUser=true" v-if="bolEditUser == false">编辑用户</el-button>
        <el-button type="primary" size="small" style="float: right;" @click="bolEditUser=false" v-else>完成</el-button>
      </h4>
      <p>你要包容那些意见跟你不同的人，这样子日子比较好过。你要是一直想改变他，那样子你会很痛苦。要学学怎样忍受他才是。你要学学怎样包容他才是。</p>
      <el-row :gutter="20" class="info">
        <el-col :span="8">
          <h5>用户名：<el-input size="small" v-if="bolEditUser==true" style="width:200px;"/><span v-else>fanpengfei</span></h5>
        </el-col>
        <el-col :span="8">
          <h5>邮箱：<el-input size="small" v-if="bolEditUser==true" style="width:200px;"/><span v-else>598796448@qq.com</span></h5>
        </el-col>
        <el-col :span="8">
          <h5>电话：<el-input size="small" v-if="bolEditUser==true" style="width:200px;"/><span v-else>135659897</span></h5>
        </el-col>
        <el-col :span="8">
          <h5>性别：<el-radio-group v-if="bolEditUser==true"><el-radio :label="3">男</el-radio><el-radio :label="6">女</el-radio></el-radio-group><span v-else>男</span></h5>
        </el-col>
        <el-col :span="8">
          <h5>地址：<el-input size="small" v-if="bolEditUser==true" style="width:200px;"/><span v-else>北京市朝阳区三元桥国门大厦</span></h5>
        </el-col>
        <el-col :span="8">
          <h5>邮编：<el-input size="small" v-if="bolEditUser==true" style="width:200px;"/><span v-else>100102</span></h5>
        </el-col>
        <el-col :span="8">
          <h5>所在地区：<el-select v-if="bolEditUser==true" size="small"><option label="北京" value="北京" key="北京"></option></el-select><span v-else>北京</span></h5>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name : 'user',
  data(){
    return {
      strImg : 'http://attach.bbs.miui.com/forum/201201/01/011257xkfbj9cfxkumxjfz.png',
      bolEditUser : false
    }
  },
  methods : {
    handleUpload(item){
      console.log(item)
      // this.strImg = URL.createObjectURL()
    },
  }
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