<template>
  <div id="home">
    <!--轮播图-->
    <mt-swipe :auto="4000" style="height:200px;background:red;">
      <mt-swipe-item v-for="(item,index) in img" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!--九宫格-->
    <div class="list">
      <ul>
        <li v-for="(grid,index) in grids" :key="index">
          <router-link :to="grid.router">
            <img :src="grid.src" alt="grid.title">
            <p>{{grid.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

    var grids=[
      {id:1,src:'../../../static/images/news.png',title:'新闻资讯',router:{name:'news.list'}},
      {id:2,src:'../../../static/images/share.png',title:'图文分享',router:{name:'photo.list',params:{categoryId:0}}},
      {id:3,src:'../../../static/images/show.png',title:'商品展示',router:{name:'news.list'}},
      {id:4,src:'../../../static/images/information.png',title:'资讯',router:{name:'news.list'}},
      {id:5,src:'../../../static/images/leave.png',title:'留言反馈',router:{name:'news.list'}},
      {id:6,src:'../../../static/images/contact.png',title:'联系我们',router:{name:'news.list'}},
    ];

    export default {
        name: "home",
        data(){
          return{
            img:[],
            grids:grids
          }
        },
        created() {
          this.$axios.get('getlunbo')
          .then(res=>{
              console.log(res);
              this.img=res.data.message;
          })
          .catch(err=>{
              console.log('轮播图数据异常',err);
          })
        }
    }
</script>

<style scoped lang="css">
  .list{
    width:100%;
    height:100%;
    margin-bottom: 20px;
  }
  .list ul{
    display:flex;
    flex-wrap: wrap;
  }
  .list ul li{
    width:33%;
    height:100px;
    text-align: center;
    font-size:14px;
    margin-top:15px;
  }
  .list ul li a{
    display:inline-block;
    width:60px;height:50px;
    margin:0 auto;
  }
  .list ul li a img{
    width:50px;
  }
</style>
