<template>
  <div class="approve">
    <h4>
      我的审批
      <el-button type="primary" size="small" @click="bolApproveDialog = true">发起审批</el-button>
    </h4>
    <el-tabs v-model="activeName" @tab-click="handleTabs">
      <el-tab-pane label="审批中" name="ing">
        <el-table :data="tableData">
          <el-table-column prop="type" width="200" label="审批类型"></el-table-column>
          <el-table-column prop="name" width="250" label="审批名称"></el-table-column>
          <el-table-column prop="process" label="审批流程">
            <template slot-scope="scope">
              <el-steps :active="1" style="width:60%;" align-center>
                <el-step v-for="(item,index) in scope.row.process" :key="index" :title="item"></el-step>
              </el-steps>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template>
              <el-button type="text">查看</el-button>
              <el-button type="text">重审</el-button>
              <el-button type="text">打印</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="审批通过" name="done">审批通过</el-tab-pane>
      <el-tab-pane label="未通过" name="not">未通过</el-tab-pane>
      <el-tab-pane label="已删除" name="del">已删除</el-tab-pane>
      <el-tab-pane label="全部" name="all">全部</el-tab-pane>
    </el-tabs>

    <el-dialog
      :visible.sync="bolApproveDialog"
      title="发起审批"
      width="700px"
    >
      <el-form :model="objApprove" label-width="100px">
        <el-form-item label="审批名称">
          <el-input v-model="objApprove.label" placeholder="请输入审批名称"/>
        </el-form-item>
        <el-form-item label="审批类型">
          <el-select v-model="objApprove.type">
            <el-option
              v-for="item in arrType"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="选择审批人">
          <el-button @click="bolSelectHead = true">选择</el-button>
          <el-steps :space="200" :active="1" finish-status="success" class="process">
            <el-step v-for="item in arrProcess" :title="item.key" :key="item.key"></el-step>
          </el-steps>
        </el-form-item>

        <el-form-item label="天数">
          <el-input v-model="objApprove.day" style="width:100px;" placeholder="如:0.5"/>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="objApprove.startTime"
            type="datetime"
            placeholder="开始时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker
            v-model="objApprove.endTime"
            type="datetime"
            placeholder="结束时间"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" :rows="3" placeholder="请输入备注" v-model="objApprove.note"/>
        </el-form-item>
      </el-form>

      <el-dialog
        width="600px"
        title="选择审批人"
        :visible.sync="bolSelectHead"
        append-to-body
      >
        <el-transfer 
          v-model="arrProcess" 
          :data="arrUser"
          :titles="arrTitles"
          ></el-transfer>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitSelectHead" size="small">确 定</el-button>
          <el-button @click="bolSelectHead = false" size="small">取 消</el-button>
        </span>
      </el-dialog>
      
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitApprove" size="small">确 定</el-button>
        <el-button @click="bolApproveDialog = false" size="small">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Approve",
  data() {
    return {
      activeName: "ing",
      tableData: [
        {
          type: "考勤审批",
          name: "请假一天 ",
          process: ['王','杨','朱'],

        }
      ],
      bolApproveDialog : false,
      bolSelectHead : false,
      arrUser : [{key:1,label:"张三"},{key:2,label:"李四"}],
      arrProcess : [],
      arrTitles : ["全部人员","已选择"],
      objApprove : {
        label : '',
        type : '',
        day : '',
        startTime : '',
        endTime : '',
        note : ''
      },
      arrType : [{
        value : 1,
        label : '病假'
      },{
        value : 2,
        label : '事假'
      }]
    };
  },
  methods : {
    submitApprove(){
      this.bolApproveDialog = false
    },
    submitSelectHead(){
      this.bolSelectHead = false
    },
    handleTabs(value){
      console.log(value.name)
    }
  }
};
</script>

<style lang="css">
.approve {
  background: #ffffff;
  margin: 20px 20px 0 20px;
  padding: 20px;
}
.approve h4 {
  font-size: 16px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 20px;
}
.process .el-step.is-horizontal .el-step__line{
  top: 18px;
}
</style>