<template>
  <div id="app" v-bind:class="{previewModel: previewModel}">
    <Topbar class="topbar" v-on:preview="preview"/>
    <main >
      <Editor v-bind:resume="resume" class="editor"/>
      <Preview v-bind:resume="resume" class="preview"/>
    </main>
    <el-button id="exitpreview" @click="exitpreview">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue'
import Preview from './components/Preview.vue'
import Editor from './components/Editor.vue'
export default {
  data: function(){
    return {
      previewModel: false,
      resume:{
        profile: {
          name: '',
          city: '',
          birth: ''
        },
        workExperience: [
          {company: '', content: ''},
        ],
        studyExperience: [
          {school: '', duration: '', degree: ''}
        ],
        projectsExperience: [
          {name: '', content: ''}
        ],
        honorExperience: [
          {content: ''}
        ],
        contact: {
          phone: '',
          email: '',
          wechat: ''
        }
      }
    }
  },
  methods:{
    exitpreview(){
      this.previewModel = false
    },
    preview(){
      this.previewModel = true
    }
  },
  components: {
    "Topbar": Topbar,
    Preview,
    Editor
  }
}
</script>

<style lang="scss">
body,html{
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.topbar{
  position: relative;
  z-index: 1;
  box-shadow: 0 0 3px hsla(0,0,0,0.5);
}

main{
  display: flex;
  background: #DDD;
  flex: 1;
  >.editor{
  width: 40em;
  margin: 16px 8px 16px 16px;
  background: #fff;
  box-shadow: 0 0 3px hsla(0,0,0,0.5);
  border-radius: 3px;
  overflow: hidden;
  }
  >.preview{
  flex: 1;
  margin: 16px 16px 16px 8px;
  background: #fff;
  box-shadow: 0 0 3px hsla(0,0,0,0.5);
  border-radius: 3px;
  overflow: hidden;
  }
}
#exitpreview{
  display: none;
  position: fixed;
  bottom: 32px;
  right: 40px;
}

.previewModel > #topbar{
  display: none;
}
.previewModel #editor{
  display: none;
}
.previewModel #preview{
  max-width:800px;
  margin: 32px auto;
}
.previewModel #exitpreview{
  display: block;
}




</style>
