<template>
  <div class="home">
    <el-container>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="17">
            <div class="content-box">
              <h3>销售统计</h3>
              <ve-line :data='chartData'></ve-line>
            </div>
            <el-row :gutter="20" style="margin-top:20px;">
              <el-col :span="12">
                <div class="content-box">
                  <h3>企业公告</h3>
                  <ul class="ul-list">
                    <li><a href="#">春节放假通知</a><span>2018-02-05</span></li>
                    <li><a href="#">2019年益联云新年旅游通知</a><span>2018-02-05</span></li>
                  </ul>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="content-box">
                  <h3>我的项目</h3>
                    <div class="project-list">
                      <i class="el-icon-star-on"></i>
                      <el-popover
                        placement="right"
                        trigger="hover"
                        title="标题"
                      >
                        <div slot="reference"><a href="#">棚改顺义区改造全生命周期监管系统研发</a><p>2018-02-05</p></div>
                      </el-popover>
                    </div>
                  <div class="project-list">
                    <i class="el-icon-star-on"></i>
                    <el-popover
                      placement="right"
                      trigger="hover"
                      title="标题"
                    >
                      <div slot="reference"><a href="#">乌市审计局系统研发项目</a><p>2018-02-05</p></div>
                    </el-popover>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="7">
            <div class="content-box">
              <h3>最新消息</h3>
              <el-timeline>
                <el-timeline-item>
                  <div class="timeline">
                    <a href="#" class="title">51计量</a><span>2018-11-28</span>
                    <p>-您好，欢迎成为51计量平台新成员。</p>
                  </div>
                </el-timeline-item>
                <el-timeline-item>
                  <div class="timeline">
                    <a href="#" class="title">杨建平-给您分配了[益联云公共事项]</a><span>2018-11-28</span>
                    <p>-您好，欢迎成为51计量平台新成员。</p>
                  </div>
                </el-timeline-item>
                <el-timeline-item>
                  <div class="timeline">
                    <a href="#" class="title">解云涵-给您分配了[乌市审计局系统研发项目]</a><span>2018-11-28</span>
                    <p>-您好，欢迎成为51计量平台新成员。</p>
                  </div>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
export default {
  name : 'Home',
  data(){
    return {
      chartData : {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 24 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 678 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 12 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 42 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 5 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 900 }
          ]
      }
    }
  },
  components : {
    VeLine
  }
}
</script>

<style lang="css">
  .content-box{
    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 3px;
    padding: 10px 20px;
  }
  .content-box h3{
    line-height: 50px;
    font-size: 16px;
    font-weight: 400;
    color: #16325C;
  }
  .timeline .title{
    margin-right: 10px;
  }
  .timeline span,.timeline p{
    color: #666666;
  }
  .ul-list li{
    display: block;
    line-height: 35px;
  }
  .ul-list li a{
    margin-right: 20px;
  }
  .project-list{
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 20px;
  }
  .project-list i{
    width: 30px;
    height: 30px;
    border-radius: 3px;
    background: #F88962;
    margin-right: 10px;
    color: #ffffff;
    font-size: 22px;
    text-align: center;
    line-height: 30px;
  }
</style>