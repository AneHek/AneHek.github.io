<template>
    <NAvatar 
        :size='size' 
        :src='url'
        object-fit="scale-down"
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
            url:this.getUrlById(this.id)
        }
    },
    methods: {
        getUrlById(id){
            if(imgslist[id].indexOf("https") == -1)
                return require('../../assets/imgs/'+imgslist[id]);
            return imgslist[id];
        }
    }
}
</script>