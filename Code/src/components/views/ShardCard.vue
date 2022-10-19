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
    width:500,
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
    title:"碎片包",
    key:"shardpack",
    resizable:true,
    width:100,
    maxWidth:100,
  },
  {
    title:"适用英雄",
    key:"vaildforhero",
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
        value: "骑士"
      },
      {
        label: "女骑士",
        value: "骑士"
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
    return !!~row.vaildforhero.indexOf(String(value)) && !!~row.vaildforhero.indexOf("ALL");
    }
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
    name:"SC",
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