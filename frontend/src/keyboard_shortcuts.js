
export default function (document, callback) {
  document.onkeyup = function (e) {
    if (e.ctrlKey && e.keyCode <= 57 && e.keyCode >= 49) {
      callback(e.keyCode - 49);
    }
  };
}