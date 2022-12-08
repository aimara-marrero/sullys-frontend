<template>
  <div>
    <v-card>
      <!--<v-navigation-drawer v-model="drawer"
      :mini-variant.sync="mini"
      permanent>-->
      <v-navigation-drawer app>
        <v-img height="140" class="pa-4"
          src="https://img.freepik.com/vector-gratis/fondo-educacion-estilo-doodle_53876-115365.jpg?w=2000&t=st=1670449304~exp=1670449904~hmac=4e6a744fc096d8546ea0d4f691ce58d2c3483e71ccac416215af669f8e2f57e8">
          <div class="text-center">
            <v-avatar class="mb-4" color="black" size="60">
              <v-img max-height="100" max-width="100" aspect-ratio="50" src="../assets/images/logo.png"></v-img>
            </v-avatar>
            <h2 class="green--text">Sullys</h2>
          </div>
        </v-img>
        <!--<v-btn
          icon
          @click.stop="mini = !mini"
        ></v-btn>-->
        <v-divider></v-divider>
        <v-list>
          <v-list-item @click="test3()" link>
            <v-list-item-icon>
              <v-icon>mdi-microsoft-windows</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>docente</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="test4()" link>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>padre</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="test2()" link>
            <v-list-item-icon>
              <v-icon>mdi-account-school</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>pupils</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="test2()" link>
            <v-list-item-icon>
              <v-icon>mdi-human-male-board</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>asignaturas</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="test2()" link>
            <v-list-item-icon>
              <v-icon>mdi-book-open-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>examenes</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <PupilComponent v-if="test.docente"><v-icon>mdi-microsoft-windows</v-icon>docentes</PupilComponent>
    <div v-if="test.padre">padres</div>
    <div v-if="test.pupils">pupils</div>
    <div v-if="test.asignaturas">cursos</div>
    <div v-if="test.examenes">asignaturas</div>
  </div>
</template>
  
<script>

import API from '../services/api.js';
import PupilComponent from '../components/PupilsComponent.vue';

export default {
  components: {
    PupilComponent

  },
  data() {
    return {
      users: [],
      /*links: [
    ["mdi-microsoft-windows", "Dashboard"],
    ["mdi-account", "Profile"],
    ["mdi-account-school", "Estudiantes"],
    ["mdi-human-male-board", "Docente"],
    ["mdi-book-open-variant", "Asignatura"],
    ["mdi-human-male-child", "Usuario"],
    ["mdi-book-account", "Examen"]
    
  ],*/
      //drawer: true,
      //mini: true,
      test: {
        docente: false,
        padre: false,
        pupils: false,
        asignaturas: false,
        examenes: false,
        curso: false,
      }
    }
  },
  methods: {
    test2() {
      console.log("hola")
    },
    test3() {

      this.test.docente = true
      this.test.padre = false
      this.test.pupils = false
      this.test.asignaturas = false
      this.test.examenes = false
      this.test.curso = false
    },
    test4() {

      this.test.padre = true
      this.test.docente = false
      this.test.pupils = false
      this.test.asignaturas = false
      this.test.examenes = false
      this.test.curso = false
    },
  },

  async created() {
    this.users = await API.getAllUser()
  }
};
</script>
  