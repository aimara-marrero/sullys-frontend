<template>
  <div>
    <LoginComponent/>
  <!--<FooterComponent/> -->
  <Sidebar/>
  </div>
  
</template>

<script>
  import LoginComponent from '../components/LoginComponent.vue'
  //import FooterComponent from '@/components/FooterComponent.vue';
  import Sidebar from '../components/SidebarComponent.vue'

  export default {
    name: 'Home',

    components: {
      LoginComponent,
      //FooterComponent
      Sidebar
    },
  }
</script>
