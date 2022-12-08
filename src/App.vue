<template>
  <v-app>
    <NavBarComponent />
    <v-main>
      <router-view/>
      <FooterComponent /> 
    </v-main>
  </v-app>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
export default {
  name: 'App',
  components: {
      FooterComponent,
      NavBarComponent 
    },
  data: () => ({
    //
  }),
};
</script>
