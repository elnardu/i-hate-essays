<template>
  <div class="home">
    <h1>What is I Hate Essays</h1>
    <p>Our mission is to...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    
    <figure class="figure">
    <img alt="Writers block" src="../assets/writers-block-eraser.jpg">
    <figcaption class="figure-caption text-right">This tool is supposed to help people like me, 
    who often get stuck while writing an essay by providing smart autocomplete. It is also supposed to help 
    writing long and unnecessary sentences in order to increase the word count.</figcaption>
    </figure>

    <h1>The Team</h1>
    <!-- <h3>Elnard Utuishev</h3>
    <img alt="Elnard pic" src="../assets/logo.png">
    <h3>Luke Gregurich</h3>
    <img alt="Luke pic" src="../assets/logo.png"> -->
    <div>
      <p style="float: left;"><img src="../assets/logo.png" height="200px" width="200px" border="1px"></p>
      <h4>Elnard Utiushev</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dictum massa. Aenean a ex ipsum. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Cras suscipit volutpat ipsum vel maximus. Aenean tempor, neque a luctus tincidunt, mauris leo finibus 
        massa, vel mattis magna ligula sed risus. Pellentesque rutrum, arcu et dapibus sagittis, turpis orci sollicitudin massa, a feugiat 
        justo mi a odio. Donec convallis neque ac ipsum vestibulum, quis rutrum mauris fermentum. Nunc rutrum mi magna, a tristique arcu porta 
        et. Suspendisse potenti. Duis consequat sodales nisi sit amet maximus. Quisque velit sem, egestas vitae porttitor non, porttitor nec 
        purus. Ut eget dictum orci. Pellentesque commodo imperdiet mattis.</p>
    </div>
    <!-- <img alt="Luke pic" src="../assets/logo.png"> -->
    <div>
      <p style="float: left;"><img src="../assets/logo.png" height="200px" width="200px" border="1px"></p>
      <a href="https://github.com/lukegregurich" id="names" >Luke Gregurich</a>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dictum massa. Aenean a ex ipsum. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Cras suscipit volutpat ipsum vel maximus. Aenean tempor, neque a luctus tincidunt, mauris leo finibus 
        massa, vel mattis magna ligula sed risus. Pellentesque rutrum, arcu et dapibus sagittis, turpis orci sollicitudin massa, a feugiat 
        justo mi a odio. Donec convallis neque ac ipsum vestibulum, quis rutrum mauris fermentum. Nunc rutrum mi magna, a tristique arcu porta 
        et. Suspendisse potenti. Duis consequat sodales nisi sit amet maximus. Quisque velit sem, egestas vitae porttitor non, porttitor nec 
        purus. Ut eget dictum orci. Pellentesque commodo imperdiet mattis.</p>
    </div>

    <h1>The History of I Hate Essays</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dictum massa. Aenean a ex ipsum. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Cras suscipit volutpat ipsum vel maximus. Aenean tempor, neque a luctus tincidunt, mauris leo finibus 
        massa, vel mattis magna ligula sed risus. Pellentesque rutrum, arcu et dapibus sagittis, turpis orci sollicitudin massa, a feugiat 
        justo mi a odio. Donec convallis neque ac ipsum vestibulum, quis rutrum mauris fermentum. Nunc rutrum mi magna, a tristique arcu porta 
        et. Suspendisse potenti. Duis consequat sodales nisi sit amet maximus. Quisque velit sem, egestas vitae porttitor non, porttitor nec 
        purus. Ut eget dictum orci. Pellentesque commodo imperdiet mattis.</p>
</div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
p {
  font-family: Verdana, Geneva, Tahoma, sans-serif
}
/* a:link {
  color: green; 
  background-color: transparent; 
  text-decoration: none;
} */
a:hover {
  color:violet;
  background-color: transparent;
  text-decoration: underline;
}
#names {
  display: block;
  font-size: 1.3em;
  /* margin-top: 1.33em; */
  margin-bottom: 1.33em;
  margin-left: 30px;
  margin-right: 1em;
  font-weight: bold;
  color: black
}
</style>

