<template>
  <div class="container-fluid" id="main">
    <div class="row">
      <div class="col-3 pt-4 pl-4">
        <PredictionButton v-for="(text, i) in predictions" :text="text" :number="i" :key="i" @click="prediction_click"/>
      </div>
      <div class="col-9 p-4 pl-1">
        <textarea id="main-text"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleMDE from "simplemde";

import PredictionButton from "@/components/PredictionButton";
import register_shortcuts from "@/keyboard_shortcuts.js";

export default {
  components: {
    PredictionButton
  },
  data() {
    return {
      simplemde_obj: null,
      predictions: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "lolkek",
        "hahahah"
      ]
    };
  },
  mounted() {
    register_shortcuts(document, this.handle_shortcut);

    this.simplemde_obj = new SimpleMDE({
      element: document.getElementById("main-text"),
      shortcuts: {
        drawImage: null
      },
      //   forceSync: true,
      autofocus: true,
      hideIcons: ["fullscreen", "side-by-side"],
      spellChecker: false
    });

    console.log(this.simplemde_obj);
  },
  methods: {
    handle_shortcut(number) {
      this.append_text_at_cursor(this.predictions[number]);
    },
    append_text_at_cursor(text) {
      let doc = this.simplemde_obj.codemirror.getDoc();
      let cursor = doc.getCursor();
      doc.replaceRange(text, cursor);
    },
    prediction_click(number) {
      this.append_text_at_cursor(this.predictions[number]);
    }
  }
};
</script>

<style scoped>
#main {
  width: 100%;
  height: 100%;
}

#main-text {
  width: 100%;
  height: 100%;
}

.row {
  height: 100%;
}
</style>

<style>
.CodeMirror,
.CodeMirror-scroll {
  min-height: 80%;
}
</style>
