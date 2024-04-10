<template>
<div class="funtionsView">
    <h2>Our functions</h2>
    <button-row @showFunction=""></button-row>
    
</div>
</template>
<script>
import ButtonRow from '@/components/ButtonRow.vue';
export default{
    data(){
        return{
            selectedFunction:""
        }
    },
    components:{
        ButtonRow
    }
}
</script>
<style>
</style>