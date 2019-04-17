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
    <el-tabs v-model="activeName">
      <el-tab-pane label="造价咨询" name="01">
        <el-row :gutter="20">
          <el-col :span="6" v-for="item in projectList" :key="item.id" style="margin-bottom:20px;">
            <el-card shadow="hover">
              <div slot="header" class="clearfix">
                <span>{{item.projectName}}</span>
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
      <el-tab-pane label="招标代理" name="02">招标代理</el-tab-pane>
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
              v-model="formNewProject.team"
              multiple
              filterable
              allow-create
              default-first-option
            >
              <el-option
                v-for="item in team"
                :key="item.id"
                :value="item.id"
                :label="item.label"
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
export default {
  name : 'MyProject',
  data(){
    return {
      activeName: '01',
      bolProjectDialgo : false,
      formNewProject : {
        name : '',
        head : '',
        amount : 0,
        time : '',
        team : []
      },
      search : {
        name : '',
        code : '',
        role : ''
      },
      projectList : [
        {
          projectName : '昆明东陆工程造价咨询有限公司',
          state : 1,
          head : '杨建雄',
          amount : 890,
          startTime : '2019-04-08',
          endTime : '2019-07-08',
          personnel : 9,
          task : 3,
          id:'1'
        },
        {
          projectName : '益联云-企业联合协作管理平台研',
          state : 2,
          head : '杨建平',
          amount : 890,
          startTime : '2018-12-03',
          endTime : '2018-12-03',
          personnel : 1,
          task : 18,
          id:'2'
        }
      ],
      team : [{
        id : 1,
        label : '张三'
      },{
        id : 2,
        label : '李四'
      }]
    }
  },
  created(){
    this.$store.dispatch('project/getTabs',sessionStorage.getItem('menuId'))
  },
  methods : {
    submitProject(){
      this.bolProjectDialgo = false;
      this.$store.dispatch('project/addProject',{...this.formNewProject,tabsId:'123'})
    },
    handleSearch(){
      console.log(this.search)
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
