import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEffect, useState } from 'react'
import { useHttp } from '@/utils/http'
import type { IHttpOptions } from '@/utils/http'
import type { IMarkdownResponse } from '@/types/md'
import './style.css'
import 'github-markdown-css/github-markdown-light.css'

export default function MarkdownViewer({ label }: { label: string }) {
  const [post, setPost] = useState('')
  const fetchMd = async () => {
    try {
      const options: IHttpOptions<any> = {
        path: `notes/${label}`,
        method: 'GET',
      }
      const { data } = await useHttp<IMarkdownResponse>(options)

      setPost(String(data))
    }
    catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    fetchMd()
  }, [])
  return (
    <div className="card-hero">
      <div className="markdown-body">
        <ReactMarkdown children={post} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  )
}
