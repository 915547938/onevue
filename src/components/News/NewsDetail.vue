<template>
    <div class="detail">
        <NavBar title="新闻详情"/>
        <h3 class="title">{{detail.title}}</h3>
        <span class="spanone">{{detail.click}}次点击</span>
        <span class="spantwo">分类：{{detail.type}}</span>
        <span class="spanthree">发布时间：{{detail.add_time | converTime('YYYY-MM-DD')}}</span>
        <div class="con">
            {{detail.con}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsDetail",
        data(){
            return{
                detail:[]
            }
        },
        created(){
            let id=this.$route.query.id;
            this.$axios.get('detail/${id}')
                .then(res=>{
                    this.detail=res.data.message;
                    console.log(res);
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    }
</script>
<style scoped>
.detail{
    text-align: center;
}
.spanone{
    float:left;
    margin-left:10px;
}
.spantwo{

}
.spanthree{
    float:right;
    margin-right:10px;
}
.title{
    margin:5px;
}
.con{
    padding:15px;
}
</style>