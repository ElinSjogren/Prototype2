<template >
    <div class="start">
        <h1>Start component </h1>
        {{ number }}
        <button class="btn btn-secondary">component button</button>
    </div>
</template>
<script>
export default{
    data(){
        return{
            number: 7
        }
    }
}
</script>