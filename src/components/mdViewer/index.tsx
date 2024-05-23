import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css/github-markdown-light.css'
import './style.css'

export default function MarkdownViewer({ label }: { label: string }) {
  const [post, setPost] = useState('')

  useEffect(() => {
    const path = `/notes/${label}.md`
    fetch(path)
      .then(res => res.text())
      .then(text => setPost(text))
  }, [])
  return (
    <div className="card-hero">
      <div className="markdown-body">
        <ReactMarkdown children={post} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  )
}
