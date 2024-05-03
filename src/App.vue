<script>

import Phone from './components/Phone.vue'
import MenuPhone from './components/MenuPhone.vue'

export default {
		components: {
			Phone,
      MenuPhone
		}
	}


</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main>
    <MenuPhone/>
    <Phone/>
    <!-- <TheWelcome /> -->
  </main>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>
