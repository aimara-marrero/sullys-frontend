<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs10 sm8 md4 lg4>
            <v-card-text>
              <v-row justify="space-around" class="mb-6 mt-6">
                <v-img
                  src="../assets/images/meta.png"
                  alt="John"
                  max-height="100"
                  max-width="100"
                ></v-img>
              </v-row>
              <h3 class="text-center mb-4">Nuestra meta</h3>
              <p class="text-center mb-4">
                Ser la plataforma de comunicación ideal entre las escuelas y los
                padres
              </p>
            </v-card-text>
            <v-card-text>
              <v-row justify="space-around" class="mb-6">
                <v-img
                  src="../assets/images/mision.png"
                  alt="John"
                  max-height="100"
                  max-width="100"
                ></v-img>
              </v-row>
              <h3 class="text-center mb-4">Nuestra misión</h3>
              <p class="text-center mb-4">
                Reforzar la comunicación entre escuelas y padres a mantenerse
                conectados
              </p>
            </v-card-text>
            <v-card-text>
              <v-row justify="space-around" class="mb-6">
                <v-img
                  src="../assets/images/valores.png"
                  alt="John"
                  max-height="100"
                  max-width="100"
                ></v-img>
              </v-row>
              <h3 class="text-center mb-4">Nuestros valores</h3>
              <p class="text-center mb-4">
                La tecnología debe ser para todos.<br />Por eso creemos que la
                sencillez es una forma preferible de hacer las cosas
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-spacer
                ><v-btn class="btn my-5 orange" rounded x-large
                  ><v-icon left> mdi-arrow-left-thin </v-icon><RouterLink class="text-center white--text link" to="/">Home</RouterLink></v-btn
                ></v-spacer
              >
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.btn {
  color: #fdfdfd;
}
.link {
  text-decoration: none;
  text-align: center;
  font-size: 16px;

}
</style>
