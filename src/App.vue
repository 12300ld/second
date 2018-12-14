<template>
  <div id="app">
  	<!--{{$route.path}}
  	{{resPath}}-->
    <footer>
	    <ul>
	    	
		    <router-link to="/" tag="li" :class="resPath=='index'?'active':''">
		    	<span class="iconfont icon-guanwang"></span>
		    	<p>官方首页</p>
		    </router-link>
		    
		    
		    <router-link to="/fllow" tag="li" :class="resPath=='fllow'?'active':''">
		    	<span class="iconfont icon-scan"></span>
		    	<p>关于</p>
		     </router-link>
		    
		    <router-link to="/our" tag="li" :class="resPath=='our'?'active':''">
		    	<span class="iconfont icon-wode"></span>
		    	<p>登录</p>
		    </router-link>
		    
	    </ul>
    </footer>
    
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  //计算属性
  computed:{
  	resPath:function(){
		var arr=this.$route.path.split('/');
//			console.log(arr)
		return arr[1];
  	}
  }
}
</script>

<style lang="scss">
	
	ul,ol{
		list-style:none;
	}
	*{
		margin:0;
		padding:0;
	}
	a{
		text-decoration:none;
	}
	/*将px转化为rem*/
	@function rem($px){
		@return $px/75px*1rem;
	}
	
	footer{
		width:100%;
		height:rem(110px);
		position:fixed;
		left:0;
		bottom:0;
		z-index:999;
		background:#622524;
		ul{
			display:flex;
			li{
				width:33.333%;
				height:rem(110px);
				text-align: center;
				line-height:rem(60px);
				font-size:rem(30px);
				color:#fff;
				&.active{
					background:#9c4228;
					
				}
				.iconfont{
					font-size:rem(50px);
				}
				p{
					line-height:rem(20px);
				}
			}
		}
	}
	
	
</style>
