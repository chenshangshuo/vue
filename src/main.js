// 使用`import`命令加载的Vue构建版本
//（仅运行时或独立）已在webpack.base.conf中设置别名。
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'


Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('Jack', {
  template: '<p>I am {{name}}</p>',
  data(){
    return {
      name: 'chenshangshuo'
    }
  }
})   /*注册一个全局组件*/



new Vue({
  el: '#ap', //容器
  template: '<pp/>',  //模板
  // components: { App }   //组件
  components: {
    "pp": App
  }
  // ES6中的语法，key 和value值相等，可取同一个值
})
