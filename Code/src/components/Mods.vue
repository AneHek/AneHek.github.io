<template>
    <h1>词条查询</h1>
    <NCard>
        <n-input type="text" placeholder="输入词条名进行搜索" round clearable autosize style="min-width: 50%"
            @update-value="(val) => { if (val) SearchKey = val; else clearSearch(); }"  @on-clean="clearSearch();"/>
        <n-button strong secondary round type="info"
            style="transform: translate(0px, 7px);--n-padding: 0;--n-width:34px" @click="SearchByName()">
            🔍
        </n-button>
        <div id="IconShow">
        </div>
        <br>
        <NTabs :value="nowTab" justify-content="space-evenly" type="line" @update-value="changeTitleIcon">
            <NTabPane name="前言" ></NTabPane>
            <NTabPane v-for="i in 3" :key="i" :name="namelist[i - 1]"><!--display-directive="show:lazy"-->
                <MC :ref="mcRef" :id="'MC' + i.toString()" :data='Clean_DataList[i - 1]' />
            </NTabPane>
        </NTabs>
    </NCard>
</template>
<script setup>
import MC from './views/ModsCard.vue'
import { onBeforeUpdate, onMounted, ref,toRaw } from 'vue'
import { NCard, NInput, NButton, NTabs, NTabPane } from 'naive-ui'
const mcRefList = [];
const mcRef = (el) => {
    //console.log(el.table);
    //mclist.set(el.id,el);
    if(el) {
        mcRefList.length= 0
        mcRefList.push(el)
    }
}
const SearchByNames = (val)=>{
    console.log(mcRefList)
    mcRefList[0].SearchByName(val)
}
const SearchKey= null
</script>
<script>

import mods from './data/mods-new'
import { delay } from 'q';
export default {
    name: 'Mods',
    data() {
        return {
            
            nowTab: "前言",
            Clean_DataList: this.getCleanData(),
            namelist: ["护甲词条", "武器词条", "防御塔词条"],
        }
    },
    methods: {
        SearchByName() {
            if(this.SearchKey == null) return;
            //this.nowTab = this.namelist[0];
            let pos = 0
            for (; pos < 3; pos++)
                for (let i = 0; i < this.Clean_DataList[pos].length; i++) {
                    if (this.Clean_DataList[pos][i].name.indexOf(this.SearchKey) != -1) {
                        this.nowTab = this.namelist[pos];
                        this.SearchByNames(this.SearchKey)
                        return;
                    }
                }

            this.nowTab = "防御塔词条";
        },
        clearSearch() {
            this.SearchKey=null;
            this.SearchByNames(null);
        },
        changeTitleIcon(tab) {
            
            this.nowTab = tab;
            //console.log(tab)
        },
        getCleanData() {
            let dataList = [[], [], []]
            for (var i = 0; i < 3; i++) {
                for (var j in mods[i]) {
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