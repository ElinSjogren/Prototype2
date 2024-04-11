<template>
<div class="funtionsView">
    <h2>Our functions</h2>
    <button-row @showFunction=""></button-row>
    <feature>Now showing:</feature>
</div>
</template>
<script>
import Feature from '@/components/Feature.vue'
import ButtonRow from '@/components/ButtonRow.vue';


export default{
    data(){
        return{
            selectedFunction:""
        }
    },
    components:{
        ButtonRow,
        Feature

    }
}
</script>
<style>
</style>