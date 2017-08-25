<template>
  <div>
    <h2>教育经历</h2>
    <el-form>
      <div class="item" v-for="item in items">
        <el-form-item label="学校">
          <el-input v-model="item.school"></el-input>
        </el-form-item>
        <el-form-item label="学习时间">
          <el-input v-model="item.duration"></el-input>
        </el-form-item>
        <el-form-item label="学位">
          <el-input v-model="item.degree"></el-input>
        </el-form-item>
        <i class="el-icon-circle-cross" @click="rmitem(item)"></i>
        <hr>
      </div>
      <el-button type="primary" @click="additem">添加</el-button>
    </el-form>
  </div>
</template>
<script>
  export default{
    props: ['items'],
    methods:{
      additem: function(){
        this.items.push({
          school: '', duration: '', degree: ''
        })
      },
      rmitem: function(item){
        var index = this.items.indexOf(item)
        this.items.splice(index,1)
      }
    }
  }

</script>

