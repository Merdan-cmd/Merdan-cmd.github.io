<template>
  <div>
    <div class="form">
      <div class="logo">
        <img id="img" src="../assets/Element 1.png" alt />
      </div>
    </div>
    <CardList />
    <div class="navigation">
      <i class="fas fa-star"></i>
      <i class="fas fa-play"></i>
      <i class="fas fa-bars"></i>


    </div>
  </div>
</template>

<script>

import CardList from "../components/CardList";
export default {
  name: "Challenge",
  components: {
    CardList
  },
    mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://kit.fontawesome.com/c579d8f3f0.js')
    document.head.appendChild(externalScript)
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;

  position: absolute;
  top: 0%;
  width: 100%;
  height: 40vh;
  z-index: -1;
  border-bottom-left-radius: 55px;
  background: linear-gradient(315deg, #7e05db, #643e70);
  box-shadow: 24px 24px 68px #0f0514, -24px -24px 68px #550790;

  .logo {
    margin-top: 8%;
  }

}

.navigation{
  width: 100%;
  height: 12vh;
  background: linear-gradient(315deg, #7e05db, #643e70);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;

  i{
    font-size: 170% ;
    margin-bottom: 7%;
  }
}
</style>
