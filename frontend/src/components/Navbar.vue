<template>
  <div class="topnav">    
    <nav class="navbar navbar-light bg-light">
      <img src="../assets/hateEssays.png" width="200" height="80">
        
      <!-- <a class="navbar-brand" href="#" to="/">
        <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" onClick= {Home}>
        Home
      </a>
      <a class="navbar-brand" href="#docs" to="/docs" exact>
        <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" onClick= {Docs}>
        My Documents
      </a> -->
      <router-link tag="li" class="navbar-brand" class-active="active" to="/" exact>Home</router-link>
      <router-link tag="li" class="navbar-brand" class-active="active" to="/docs" exact>My Documents</router-link>

      <button class="btn btn-primary btn-lg float-right" onClick= {Logout}>Logout</button>
    </nav>
  </div>
</template>

<script>
export default {
  Logout(){

  },
};
</script>

<style scoped>

/* Style of nav bar */
.topnav a {
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


/* Change the color of links on hover
.topnav a:hover {
background-color: #ddd;
color: black;
}
.topnav a.active {
background-color: rgb(241, 134, 46);
color: white;
} */

button:hover {
    opacity: 0.75;
}

button {
  margin-right: 1em;
}
</style>

