<template>
  <div>
    <el-upload
      class="avatar-uploader"
      action="/"
      :show-file-list="false"
      :http-request="fileChange"
      :on-success="handleAvatarSuccess"
      >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <form action="/api/post/file/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file"/>
      <button type="submit">上传</button>
    </form>
  </div>
</template>

<script>
export default {
  name : 'Project',
  data(){
    return {
      imageUrl: '',
    }
  },
  created(){
    
  },
  methods : {
    handleAvatarSuccess(res, file) {
      console.log(file)
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    fileChange(file){
      var formData = new FormData()
      formData.append("file" , file.file)
      this.$server.fileUpload(formData).then(data=>{
        console.log(data)
      })
    }
  }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

