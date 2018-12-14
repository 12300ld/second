<template>
  <div class="show">
  	 
  		<div class="content">
  			<div class="contn">
  				
  				<div class="title" >
  					<h1 v-html="items.title">{{items.title}}</h1>
  				</div>
  				<ul class="author">
  					
		  				<span>发布时间:</span>
						  <span v-html="items.create_at">
		  					
		  				</span>
	  			
  					
	  				
		  				<span>作者:</span>
						  <span v-html="items.author.loginname">
		  					{{items.author.loginname}}
		  				</span>
	  			
	  				
	  				
		  				<span v-html="items.visit_count">{{items.visit_count}}</span>
		  				<span>次浏览</span>
	  				
  				</ul>
  				<div class="cont">
  					<p  v-html="items.content"></p>
  				</div>
  				
  				
  				<div class="total" >
  					<span v-html="items.reply_count">{{items.reply_count}}</span>
  					<span>回复</span>
  				</div>
  			</div>
  			
  			<ul class="pre"  >
  				<li  class="pres" v-for="(key,value) in items.replies" >
  							<img :src="key.author.avatar_url" alt="" />	
  							<span>{{key.author.loginname}}</span>
								<span >{{ value+1 }} 楼</span>
								<span  v-html="key.create_at">{{key.create_at}}</span>
								<div v-html="key.content">{{key.content}}</div>
								
					</li>
  				<!--<li  class="pres" v-for="con in items.replies">
  					<img :src="con.author.avatar_url" alt="" />
  					<span>{{con.author.loginname}}</span>
  					 
  					<span  v-html="con.create_at">{{con.create_at}}</span>
  					
  					<div v-html="con.content">{{con.content}}</div>
  				</li>-->
  				
  			</ul>
  	
  		</div>
  <router-view/>
  </div>
</template>

<script>
	
import {getTopicData} from '@/getdata/getTopic.js';
import { processDate } from '@/getdata/getTopic.js';


export default {
  name: 'Show',
  data () {
    return {
    	items:[],
    	
			
    }
  
  },
  

  mounted:function(){
  	
	
					getTopicData(this.$route.params.id).then((response)=>{
					
					response.data.data.create_at = processDate(response.data.data.create_at)
					
					this.items=response.data.data;
					console.log(this.items);
					
					});
		  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/assets/sass/index.scss';
@import '@/assets/sass/list.scss';
	
	.content{
			width:100%;
			margin-bottom:rem(110px);
			.title{
				width:rem(730px);
				margin:0 auto;
				margin-top:rem(130px);
				h1{
					font-size:rem(40px);
					color:#666;
				}
			}
			.contn{
				width:rem(750px);
				margin:0 auto;
				.author{
							
							width:100%;
							height:rem(90px);
							line-height:rem(40px);
							border-bottom:rem(1px) solid #fcc;
							margin-top:rem(30px);
							margin-bottom:rem(20px);
							color:#990;
							
				}
			}
			
			.cont{
					width:rem(730px);
					margin:0 auto;
					font-size:rem(40px);
					overflow:hidden;
					word-break:break-all;
					img{
						width:100%;
					}
				
			}
			
			.total{
				width:100%;
				height:rem(80px);
				margin:rem(30px) 0;
				background:#f2f2f2;
				font-size:rem(30px);
				line-height:rem(80px);
				span:nth-of-type(1){
				margin-left: rem(30px);
				}
			}
			.pre{
					width:rem(730px);
					margin:0 auto;
					padding:rem(30px) 0;
					overflow:hidden;
					font-size:rem(30px);
					
					
					.pres{
						width:100%;
						margin-top:rem(20px);
					
						border-bottom:rem(1px) solid #ccc;
						
						img{
							width:rem(60px);
							height:rem(60px);
							border-radius:rem(10px);
							margin-top:rem(5px);
							vertical-align:middle;
						}
						span{
							margin:0 rem(10px);
						}
						
						div{
							margin-top:rem(10px);
							width:100%;
							
						}
						
						
						
						
					}
			}
			
			
	}
	

</style>
