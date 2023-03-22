import "@blocknote/core/style.css"
import { BlockNoteView, useBlockNote } from "@blocknote/react"

export const App = () => {
  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      console.log(editor)
    }
  })
  return (
    <BlockNoteView editor={editor} />
  )
}