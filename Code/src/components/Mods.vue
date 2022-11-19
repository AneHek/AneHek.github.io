<template>
    <h1>词条查询</h1>
    <NCard>
        <n-input type="text" placeholder="输入词条名进行搜索" round clearable autosize style="min-width: 50%"
            @update-value="(val) => { if (val) SearchKey = val; else clearSearch(); }" @on-clean="clearSearch();" />
        <n-button strong secondary round type="info"
            style="transform: translate(0px, 7px);--n-padding: 0;--n-width:34px" @click="SearchByName()">
            🔍
        </n-button>
        <div id="IconShow">
        </div>
        <br>
        <NTabs ref="tabsRef" :value="nowTab" justify-content="space-evenly" type="line" @update-value="changeTitleIcon">
            <NTabPane name="前言"></NTabPane>
            <NTabPane v-for="i in namelist.length" :key="i" :name="namelist[i - 1]">
                <!--display-directive="show:lazy"-->
                <MC :data='Clean_DataList[i - 1]' />
            </NTabPane>
        </NTabs>
    </NCard>
</template>
<script setup>
import {ref,nextTick} from 'vue'
import MC from './views/ModsCard.vue'
import { NCard, NInput, NButton, NTabs, NTabPane } from 'naive-ui'
const tabsRef = ref(null);
const resetBarPos = ()=>{
    nextTick(() => tabsRef.value?.syncBarPosition())
}
</script>
<script>

import mods from './data/mods-new'
export default {
    name: 'Mods',
    data() {
        return {
            SearchKey: null,
            nowTab: "前言",
            SearchResultList: [],
            Clean_DataList: this.getCleanData(),
            namelist: ["护甲词条", "武器词条", "防御塔词条"],
        }
    },
    methods: {
        SearchByName() {
            this.SearchResultList = [];
            this.Clean_DataList.length = 3;
            this.namelist.length = 3;
            if (this.SearchKey == null) {
                return;
            }
            this.SearchKey = this.SearchKey.toLowerCase()
            //this.nowTab = this.namelist[0];
            let pos = 0
            for (; pos < 3; pos++)
                for (let i = 0; i < this.Clean_DataList[pos].length; i++) {
                    let dataname = this.Clean_DataList[pos][i].name.replace(" ", '').toLowerCase()
                    if (dataname.indexOf(this.SearchKey) != -1) {
                        this.SearchResultList.push(this.Clean_DataList[pos][i])
                    }
                }
            this.Clean_DataList.push(this.SearchResultList)
            this.namelist.push("搜索结果")
            this.nowTab = "搜索结果";
            this.resetBarPos();
        },
        clearSearch() {
            this.SearchKey = null;
            this.Clean_DataList.length = 3;
            this.namelist.length = 3;
            this.SearchResultList = [];
            this.resetBarPos();
            this.nowTab = (this.nowTab == "搜索结果") ? this.namelist[0] : this.nowTab
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