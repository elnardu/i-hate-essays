<template>
  <button class="mb-2 p-2 border rounded" id="button" @click="click">
    {{prediction_obj.text}}
    
    <div class="shortcut text-monospace text-muted mt-2 pt-2">
      {{prediction_obj.predictor}} |
      CTRL+{{number + 1}}
    </div>
  </button>
</template>

<script>
export default {
  props: ["prediction_obj", "number"],
  methods: {
    click() {
      this.$emit("click", this.number);
    }
  }
};
</script>

<style scoped>
#button {
  display: block;
  width: 100%;
  text-align: left;
}

.shortcut {
  display: block;
  text-align: right;
  border-top-color: #6c757d2e;
  border-top: 1px dashed;
  font-size: 0.7em;
}
</style>