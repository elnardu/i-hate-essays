<template>
  <nav id="navb" class="navbar navbar-expand navbar-dark bg-dark">
    <!-- <img src="../assets/hateEssays.png" width="200" height="80">
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#/docs">My Documents</a>
            </li>
            <button id="logoutbtn" class="btn btn-primary btn-lg float-right">Logout</button>
        </ul>
    </div>-->

    <router-link class="navbar-brand" to="/">I HATE ESSAYS</router-link>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/" active-class="active" :exact="true">Home</router-link>
      </li>
      <li class="nav-item" v-if="$store.getters.isAuthenticated">
        <router-link class="nav-link" to="/docs" active-class="active" :exact="true">My Documents</router-link>
      </li>
      <li class="nav-item" v-if="!$store.getters.isAuthenticated">
        <a class="nav-link" href="/auth/github">Login using GitHub</a>
      </li>
      <li class="nav-item" v-if="$store.getters.isAuthenticated">
        <a class="nav-link" href="/auth/logout">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
/* Style of nav bar */
/* .topnav a {
  float: left;
  color: #000000;
  text-align: center;
  padding: 16px 16px;
  text-decoration: none;
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
nav li {
  padding: 16px 16px; 
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
}
nav li:hover, nav li:active{
  background-color: #ddd;
  text-decoration-color: white;
  cursor: pointer;
  transform: scale(1.05);
  transition-duration: 0.5s;
}

#navb:hover {
  color: transparent;
}
button:hover {
    opacity: 0.75;
}
button {
  margin-right: 0.8em;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  margin-left: 1em;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
} */
</style>

