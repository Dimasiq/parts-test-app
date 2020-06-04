<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand to="/">Test parts app</b-navbar-brand>
    </b-navbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { BNavbar } from 'bootstrap-vue';

export default {
  components: {
    BNavbar,
  },
};
</script>
<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
</style>
