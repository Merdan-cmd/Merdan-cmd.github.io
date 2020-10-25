<template>
  <div class="register">
    <img src="../assets/TRYMEBITCH.png" alt="Logo" />
    <div v-if="error" class="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input
        type="password"
        placeholder="Confirm Password"
        v-model="confirmedPassword"
      />
      <button type="submit" class="submit">
        <img src="../assets/icon.png" />
      </button>
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Register",

  methods: {
    async pressed() {
      if ((this.password = this.confirmedPassword)) {
        try {
          const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password);
          console.log(user);
          this.$router.replace({ name: "Challenge" });
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("wrong password");
      }
    },
  },

  data() {
    return {
      email: "",
      password: "",
      confirmedPassword: "",
      error: "",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto+Mono&family=VT323&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");

* {
  margin: 0;
  padding: 0;
}

.register {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.8em;
}

.register img {
  width: 15em;
  margin-bottom: 2em;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  width: 75%;
  height: 8%;
  margin: 1em;
  padding: 1em;
  font-size: 1em;
  background-color: rgba(0.25, 0.25, 0.25, 0.3);
  border-image-source: linear-gradient(#ff008e, #5100ee);
  border-image-slice: 1;
  color: #ff008e;
}

input:focus {
  outline: none;
}

.submit {
  position: relative;
  display: flex;
  align-items: center;
  position: absolute;
  color: #5500ff;
  top: 103%;
  width: 20vw;
  height: 11vh;
  margin-bottom: 11%;
  border-image-source: linear-gradient(#ff008e, #5100ee);
  border-image-slice: 1;
  background-color: rgba(0, 0, 0, 0.32);
  cursor: pointer;
}

.submit:focus {
  outline: none;
}

.submit img {
  position: absolute;
  width: 50%;
  margin: 0;
  left: 38%;
}

h4 {
  position: absolute;
  top: 97%;
  color: #fff;
  font-family: "Oswald";
}

#link {
  color: #ff008e;
  text-decoration: none;
}
</style>
