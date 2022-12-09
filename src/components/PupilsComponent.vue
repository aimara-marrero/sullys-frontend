<template>
  <v-data-table :headers="headers" :items="Usuarios" :search="search" sort-by="calories" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Padres</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Inserta padre
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Nombre"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.lastName" label="Apellidos"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.password" label="Contraseña"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.dni" label="DNI"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.phone" label="Teléfono"></v-text-field>
                    <v-text-field v-model="editedItem.address" label="Dirección"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import API from '../services/api.js';
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    search: '',
    headers: [
      {
        text: 'Nombre',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Apellidos', value: 'lastName' },
      { text: 'Email', value: 'email' },
      { text: 'DNI', value: 'dni' },
      { text: 'Teléfono', value: 'phone' },
      { text: 'Dirección', value: 'address' },
      //{ text: 'Contraseña', value: 'password', sortable: false },
      //{ text: 'ID', value: '_id', sortable: false },
      { text: 'Actions', value: 'actions', sortable: false },


    ],
    Usuarios: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      lastName: '',
      email: '',
      dni: '',
      phone: '',
      address: '',
      password: '',
      _id: '',
    },
    idUsuario: {
      id: ''
    },

    defaultItem: {
      name: '',
      lastName: '',
      email: '',
      dni: '',
      phone: '',
      adress: '',
      password: '',
      _id: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Inserta Padre' : 'Edita Padre'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    async initialize() {
      this.Usuarios = await API.getAllUser()
    },

    editItem(item) {
      this.editedIndex = this.Usuarios.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.Usuarios.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm() {
      if (this.editedIndex > -1) {
        this.idUsuario.id = this.editedItem._id
        await API.deleteUser(this.idUsuario.id)
      }
      this.Usuarios.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save() {
      if (this.editedIndex > -1) {
        this.idUsuario.id = this.editedItem._id
        await API.updateuser(this.idUsuario.id, this.editedItem)
        Object.assign(this.Usuarios[this.editedIndex], this.editedItem)
      } else {
        //creamos un nuevo objeto para discriminar el campo _id del padre.
        const nuevoUser = {
          name: this.editedItem.name,
          lastName: this.editedItem.lastName,
          email: this.editedItem.email,
          password: this.editedItem.password,
          dni: this.editedItem.dni,
          phone: this.editedItem.phone,
          address: this.editedItem.address
        }
        await API.addUser(nuevoUser)
        this.Usuarios.push(this.editedItem)

      }
      this.close()
    },
  },
}
</script>

<style lang="scss" scoped>

</style>