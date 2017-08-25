<template>
  <div>
    <h2>个人信息</h2>
      <el-form>
      <el-form-item label="姓名">
        <el-input v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="籍贯">
        <el-input v-model="profile.city"></el-input>
      </el-form-item>
      <el-form-item label="出生年月">
        <el-input v-model="profile.birth"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// 从外界接受一个叫profile的变量
  export default{
    props: ['profile']
  }
</script>
