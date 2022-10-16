<template>
    <h1>防御塔Build指南</h1>
    <h5 style = "color:blue">贡献者：Cryo 丨 Intasa 丨 Jade 丨 Arti 丨 Hord 丨 Kemoka 丨 Gigazelle</h5>
    <NCard content-style="padding:20px;">
        <NTabs
            type="card"
            pane-style="padding: 20px;"
        >
        <NTabPane name = "指南阅读指导" Tab="Read Me" display-directive="show:lazy">
            <NGrid cols="1 600:2 900:3 1200:4 1500:5 2000:6" :y-gap="10" :x-gap="10"><NGridItem v-for="item of 4" style="align-self: center;"><TBC ></TBC></NGridItem></NGrid></NTabPane>
        <NTabPane name = "男骑士" Tab="Squire" display-directive="show:lazy">
        </NTabPane>
        <NTabPane name = "男法师" Tab="Apprentice" display-directive="show:lazy">3</NTabPane>
        <NTabPane name = "女猎人" Tab="Huntress" display-directive="show:lazy">4</NTabPane>
        <NTabPane name = "男和尚" Tab="Monk" display-directive="show:lazy">5</NTabPane>
        <NTabPane name = "召唤师" Tab="Abyss Lord" display-directive="show:lazy">6</NTabPane>
        <NTabPane name = "EV2" Tab="Series EV2" display-directive="show:lazy">7</NTabPane>
        <NTabPane name = "女枪" Tab="Gunwitch" display-directive="show:lazy">8</NTabPane>
        <NTabPane name = "火男" Tab="Lavamancer" display-directive="show:lazy">9</NTabPane>
        <NTabPane name = "蛇女" Tab="Mystic" display-directive="show:lazy">10</NTabPane>
        <NTabPane name = "树女" Tab="Dryad" display-directive="show:lazy">11</NTabPane>
        <NTabPane name = "女和尚" Tab="Initiate" display-directive="show:lazy">12</NTabPane>
        <NTabPane name = "女法师" Tab="Adept" display-directive="show:lazy">13</NTabPane>
        <NTabPane name = "野蛮人" Tab="Barbarian" display-directive="show:lazy">14</NTabPane>
        <NTabPane name = "刺客" Tab="Mercenary" display-directive="show:lazy">15</NTabPane>
        <NTabPane name = "女骑士" Tab="Countess" display-directive="show:lazy">16</NTabPane>
        </NTabs>
    </NCard>
</template>

<script>
import Imgs from './Imgs/imgs.vue';
import TBC from './views/TowerBuildCard.vue'
import {NCard,NTabs,NTabPane,NGrid,NGridItem} from 'naive-ui'
export default {
    name: "TB",
    components: { Imgs,NCard,NTabPane,NTabs,TBC,NGrid,NGridItem },
}
</script>