<template>
  <v-app id="inspire" class="background">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs11 sm8 md4 lg4>
            <v-card-text>
              <v-form>
                <v-row justify="space-around" class="mb-12">
                  <v-avatar size="140">
                    <img src="../assets/images/schoolIcon.png" alt="John" />
                  </v-avatar>
                </v-row>
                <v-text-field class="my-5" name="login" label="Login" type="text" v-model="newUser.email" outlined dense
                  color="green"></v-text-field>
                <v-text-field id="password" name="password" label="Password" type="password" v-model="newUser.password"
                 :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'" @click:append="visible = !visible" outlined dense
                  color="green"></v-text-field>
                <p class="text-center my-5">¿Has olvidado tu contraseña?</p>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-spacer><v-btn @click.prevent="loginUser()" class="btn my-5" rounded large>Acceder</v-btn></v-spacer>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import API from '../services/api.js';
//import {useAuthStore} from '@/stores/store.js'

export default {
  data() {
    return {
      newUser: {
        email: '',
        password: ''
      },
      /*emailRules: [
        (value) => !!value || "Email Required.",
        (value) =>
          value.match(
            /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
          ) || "Invalid Email Format",
      ],
      passwordRules: [
        (value) =>
          value.length >= 3 || "Password must be at least 5 characters long",
      ],
      */
      visible: false,
      //store:useAuthStore()
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await API.login(this.newUser)
        if (response.error) {
          alert('wrong username/password')
        } else {
          //this.store.login(response)
          this.$router.push({ name: 'dashboard' })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>

<style scoped>
.btn {
  background-image: linear-gradient(to right, #006b58, #c6dab7);
  color: #fdfdfd;
}
</style>

