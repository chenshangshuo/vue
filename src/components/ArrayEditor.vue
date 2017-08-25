<template>
  <div>
    <h2>{{title}}</h2>
    <el-form>
      <div class="item" v-for="(item,index) in items" v-bind:key = "index">
        <el-form-item v-for="key in keys" v-bind:label="labels[key] || key" v-bind:key = "key">
          <el-input v-model="item[key]"></el-input>
        </el-form-item>
        <i class="el-icon-circle-cross" @click="rmitem(index)"></i>
        <hr>
      </div>
      <el-button type="primary" @click="additem">添加</el-button>
    </el-form>
  </div>
</template>
<script>
  export default{
    props: ['items','labels','title'],
// keys为[ "company", "content" ]
    computed: {
      keys: function(){
        return Object.keys(this.items[0])
      }
    },
// empty为{company: "", content: ""}
    methods:{
      additem: function(){
        const empty = {}
        this.keys.map((key) =>{
          empty[key] = ''
        })
        this.items.push(empty)
      },
      rmitem: function(index){
        this.items.splice(index,1)
      }
    }
  }
</script>
