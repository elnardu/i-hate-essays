<template>
  <div class="home container">
    <h1 class="mt-5 mb-3">What is I Hate Essays</h1>
    <div class="row">
      <div class="col">
        <img src="../assets/writers-block-eraser.jpg" id="firstImage" width="100%">
      </div>
      <div class="col-7">
        <p>
          Writing essays is a difficult and often excruciating process.
          <b>I Hate Essays</b> is an application designed to alleviate
          some of the stress and boredom that comes with writing.
          <br>
          <br>Our application provides a smart autocomplete to help
          write long and unnecessary sentences in order to increase word count.
          <br>
          <br>Simply edit and store your documents with our
          smart autocomplete service for an easy and effective writing experience.
          <br/>
          <br/>
          plz do not waste your time reading this
        </p>
      </div>
    </div>

    <h1 class="mt-5 mb-3">Screenshots</h1>
    <div class="row">
      <div class="col">
        <img src="../assets/writers-block-eraser.jpg" alt="service1" style="width:100%">
      </div>
      <div class="col">
        <img src="../assets/writers-block-eraser.jpg" alt="service2" style="width:100%">
      </div>
    </div>

    <h1 class="mt-5 mb-3">Meet the Team</h1>
    <div class="d-flex my-2 align-items-start justify-content-start">
      <img src="../assets/a.png" height="200px" width="200px" id="profilepic" border="1px">
      <div class="ml-5">
        <a href="https://github.com/elnardu/" class="name">Elnard Utiushev</a>
        I hate short paragraphs too. I did Node.js backend, Python backend, Vue frontend, all api stuff, most of the css and html.

      </div>
    </div>

    <div class="d-flex my-2 align-items-start justify-content-start">
      <img src="../assets/meSmall.png" height="200px" width="200px" id="profilepic" border="1px">
      <div class="ml-5">
        <a href="https://github.com/lukegregurich" class="name">Luke Gregurich</a>
        <p>
          Luke Gregurich is an undergraduate student at Purdue University, majoring in Computer Science, minoring in Earth, Atmospheric,
          and Planetary Sciences, with a Certificate in Entrepreneurship.
          <br>
          <br>Luke is one of the developers of the
          <b>I Hate Essays</b> application
          for Purdue's CS252 class. During the summer, Luke plans to study GIS technology and research semiconductors at Denmark Technical University.
          Luke enjoys the Game of Thrones television series and playing Queen's "Bomehian Rhapsody" on public pianos.
        </p>
      </div>
    </div>

    <h1 class="mt-5">The History of I Hate Essays</h1>
    <p>
      Lol why do we have this
    </p>


    <p class="text-muted" style="opacity: 0.1">Sub to pewdiepie</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
/* h1 {
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
} */

.name {
  display: block;
  font-weight: bold;
  color: black;
}
#profilepic {
  border-radius: 8px;
  /* margin-right: 1.3em;
  margin-bottom: 1.3em; */
  /* padding-right: 1.3em;
  padding-bottom: 1.3em; */
}
#intro {
  font-size: 20px;
}

/* .column {
  float: left;
  width: 50%;
  padding: 5px;
} */
/* Clear floats after image containers */
/* .row::after {
  content: "";
  clear: both;
  display: table;
}  */
</style>

