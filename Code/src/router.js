import { createRouter,createWebHashHistory} from 'vue-router'
import Index from './components/Index'
import GameInfo from './components/GameInfo'
import Main from './components/Main'
import Mods from './components/Mods'
import Shard from './components/Shard'
import DB from './components/DPSBuild'
import TB from './components/TowerBuild'
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:Index
        },
        {
            path:"/main",
            component:Main,
            children:[
                {
                    path:"mods",
                    component:Mods
                },
                {
                    path:"shard",
                    component:Shard
                },
                {
                    path:"dpsbuild",
                    component:DB
                },
                {
                    path:"towerbuild",
                    component:TB
                },
                {
                    path:"/gameinfo",
                    component:GameInfo,
                    children:[]
                }
            ]
        },
        
    ]
});

export default router;