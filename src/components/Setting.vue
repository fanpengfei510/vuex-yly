<template>
  <div class="setting">
    <div class="main">
      <el-button size="small" type="primary" @click="handleAddMenu" style="margin:0 0 20px 20px;">添加菜单</el-button>
      <el-table
        :data="arrMenu"
        default-expand-all
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <div v-for="item in props.row.children" :key="item.id" class="table-item">{{item.title}}   {{item.href}}</div>
          </template>
        </el-table-column>
        <el-table-column
          prop="title"
          label="名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="href"
          label="连接"
        >
        </el-table-column>
        
        <el-table-column
          label="操作"
          fixed="right"
          width="130"
        >
          <template slot-scope="props">
            <el-button size="small" type="text" @click="handleAddMenu(props.row._id)">添加子菜单</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    

    <el-dialog
      title="添加菜单"
      :visible.sync="bolAddMenuDialog"
    >
      <el-form v-model="objMenu">
        <el-form-item label="标题">
          <el-input v-model="objMenu.title"/>
        </el-form-item>
        <el-form-item label="连接">
          <el-input v-model="objMenu.href"/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="bolAddMenuDialog = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name : 'Setting',
  data(){
    return {
      arrMenu : [],
      bolAddMenuDialog : false,
      menu_id : '',
      objMenu : {
        title : '',
        href : '',
      }
    }
  },
  methods : {
    handleAddMenu(id){
      if(!id.isTrusted){
        this.menu_id = id;
      }else{
        this.menu_id = ''
      };
      this.bolAddMenuDialog = true
      
    },
    handleSubmit(){
      if(this.menu_id){
        this.$server.addMenu({...this.objMenu,menu_id:this.menu_id}).then(data=>{
          if(data.status == 200){
            this.bolAddMenuDialog = false;
            this.reload()
          }
        })
      }else{
        this.$server.addMenu(this.objMenu).then(data=>{
          if(data.status == 200){
            this.bolAddMenuDialog = false;
            this.reload()
          }
        })
      }
    }
  },
  created(){
    
  }
}
</script>

<style lang="css">
  .setting .main{
    margin: 20px;
    background: #ffffff;
    padding:20px 0;
  }
  .table-item{
    padding: 10px 10px 10px 20px;
    color: #909399;
  }
</style>