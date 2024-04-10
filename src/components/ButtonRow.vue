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
export default{
    data(){
        return{
            functionllity:["Posts", "CRUD", "Overview"],
            
        }
    },
    methods:{
        showFunction(f){
            this.$emit(f);
        }
    }
}
</script>