import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css/github-markdown-light.css'
import './style.css'

export default function MarkdownViewer() {
  const [post, setPost] = useState('')

  useEffect(() => {
    fetch('/src/markdown/Clock.md')
      .then(res => res.text())
      .then(text => setPost(text))
  }, [])
  return (
    <div className="markdown-body">
      <ReactMarkdown children={post} remarkPlugins={[remarkGfm]} />
    </div>
  )
}
