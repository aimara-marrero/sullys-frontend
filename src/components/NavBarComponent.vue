
<template>
  <div >
    <v-app-bar color="black" dense dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up"></v-app-bar-nav-icon>
      <v-row justify="end" class="mb-12 hidden-lg-and-up"></v-row>
      <v-img max-height="100" max-width="100" src="../assets/images/logo.png"></v-img>
      <v-row justify="end" class=" hidden-md-and-down">
        <v-btn rounded large>Acceder</v-btn>
      </v-row>
  
    </v-app-bar>
    <v-navigation-drawer v-model="drawer"   bottom temporary class=" orange ">
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="white--text text--white text--center">
          <v-list-item class="linkflex">
           <RouterLink class="text-center white--text link" to="/about">Home</RouterLink>
          </v-list-item>
          <v-list-item class="linkflex">
           <RouterLink class="text-center white--text link" to="/about">Login</RouterLink>
          </v-list-item>
          <v-list-item class="linkflex">
           <RouterLink class="text-center white--text link" to="/about">Precios</RouterLink>
          </v-list-item>
          <v-list-item class="linkflex">
           <RouterLink class="text-center white--text link" to="/about">FAQ</RouterLink>
          </v-list-item>
          <v-list-item class="linkflex">
           <RouterLink class="text-center white--text link" to="/about">Sobre Nosotros</RouterLink>
          </v-list-item>

          
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
//import { useAuthStore } from '../stores/store'
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style lang="scss" scoped>
.linkflex{
  display: flex;
  justify-content: center;
}
.link{
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  margin-top: 2rem;
}

</style>
