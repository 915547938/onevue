<template>
    <div class="photoList">
        <NavBar title="图文分类"/>
        <div class="category-list">
            <ul>
                <li v-for="(category,indexs) in categoryList" :key="category.id" @click="categoryHandler(category.id)">
                    <a href="javascript:void(0);" :class="{active:category.id==seletcIndex}">{{category.title}}</a>
                </li>s
            </ul>
        </div>
        <!--图片展示区域-->
        <div class="photo-list">
            <ul>
                <li v-for="(item,index) in imgList" :key="item.id" >
                    <a href="javascript:void(0);">
                       <!-- <img :src="item.img_url" alt="">-->
                        <img v-lazy="item.img_url">
                    </a>
                    <p>
                        <span>{{item.title}}</span>
                        <br>
                        <span>{{item.zhaiyao}}</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PhotoList",
        data(){
            return{
                imgList:[],
                categoryList:[],
                seletcIndex:0
            }
        },
        methods:{
            //点击分类
            categoryHandler(index){
                //动态路由匹配
                console.log(index);
                console.log(this.$router);
                this.$router.push({name:'photo.list',params:{categoryId:index}});
                this.seletcIndex=index;
            },
            //获取图文数据sssssss
            loadImgByCategoryId(id){
                this.$axios.get('imglist/'+id)
                    .then(res=>{
                        this.imgList=res.data.message;
                        //console.log(res);
                    })
                    .catch(err=>{
                        console.log(err);
                    })
            }
        },
        beforeRouteEnter (to, from, next) {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建
            next(vm => {
                // 通过 `vm` 访问组件实例
                vm.loadImgByCategoryId(to.params.categoryId);
                vm.seletcIndex=to.params.categoryId;
            })
        },
        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
            //console.log(to);
            /*console.log(from);*/
            this.loadImgByCategoryId(to.params.categoryId);
            this.seletcIndex=to.params.categoryId;
            //console.log(this.seletcIndex);
            next();
        },
        created(){
            //this.loadImgByCategoryId(0);
            //获取图文分享的分类信息
            this.$axios.get('category')
                .then(res=>{
                    this.categoryList=res.data.message;
                    //console.log(res,111);
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    }
</script>

<style scoped>
    .category-list{
        width:100%;
        height:40px;
        overflow: hidden;
    }
    .category-list ul{
        width:100%;
        /*height:50px;*/
        overflow-y: hidden;
        overflow-x: scroll;
        white-space:nowrap;
    }
    .category-list ul li{
        display:inline-block;
        width:25%;
        height:100%;
        font-size:18px;
        line-height:40px;
        text-align:center;
    }
    .category-list ul li a{
        text-decoration:none;
        font-size:16px;
    }
    .category-list ul li a.active{
        color:#FC0280
    }
    .photo-list ul li{
        display:block;
        position: relative;
    }
    .photo-list ul li a{
        display:block;
        width:100%;
    }
    .photo-list ul li a img {
        width:100%;
    }
    .photo-list ul li p {
        position:absolute;
        bottom:0;
        width:100%;
        background-color:rgba(0,0,0,.2);
        padding:5px 0;
    }
    .photo-list ul li p span{
        color:#E6E6E6;
        font-size:16px;
    }
    .photoList{
        padding-bottom:100px;
    }
    image[lazy=loading]{
        width:40px;
        height:300px;
        margin:auto;
    }
    .icon-meiyoutupian{
        width:50px;
        height:50px;
    }
</style>
