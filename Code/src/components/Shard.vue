<template>
    <h1>Shard查询</h1>
    <NCard>
        <n-input type="text" placeholder="输入碎片名进行搜索(不含大师碎片)" round clearable autosize style="min-width: 50%"
            @update-value="(val) => { if (val) SearchKey = val; else clearSearch(); }" @on-clean="clearSearch();" />
        <n-button strong secondary round type="info"
            style="transform: translate(0px, 7px);--n-padding: 0;--n-width:34px" @click="SearchByName">
            🔍
        </n-button>
        <NTabs ref="tabsRef" :value="nowTab" justify-content="space-evenly" type="line" @update-value="changeTitleIcon">
            <NTabPane name="前言" display-directive="show:lazy"></NTabPane>
            <NTabPane v-for="i in 11" :key="i" :name="'C' + (i - 1).toString()" display-directive="show:lazy">
                <SC :data='Clean_DataList[i - 1]' />
            </NTabPane>
            <NTabPane name="大师" display-directive="show:lazy">
                <SCM :data='Clean_DataList[11]' />
            </NTabPane>
            <NTabPane v-for="i in SearchList" :name="SearchList[0]" display-directive="show:lazy">
                <SC :data="SearchResultList" />
            </NTabPane>
        </NTabs>
    </NCard>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import SC from './views/ShardCard.vue'
import SCM from './views/ShardCardMastery.vue'
import Imgs from './Imgs/imgs.vue'
import { NCard, NInput, NButton, NTabs, NTabPane } from 'naive-ui'
const tabsRef = ref(null);
const resetBarPos = () => {
    nextTick(() => tabsRef.value?.syncBarPosition())
}
</script>
<script>

import shard from './data/shard-new'
import shardlist_master from './data/shard'
export default {
    name: 'Shard',
    data() {
        return {
            SearchKey: null,
            nowTab: "前言",
            Clean_DataList: this.getCleanData(),
            SearchList: [],
            SearchResultList: [],
        }
    },
    methods: {
        SearchByName() {
            this.SearchResultList = [];
            if (this.SearchKey == null) {
                return;
            }
            this.SearchList = ["搜索结果"];
            this.SearchKey = this.SearchKey.toLowerCase()
            for(let pos = 0;pos < this.Clean_DataList.length - 1;pos++)
                for(let i = 0;i < this.Clean_DataList[pos].length;i++)
                {
                    let dataname = this.Clean_DataList[pos][i].name.replace(" ", '').toLowerCase()
                    if (dataname.indexOf(this.SearchKey) != -1) {
                        this.SearchResultList.push(this.Clean_DataList[pos][i])
                    }
                }
            this.nowTab = "搜索结果";
            this.resetBarPos();
        },
        getCleanData() {
            let dataList = [[], [], [], [], [], [], [], [], [], [], [], []];
            for (let i in shard) {
                //console.log(i);
                let tmp = shard[i];
                tmp.name = i;
                let id = this.getIdByShardPack(tmp.shardpack);
                tmp.key = dataList[id].length + 1;
                dataList[id].push(tmp);
            }
            for (let i in shardlist_master) {
                let tmp = shardlist_master[i];
                tmp.name = i;
                let id = 11;
                tmp.key = dataList[id].length + 1;
                dataList[id].push(tmp);
            }
            // for(let i in shardlist[0]){
            //     //console.log(shardlist[0][i]);
            //     let tmp = {};
            //     tmp.name = shardlist[0][i].name;
            //     tmp.effect = shardlist[0][i].effect;
            //     tmp.lvl = shardlist[0][i].lvl;
            //     tmp.shardpack = shardlist[0][i].shardpack;
            //     tmp.vaildforhero = shardlist[0][i].vaildforhero;
            //     tmp.slot = this.getSlot(shardlist[0][i]); 
            //     let id = this.getIdByShardPack(tmp.shardpack);
            //     tmp.key = dataList[id].length + 1;
            //     dataList[id].push(tmp);
            // }
            // for(let i in shardlist[1]){
            //     //console.log(shardlist[0][i]);
            //     let tmp = {};
            //     tmp.name = shardlist[1][i].name;
            //     tmp.effect = shardlist[1][i].effect;
            //     tmp.lvl = shardlist[1][i].lvl;
            //     tmp.stars = shardlist[1][i].stars;
            //     tmp.vaildforhero = shardlist[1][i].vaildforhero;
            //     tmp.prime = shardlist[1][i].prime
            //     tmp.slot = this.getSlot(shardlist[1][i]); 
            //     let id = 11;
            //     tmp.key = dataList[id].length + 1;
            //     dataList[id].push(tmp);
            // }
            return dataList;
        },
        clearSearch() {
            this.SearchKey = null;
            this.SearchList = [];
            this.SearchResultList = [];
            this.resetBarPos();
            this.nowTab = (this.nowTab == "搜索结果") ? "C0" : this.nowTab
        },
        getSlot(k) {
            let key = ["weapon", "sheild", "helmet", "chest", "gloves", "boots", "relic"]
            let ret = ["武器", "盾牌", "头盔", "胸甲", "手套", "鞋子", "防御塔"]
            for (let i in key) {
                if (k[key[i]].indexOf("√") != -1) return ret[i];
            }
            return ret[0];
        },
        getIdByShardPack(str) {
            //if(str.indexOf("Chaos") == -1) return 0;
            return Number(str.replace(" ", "").replace("Chaos", "").replace("C", ""));
        },
        changeTitleIcon(tab) {
            this.nowTab = tab;
        }

    }
}
</script>