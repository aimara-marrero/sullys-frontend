

<template>
    <v-navigation-drawer app>
      <v-img
        height="140"
        class="pa-4"
        src="https://img.freepik.com/vector-gratis/fondo-educacion-estilo-doodle_53876-115365.jpg?w=2000&t=st=1670449304~exp=1670449904~hmac=4e6a744fc096d8546ea0d4f691ce58d2c3483e71ccac416215af669f8e2f57e8"
      >
        <div class="text-center">
          <v-avatar class="mb-4" color="black" size="60">
            <v-img
              max-height="100" max-width="100"
              aspect-ratio="50"
              src="../assets/images/logo.png"

              ></v-img>
          </v-avatar>
          <h2 class="green--text">Sullys</h2>
        </div>
      </v-img>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
  
    data() {
      return {
        links: [
          ["mdi-microsoft-windows", "Dashboard"],
          ["mdi-account", "Profile"],
          ["mdi-account-school", "Estudiantes"],
          ["mdi-human-male-board", "Docente"],
          ["mdi-book-open-variant", "Asignatura"],
          ["mdi-human-male-child", "Usuario"],
          ["mdi-book-account", "Examen"]

          
        ],
      };
    },
  };
  </script>
  
  <style scoped></style>