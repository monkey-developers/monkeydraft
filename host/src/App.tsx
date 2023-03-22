import './App.css'
import "@blocknote/core/style.css"
import { BlockNoteView, useBlockNote } from "@blocknote/react"

function App() {
  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      console.log(editor)
    }
  })
  return (
    <BlockNoteView editor={editor} />
  )
}

export default App