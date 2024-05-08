<template>

    
    <button class="chevron-button" @click="elsePhone">  <img src="./images/chevron_small.png" alt="chevron"
        class="chevron-image" /> </button>
       <div v-if="showMenu">
        <ul >
            <li>Пирожное</li>
            <li>Пончик</li>
            <li>Мёд</li>
          </ul>
        </div>

</template>
<script>
export default {
    
    data() {
        return {
           showMenu: false,
        }
    },
    methods:{
        elsePhone()
        {
             this.showMenu=!this.showMenu
          /// this.showMenu=true;
        }

    }
}

</script>

<style>
.chevron-button{
    border: none;
    background: none;
    padding: 0;
}

</style>