<template>
  <div class="home">
    <h1>What is I Hate Essays</h1>
    <!-- <p>Writing essays is often a difficult and excruciating process. I Hate Essays is an application designed to alleviate
      some of the stress and boredom that comes with writing. Our application provides a smart autocomplete to help 
      write long and unnecessary sentences in order to increase word count. Simply edit and store your documents with our
      smart autocomplete service for an easy and effective writing experience.
    </p> -->

    <!-- <div class="clearfix">
      <img src="../assets/writers-block-eraser.jpg" alt="d" class="float-left">
      <p>Writing essays is often a difficult and excruciating process. <b>I Hate Essays</b> is an application designed to alleviate
      some of the stress and boredom that comes with writing. Our application provides a smart autocomplete to help 
      write long and unnecessary sentences in order to increase word count. Simply edit and store your documents with our
      smart autocomplete service for an easy and effective writing experience.
      </p>
    </div> -->
    
    <div> 
      <p id="intro" style="float: right;"><img src="../assets/writers-block-eraser.jpg" id="firstImage" width="80%"></p>
      <p>Writing essays is a difficult and often excruciating process. <b>I Hate Essays</b> is an application designed to alleviate
      some of the stress and boredom that comes with writing.<br><br>Our application provides a smart autocomplete to help 
      write long and unnecessary sentences in order to increase word count.<br><br>Simply edit and store your documents with our
      smart autocomplete service for an easy and effective writing experience.
      </p>
    </div>


    <br>
    <h1>Screenshots</h1>
    <div class="row">
      <div class="column">
        <img src="../assets/writers-block-eraser.jpg" alt="service1" style="width:100%">
      </div>
      <div class="column">
        <img src="../assets/writers-block-eraser.jpg" alt="service2" style="width:100%">
      </div>
    </div>


    <br><h1>Meet the Team</h1>
    <div>
      <p style="float: left;"><img src="../assets/logo.png" height="200px" width="200px" id="profilepic" border="1px"></p>
      <a href="https://github.com/elnardu/" id="names">Elnard Utiushev</a>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dictum massa. Aenean a ex ipsum. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Cras suscipit volutpat ipsum vel maximus. Aenean tempor, neque a luctus tincidunt, mauris leo finibus 
        massa, vel mattis magna ligula sed risus. Pellentesque rutrum, arcu et dapibus sagittis, turpis orci sollicitudin massa, a feugiat 
        justo mi a odio. Donec convallis neque ac ipsum vestibulum, quis rutrum mauris fermentum. Nunc rutrum mi magna, a tristique arcu porta 
        et. Suspendisse potenti. Duis consequat sodales nisi sit amet maximus. Quisque velit sem, egestas vitae porttitor non, porttitor nec 
        purus. Ut eget dictum orci. Pellentesque commodo imperdiet mattis.</p>
    </div>
    <!-- <img alt="Luke pic" src="../assets/logo.png"> -->
    <div>
      <p style="float: left;"><img src="../assets/meSmall.png" height="200px" width="200px" id="profilepic" border="1px"></p>
      <a href="https://github.com/lukegregurich" id="names" >Luke Gregurich</a>
      <p>Luke Gregurich is an undergraduate student at Purdue University, majoring in Computer Science, minoring in  Earth, Atmospheric, 
        and Planetary Sciences, with a Certificate in Entrepreneurship.<br><br>Luke is one of the developers of the <b>I Hate Essays</b> application
        for Purdue's CS252 class. During the summer, Luke plans to study GIS technology and research semiconductors at Denmark Technical University.
        Luke enjoys the Game of Thrones television series and playing Queen's "Bomehian Rhapsody" on public pianos.
      </p>
    </div>

    <h1>The History of I Hate Essays</h1>
    <p>As a computer science student at Purdue University, <b>I Hate Essays</b> was first thought </p>


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
  margin-bottom: 0.03em;
}
div {
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 80px;
}
p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-left: 4.4em;
}

a:hover {
  color:violet;
  background-color: transparent;
  text-decoration: underline;
}
#names {
  display: block;
  font-size: 1.3em;
  /* margin-top: 1.33em; */
  margin-bottom: 0.3em;
  margin-left: 30px;
  margin-right: 1em;
  padding-left: 1em;
  font-weight: bold;
  color: black
}
#profilepic {
  border-radius: 8px;
  margin-right: 1.3em;
  margin-bottom: 1.3em;
  /* padding-right: 1.3em;
  padding-bottom: 1.3em; */
  
}
#intro {
  font-size:20px
}

.column {
  float: left;
  width: 50%;
  padding: 5px;
}
/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>

