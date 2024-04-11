<template>
    <div class="aboutView">
        <Feature>
            <div class="aboutInfo">
                <h3>About us</h3>
                <img id="profilePic" src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg" alt="this is me">
                <p>We are the once who needs help to cope with daily life. Lårium ipsidum!!!!

                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum

                </p> 
                <ul>
                    <li>Adress:
                        <ul>
                            <li>Campus Värnamo</li>
                            <li>Storgatan 22</li>
                            <li>331 33 Värnamo</li>
                        </ul>
                    </li>
                    <li>Phone: 0370-222 11</li>
                    <li>email@mail.com</li>
                </ul>
            </div>
            
        </Feature>
       
    </div>
</template>
<script>
import Feature from '@/components/Feature.vue';
export default{
    data(){
        return{

        }
    },
    components:{
        Feature
    }
}
</script>
<style>
.aboutView{
    color: rgb(247, 238, 238);
    
}
#profilePic{
    border-radius: 50%;
    max-width:10rem;
}
.aboutInfo{
    padding:2rem;;
}
</style>