<template>
<div class="funtionsView">
    <h2>Our functions</h2>
    <button-row @showFunction=""></button-row>
    <feature>Now showing: {{ changefunc }}</feature>
</div>
</template>
<script>
import Feature from '@/components/Feature.vue'
import ButtonRow from '@/components/ButtonRow.vue';
import {dummyStore} from '../stores/store.js';

export default{
    data(){
        return{
            selectedFunction:""
        }
    },
    components:{
        ButtonRow,
        Feature

    },
    computed:{
        changefunc(){
            return dummyStore().selectedFeature;
        }
    }
}
</script>
<style>
</style>