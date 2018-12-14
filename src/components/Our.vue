<template>
  <div class="our">
  	 <div class="swiper-container">
	    <div class="swiper-wrapper">
	      <div class="swiper-slide">
	      	<img src="../../static/images/2.jpeg" alt="" />
	      </div>
	      
	      <div class="swiper-slide">
	      	<img src="../../static/images/3.jpeg" alt="" />
	      </div>
	      <div class="swiper-slide">
	      	<img src="../../static/images/4.jpeg" alt="" />
	      </div>
	      <div class="swiper-slide">
	      	<img src="../../static/images/5.jpeg" alt="" />
	      </div>
	      <div class="swiper-slide">
	      	<img src="../../static/images/6.jpeg" alt="" />
	      </div>
	      <div class="swiper-slide">
	      	<img src="../../static/images/7.jpeg" alt="" />
	      </div>
	      <div class="swiper-slide">
	      	<img src="../../static/images/8.jpeg" alt="" />
	      </div>
	      
	    </div>
	    <!-- Add Pagination -->
	    <div class="swiper-pagination"></div>
	  </div>
  	
  	
  		<div class="login">
  			<div class="title">
		  		<span>主页</span>/
		  		<span>登录</span>
		  	</div>
		  	
		  	<div class="tab">
			  	<div class="text">
			  		<span>用户名</span>
			  		<div></div>
			  	</div>
			  	
			  	<div class="text">
			  		<span>密码</span>
			  		<div></div>
			  	</div>
		  	</div>
		  	
  		</div>
  		
  		<div class="botm">
  			<ul class="con">
  				<li>登录</li>
  				<li>通过&nbsp;GitHub&nbsp;登录</li>
  				<li>忘记密码了？</li>
  			</ul>
  		</div>
  	
  	<router-view></router-view>
  </div>
</template>

<script>
	
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  
  mounted:function() {
 		var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
       loop : true,
	  });
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/sass/index.scss';
		.swiper-slide{
			width:100%;
			img{
				width:100%;
			}
		}
		
		.login{
			width:rem(710px);
			margin:0 auto;
			.title{
				width:100%;
				height:rem(90px);
				background:#dddddd;;
				font-size:rem(35px);
				line-height:rem(90px);
				color:#666;
				span:nth-of-type(1){
					color:#060;
					margin-left:rem(15px);
				}
			}
			
			.tab{
				margin-top:rem(100px);
				margin-left:rem(15px);
				.text{
				width:rem(710px);
				margin:0 auto;
			
					span{
						font-size:rem(30px);
						color:#333;
					}
					div{
						width:rem(600px);
						height:rem(60px);
						margin-top:rem(20px);
						margin-bottom:rem(40px);
						border:rem(2px) solid #ccc;
						border-radius:rem(10px);
					}
				}
			}
			
		}
	
		.botm{
				width:100%;
				height:rem(200px);
				
				.con{
					display:flex;
					
					/*align-items:center;
					justify-content:space-around;*/
					margin-left:rem(35px);
					font-size:rem(30px);
					li{
						
						height:rem(65px);
						
					}
					li:nth-of-type(1){
						width:rem(100px);
						text-align:center;
						line-height:rem(65px);
						border-radius:rem(5px);
						background:#3366ff;
						color:#fff;
					}
					
					li:nth-of-type(2){
						width:rem(300px);
						text-align:center;
						line-height:rem(65px);
						border-radius:rem(5px);
						background:#3399ff;
						color:#fff;
						margin-left:rem(10px);
						margin-right:rem(40px);
						
					}
					li:nth-of-type(3){
						line-height:rem(65px);
						color:#666;
						margin-left:rem(10px);
						
					}
					
					
				}
			}
</style>
