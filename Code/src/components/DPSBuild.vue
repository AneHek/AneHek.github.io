<template>
    <h1>人物Build指南</h1>
    <h5 style="color:blue">贡献者：Cryo 丨 Intasa 丨 Jade 丨 Terralocked  丨  Arti 丨 Hord 丨 Kemoka 丨 Exglint 丨 Gelo 丨 Mystifi</h5>
    <NCard content-style="padding:20px;">
        <NTabs type="card" >
            <NTabPane name="暴力男骑士" Tab="R Squire" display-directive="show:lazy">
                <DBC></DBC>
            </NTabPane>
            <NTabPane name="AD男骑士" Tab="HD Squire" display-directive="show:lazy">2</NTabPane>
            <NTabPane name="AD女猎人" Tab="HD Huntress" display-directive="show:lazy">3</NTabPane>
            <NTabPane name="AP女猎人" Tab="AP Huntress" display-directive="show:lazy">4</NTabPane>
            <NTabPane name="核弹男和尚" Tab="Monk" display-directive="show:lazy">5</NTabPane>
            <NTabPane name="AP召唤师" Tab="Abyss Lord" display-directive="show:lazy">6</NTabPane>
            <NTabPane name="AD EV2" Tab="HD Series EV2" display-directive="show:lazy">7</NTabPane>
            <NTabPane name="AP EV2" Tab="AP Series EV2" display-directive="show:lazy">8</NTabPane>
            <NTabPane name="AD女枪" Tab="HD Gunwitch" display-directive="show:lazy">9</NTabPane>
            <NTabPane name="AP女枪" Tab="AP Gunwitch" display-directive="show:lazy">10</NTabPane>
            <NTabPane name="狙击女枪" Tab="Snipe Gunwitch" display-directive="show:lazy">11</NTabPane>
            <NTabPane name="AD火男" Tab="HD Lavamancer" display-directive="show:lazy">12</NTabPane>
            <NTabPane name="AP火男" Tab="AP Lavamancer" display-directive="show:lazy">13</NTabPane>
            <NTabPane name="CTM蛇女" Tab="CTM Mystic" display-directive="show:lazy">14</NTabPane>
            <NTabPane name="星落树女" Tab="Starfall Dryad" display-directive="show:lazy">15</NTabPane>
            <NTabPane name="AP女法师" Tab="AP Adept" display-directive="show:lazy">16</NTabPane>
            <NTabPane name="霜震野蛮人" Tab="FrostShock Barbarian" display-directive="show:lazy">17</NTabPane>
            <NTabPane name="AD刺客" Tab="AD Mercenary" display-directive="show:lazy">18</NTabPane>
            <NTabPane name="AP刺客" Tab="AP Mercenary" display-directive="show:lazy">19</NTabPane>
            <NTabPane name="暴力女骑士" Tab="R Countess" display-directive="show:lazy">20</NTabPane>
            <NTabPane name="AD女骑士" Tab="HD Countess" display-directive="show:lazy">21</NTabPane>
        </NTabs>
    </NCard>
</template>
<script setup>
import DBC from './views/DPSBuildCard.vue'
import { NCard, NTabs, NTabPane, NGrid, NGridItem } from 'naive-ui'
</script>
<script>
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