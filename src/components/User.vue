<script>
                export default {
                   
                    // props: {
		            //         name: String,
		                     
	                //           },
                    data() {
                        return {
                            
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
	
</template>