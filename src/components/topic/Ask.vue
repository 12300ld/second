<template>
  <div class="ask">
	   <list :items="items"></list>
	   <infinite-loading  v-if="isShow"  @infinite="infiniteHandler"></infinite-loading>
	   <router-view/>
  </div>
</template>

<script>
	
//引入axios 模块
	import List from '@/components/topic/List';
	import {getPic }from '@/getdata/getTopic.js';
//分页插件
	import InfiniteLoading from 'vue-infinite-loading';		

	
export default {
  name: 'Ask',
  data () {
    return {
      items:[],
			page:1,
			isShow:true,
    }
  },
  
  components:{
    	List,
    	InfiniteLoading,
    	
   },
  
  //钩子函数
  methods: {
	    infiniteHandler($state) {
	      setTimeout(() => {
	       getPic({tab:'ask',limit:5,page:++this.page}).then((response)=>{
					console.log(response)
					this.items=this.items.concat(response.data.data);
					
					//判断下一页有没有数据
					if(response.data.data.length==0){
						this.isShow=false;
						return;
					}
				})
	        $state.loaded();
	      }, 1000);
	    },
	  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

