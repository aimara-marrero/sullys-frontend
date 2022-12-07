<template>
  <v-footer dark padless>
    <v-flex>
      <v-card flat tile color="black" class="white--text text-center">
        <v-card-text>
          <v-img class="mx-auto" max-height="125" max-width="125" src="../assets/images/logo.png"></v-img>

          <v-btn v-for="icon in icons" :key="icon" class="mx-2 white--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-list nav dense class="black">
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

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Sullys</strong>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-instagram',
      'mdi-facebook',
      'mdi-twitter',
      'mdi-pinterest',
      'mdi-gmail'

    ],
  }),
}
</script>


<style lang="scss" scoped>
.linkflex {
  display: flex;
  justify-content: center;
}

.link {
  text-decoration: none;
  text-align: center;
  font-size: 16px;

}
</style>