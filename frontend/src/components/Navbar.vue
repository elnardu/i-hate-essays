<template>
  <div class="topnav">    
    <nav class="navbar navbar-light bg-light">
      <img src="../assets/hateEssays.png" width="80" height="80">
        
      <a class="navbar-brand" href="#home">
        <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30"  alt="">
        Home
      </a>
      <a class="navbar-brand" href="#docs">
        <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
        My Documents
      </a>
      <button class="btn btn-primary btn-lg float-right" onClick= {Logout}>Logout</button>
    </nav>
  </div>
</template>

<script>
export default {
  Logout(){

  }
};
</script>

<style scoped>
.topnav a {
  float: left;
  color: #000000;
  text-align: center;
  padding: 16px 16px;
  text-decoration: none;
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
/* Change the color of links on hover */
.topnav a:hover {
background-color: #ddd;
color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
/* background-color: rgb(241, 134, 46); */
color: white;
}

button:hover {
    opacity: 0.75;
}
.navbar {

}
</style>