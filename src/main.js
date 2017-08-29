// 使用`import`命令加载的Vue构建版本
//（仅运行时或独立）已在webpack.base.conf中设置别名。
import Vue from 'vue'
import App from './App'
import 'normalize.css/normalize.css'
import './assets/reset.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.use(ElementUI)

Vue.config.productionTip = false


new Vue({
  el: '#ap',
  template: '<pp/>',  //模板
  // components: { App }   //组件
  components: {
    "pp": App
  }
  // ES6中的语法，key 和value值相等，可取同一个值
})
