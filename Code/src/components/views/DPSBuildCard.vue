<template>
    <NTabs type="segment">
        <NTabPane name="玩法指南" Tab="Guide">
            <NList bordered>
                <NListItem v-for="item of 7">
                    <template #prefix>
                        <h3>ssss</h3>
                    </template>
                    asdfadf
                </NListItem>
            </NList>
        </NTabPane>
        <NTabPane name="技能加点" Tab="Skills">
            <NImage width="500" :src="skillurl" />
        </NTabPane>
        <NTabPane name="碎片&词条" Tab="M&S">
            <NTable :single-line="false" style="text-align: center;" virtual-scroll>
                <thead>
                    <tr>
                        <th style="width:30%"><b>部位</b></th>
                        <th style="width:35%"><b>碎片</b></th>
                        <th style="width:35%"><b>词条</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of 7">
                        <td><NImage width="60" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" preview-disabled/></td>
                        <td>
                            <NGrid :cols="5">
                                <NGridItem>
                                    1
                                </NGridItem>
                                <NGridItem :span="4">
                                    {{data['s'+item.toString()+'1']}}
                                </NGridItem>
                                <NGridItem>
                                    3
                                </NGridItem>
                                <NGridItem :span="4">
                                    {{data['s'+item.toString()+'2']}}
                                </NGridItem>
                                <NGridItem>
                                    5
                                </NGridItem>
                                <NGridItem :span="4">
                                    {{data['s'+item.toString()+'3']}}
                                </NGridItem>
                            </NGrid>
                        </td>
                        <td>
                            <NGrid :cols="5">
                                <NGridItem>
                                    <Imgs size="small" id="MOD10" style="--n-color:none"/>
                                </NGridItem>
                                <NGridItem :span="4">
                                    {{data['m'+item.toString()+'1']}}
                                </NGridItem>
                                <NGridItem>
                                    <Imgs size="small" id="MOD10" style="--n-color:none"/>
                                </NGridItem>
                                <NGridItem :span="4">
                                    {{data['m'+item.toString()+'2']}}
                                </NGridItem>
                                <NGridItem>
                                    <Imgs size="small" id="MOD10" style="--n-color:none"/>
                                </NGridItem>
                                <NGridItem :span="4">
                                    {{data['m'+item.toString()+'3']}}
                                </NGridItem>
                            </NGrid>
                        </td>
                    </tr>
                </tbody>
            </NTable>
        </NTabPane>
    </NTabs>
</template>
<script setup>
import Imgs from '../Imgs/imgs.vue';
import {
    NTabs, NTabPane, NList, NListItem, NImage, NTable,NGrid,NGridItem
} from 'naive-ui'
</script>
<script>
export default {
    name: "DBC",
    props:{
        data:Object,
        skillurl:String,
    },
    setup(){
        console.log(skillurl)
    }
}
</script>
<style >
.n-list .n-list-item .n-list-item__prefix {
    width: 30%;
    border-right: inset;
    flex: none;
    margin: 0;
}

h3 {
    margin: 0;
}

.n-table td {
    padding:0;
}
.n-avatar {
    padding-top: 2px;
}
</style>