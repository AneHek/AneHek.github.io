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
                <Imgs size="100" id="1" style="margin-top:6px ;"/>
            </NLayoutSider>
            <NLayout>
                <NLayoutHeader bordered>
                    <h2>{{towername}}</h2>
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
                    <Imgs size="large" id="GreenShard" style="margin-top:175% ;"/>
                </NLayoutSider>
                <NLayout>
                    <NLayoutContent bordered content-style="padding: 0px">
                        <NGrid cols="4">
                            <NGridItem span="1">
                                <Imgs size="large" id="Adept"/>
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
                                <Imgs size="large" id="Adept"/>
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
                                <Imgs size="large" id="Adept"/>
                            </NGridItem>
                            <NGridItem span="3" style="align-self: center;text-align: left;">
                                {{shard3}}
                            </NGridItem>
                        </NGrid>
                    </NLayoutContent>
                </NLayout>
            </NLayout>

            <NDivider style="margin-top: 5px;margin-bottom: 5px;padding-left: 5px;padding-right: 5px;" />

            <NLayout has-sider>
                <NLayoutSider bordered content-style="padding: 5px" :width="50">
                    <Imgs size="large" :id='relictype' style="margin-top:175% ;"/>
                </NLayoutSider>
                <NLayout>
                    <NLayoutContent bordered content-style="padding: 0px">
                        <NGrid cols="4">
                            <NGridItem span="1">
                                <Imgs size="large" id="Adept"/>
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
                                <Imgs size="large" id="Adept"/>
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
                                <Imgs size="large" id="Adept" />
                            </NGridItem>
                            <NGridItem span="3" style="align-self: center;text-align: left;">
                                {{mods3}}
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
import shardlist from '../data/shard'
import imgslist from '../Imgs/imgslist'
import buildnamelist from "../data/buildname"
import towerlist from "../data/tower"
export default {
    name: 'TBC',
    props: {
        bid:{type:Number,default:0,},
        tid:{type:Number,default:0,},
        mid1:{type:Number,default:0,},
        mid3:{type:Number,default:0,},
        mid2:{type:Number,default:0,},
        sid1:{type:Number,default:0,},
        sid2:{type:Number,default:0,},
        sid3:{type:Number,default:0,},
        relictype:{type:String,default:"Medal"},
    },
    data(){
        return{
            towername:this.getTowerNameById(this.tid),
            buildname:this.getBuildNameById(this.bid),
            mods1:this.getModsNameById(this.mid1),
            mods2:this.getModsNameById(this.mid2),
            mods3:this.getModsNameById(this.mid3),
            shard1:this.getShardNameById(this.sid1),
            shard2:this.getShardNameById(this.sid2),
            shard3:this.getShardNameById(this.sid3),
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
        getShardNameById(id){
            let name = shardlist[0][id]
            if(name != null)
                return name["name"];
            name = shardlist[1][id]
            return name["name"];
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