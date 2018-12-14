import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Fllow from '@/components/Fllow'
import Our from '@/components/Our'
//引入二级路由
import All from '@/components/topic/All'
import Good from '@/components/topic/Good'
import Job from '@/components/topic/job'
import Ask from '@/components/topic/Ask'
import Share from '@/components/topic/Share'
import Dev from '@/components/topic/Dev'
import Show from '@/components/topic/Show'

import loading from '@/components/loading'






Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index,
      children:[
      	{
      		path:'/',
      		component:All
      	},
      	{
      		path:'good',
      		component:Good
      	},
      	{
      		path:'ask',
      		component:Ask
      	},
      	{
      		path:'job',
      		component:Job
      	},
      	{
      		path:'share',
      		component:Share
      	},
      	{
      		path:'dev',
      		component:Dev
      	},
      	{
      		path:'show/:id',
      		component:Show
      	},
      	
      	
      ]
    },
    {
      path: '/fllow',
      name: 'fllow',
      component: Fllow
    },
    {
      path: '/our',
      name: 'fllow',
      component: Our
    },
    {
      path: '/loading',
      component: loading
    },
    
    {
		path:'/*',
		redirect:'/index'
    }
    
  ]
})
