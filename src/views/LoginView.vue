<template>
    <v-app id="inspire">
       <v-main>
          <v-container fluid fill-height>
             <v-layout align-center justify-center>
                <v-flex xs11 sm8 md4 lg4>
                   <v-card class="elevation-12">
                      <v-toolbar dark color="primary">
                         <v-toolbar-title>Login</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text>
                         <v-form>
                            <v-text-field
                               prepend-icon="mdi-account"
                               name="login"
                               label="Login"
                               type="text"
                            ></v-text-field>
                            <v-text-field
                               id="password"
                               prepend-icon="mdi-lock"
                               name="password"
                               label="Password"
                               type="password"
                               :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
                               @click:append="visible = !visible"
                            ></v-text-field>
                         </v-form>
                      </v-card-text>
                      <v-card-actions>
                         <v-spacer></v-spacer>
                         <v-btn color="primary" to="/">Login</v-btn>
                      </v-card-actions>
                   </v-card>
                </v-flex>
             </v-layout>
          </v-container>
       </v-main>
    </v-app>
 </template>

<!-- <template>
    <div style="width: 300px">
      <v-text-field
        label="Insert Email"
        :rules="emailRules"
        hide-details="auto"
        prepend-icon="mdi-at"
      ></v-text-field>
      <v-text-field
      label="Insert Password"
      :type="visible ? 'text' : 'password'"
      :rules="passwordRules"
      hide-details="auto"
      prepend-icon="mdi-lock"
      :append-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="visible = !visible"
      ></v-text-field>
    </div>
  </template> -->
  
  <script>
  export default {
    data () {
      return {
        emailRules: [
          value => !!value || 'Email Required.',
          value => value.match(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/) || 'Invalid Email Format'
        ],
        passwordRules: [value => value.length >= 5 || 'Password must be at least 5 characters long'],
        visible: false
      }
    }
  }
  </script>
  
  <style scoped>
  </style>