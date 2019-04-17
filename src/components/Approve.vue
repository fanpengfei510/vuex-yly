<template>
  <div class="approve">
    <h4>
      我的审批
      <el-button type="primary" size="small">发起审批</el-button>
    </h4>
    <el-tabs v-model="activeName">
      <el-tab-pane label="审批中" name="01">
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
      <el-tab-pane label="审批通过" name="02">审批通过</el-tab-pane>
      <el-tab-pane label="未通过" name="03">未通过</el-tab-pane>
      <el-tab-pane label="已删除" name="04">已删除</el-tab-pane>
      <el-tab-pane label="全部" name="05">全部</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Approve",
  data() {
    return {
      activeName: "01",
      tableData: [
        {
          type: "考勤审批",
          name: "请假一天 ",
          process: ['王','杨','朱'],

        }
      ]
    };
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
</style>