<template>
    <h1>这里是菜单栏</h1>
    <h2>还有侧边栏</h2>
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
        <router-view></router-view>
    </n-config-provider>
</template>

<script>
import { zhCN, dateZhCN,NConfigProvider } from 'naive-ui'
export default {
    name: 'Main',
    components:{
        NConfigProvider
    },
    setup(){
        return{
            zhCN,dateZhCN
        }
    }
}
</script>