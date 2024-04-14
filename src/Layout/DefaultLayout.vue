<template>
    <div class="dafaultLayout">
        <header id="DefaultHeader">
            <nav class="nav nav-center">
                <h1>Prototype</h1>
                <RouterLink to="/" >Start</RouterLink>
                <RouterLink to="/about" >About</RouterLink>
                <RouterLink to="/functions">Functionallity</RouterLink>
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
import Start from '@/components/ButtonRow.vue';
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
.container{
    margin-bottom:3rem;
    margin-top: 3rem;
}
.dafaultLayout{
    min-width: 100vw;
    min-height: 100vh;
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
main{
    min-height: 100%;
}
a{
    padding:5px;
    padding-right:12px;
    padding-left:12px;
    background:white;
    color:black;
    border-radius: 3px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin: auto;
}
#info{
    background-color: black;
    color:aliceblue;
}
.footer{
    background-color: aquamarine;
    position: fixed;
    bottom: 0;
    width:100vw;
    padding:2rem;
    margin-top:auto;
    overflow: hidden;
}
</style>
