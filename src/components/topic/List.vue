<template>
  <div class="List">
  	
  	<loading v-if="!items.length"></loading>
  	
  	<ul class="items">
  		<li class="item" v-for="item in items">
	  		<img v-lazy="item.author.avatar_url" alt="" />
	  		<div class="tab">
	  			<div class="mo" v-if='item.top'>置顶</div>
	  			<div class="mo" v-else-if="item.good">精华</div>
	  			<div v-else>{{tabs[item.tab]}}</div>
	  		</div>
	  		<!--<div class="title">{{item.title}}</div>-->
	  		
	  		<router-link :to="'/index/show/'+item.id" tag="div" class="title">{{item.title}}</router-link>
	  		
  		</li>
  	</ul>
  
   <router-view/>
  </div>
</template>

<script>
	
	//引入axios 模块
//	import axios from 'axios';

import loading from '@/components/loading';
export default {
  name: 'List',
  data () {
    return {
//   
      tabs:{
      	
      	ask:'问答',
      	job:'招聘',
      	share:'分享',
      	dev:'测试'
      }
    }
  },
	 //接收items
   props:['items'],
   
   components:{
    	loading
   },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/sass/index.scss';
@import '@/assets/sass/list.scss';
</style>
