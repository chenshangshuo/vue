<template>
  <div id="preview">
    <h2>{{resume.profile.name || '请填写姓名'}}</h2>
    <p>{{resume.profile.city || '请填写城市'}} | {{resume.profile.birth || '请填写出生年月'}}</p>
    <p></p>
    <hr>
    <section v-if="filter(resume.projectsExperience).length > 0">
      <!-- {{filter(resume.projectsExperience)}} -->
      <h2>项目经历</h2>
      <ul>
        <li v-for="project in filter(resume.projectsExperience)">
          <p>{{project.name}} : {{project.content}}</p>
        </li>
      </ul>
    </section>
    <hr>
    <section v-if="filter(resume.workExperience).length > 0">
      <h2>工作经历</h2>
      <ul>
        <li v-for="work in filter(resume.workExperience)">
          <p>{{work.company}} : {{work.content}}</p>
        </li>
      </ul>
    </section>
    <hr>
    <section v-if="filter(resume.studyExperience).length > 0">
      <h2>教育经历</h2>
      <ul>
        <li v-for="study in filter(resume.studyExperience)">
          <p>{{study.school}}</p>
          <p>{{study.duration}} : {{study.degree}}</p>
        </li>
      </ul>
    </section>
    <hr>
    <section v-if="filter(resume.honorExperience).length > 0">
      <h2>项目</h2>
      <ul>
        <li v-for="honor in filter(resume.honorExperience)">
          {{honor.content}}
        </li>
      </ul>
    </section>
    <hr>
    <h2>{{resume.contact.phone || '请填写联系电话'}}</h2>
    <p>{{resume.contact.email || '请填写邮箱地址'}} | {{resume.contact.email || '请填写微信'}}</p>
    <p></p>
    <hr>
  </div>
</template>

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


<style>
  #preview{
    padding: 24px;
    min-height: 100px;
  }
  h2{
    margin: 16px 0;
  }
  p{
    font-size: 14px;
    margin-bottom: 8px;
  }
</style>
