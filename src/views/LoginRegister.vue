<template>
  <div class="login-container">
    <div class="cover">
      <div class="leftDiv">
        <div>
          <div v-if="errors.length"></div>
          <v-tabs color="transparent" dark slider-color="white">
            <v-tab style="width: 50%"> Login </v-tab>

            <v-tab style="width: 50%"> Register </v-tab>
            <v-tab-item>
              <div class="lr-wrapper">
                <v-text-field
                  type="email"
                  class="ml-2"
                  dense
                  label="Email"
                  v-model="email"
                ></v-text-field>
                <v-text-field
                  dense
                  class="ml-2"
                  type="password"
                  label="Password"
                  v-model="password"
                ></v-text-field>
                <v-btn @click="login()" class="button"> Login </v-btn>
              </div>
            </v-tab-item>

            <v-tab-item>
              <div class="lr-wrapper">
                <v-text-field
                  type="text"
                  class="ml-2"
                  dense
                  v-model="fName"
                  label="First Name"
                ></v-text-field>
                <v-text-field
                  type="text"
                  class="ml-2"
                  dense
                  v-model="lName"
                  label="Last Name"
                ></v-text-field>
                <v-text-field
                  type="email"
                  class="ml-2"
                  dense
                  v-model="email"
                  label="Email"
                ></v-text-field>
                <v-select
                  v-model="select"
                  :items="roles"
                  label="Role"
                
                  required
                ></v-select>
                <v-text-field
                  dense
                  class="ml-2"
                  v-model="password"
                  type="password"
                  label="Password"
                ></v-text-field>
                <v-btn @click="register()" class="button"> Register </v-btn>
              </div>
            </v-tab-item>
          </v-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../api/api";
import { mapState, mapActions } from "vuex";
export default {
  data: function () {
    return {
      errors: [],
      phoneEmail: null,
      password: null,
      fName: null,
      lName: null,
      email: null,
      phone: null,
      rpassword: null,
      roles: [
        'entry',
        'support',
        'in-Game Leader',
        'lurk',
        'awper',
        'secondary role',
      ],
      select:null,
    };
  },
  computed: {
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["change_login", "check_admin"]),
    register(){
      const player={
         
      }
      console.log(player);
       axios
        .post("/api/createPlayer", {
       pl_firstName:this.fName,
         pl_lastName:this.lName,
         pl_email:this.email,
         pl_role:this.select,
         pl_image:'',
         pl_password:this.password  
        })
        .then((res) => {
          console.log(res);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    login() {
      console.log(this.email);
      console.log(this.password);
      axios
        .post("/api/auth/login", {
          pl_email: this.email,
          pl_password: this.password,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          this.change_login(true);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
          this.change_login(false);
        });
    },

    checkLogin: function (e) {
      this.errors = [];

      if (!this.phoneEmail) {
        this.errors.push("Entre your email or phone number.");
      }

      if (!this.password) {
        this.errors.push("Your password is required");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },

    checkForm: function (e) {
      if (!this.fName) {
        this.errors.push("What's your first name?");
      }

      if (!this.lName) {
        this.errors.push("What's your last name?");
      }

      if (!this.email) {
        this.errors.push("Entre your email address.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Your email address is not correct");
      }

      if (!this.phone) {
        this.errors.push("What's your phone number");
      }

      if (!this.rpassword) {
        this.errors.push("Please entre a plassword.");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
  },
};
</script>

<style lang="scss">
.v-tab {
  color: white !important;
}
.inputLogin {
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  width: 100%;
  height: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: solid 2px black;
  box-shadow: 0 0 5px rgb(0, 0, 0);
  margin: 20px 0 30px 0;
  padding: 10px;
  color: white;
}

.login-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/csgo3.jpg") no-repeat black;
  box-sizing: border-box;
}
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.5);
}

.leftDiv {
  position: absolute;
  top: 0;
  right: 0;
  padding: 110px 30px 50px 30px;
  width: auto;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  box-sizing: border-box;
}

.lr-wrapper {
  display: flex;
  flex-direction: column;
  width: 380px;
  margin-top: 1.5rem;
  gap: 1rem;
}

.button {
  display: block;
  margin: 0 auto;
  width: 360px;
  height: 42px;
  background-color: #6c6c6c !important;
  color: #f3f3f3 !important;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 1rem;
}
</style>
