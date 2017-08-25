<template>
  <div id="preview">
    <h1>{{resume.profile.name || '请填写姓名'}}</h1>
    <p>{{resume.profile.city || '请填写城市'}} | {{resume.profile.birth || '请填写出生年月'}}</p>

    <hr>
    <section v-if="filter(resume.projectsExperience).length > 0">
      <!-- {{filter(resume.projectsExperience)}} -->
      <h2>项目</h2>
      <ul>
        <li v-for="project in filter(resume.projectsExperience)">
          {{project.name}}
          {{project.content}}
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.workExperience).length > 0">
      <h2>项目</h2>
      <ul>
        <li v-for="work in filter(resume.workExperience)">
          {{work.company}}
          {{work.content}}
        </li>
      </ul>
    </section>
  </div>
</template>
<style>
  #preview{
    min-height: 100px;
  }
</style>
<script>
  export default{
    props: ['resume'],
    methods: {
      // 找到非空对象
      filter(array){
        return array.filter(item => !this.isEmpty(item))
      },
      // 只要有一个value不是false,就返回false
      isEmpty(object){
        let empty = true
        for(let key in object){
          if(object[key]){
            empty = false
            break
          }
        }
        return empty
      }
    }
  }
</script>
