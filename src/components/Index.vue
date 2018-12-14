<template>
  <div class="index">
  	<nav class="top">
	  	<ul>
		  	<router-link to="/index/" tag="li">全部</router-link>
		  	<router-link to="/index/good" tag="li" >精华 </router-link>
		  	<router-link to="/index/share" tag="li" >分享</router-link>
		  	<router-link to="/index/ask" tag="li" >问答</router-link>
		  	<router-link to="/index/job" tag="li" >招聘</router-link>
		 		<router-link to="/index/dev" tag="li" >测试</router-link>
		  	
		  	
	  	</ul>
	  	<router-view></router-view>
  	</nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
@import '@/assets/sass/index.scss';

nav.top{
	width:100%;
	height:rem(90px);

	
	ul{
		
		position:fixed;
		top:0;
		left:0;
		z-index:999;
		height:rem(90px);
		width:100%;
		background:#f03f30;
		display:flex;
		justify-content:space-around;
		li{
			width:rem(100px);
			height:rem(60px);
			margin-top:rem(15px);
			color:#fff;
			font-size:rem(40px);
			line-height:rem(60px);
			text-align:center;
			
			&.router-link-exact-active{
				background:#f90;
				border-radius:rem(10px);
			}
		}
		
		
	}
}
	

</style>
