<template>
  <div class="container-fluid DO-NOT-LOOK-HERE--BAKA!" id="main">
    <div class="row">
      <div class="col-3 pt-4 pl-4 predictions">
        <PredictionButton
          v-for="(obj, i) in predictions"
          :prediction_obj="obj"
          :number="i"
          :key="i"
          @click="prediction_click"
        />
      </div>
      <div class="col-9 p-4 pl-1">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <span class="input-group-text">Title</span>
          </div>
          <input class="form-control w-auto" v-model="title" @change="title_changed">
        </div>
        <textarea id="main-text"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleMDE from "simplemde";
import io from "socket.io-client";

import PredictionButton from "@/components/PredictionButton";
import register_shortcuts from "@/keyboard_shortcuts.js";
import preprocess_text from "@/preprocess_text.js";
import debounce from "@/debounce";

export default {
  props: ["doc_id"],
  components: {
    PredictionButton
  },
  data() {
    return {
      simplemde_obj: null,
      predictions: [],
      socket: io(),
      title: ""
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

    this.text_changed = debounce(this.text_changed, 250);
    this.title_changed = debounce(this.title_changed, 250);

    this.simplemde_obj.codemirror.on("change", this.text_changed);
    this.simplemde_obj.codemirror.on("cursorActivity", this.text_changed);

    this.socket.on("update_predictions", this.update_predictions);
    this.socket.on("update_text", this.update_text);
    this.socket.on("update_title", this.update_title);

    this.socket.emit("set_current_document", this.doc_id);

    this.socket.on("current_document_request", () => {
      this.socket.emit("set_current_document", this.doc_id);
    });
  },
  methods: {
    update_text(text) {
      this.simplemde_obj.value(text);
    },
    update_title(title) {
      this.title = title;
    },
    handle_shortcut(number) {
      this.append_text_at_cursor(this.predictions[number].text);
    },
    append_text_at_cursor(text) {
      let doc = this.simplemde_obj.codemirror.getDoc();
      let cursor = doc.getCursor();
      doc.replaceRange(text, cursor);
    },
    prediction_click(number) {
      this.append_text_at_cursor(this.predictions[number].text);
    },
    text_changed() {
      this.socket.emit(
        "text_change",
        preprocess_text(this.simplemde_obj.codemirror)
      );
    },
    title_changed() {
      this.socket.emit("title_change", this.title);
    },
    update_predictions(predictions) {
      this.predictions = predictions;
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

.predictions {
  overflow: scroll;
}
</style>

<style>
.CodeMirror,
.CodeMirror-scroll {
  min-height: 70%;
}
</style>
