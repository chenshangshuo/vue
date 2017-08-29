<template>
  <div id="editor">
    <nav>
      <ul>
        <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab === i}" @click="currentTab = i">
          <svg class="icon" aria-hidden="true">
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ul>
    </nav>
    <ul class="panes">
      <li v-bind:class="{active: currentTab === 0}">
        <proflieEditor v-bind:profile = "resume.profile"/>
      </li>
      <li v-bind:class="{active: currentTab === 1}">
        <arrayEditor v-bind:items = "resume.workExperience" v-bind:labels="{company:'公司', content: '工作内容'}" v-bind:title="'工作经历'"/>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <arrayEditor v-bind:items = "resume.studyExperience" v-bind:labels="{school:'学校', duration: '学习时间',degree: '学位'}" title="教育经历"/>
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <arrayEditor v-bind:items = "resume.honorExperience" v-bind:labels="{content: '内容'}" title="个人荣誉"/>
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <arrayEditor v-bind:items = "resume.projectsExperience" v-bind:labels="{name:'项目名称', content: '项目内容'}" title="项目经历"/>
      </li>
      <li v-bind:class="{active: currentTab === 5}">
        <contactEditor v-bind:contact="resume.contact"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import proflieEditor from './proflieEditor.vue'
  import arrayEditor from './ArrayEditor.vue'
  import contactEditor from './contactEditor.vue'
  // 接受模板参数
  export default{
    components:{
      proflieEditor,
      arrayEditor,
      contactEditor
    },

    props: ['resume'],
    data: function(){
      return {
        currentTab: 0,
        icons: ['zv1','shiliangzhinengduixiang1','book','jiangbei','xiangmu','dianhua']
      }
    }
  }
</script>


<style lang="scss">
  #editor{
    min-height: 100px;
    display: flex;
    > nav{
      background: #000;
      width: 80px;
      > ul > li {
        padding: 18px 0;
        text-align: center;
        > .icon{
          width: 24px;
          height: 24px;
          fill: white;
        }
          &.active{
            background: white;
            > .icon{
              fill: black;
            }
          }
      }
    }
    >.panes{
      flex: 1;
      .el-button{
        margin-top: 8px;
      }
      .item{
        margin-top: 10px;
        position: relative;
        >.el-icon-circle-cross{
          font-size: 16px;
          position: absolute;
          cursor: pointer;
          right: 0;
          top: 0;
        }
      }
      >li{
        height: 100%;
        overflow: auto;
        padding: 32px 48px 0 32px;
        display: none;
        &.active{
          display: block;
        }
      }
    }
  }
</style>
