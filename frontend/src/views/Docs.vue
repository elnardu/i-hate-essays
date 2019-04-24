<template>
  <div>
    <!-- <button class="btn btn-success btn-lg float-left" id="newDoc" onClick= {newDoc}>New Document</button> -->
  
    <!-- <div v-for="doc in documents">{{doc.preview}}</div> -->

    <div id="cards" class="card" style="width: 18rem;">
    <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <a id="btnOpen" href="#" class="btn btn-primary">Open</a>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      documents: [
        {
          name: "name",
          preview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          name: "name",
          preview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          name: "name",
          preview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
      ]
    };
  }
};
</script>

<style scoped>
#newDoc{
  margin: 0.75em;
}
#cards {
  margin: 0.5em;
}
#btnOpen  {
  margin-left: 5.5em;
}


</style>