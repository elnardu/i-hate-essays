<template>
  <div id="app">
    <Navbar/>
    <div class="view-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
export default {
  components: {
    Navbar
  }
}
</script>


<style>
#app, body, html {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}

.view-container {
  height: calc(100% - 16px);
}
</style>
