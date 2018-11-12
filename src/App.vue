<template>
  <div id="app">
    <app-Header></app-Header>
    <div class="row">
      <div class="col-md-12"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
//import AllPosts from "./components/AllPosts.vue";
import Header from "./components/Header.vue";
export default {
  components: {
    //allPosts: AllPosts,
    appHeader: Header
  }
};
</script>


<style>
body {
  padding: 2em;
}
</style>
