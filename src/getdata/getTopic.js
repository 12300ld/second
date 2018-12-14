//主题相关的数据

//引入相关模块
import axios from 'axios';

var $http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
});


function getPic(option){
	
	
	var newOption=Object.assign({
		tab:'all',
		limit:40,
		page:1
		
	},option)

	return $http({
		url:'/topics',
		//传参
		params:newOption,
	})
	
}

//请求主题详情

function getTopicData(id){
	
	return $http.get('/topic/'+id);
	
}

//时间戳

function processDate(fabudate){
			var date=new Date();  //获取当前时间戳
			var t1=date.getTime(); //获取1970 1 1 到现在的毫秒数
			
			var date2 = new Date(fabudate);  //YYYY-MM-DD   hh:ff:mm
			var t2=date2.getTime();
			
			var t3=t2-t1;   //t3代表  date2到date之间的时间差
			//1s==1000ms
			var t=t3/1000;  
			//具体的秒数   60s=1m  60m=1h   24h=1D
			
			var day = parseInt(t/60/60/24);  
			var hour = parseInt(t/60/60%24); 
			var minutes=parseInt(t/60%60);
			var seconds=parseInt(t%60);
			
			var str =`距离2018年11月1日还有${day}天${hour}小时${minutes} 分钟${seconds} 秒`;
			if(day){
				return `${day}天前`.substr(1)
			}else if(hour){
				return `${hour}小时前`.substr(1)
			}
			else if(minutes){
				return `${minutes}分钟前`.substr(1)
			}else{
				return `刚刚发布`
			}
}


//暴露模块

export {getPic,getTopicData,processDate }