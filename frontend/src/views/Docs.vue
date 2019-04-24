<template>
  <div class="container">
    <div class="col p-3">
      <div class="card-columns">
        <router-link class="card" v-for="(doc, i) in documents" :key="i" :to="'/doc/' + doc._id">
          <div class="card-body">
            <h5 class="card-title">{{doc.title}}</h5>
            <p class="card-text">{{doc.preview}}...</p>
            <!-- <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p> -->
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      documents: []
    };
  },
  mounted() {
    axios
      .get("/api/getDocuments")
      .then(res => {
        this.documents = res.data
      })
      .catch(err => {
        
      });
  }
};
</script>

<style scoped>
.card {
  text-decoration: none;
}
</style>