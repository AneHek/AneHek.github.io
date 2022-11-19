<template>
    <n-layout :has-sider="isPCs" style="height: 100%;">
        <n-layout-sider bordered collapse-mode="width" :collapsed-width="40" :width="200" show-trigger
            :collapsed="collapsed" :inverted="inverted" @collapse="collapsed = true" @expand="collapsed = false"
            v-show="isPCs">
            <n-menu :inverted="inverted" :collapsed-width="40" :collapsed-icon-size="22" :options="menuOptions" />
        </n-layout-sider>
        <n-layout>
            <n-menu mode="horizontal" :inverted="inverted" :options="menuOptions" v-show="!isPCs" />
            <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
                <router-view></router-view>
            </n-config-provider>
        </n-layout>
    </n-layout>
</template>

<script>
import { h, defineComponent, ref } from "vue";
import { zhCN, dateZhCN, NConfigProvider, NLayout, NLayoutSider, NMenu, NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions = [
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: "/"
                },
                { default: () => '主页' }
            ),
        key: "go-back-home",
    },
    {
        key: 'divider-1',
        type: 'divider',
        props: {
            style: {
                marginLeft: '32px'
            }
        }
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: "/main/mods"
                },
                { default: () => '词条' }
            ),
        key: "go-mods",
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: "/main/shard"
                },
                { default: () => '碎片' }
            ),
        key: "go-shard",
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: "/main/dpsbuild"
                },
                { default: () => '人物build' }
            ),
        key: "go-dpsbuild",
    },
    {
        label: () =>
            h(
                RouterLink,
                {
                    to: "/main/towerbuild"
                },
                { default: () => '防御塔build' }
            ),
        key: "go-towerbuild",
    },
    {
        key: 'divider-1',
        type: 'divider',
        props: {
            style: {
                marginLeft: '32px'
            }
        }
    },
    
];
export default {
    name: 'Main',
    components: {
        NConfigProvider, NLayout, NLayoutSider, NMenu
    },
    setup() {
        return {
            zhCN, dateZhCN,
            inverted: true,
            menuOptions: menuOptions,
            collapsed: ref(true),
        }
    },
    data() {
        return {
            isPCs: this.isPC(),
        }
    },
    methods: {
        isPC() {
            let flag = window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
            return !flag;
        }
    }
}
</script>