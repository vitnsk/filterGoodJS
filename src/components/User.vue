<script>
                export default {
                   
                     props: {
		                    name: String,
                            phones:{
            type: Array,
            default: function(){
                return []
            }
             },
	                           },
                     data() {
                        return {
                            company: '',
                            title: '',
       
                        }
                    },

                    computed:{
    filteredList(){
        let comp = this.title;
        return this.phones.filter(function (elem) {
            if(comp==='') return true;
            else return elem.title.indexOf(comp) > -1;
        })
    }
  },
                    methods: {
	                handle() {
		               this.$emit('show', 'zzz', 'kkk');
	                },
                    
                }

                }
		</script>


<template>
	<button @click="handle">btn</button>
    {{ name }}
	{{ surn }}
	<span><input type="text" v-model="title" /></span>
    <span>
      <span v-for="phone in filteredList">
        <p>{{ phone.title }} </p>
      </span>
    </span>
</template>