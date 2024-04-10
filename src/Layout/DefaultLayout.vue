<template>
    <div class="dafaultLayout">
        <header id="DefaultHeader">
            <h1 class="text-center">Our prototype</h1>
            <nav class="nav nav-center">
                <RouterLink to="/" >Start</RouterLink>
                <RouterLink to="/about" >About</RouterLink>
            </nav>
          
        </header>
        
        <main>
            <div class="container">

                <RouterView></RouterView>
            </div>
        </main>

        <footer class="footer">
            <p class="text-center">Made with <i class="bi bi-heart-fill"></i> 2024</p>
        </footer>
    </div>

</template>
<script>
import { RouterLink, RouterView } from 'vue-router';
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
    display: grid;
}
.nav{
    display: flex;
    justify-content: space-evenly;
    background-color: cadetblue;
    padding:1rem;
}
a{
    padding:4px;
    background:white;
    color:black;
    border-radius: 3px;
    text-decoration: none;
}
#info{
    background-color: black;
    color:aliceblue;
}
.footer{
    background-color: aquamarine;
    position: absolute;
    bottom: 0;
    width:100vw;
    padding:2em;
}
</style>
