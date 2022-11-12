<template>
    <h1>词条查询</h1>
    <NCard>
        <n-input type="text" placeholder="输入词条名进行搜索" round clearable autosize
            style="min-width: 50%" @update-value="(val)=>{SearchKey=val;}"/>
        <n-button strong secondary round type="info"
            style="transform: translate(0px, 7px);--n-padding: 0;--n-width:34px" @click="SearchByName">
            🔍
        </n-button>
        <div id = "IconShow">
        </div>
        <br>
        <NTabs :value="nowTab" justify-content="space-evenly" type="line" @update-value="changeTitleIcon">
            <NTabPane name="前言" display-directive="show:lazy"></NTabPane>
            <NTabPane v-for="i in 3" :key="i" :name="namelist[i-1]" display-directive="show:lazy">
                <MC :data='Clean_DataList[i-1]'/>
            </NTabPane>
        </NTabs>
    </NCard>
</template>
<script setup>
import MC from './views/ModsCard.vue'
import { NCard, NInput, NButton, NTabs, NTabPane } from 'naive-ui'
</script>
<script>
import mods from './data/mods-new'
export default {
    name:'Mods',
    data() {
        return { 
            SearchKey:null,
            nowTab:"前言",
            Clean_DataList:this.getCleanData(),
            namelist:["护甲词条","武器词条","防御塔词条"],
        }
    },
    methods: {
        SearchByName() {
            console.log(this.SearchKey)
            this.nowTab = "防御塔词条";
        },
        changeTitleIcon(tab){
            this.nowTab = tab;
            //console.log(tab)
        },
        getCleanData(){
            let dataList = [[],[],[]]
            for(var i = 0; i < 3;i++)
            {
                for(var j in mods[i])
                {
                    var tmp = mods[i][j];
                    tmp.name = j;
                    tmp.key = dataList[i].length + 1;
                    dataList[i].push(tmp);
                }
            }
            return dataList;
        }
    }
}
</script>