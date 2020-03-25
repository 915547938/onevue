// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Moment from 'moment'
Vue.config.productionTip = false
//使用mint-ui引入全部的组件
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'

//配置公共api地址
Axios.defaults.baseURL="http://www.lqzyxk.com/";

//配置Axios
Vue.prototype.$axios=Axios;

//引入全局的css文件
import '../static/css/global.css';

//注册全局导航栏
import NavBar from './components/Common/NavBar'
Vue.component(NavBar.name,NavBar)

//自定义moment全局过滤器
Vue.filter('converTime',function(data,formatstr){
  return Moment(data).format(formatstr);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
