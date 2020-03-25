<template>
  <div id="app">
    <!--顶部栏区域-->
    <mt-header fixed title="信息管理系统">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--路由组件的出口-->
    <router-view/>
    <!--底部栏区域-->
    <!--<div class="tabBar">
      <ul>
        <li v-for="(tab,index) in tabs" :key="tab.id">
          <router-link :to="tab.routerName">
            <img :src="tab.imgSrc">
            <p>{{tab.titles}}</p>
          </router-link>
        </li>
      </ul>
    </div>-->
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="./assets/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" src="./assets/car.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/search.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

  let tabs=[
    {id:1,titles:'首页',imgSrc:'../static/images/index.png',routerName:{name:'home'}},
    {id:2,titles:'会员',imgSrc:'../static/images/vip.png',routerName:{name:'vip'}},
    {id:3,titles:'购物车',imgSrc:'../static/images/car.png',routerName:{name:'cart'}},
    {id:4,titles:'查找',imgSrc:'../static/images/search.png',routerName:{name:'search'}}
  ];


export default {
  name: 'App',
  data(){
    return{
      selected:'',
      tabs:tabs,
      cl:''
    }
  },
  watch:{
    selected:function(newV,oldV){
      console.log('ffff',newV,oldV);
      this.$router.push({name:this.selected});
    }
  },
  created: function(){
    //console.log('11111111111',this.$router);
    console.log("url--info",this.$route.name);
    //console.log('11111111111',this.$router.history.current.name);
    this.selected=this.$route.name;
  }

}
</script>

<style>


</style>
