<template>
    <n-data-table
    ref="modstable"
    pagination-behavior-on-filter="first"
    :max-height="600"
    :columns="columns"
    :data="data"
    :pagination="pagination"
    virtual-scroll
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
    width:300,
    maxWidth:1000,
  },
  {
    title:"掉落条件",
    key:"dropson",
    resizable:true,
    width:100,
    maxWidth:100,
  },
  {
    title:"适用英雄",
    key:"vaildofhero",
    resizable:true,
    width:110,
    maxWidth:110,
    defaultFilterOptionValues: [],
    filterOptions: [
      {
        label: "蛇女",
        value: "蛇女"
      },
      {
        label: "男和尚",
        value: "男和尚"
      },
      {
        label: "女和尚",
        value: "女和尚"
      },
      {
        label: "男骑士",
        value: "男骑士"
      },
      {
        label: "女骑士",
        value: "女骑士"
      },
      {
        label: "树女",
        value: "树女"
      },
      {
        label: "刺客",
        value: "刺客"
      },
      {
        label: "男法师",
        value: "男法师"
      },
      {
        label: "女法师",
        value: "女法师"
      },
      {
        label: "女猎人",
        value: "女猎人"
      },
      {
        label: "召唤师",
        value: "召唤师"
      },
      {
        label: "野蛮人",
        value: "野蛮人"
      },
      {
        label: "女枪",
        value: "女枪"
      },
      {
        label: "火男",
        value: "火男"
      },
      {
        label: "EV2",
        value: "EV2"
      }
    ],
    filter(value, row) {
    return !!~row.vaildforhero.indexOf(String(value)) || !!~row.vaildforhero.indexOf("ALL");
    }
  },
  {
    title:"词条类型",
    key:"Type",
    resizable:true,
    width:100,
    maxWidth:100,
  },
];
const pagination = { pageSize: 8 };
export default {
    name:"MC",
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