<template>
  <div>
    <vue-drawer-layout 
      ref="drawer" 
      :drawer-width="1200" 
      :reverse="true"
      :backdrop="true"
      :backdrop-opacity-range="[0,0.001]"
      @mask-click='handleMask'
      style="margin-top: 103px;"
    >
    <div class="drawer" slot="drawer">
      <div class="base-info">
        <h4>基本信息</h4>
        <ul>
          <li>任务类型：{{itemData.type}}</li>
          <li>任务名称：{{itemData.name}}</li>
          <li>所属项目{{itemData.project}}</li>
          <li>创建时间{{itemData.createTime}}</li>
          <li>项目经理{{itemData.head}}</li>
          <li>赏金{{itemData.bounty}}</li>
          <li>开始时间{{itemData.startTime}}</li>
          <li>结束时间{{itemData.endTime}}</li>
          <li>状态{{itemData.state}}</li>
        </ul>
      </div>
    </div>

    <div class="content" slot="content">
      <div class="task">
        <h4>我的任务<el-button type="primary" size="small" @click="bolProjectDialgo = true">新建任务</el-button></h4>
        <el-table :data="tableData">
          <el-table-column prop="type" label="任务类型" width="120"></el-table-column>
          <el-table-column prop="name" label="任务名称" width="300">
            <template slot-scope="scope">
              <a href="#" @click="handleDetail(scope.row)">{{scope.row.name}}</a>
            </template>
          </el-table-column>
          <el-table-column prop="project" label="所属项目"></el-table-column>
          <el-table-column prop="createTime" label="创建时间"></el-table-column>
          <el-table-column prop="head" label="项目经理"></el-table-column>
          <el-table-column prop="bounty" label="赏金"></el-table-column>
          <el-table-column prop="startTime" label="开始时间"></el-table-column>
          <el-table-column prop="endTime" label="结束时间"></el-table-column>
          <el-table-column prop="state" label="状态"></el-table-column>
        </el-table>
      </div>
    </div>
    </vue-drawer-layout>
      <el-dialog
        title="添加任务"
        :visible.sync="bolProjectDialgo"
        width="600px"
      >
        <el-form :model="objAddTask" label-width="80px">
          <el-form-item label="任务类型">
            <el-select v-model="objAddTask.type">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="任务名称">
            <el-input placeholder="请输入任务名称" v-model="objAddTask.label"/>
          </el-form-item>
          <el-form-item label="所属项目">
            <el-select v-model="objAddTask.boston">
              <el-option
                v-for="item in arrboston"
                :value="item.value"
                :key="item.value"
                :label="item.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="objAddTask.createTime"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="项目经理">
            <el-select v-model="objAddTask.head">
              <el-option
                v-for="item in arrHead"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="赏金">
            <el-input-number v-model="objAddTask.amount"/>
          </el-form-item>
          <el-form-item label="开始时间">
            <el-date-picker
              v-model="objAddTask.startTime"
              type="datetime"
              placeholder="选择开始时间"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="结束时间">
            <el-date-picker
              v-model="objAddTask.endTime"
              type="datetime"
              placeholder="选择结束时间"
            ></el-date-picker>
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
  name: "Task",
  data() {
    return {
      tableData: [
        {
          type: "其他",
          name: "企业联合协作管理平台前端研发",
          project: "乌市审计局系统研发项目",
          createTime: "2018-12-17 11:04",
          head: "解云涵",
          bounty: "238",
          startTime: "2018-12-17 00:00:00",
          endTime: "2018-12-25 00:00:00",
          state: 1
        },
        {
          type: "其他",
          name: "企业联合协作管理平台前端研发1",
          project: "乌市审计局系统研发项目1",
          createTime: "2018-12-17 11:04",
          head: "解云涵",
          bounty: "238",
          startTime: "2018-12-17 00:00:00",
          endTime: "2018-12-25 00:00:00",
          state: 1
        }
      ],
      itemData : {},
      bolProjectDialgo : false,
      objAddTask : {
        type : '',
        label : '',
        boston : '',
        createTime : '',
        head : '',
        amount : '',
        startTime : '',
        endTime : '',
      },
      options: [{
        value: '01',
        label: '其他'
      }, {
        value: '02',
        label: '进行中'
      }],
      arrboston : [{
        value : '01',
        label : '企业联合协作管理平台前端研发'
      }],
      arrHead : [{
        value : "01",
        label : "张三"
      }],
    }
  },
  methods: {
    handleDetail(item) {
      this.itemData = item;
      this.$refs.drawer.toggle();
    },
    handleMask(){
      this.$refs.drawer.toggle();
    },
    submitProject(){
      this.bolProjectDialgo = false;
      console.log(this.objAddTask)
    }
  },
};
</script>

<style lang="css">
.task {
  background: #ffffff;
  margin: 20px 20px 0 20px;
  padding: 20px;
}
.task h4 {
  font-size: 16px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 20px;
}
.drawer{
  background: #ffffff;
  border-left: 1px solid #eeeeee;
  height: 100%;
}
.base-info{
  padding: 20px;
}
.base-info h4{
  font-size: 16px;
  line-height: 40px;
  border-bottom: 1px solid #eeeeee;
}
.base-info ul li{
  line-height: 50px;
}
</style>