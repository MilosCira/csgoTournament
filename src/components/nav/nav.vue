<template>
  <v-container>
    <v-app-bar absolute flat color="black" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <router-link to="/">
        <v-toolbar-title class="white--text"
          >eSport CS:GO</v-toolbar-title
        ></router-link
      >
    </v-app-bar>

    <v-navigation-drawer
      theme="dark"
      color="black"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="white">mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text">Home</v-list-item-title>
            </v-list-item>
          </router-link>
<router-link to="/about">
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="white">mdi-information-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text">About</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/players">
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="white">mdi-account-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text">Find Players</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/search-by-date">
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="white">mdi-tournament</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text"
                >Tournaments</v-list-item-title
              >
            </v-list-item>
          </router-link>

          <router-link to="/auth" v-if="!isLoggedIn">
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="white">mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text">Login/Register</v-list-item-title>
            </v-list-item>
          </router-link>
             
          <v-list-item v-if="isLoggedIn">
              <v-list-item-icon>
                <v-icon color="white">mdi-account-details</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text">Profile</v-list-item-title>
            </v-list-item>

            <v-list-item @click="logout()" v-if="isLoggedIn">
              <v-list-item-icon>
                <v-icon color="white">mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text">Logout</v-list-item-title>
            </v-list-item>
          
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      drawer: false,
      group: null,

    }
   
  },
  methods:{
     ...mapActions(["change_login"]),

     logout(){
       localStorage.removeItem('token');
      this.change_login(false)
      this.$router.push("/");
     }
  },
  computed: {
    ...mapState(["isLoggedIn",]),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>