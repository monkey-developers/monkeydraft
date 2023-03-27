import { Block } from "@blocknote/core"
import "@blocknote/core/style.css"
import { BlockNoteView, useBlockNote } from "@blocknote/react"
import { useState } from "react"
import { useMutation, useQuery } from "react-query"
import { PostMarkdown, GetMarkdown, PatchMarkdownContent } from "./fetchers/markdown"

export const App = () => {
  const [content, setContent] = useState('')
  const [blocks, setBlocks] = useState<Block[]>([])

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

  function handleMarkdownPatch() {
    blocks.map((item, index) => {
      console.log(item)
      patchMarkdown.mutate({ author: '311232', content: JSON.stringify(item) })
    })
  }

  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      let data = JSON.stringify(editor.topLevelBlocks)
      setContent(data)
      setBlocks(editor.topLevelBlocks)
    }
  })

  return (
    <div>
      <BlockNoteView editor={editor} />
      <button onClick={() => handleMarkdownPatch()}>Salvar</button>
    </div>
  )
}