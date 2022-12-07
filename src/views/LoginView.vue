<template>
  <div>
    <LoginComponent/>
  <!--<FooterComponent/> -->
  </div>
  
</template>

<script>
  import LoginComponent from '../components/LoginComponent.vue'
  //import FooterComponent from '@/components/FooterComponent.vue';

  export default {
    name: 'Home',

    components: {
      LoginComponent,
      //FooterComponent
    },
  }
</script>
