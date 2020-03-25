<template>
  <div class="news">
    <NavBar title="新闻列表"/>
    <div class="newList">
      <ul>
        <li v-for="(onenew,index) in news" :key="index">
          <router-link :to="{name:'news.detail',query:{id:onenew.id}}">
            <div class="new_img">
              <img :src="onenew.img_url" alt="">
            </div>
            <div class="content">
              <p class="title">{{onenew.title}}</p>
              <div class="new-desc">
                <p class="summary">{{onenew.zhaiyao}}</p>
                <p class="dbs">
                  <span class="pralse">点赞数:{{onenew.click}}</span>
                  <span class="time">发表时间:{{onenew.add_time}}</span>
                </p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
    export default {
        name: "NewsList",
        data(){
          return{
            news:[]
          }
        },
        created() {
          this.$axios.get('getnews')
          .then(res=>{
            this.news=res.data.message
            console.log(res)
          })
          .catch(err=>{
            console.log('新闻数据异常',err)
          })
        }
    }
</script>

<style scoped>
  .newList{
    margin-bottom:55px;
  }
  .content{
    margin-left:2px;
  }
  .new_img{
    width:7rem;
    height:7rem;
    text-align: center;
  }
  .new_img img{
    width:6rem;
    height:6rem;
  }
  .newList ul > li:first-child{
    margin-top:10px;
  }
  .newList ul li a{
      display: flex;
  }
  .newList ul li a{
    width:100%;
  }
  .title{
    margin-top:0.3rem;
  }
  .pralse{
    font-size:14px;
  }
  .time{
    font-size:14px;
  }
  .dbs{
    margin-top:0.7rem;
  }
  .summary{
    margin-top:0.5rem;
  }
</style>
