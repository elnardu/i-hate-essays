export default function preprocess_text(codemirror) {
    let cursor = codemirror.getDoc().getCursor()
    return {
        text: codemirror.getValue(),
        cursor: {
            ch: cursor.ch,
            line: cursor.line
        }
    }
}