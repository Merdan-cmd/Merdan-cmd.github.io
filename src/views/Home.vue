<template>
  <div class="home">
    <img src="../assets/TRYMEBITCH.png" alt="Logo" />
    <form @submit.prevent="pressed">
      <input type="email" placeholder="Email" v-model="email" />
      <input
        id="input2"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <button type="submit" class="submit">
        <img src="../assets/icon.png" />
      </button>
    </form>
    <div class="link">
      <h4>
        No account yet?
        <router-link to="register" id="link">
          <span>Register here!</span>
        </router-link>
      </h4>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Home",
  methods: {
    async pressed() {
      try {
        const val = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(val);
        this.$router.replace({ name: "Challenge" });
      } catch (err) {
        console.log(err);
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto+Mono&family=VT323&display=swap");

.home {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.8em;
}

.home img {
  width: 15em;
  margin: 3em;
}

input {
  width: 75%;
  margin-bottom: 3em;
  padding: 1em;
  font-size: 1em;
  background-color: rgba(0.25, 0.25, 0.25, 0.3);
  border-image-source: linear-gradient(#ff008e, #5100ee);
  border-image-slice: 1;
  color: #ff008e;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.link {
  display: flex;
  justify-content: center;
}

#input2 {
  margin-bottom: 1em;
}


.submit {
  position: relative;
  display: flex;
  align-items: center;
  position: absolute;
  top: 100%;
  width: 20vw;
  height: 11vh;
  margin-bottom: 11%;
  border-image-source: linear-gradient(#ff008e, #5100ee);
  border-image-slice: 1;
  background-color: rgba(0, 0, 0, 0.32);
  cursor: pointer;
  margin-top: 2.5em;
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
