import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "@ckeditor/ckeditor5-build-classic";
// import { CodeBlock } from "@ckeditor/ckeditor5-code-block";

class RemoveSpellCheck {
    constructor(editor) {
        this.editor = editor;
    }

    init() {
        this.editor.editing.view.change((writer) => {
            writer.setAttribute(
                "spellcheck",
                "false",
                this.editor.editing.view.document.getRoot()
            );
        });
    }
}

Editor.builtinPlugins.push(RemoveSpellCheck);

const editorConfiguration = {
    // plugins: [CodeBlock],
    toolbar: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "|",
        "outdent",
        "indent",
        "|",
        "blockQuote",
        "insertTable",
        // "codeBlock",
        "mediaEmbed",
        "undo",
        "redo",
    ],
};

export default function CKEditorCustom({ setData, value, data }) {
    return (
        <CKEditor
            editor={Editor}
            config={editorConfiguration}
            data={data ?? ""}
            onChange={(event, editor) => {
                const data = editor.getData();
                setData(value, data);
            }}
        />
    );
}
