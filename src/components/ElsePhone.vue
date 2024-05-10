<template>

    
    <button class="chevron-button" @click="elsePhone">  <img src="./images/chevron_small.png" alt="chevron"
        class="chevron-image" /> </button>
       <div v-show="showMenu">
        <span class="conteiner-else">
                <button class="button-else" v-for="(phone, index) in phones" :key="index"  :title="phone.title" @click="handleEF(index)">
               <span class="img-button-else">
               <img class="img-button" :src="phone.titleImg">
              <span class="list-img-button"> {{ phone.title }} - {{ index}}</span>
               </span>

                </button>
            </span>
        </div>
        <!-- <button @click="handleEF">btnEF</button> -->
                    
</template>
<script>
export default {
   


  props: {
    phones:{
            type: Array,
            default: function(){
                return []
            }
        }
    },
    data() {

        return {
           showMenu: false,
           //nf:555,
           //index: 0,
        }
    },
    methods:{
        elsePhone() {
             this.showMenu=!this.showMenu
          /// this.showMenu=true;
        },
        handleEF(index) {
        this.nf=index;
		   this.$emit('showEF', this.nf);
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

/*.conteiner-else
{
    display: block;
}*/

.button-else{
    border: none;
    background: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
    
}

.img-button-else{
 
    align-items: center;
}

.img-button{
    display: block;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    transform: scale(0.5); 
}

.list-img-button{
    display: block;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}
</style>
