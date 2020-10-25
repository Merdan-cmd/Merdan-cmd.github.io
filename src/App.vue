<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
* {
  font-size: 1rem;
  margin: 0;
  padding: 0;
}
h1 {
  font-size: 2rem;
  text-align: center;
}
body {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma;
  background-color: #000;
  color: #fff;
}
#app {
  height: 100vh;
  position: relative;
  padding: 20px 0;
  overflow: hidden;
}
</style>
