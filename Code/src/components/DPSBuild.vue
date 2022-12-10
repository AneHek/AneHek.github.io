<template>
    <h1>人物Build指南</h1>
    <h5 style="color:blue">贡献者：Cryo 丨 Intasa 丨 Jade 丨 Terralocked  丨  Arti 丨 Hord 丨 Kemoka 丨 Exglint 丨 Gelo 丨 Mystifi</h5>
    <NCard content-style="padding:20px;">
        <NTabs type="card" >
            <NTabPane v-for="i,pos in namelist" :name="i" display-directive="show:lazy">
                <DBC :data="dpsbuildlist[pos]" :skillurl="skilladdimg[pos]"></DBC>
            </NTabPane>
        </NTabs>
    </NCard>
</template>
<script setup>
import DBC from './views/DPSBuildCard.vue'
import { NCard, NTabs, NTabPane, NGrid, NGridItem } from 'naive-ui'
const namelist = [
"AD刺客","AP刺客","核弹男和尚","霜震野蛮人","AP女枪","AD女枪","狙击女枪","星落树女",
"CTM蛇女","AP火男","AD火男","AP召唤师","AD EV2","AP EV2","AP女法师","AD女猎人","AP女猎人",
"暴力男骑士","AD男骑士","暴力女骑士","AD女骑士"
]

</script>
<script>
import dpsbuildlist from './data/dpsdata';
import skilladdimg from './Imgs/skilladd';
export default {
    name:'DB'
}
</script>
<style scoped>
.n-card {
    max-width: 98%;
    float: left;
    left: 1%;
}
</style>