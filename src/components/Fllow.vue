<template>
  <div class="fllow">
  	<div class="top">
  		<img src="../../static/images/cnodejs.png" alt="" />
  		<div class="select">
  			<span class="iconfont icon-sousuo"></span>
  		</div>
  	</div>
  	<div class="container">
	  	<div class="title">
	  		<span>主页</span>/
	  		<span>关于</span>
	  	</div>
	  	<div class="text">
	  		<div class="big"><h1>关于</h1></div>
	  		<div><span>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</span></div>
	  		<div><span>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</span></div>
	  		<div><span>CNode 的 SLA 保证是，一个9，即 90.000000%。</span></div>
	  		<div><span>社区目前由<a href="">@alsotang</a> 在维护，有问题请联系：<a href="">https://github.com/alsotang</a></span></div>
	  		<div><span>请关注我们的官方微博：<a href="">http://weibo.com/cnodejs</a></span></div>
	  		
	  		<div class="big"><h1>移动客户端</h1></div>
	  		<div><span>客户端由 <a href="">@soliury</a> 开发维护。</span></div>
	  		<div><span>源码地址：<a href="">https://github.com/soliury/noder-react-native</a>  。</span></div>
	  		<div><span>立即体验 CNode 客户端，直接扫描页面右侧二维码。</span></div>
	  		<div><span>另，安卓用户同时可选择：<a href="">https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。</span></div>
	  		
	  		<div class="big"><h1>友情链接</h1></div>
	  		<div>
	  			<img src="../../static/images/huoban.gif" alt="" />
	  			<img src="../../static/images/ffer.png" alt="" />
	  			<img src="../../static/images/jiguang.png" alt="" />
	  			<img src="../../static/images/sf.png" alt="" />
	  			<img src="../../static/images/ionichina.png" alt="" />
	  		</div>
	  		
	  		<div class="big"><h1>LOGO</h1></div>
	  		<div><span>白底： /public/images/cnodejs.svg</span></div>
	  		<div><span>黑底： /public/images/cnodejs_light.svg</span></div>
	  	
	  	</div>
  	</div>
  	
  	<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Fllow',
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
		/*body{
			background:#f2f2f2;
		}*/
		.top{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:rem(220px);
			background:#464646;
			overflow: hidden;
			img{
				display:block;
				margin:rem(10px) auto;
			}
			.select{
				width:rem(500px);
				height:rem(70px);
				background:#666;
				margin:0 auto;
				border-radius:rem(70px);
				.iconfont{
					font-size:rem(50px);
					line-height:rem(70px);
				}
			}
		}
		
		.container{
			
			width:100%;
			border-radius:rem(10px);
			margin-top:rem(250px);
			margin-bottom:rem(120px);
			/*background:#f2f3f8;*/
			.title{
				width:100%;
				height:rem(90px);
				background:#f2f3f8;
				margin:0 auto;
				font-size:rem(30px);
				line-height:rem(90px);
				border-bottom:rem(1px) solid #ccc;
				span:nth-of-type(1){
					color:#66ff09;
					margin-left:rem(10px);
					
				}
			}
			
			.text{
				width:rem(710px);
				margin:0 auto;
				div{
					width:100%;
					font-size:rem(30px);
					line-height:rem(60px);
					margin-top:rem(30px);
					color:#666;
					a{
						color:#6699ff;
					}
					img{
						width:rem(350px);
						margin:rem(30px) 0;
					}
				}
				.big{
					height:rem(120px);
					width:100%;
					border-bottom:rem(1px) solid #ccc;
					font-size:rem(30px);
					color:#333;
					line-height:rem(140px);
				}
			}
		
		}
		
		
					
					

</style>
