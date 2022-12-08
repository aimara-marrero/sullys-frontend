<template>
    <div>
      <SidebarComponent />
      <router-view/>
    </div>
  </template>
  
  <script>
  import SidebarComponent from "../components/SidebarComponent.vue";
  import API from '../services/api.js';

  export default {
    data() {
        return {
            users: [],
            
        }
    },
    name: "Sidebar",
  
    components: {
        SidebarComponent,
    },


    async created() {
        this.users = await API.getAllUser()
    }
  };
  </script>
  