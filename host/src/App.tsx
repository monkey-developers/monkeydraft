import "@blocknote/core/style.css"
import { BlockNoteView, useBlockNote } from "@blocknote/react"
import { useState } from "react"
import { useMutation, useQuery } from "react-query"
import { PostMarkdown, GetMarkdown, PatchMarkdownContent } from "./fetchers/markdown"

export const App = () => {
  const [content, setContent] = useState('')

  const getMarkdown = useQuery(['getMarkdown'], GetMarkdown)
  const createMarkdown = useMutation(['createMarkdown'], PostMarkdown, {
    onSuccess: () => {
      console.log('created')
    },
    onError: () => {
      console.log('not created')
    }
  })
  const patchMarkdown = useMutation(['patchMarkdown'], PatchMarkdownContent, {
    onSuccess: () => {
      console.log('patched')
    },
    onError: () => {
      console.log('not patched')
    }
  })

  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      let data = JSON.stringify(editor.topLevelBlocks)
      setContent(data)
    }
  })

  return (
    <div>
      <BlockNoteView editor={editor} />
      <button onClick={() => createMarkdown.mutate({ author: 'igor', content: "simsim" })}>clica</button>
      <button onClick={() => patchMarkdown.mutate({ author: 'igor', content: content })}>Salvar</button>
    </div>
  )
}