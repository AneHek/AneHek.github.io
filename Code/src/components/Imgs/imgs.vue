<template>
    <NAvatar 
        :size='size' 
        :src='url'
    />
</template>
<script setup>
import {NAvatar} from 'naive-ui'
import imgslist from  './imgslist'
</script>
<script>
export default {
    name:'Imgs',
    props:{
        id:String,
        size:String
    },
    data(){
        return {
            url:require('../../assets/imgs/' + this.getUrlById(this.id))
        }
    },
    methods: {
        getUrlById(id){
            //console.log(imgslist[id]);
            return imgslist[id];
        }
    }
}
</script>