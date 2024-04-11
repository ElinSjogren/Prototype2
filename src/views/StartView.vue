<template>
    <div class="startView">
        <h2 class="text-center">Welcome!</h2>
        <feature>
         <p class="intro">
            Have you ever wondered how it would be like to not get stuck thinking 
            'how was it now.... can't remember....' and just have full control 
            over all information. In your hand, on every internet access unit, 
            you can have all important information right in front of you. 
            And we are not talking about stuff you can google.
        </p>
        </feature>

    </div>
</template>
<script>
import Feature from '@/components/Feature.vue';
export default{
    data(){
        return[

        ]
    },
    components:{
        Feature
    }
}

</script>
<style>
.startView{
    padding:2rem;
    color:rgb(255, 250, 250);
}
.intro{

    font-style: italic;
}
</style>