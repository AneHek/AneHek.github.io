<template>
    <img alt="DD2 logo" src="../assets/DD2Icon.png">
    <div class="Start">
        <h1>地牢守护者2中文攻略</h1>
        <p>
            这是基于官方Wiki及国外大佬们内容制作的攻略
        </p>
        <p>
            点击查看 <a href="https://wiki.dungeondefenders2.com/wiki/Main_Page" target="_blank" rel="noopener">官方Wiki</a>
        </p>
        <h2>攻略导航</h2>
        <ul>
            <li><RouterLink :to="'/main/mods'">Mods[词条]</RouterLink></li>
            <li><RouterLink :to="'/main/shard'">Shard[碎片]</RouterLink></li>
            <li><RouterLink :to="'/main/dpsbuild'">DPS build[人物build]</RouterLink></li>
            <li><RouterLink :to="'/main/towerbuild'">Tower build[防御塔build]</RouterLink></li>
            <li><RouterLink :to="'/gameinfo/'">其他</RouterLink></li>
        </ul>
        <h5 style="margin-bottom:4px">联系方式</h5>
            <li style="font-size:10px">QQ群：172156530（欢迎加入）</li><li> <a href="https://jq.qq.com/?_wv=1027&k=RtRZh3JT" target="_blank" rel="noopener" style="font-size:10px">点击加入</a></li>
        <h5 style="margin-bottom:4px">网页制作&翻译人</h5>
            <a href="https://anehek.github.io" target="_blank" rel="noopener" style="font-size:10px">AneHek</a>
    </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
        width:min(600px,80%);
        object-fit:contain;
    }
</style>
