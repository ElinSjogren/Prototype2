<template>
    <div class="dafaultLayout">
        <header id="DefaultHeader">Header</header>
        <h1>Default Layout</h1>
        <main>
            <RouterView></RouterView>
        </main>
        <p id="info">
            Layouts in Vue.js are often used to define the overall structure or template of a page. 
            They can include common elements such as headers, footers, navigation bars, and sidebars 
            that are consistent across multiple pages of your application. Layouts provide a convenient 
            way to organize and reuse these shared elements without duplicating code in every view component. 
            In some Vue.js projects, layouts are used in conjunction with views to create a consistent 
            look and feel throughout the application.
        </p>
        <footer>
            copyrights blabla
        </footer>
    </div>

</template>
<script>

import Start from '@/components/Start.vue';
export default{
    data(){
        return{

        }
    },
    components:{
        Start
    }
}
</script>
<style>
.dafaultLayout{
    width: 100vw;
    height: 100vh;
    background-color: yellow;
}
.DefaultHeader{
    background-color: white;
}
#info{
    background-color: black;
    color:aliceblue;
}
</style>
