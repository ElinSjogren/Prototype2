<template>
<div class="funtionsView">
    <h2>Our functions</h2>
    <button-row @showFunction=""></button-row>
    <p>As a user you will be able to make posts about importat stuff. You can also edit, delete and add more. Togheter the post will make sense as you make conections between them.</p>
    <feature> <img :src="imgUrl"></feature>
</div>
</template>
<script>
import Feature from '@/components/Feature.vue'
import ButtonRow from '@/components/ButtonRow.vue';
import {dummyStore} from '../stores/store.js';

export default{
    data(){
        return{
            url:'',
            selectedFunction:"",
            picture:{
                Posts:'https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content-gh/en/_mdb5/standard/web/docs/components/cards/examples/assets/1.webp',
                CRUD:'https://www.sourcecodester.com/sites/default/files/images/nurhodelta_17/crud_ss_0.png',
                Overview:'https://gogeometry.com/software/bootstrap/bootstrap-css-mind-map-5.gif'
            }
        }
    },
    components:{
        ButtonRow,
        Feature

    },
    computed:{
        changefunc(){
            return dummyStore().selectedFeature;
        },
        imgUrl(){
            return this.picture[this.changefunc]
        }
    }
}
</script>
<style>
img{
    max-width: 40vw;
    max-height: 200px;
    margin: auto;
    border-radius: 10px;
}
</style>