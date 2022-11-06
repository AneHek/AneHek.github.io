<template>
    <h1>Shard查询</h1>
    <NCard>
        <n-input type="text" placeholder="输入碎片名进行搜索" round clearable autosize
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
            <NTabPane name="C0" display-directive="show:lazy"><SC :data='Clean_DataList[0]'/></NTabPane>
            <NTabPane name="C1" display-directive="show:lazy"><SC :data='Clean_DataList[1]'/></NTabPane>
            <NTabPane name="C2" display-directive="show:lazy"><SC :data='Clean_DataList[2]'/></NTabPane>
            <NTabPane name="C3" display-directive="show:lazy"><SC :data='Clean_DataList[3]'/></NTabPane>
            <NTabPane name="C4" display-directive="show:lazy"><SC :data='Clean_DataList[4]'/></NTabPane>
            <NTabPane name="C5" display-directive="show:lazy"><SC :data='Clean_DataList[5]'/></NTabPane>
            <NTabPane name="C6" display-directive="show:lazy"><SC :data='Clean_DataList[6]'/></NTabPane>
            <NTabPane name="C7" display-directive="show:lazy"><SC :data='Clean_DataList[7]'/></NTabPane>
            <NTabPane name="C8" display-directive="show:lazy"><SC :data='Clean_DataList[8]'/></NTabPane>
            <NTabPane name="C9" display-directive="show:lazy"><SC :data='Clean_DataList[9]'/></NTabPane>
            <NTabPane name="C10" display-directive="show:lazy"><SC :data='Clean_DataList[10]'/></NTabPane>
            <NTabPane name="大师" display-directive="show:lazy"><SCM :data='Clean_DataList[11]'/></NTabPane>
        </NTabs>
    </NCard>
</template>

<script setup>
import SC from './views/ShardCard.vue'
import SCM from './views/ShardCardMastery.vue'
import { NCard, NInput, NButton, NTabs, NTabPane } from 'naive-ui'
import {ref} from 'vue'
</script>
<script>

import shard from './data/shard-new'
import shardlist_master from './data/shard'
export default {
    name: 'Shard',
    data() {
        return { 
            SearchKey:ref(null),
            nowTab:"前言",
            Clean_DataList:this.getCleanData()
        }
    },
    methods: {
        SearchByName() {
            console.log(this.SearchKey)
            this.nowTab = "大师";
        },
        getCleanData(){
            let dataList = [[],[],[],[],[],[],[],[],[],[],[],[]];
            for(let i in shard){
                //console.log(i);
                let tmp = shard[i];
                tmp.name = i;
                let id = this.getIdByShardPack(tmp.shardpack);
                tmp.key = dataList[id].length + 1;
                dataList[id].push(tmp);
            }
            for(let i in shardlist_master){
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
        getSlot(k){
            let key = ["weapon","sheild","helmet","chest","gloves","boots","relic"]
            let ret = ["武器","盾牌","头盔","胸甲","手套","鞋子","防御塔"]
            for(let i in key)
            {
                if(k[key[i]].indexOf("√") != -1) return ret[i];
            }
            return ret[0];
        },
        getIdByShardPack(str){
            //if(str.indexOf("Chaos") == -1) return 0;
            return Number(str.replace(" ","").replace("Chaos","").replace("C",""));
        },
        changeTitleIcon(tab){
            this.nowTab = tab;
            //console.log(tab)
        }

    }
}
</script>