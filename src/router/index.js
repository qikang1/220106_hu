
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

import Miste from '../pages/Miste/Miste'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'



export default new VueRouter({
    routes:[
        {
            name:'miste',
            path:'/miste',
            component:Miste,
            meta:{
                showFootGuide:true
            }
        },
        {
            name:'order',
            path:'/order',
            component:Order,
            meta:{
                showFootGuide:true
            }
        },
        {
            name:'profile',
            path:'/profile',
            component:Profile,
            meta:{
                showFootGuide:true
            }
        },
        {
            name:'search',
            path:'/search',
            component:Search,
            meta:{
                showFootGuide:true
            }
        },{
            path:'/',
            redirect:'/miste'
        },{
            name:'login',
            path:'/login',
            component:Login
        }
    ]
})