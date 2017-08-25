<template>
  <div id="topbar">
    <div class="logo">
    vueResume
    </div>
    <div class="actions">
      <el-button type="primary">注册</el-button>
      <el-button>登录</el-button>
      <el-button @click="preview">预览</el-button>
    </div>
  </div>
</template>

<script>
  export default{
    methods:{
      preview(){
        // 触发当前实例上的事件。附加参数都会传给监听器回调。
        this.$emit('preview')
      }
    }
  }
</script>

<style lang="scss">
  #topbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    font-size: 20px;
  }
</style>
