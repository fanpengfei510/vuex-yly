<template>
  <div class="myproject">
    <h4>我的项目<el-button type="primary" size="small" @click="bolProjectDialgo = true">新建项目</el-button></h4>
    <div class="search">
      <el-form :inline="true" :model="search" label-width="100">
        <el-form-item label="项目名称">
          <el-input placeholder="请输入项目名称" size="small" v-model="search.name"/>
        </el-form-item>
        <el-form-item label="项目编号">
          <el-input placeholder="请输入项目编号" size="small" v-model="search.code"/>
        </el-form-item>
        <el-form-item label="项目角色">
          <el-select v-model="search.role" size="small">
            <el-option label="项目经理" value="1"></el-option>
            <el-option label="项目成员" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="handleSearch">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-tabs v-model="tabsId" @tab-click="handleTabClick">
      <el-tab-pane v-for="item in arrTabs" :label="item.title" :name="item._id" :key="item._id">
        <el-row :gutter="20">
          <el-col :span="6" v-for="item in arrProjectList" :key="item.id" style="margin-bottom:20px;">
            <el-card shadow="hover">
              <div slot="header" class="clearfix">
                <span>{{item.name}}</span>
                <el-tag type="success" v-if="item.state == 1">进行中</el-tag>
                <el-tag type="danger" v-else>停滞</el-tag>
              </div>
              <p>负责人:{{item.head}}</p>
              <p>金额:{{item.amount}}</p>
              <p>起止时间:{{item.startTime}} 至 {{item.endTime}}</p>
              <p>人员:{{item.personnel}} , 任务 {{item.task}}</p>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>

    <el-dialog
      title="创建项目"
      width="700px"
      :visible.sync="bolProjectDialgo"
    >
      <el-form :model="formNewProject" label-width="100px">
        <el-form-item label="项目名称">
          <el-input placeholder="请输入项目名称" v-model="formNewProject.name"/>
        </el-form-item>
        <el-form-item label="项目负责人">
          <el-input placeholder="请输入项目负责人" v-model="formNewProject.head"/>
        </el-form-item>
        <el-form-item label="项目金额">
          <el-input placeholder="请输入项目金额" v-model="formNewProject.amount" style="width:100px;"/>
        </el-form-item>
        <el-form-item label="起始时间">
          <el-date-picker
            v-model="formNewProject.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="选择组员">
            <el-select
              v-model="formNewProject.tema"
              multiple
              filterable
              allow-create
              default-first-option
            >
              <el-option
                v-for="item in arrUserList"
                :key="item._id"
                :value="item._id"
                :label="item.username"
              ></el-option>
            </el-select>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitProject" size="small">确 定</el-button>
        <el-button @click="bolProjectDialgo = false" size="small">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name : 'MyProject',
  data(){
    return {
      bolProjectDialgo : false,
      formNewProject : {
        name : '',
        head : '',
        amount : 0,
        time : '',
        tema : []
      },
      search : {
        name : '',
        code : '',
        role : ''
      },
    }
  },
  computed : {
    ...mapState({
      arrTabs : state => state.project.arrTabs,
      arrProjectList : state => state.project.arrProjectList,
      arrUserList : state => state.project.arrUserList,
    }),
    tabsId : {
      get(){
        return this.$store.state.project.objTabs
      },
      set(value){
        this.$store.state.project.objTabs = value
      }
    }
  },
  created(){
    this.$store.dispatch('project/getTabs',window.localStorage.getItem('menuId'));
    this.$store.dispatch('project/getUserList',window.localStorage.getItem('userId'));

  },
  methods : {
    submitProject(){
      this.bolProjectDialgo = false;
      this.$store.dispatch(
        'project/addProject',
        {
          ...this.formNewProject,
          userId : window.localStorage.getItem('userId'),
          tabsId:this.$store.state.project.objTabs
        })
    },
    handleSearch(){
      console.log(this.search)
    },
    handleTabClick(e){
      this.$store.dispatch('project/getTasbId',e.name)
    }
  }
}
</script>

<style>
  .myproject{
    background: #ffffff;
    margin: 20px 20px 0 20px;
    padding: 20px;
  }
  .myproject h4{
    font-size: 16px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 20px;
  }
  .clearfix{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-dialog__footer{
    text-align: center;
  }
</style>
