<template>
    <n-data-table
    pagination-behavior-on-filter="first"
    :columns="columns"
    :data="data"
    :pagination="pagination"
  />
</template>

<script setup>
import {NDataTable} from 'naive-ui';
</script>
<script>
const columns = [
  {
    title: "名称",
    key: "name",
    resizable:true,
    width:200,
  },
  {
    title: "效果描述",
    key: "effect",
    resizable:true,
    maxWidth:600,
  },
  {
    title:"最大升级数",
    key:"lvl",
    resizable:true,
    width:100,
    maxWidth:100,
  },
  {
    title:"大师模式星数",
    key:"stars",
    resizable:true,
    width:100,
    maxWidth:100,
  },
  {
    title:"入侵模式",
    key:"prime",
    resizable:true,
    width:110,
    maxWidth:110,
  },
  {
    title:"适用英雄",
    key:"vaildforhero",
    resizable:true,
    width:110,
    maxWidth:110,
  },
  {
    title: "适用位置",
    key: "slot",
    resizable:true,
    width:110,
    maxWidth:110,
    defaultFilterOptionValues: [],
    filterOptions: [
      {
        label: "武器",
        value: "weapon"
      },
      {
        label: "盾牌",
        value: "sheild"
      },
      {
        label: "头盔",
        value: "helmet"
      },
      {
        label: "胸甲",
        value: "chest"
      },
      {
        label: "手套",
        value: "gloves"
      },
      {
        label: "鞋子",
        value: "boots"
      },
      {
        label: "防御塔",
        value: "relic"
      }
    ],
    filter(value, row) {
      return !!~row.slot.indexOf(String(value));
    }
  }
];
const pagination = { pageSize: 10 };
export default {
    name:"SCM",
    props:{
        data:Array
    },
    setup(){
        return {
            columns,
            pagination,
        }
    }
}
</script>