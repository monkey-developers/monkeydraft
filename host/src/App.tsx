import "@blocknote/core/style.css"
import axios from "axios"
import { BlockNoteView, useBlockNote } from "@blocknote/react"
import { useMutation } from "react-query"
import { wait } from "./helpers/wait"
import { useEffect } from "react"

export const App = () => {

  useEffect(() => {
    axios.post("http://localhost:3000/createMarkdown", {
      author: 'igor',
      content: ""
    })
      .then(function (res) {
        console.log(res)
      })
      .then(function (err) {
        console.log(err)
      })
  }, [])

  const sendMarkdownData = async () => {
    return await axios.patch("http://localhost:3000/sendMarkdown")
  }
  const saveMarkdown = useMutation(['sendMarkdown'], sendMarkdownData, {
    onSuccess: () => {
      console.log("good")
    }
  })
  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      let data = JSON.stringify(editor.topLevelBlocks)
      saveMarkdown.mutate({ author: 'sim', content: data })
    }
  })
  return (
    <BlockNoteView editor={editor} />
  )
}