<template >
    <div class="buttons container">
        <h1>Options </h1>
        <div class="row">
            <div class="col-12">
                <button v-for="f in functionllity" class="btn btn-secondary" @click="showFunction(f)">{{f}}</button>
            </div>
        </div>
        
    </div>
</template>
<script>
import {dummyStore} from '../stores/store.js';

export default{
    data(){
        return{
            functionllity:["Posts", "CRUD", "Overview"],
            
        }
    },
    methods:{
        showFunction(f){
            dummyStore().selectedFeature = f;
            console.log(f);
            console.log(dummyStore().selectedFeature);
            //this.$emit(f);
        }
    },
    setup(){
        
    }
}
</script>