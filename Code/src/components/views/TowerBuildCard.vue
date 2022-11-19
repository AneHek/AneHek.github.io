<template>
    <NCard 
    embedded
    :segmented="{
      contenet:true,
      footer:'soft'
      }"
    content-style="padding-top:5px;padding-bottom:5px;padding-left:0px;padding-right:0px;"
    footer-style="padding-top:5px;padding-bottom:5px;padding-left:0px;padding-right:0px;margin:0px"
    >
        <!--下面为表格头，放防御塔信息-->
        <NLayout has-sider>
            <NLayoutSider bordered content-style="padding: 5px" :width="110">
                <Imgs size="100" :id="(tid+1).toString()" style="margin-top:6px ;"/>
            </NLayoutSider>
            <NLayout>
                <NLayoutHeader bordered>
                    <pre style="font:900 20px sc">{{towername}}</pre>
                </NLayoutHeader>
                <NLayoutContent bordered content-style="padding: 0px">
                    <h3 style="margin:0px;align-self: center;">{{buildname}}</h3>
                </NLayoutContent>
            </NLayout>
        </NLayout>
        <!--分割线，下面为具体Mods和shard-->
        <template #footer>
            <NLayout has-sider>
                <NLayoutSider bordered content-style="padding: 5px" :width="50">
                    <Imgs size="large" :id="relictype" style="margin-top:132.5% ;"/>
                </NLayoutSider>
                <NLayout>
                    <NLayoutContent bordered content-style="padding: 0px">
                        <NGrid cols="4">
                            <NGridItem span="1">
                                <Imgs size="large" :id="'MOD'+ (mc1 == '' ? '1' : mc1)"/>
                            </NGridItem>
                            <NGridItem span="3" style="align-self: center;text-align: left;">
                                {{mods1}}
                            </NGridItem>
                        </NGrid>
                    </NLayoutContent>
                    <NDivider style="margin-top: 5px;margin-bottom: 5px;padding-left: 5px;padding-right: 5px;" />
                    <NLayoutContent bordered content-style="padding: 0px">
                        <NGrid cols="4">
                            <NGridItem span="1">
                                <Imgs size="large" :id="'MOD'+ (mc2 == '' ? '1' : mc2)"/>
                            </NGridItem>
                            <NGridItem span="3" style="align-self: center;text-align: left;">
                                {{mods2}}
                            </NGridItem>
                        </NGrid>
                    </NLayoutContent>
                    <NDivider style="margin-top: 5px;margin-bottom: 5px;padding-left: 5px;padding-right: 5px;" />
                    <NLayoutContent bordered content-style="padding: 0px">
                        <NGrid cols="4">
                            <NGridItem span="1">
                                <Imgs size="large" :id="'MOD'+ (mc3 == '' ? '1' : mc3)"/>
                            </NGridItem>
                            <NGridItem span="3" style="align-self: center;text-align: left;">
                                {{mods3}}
                            </NGridItem>
                        </NGrid>
                    </NLayoutContent>
                </NLayout>
            </NLayout>

            <NDivider style="margin-top: 5px;margin-bottom: 5px;padding-left: 5px;padding-right: 5px;" />

            <NLayout has-sider>
                <NLayoutSider bordered content-style="padding: 5px" :width="50">
                    <Imgs size="large" id='GreenShard' style="margin-top:132.5% ;"/>
                </NLayoutSider>
                <NLayout>
                    <NLayoutContent bordered content-style="padding: 0px">
                        <NGrid cols="4">
                            <NGridItem span="1">
                                <Imgs size="large" :id="sc1== ''? 'C0':sc1"/>
                            </NGridItem>
                            <NGridItem span="3" style="align-self: center;text-align: left;">
                                {{shard1}}
                            </NGridItem>
                        </NGrid>
                    </NLayoutContent>
                    <NDivider style="margin-top: 5px;margin-bottom: 5px;padding-left: 5px;padding-right: 5px;" />
                    <NLayoutContent bordered content-style="padding: 0px">
                        <NGrid cols="4">
                            <NGridItem span="1">
                                <Imgs size="large" :id="sc2== ''? 'C0':sc2"/>
                            </NGridItem>
                            <NGridItem span="3" style="align-self: center;text-align: left;">
                                {{shard2}}
                            </NGridItem>
                        </NGrid>
                    </NLayoutContent>
                    <NDivider style="margin-top: 5px;margin-bottom: 5px;padding-left: 5px;padding-right: 5px;" />
                    <NLayoutContent bordered content-style="padding: 0px">
                        <NGrid cols="4">
                            <NGridItem span="1">
                                <Imgs size="large" :id="sc3 == ''? 'C0':sc3" />
                            </NGridItem>
                            <NGridItem span="3" style="align-self: center;text-align: left;">
                                {{shard3}}
                            </NGridItem>
                        </NGrid>
                    </NLayoutContent>
                </NLayout>
            </NLayout>
        </template>
    </NCard>
</template>

<script setup>
import Imgs from '../Imgs/imgs.vue';
import {
    NCard, NLayout, NLayoutSider, NLayoutHeader,
    NLayoutContent, NDivider, NGrid, NGridItem
} from 'naive-ui'
</script>
<script>
import modslist from "../data/mods"
import shard from "../data/shard-new"
import buildnamelist from "../data/buildname"
import towerlist from "../data/tower"
export default {
    name: 'TBC',
    props: {
        bid:{type:Number,default:0,},
        tid:{type:Number,default:0,},
        mid1:{type:String},
        mid3:{type:String},
        mid2:{type:String},
        sid1:{type:String,},
        sid2:{type:String,},
        sid3:{type:String,},
        mc1:{type:String,default:"10"},
        mc2:{type:String,default:"10"},
        mc3:{type:String,default:"10"},
        //sc1:{type:String,default:"C0"},
        //sc2:{type:String,default:"C0"},
        //sc3:{type:String,default:"C0"},
        relictype:{type:String,default:"Medal"},
    },
    data(){
        return{
            towername:this.getTowerNameById(this.tid),
            buildname:this.getBuildNameById(this.bid),
            mods1:this.mid1,
            mods2:this.mid2,
            mods3:this.mid3,
            shard1:this.sid1,
            shard2:this.sid2,
            shard3:this.sid3,
            sc1:this.getShardCById(this.sid1),
            sc2:this.getShardCById(this.sid2),
            sc3:this.getShardCById(this.sid3),
        }
    },
    methods:{
        getTowerNameById(id){
            return towerlist[id];
        },
        getBuildNameById(id){
            return buildnamelist[id];
        },
        getModsNameById(id){
            let mods = modslist[id];
            return mods["Name"];
        },
        getShardCById(id){
            let Clv = shard[id]
            if(Clv == null)
                Clv = "大师"
            else
                Clv = Clv['shardpack']
            return Clv
        }
    }
}
</script>
<style scoped>  
.n-card {
    max-width: 300px;
    background-color: rgba(204, 204, 204, 1);
    border-color: black;
}
.n-layout-header{
    background-color: rgba(204, 204, 204, 1);
}
.n-layout-sider{
    background-color: rgba(204, 204, 204, 1);
}
.n-layout{
    background-color: rgba(204, 204, 204, 1);
}
</style>