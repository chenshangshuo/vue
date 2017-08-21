<template>
  <div id="app">
 <!--    <Topbar/>
    <Preview/>
    <Editor/> -->
    <!-- 标签名会改变，用class -->
    <Topbar class="topbar"/>
    <main >
      <Editor class="editor"/>
      <Preview class="preview"/>
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue'
import Preview from './components/Preview.vue'
import Editor from './components/Editor.vue'
export default {
  // name: 'app',
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main{
  display: flex;
  flex: 1;
  >.editor{
  width: 20em;
}
  >.preview{
  flex: 1;
}
}

</style>
