<template>
    <h1>防御塔Build指南</h1>
    <h5 style="color:blue">贡献者：Cryo 丨 Intasa 丨 Jade 丨 Arti 丨 Hord 丨 Kemoka 丨 Gigazelle</h5>
    <NCard content-style="padding:20px;">
        <NTabs type="card" pane-style="padding: 20px;">
            <NTabPane name="指南阅读指导" Tab="Read Me" display-directive="show:lazy">
            </NTabPane>
            <NTabPane name="男骑士" Tab="Squire" display-directive="show:lazy">
                <NGrid cols="1 600:2 900:3 1200:4 1500:5 2000:6" :y-gap="10" :x-gap="10">
                    <NGridItem v-for="item of alltowerbuildlist[0]" style="align-self: center;">
                        <TBC 
                        :bid="item['BuildType']"
                        :sid1="item['s1']" :sid2="item['s2']" :sid3="item['s3']"
                        :mc1="item.ml1.toString()" :mc2="item['ml2'].toString()" :mc3="item['ml3'].toString()" 
                         ></TBC><!--:sc1="item['sl1']" :sc2="item['sl2']" :sc3="item['sl3']" -->
                    </NGridItem>
                </NGrid>
            </NTabPane>
            <NTabPane name="男法师" Tab="Apprentice" display-directive="show:lazy">
                <NGrid cols="1 600:2 900:3 1200:4 1500:5 2000:6" :y-gap="10" :x-gap="10">
                    <NGridItem v-for="item of alltowerbuildlist[1]" style="align-self: center;">
                        <TBC 
                        :bid="item['BuildType']"
                        :sid1="item['s1']" :sid2="item['s2']" :sid3="item['s3']"
                        :mc1="item.ml1.toString()" :mc2="item['ml2'].toString()" :mc3="item['ml3'].toString()" 
                         ></TBC><!--:sc1="item['sl1']" :sc2="item['sl2']" :sc3="item['sl3']" -->
                    </NGridItem>
                </NGrid>
            </NTabPane>
            <NTabPane name="女猎人" Tab="Huntress" display-directive="show:lazy">
                <NGrid cols="1 600:2 900:3 1200:4 1500:5 2000:6" :y-gap="10" :x-gap="10">
                    <NGridItem v-for="item of alltowerbuildlist[2]" style="align-self: center;">
                        <TBC 
                        :bid="item['BuildType']"
                        :sid1="item['s1']" :sid2="item['s2']" :sid3="item['s3']"
                        :mc1="item.ml1.toString()" :mc2="item['ml2'].toString()" :mc3="item['ml3'].toString()" 
                         ></TBC><!--:sc1="item['sl1']" :sc2="item['sl2']" :sc3="item['sl3']" -->
                    </NGridItem>
                </NGrid>
            </NTabPane>
            <NTabPane name="男和尚" Tab="Monk" display-directive="show:lazy">
                <NGrid cols="1 600:2 900:3 1200:4 1500:5 2000:6" :y-gap="10" :x-gap="10">
                    <NGridItem v-for="item of alltowerbuildlist[3]" style="align-self: center;">
                        <TBC 
                        :bid="item['BuildType']"
                        :sid1="item['s1']" :sid2="item['s2']" :sid3="item['s3']"
                        :mc1="item.ml1.toString()" :mc2="item['ml2'].toString()" :mc3="item['ml3'].toString()" 
                         ></TBC><!--:sc1="item['sl1']" :sc2="item['sl2']" :sc3="item['sl3']" -->
                    </NGridItem>
                </NGrid>
            </NTabPane>
            <NTabPane name="召唤师" Tab="Abyss Lord" display-directive="show:lazy">
                <NGrid cols="1 600:2 900:3 1200:4 1500:5 2000:6" :y-gap="10" :x-gap="10">
                    <NGridItem v-for="item of alltowerbuildlist[4]" style="align-self: center;">
                        <TBC 
                        :bid="item['BuildType']"
                        :sid1="item['s1']" :sid2="item['s2']" :sid3="item['s3']"
                        :mc1="item.ml1.toString()" :mc2="item['ml2'].toString()" :mc3="item['ml3'].toString()" 
                         ></TBC><!--:sc1="item['sl1']" :sc2="item['sl2']" :sc3="item['sl3']" -->
                    </NGridItem>
                </NGrid>
            </NTabPane>
            <NTabPane name="EV2" Tab="Series EV2" display-directive="show:lazy">
                <NGrid cols="1 600:2 900:3 1200:4 1500:5 2000:6" :y-gap="10" :x-gap="10">
                    <NGridItem v-for="item of alltowerbuildlist[5]" style="align-self: center;">
                        <TBC 
                        :bid="item['BuildType']"
                        :sid1="item['s1']" :sid2="item['s2']" :sid3="item['s3']"
                        :mc1="item.ml1.toString()" :mc2="item['ml2'].toString()" :mc3="item['ml3'].toString()" 
                         ></TBC><!--:sc1="item['sl1']" :sc2="item['sl2']" :sc3="item['sl3']" -->
                    </NGridItem>
                </NGrid>
            </NTabPane>
            <NTabPane name="火男" Tab="Lavamancer" display-directive="show:lazy">
                <NGrid cols="1 600:2 900:3 1200:4 1500:5 2000:6" :y-gap="10" :x-gap="10">
                    <NGridItem v-for="item of alltowerbuildlist[6]" style="align-self: center;">
                        <TBC 
                        :bid="item['BuildType']"
                        :sid1="item['s1']" :sid2="item['s2']" :sid3="item['s3']"
                        :mc1="item.ml1.toString()" :mc2="item['ml2'].toString()" :mc3="item['ml3'].toString()" 
                         ></TBC><!--:sc1="item['sl1']" :sc2="item['sl2']" :sc3="item['sl3']" -->
                    </NGridItem>
                </NGrid>
            </NTabPane>
            <NTabPane name="蛇女" Tab="Mystic" display-directive="show:lazy">
                <NGrid cols="1 600:2 900:3 1200:4 1500:5 2000:6" :y-gap="10" :x-gap="10">
                    <NGridItem v-for="item of alltowerbuildlist[7]" style="align-self: center;">
                        <TBC 
                        :bid="item['BuildType']"
                        :sid1="item['s1']" :sid2="item['s2']" :sid3="item['s3']"
                        :mc1="item.ml1.toString()" :mc2="item['ml2'].toString()" :mc3="item['ml3'].toString()" 
                         ></TBC><!--:sc1="item['sl1']" :sc2="item['sl2']" :sc3="item['sl3']" -->
                    </NGridItem>
                </NGrid>
            </NTabPane>
            <NTabPane name="树女" Tab="Dryad" display-directive="show:lazy">
                <NGrid cols="1 600:2 900:3 1200:4 1500:5 2000:6" :y-gap="10" :x-gap="10">
                    <NGridItem v-for="item of alltowerbuildlist[8]" style="align-self: center;">
                        <TBC 
                        :bid="item['BuildType']"
                        :sid1="item['s1']" :sid2="item['s2']" :sid3="item['s3']"
                        :mc1="item.ml1.toString()" :mc2="item['ml2'].toString()" :mc3="item['ml3'].toString()" 
                         ></TBC><!--:sc1="item['sl1']" :sc2="item['sl2']" :sc3="item['sl3']" -->
                    </NGridItem>
                </NGrid>
            </NTabPane>
            <NTabPane name="女和尚" Tab="Initiate" display-directive="show:lazy">
                <NGrid cols="1 600:2 900:3 1200:4 1500:5 2000:6" :y-gap="10" :x-gap="10">
                    <NGridItem v-for="item of alltowerbuildlist[9]" style="align-self: center;">
                        <TBC 
                        :bid="item['BuildType']"
                        :sid1="item['s1']" :sid2="item['s2']" :sid3="item['s3']"
                        :mc1="item.ml1.toString()" :mc2="item['ml2'].toString()" :mc3="item['ml3'].toString()" 
                         ></TBC><!--:sc1="item['sl1']" :sc2="item['sl2']" :sc3="item['sl3']" -->
                    </NGridItem>
                </NGrid>
            </NTabPane>
            <NTabPane name="女法师" Tab="Adept" display-directive="show:lazy">
                <NGrid cols="1 600:2 900:3 1200:4 1500:5 2000:6" :y-gap="10" :x-gap="10">
                    <NGridItem v-for="item of alltowerbuildlist[10]" style="align-self: center;">
                        <TBC 
                        :bid="item['BuildType']"
                        :sid1="item['s1']" :sid2="item['s2']" :sid3="item['s3']"
                        :mc1="item.ml1.toString()" :mc2="item['ml2'].toString()" :mc3="item['ml3'].toString()" 
                         ></TBC><!--:sc1="item['sl1']" :sc2="item['sl2']" :sc3="item['sl3']" -->
                    </NGridItem>
                </NGrid>
            </NTabPane>
            <NTabPane name="刺客" Tab="Mercenary" display-directive="show:lazy">
                <NGrid cols="1 600:2 900:3 1200:4 1500:5 2000:6" :y-gap="10" :x-gap="10">
                    <NGridItem v-for="item of alltowerbuildlist[11]" style="align-self: center;">
                        <TBC 
                        :bid="item['BuildType']"
                        :sid1="item['s1']" :sid2="item['s2']" :sid3="item['s3']"
                        :mc1="item.ml1.toString()" :mc2="item['ml2'].toString()" :mc3="item['ml3'].toString()" 
                         ></TBC><!--:sc1="item['sl1']" :sc2="item['sl2']" :sc3="item['sl3']" -->
                    </NGridItem>
                </NGrid>
            </NTabPane>
            <NTabPane name="女骑士" Tab="Countess" display-directive="show:lazy">
                <NGrid cols="1 600:2 900:3 1200:4 1500:5 2000:6" :y-gap="10" :x-gap="10">
                    <NGridItem v-for="item of alltowerbuildlist[12]" style="align-self: center;">
                        <TBC 
                        :bid="item['BuildType']"
                        :sid1="item['s1']" :sid2="item['s2']" :sid3="item['s3']"
                        :mc1="item.ml1.toString()" :mc2="item['ml2'].toString()" :mc3="item['ml3'].toString()" 
                         ></TBC><!--:sc1="item['sl1']" :sc2="item['sl2']" :sc3="item['sl3']" -->
                    </NGridItem>
                </NGrid>
            </NTabPane>
        </NTabs>
    </NCard>
</template>

<script>
import Imgs from './Imgs/imgs.vue';
import TBC from './views/TowerBuildCard.vue'
import { NCard, NTabs, NTabPane, NGrid, NGridItem } from 'naive-ui'
import towerbuildlist from './data/builddata';
const alltowerbuildlist = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
export default {
    name: "TB",
    components: { Imgs, NCard, NTabPane, NTabs, TBC, NGrid, NGridItem },
    created: function () {
        if (alltowerbuildlist[0].length != 0) return;
        let nowname = towerbuildlist[0]['HeroName']
        let pos = 0
        for (let i in towerbuildlist) {
            if (nowname != towerbuildlist[i]['HeroName']) {
                pos += 1;
                nowname = towerbuildlist[i]['HeroName']
            }
            alltowerbuildlist[pos].push(towerbuildlist[i])
        }
        console.log(alltowerbuildlist)
    },
    data() {
        return {
            alltowerbuildlist: alltowerbuildlist
        }
    }


}
</script>
<style scoped>
.n-card {
    max-width: 98%;
    float: left;
    left: 1%;
}
</style>