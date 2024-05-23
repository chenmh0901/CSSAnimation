import CardHero from './hero'
import List from './list'
import Views from '@/layout/main/views/index'
import './style.css'
import type { IView } from '@/types/type'
import { ViewType } from '@/types/type'
import MarkdownViewer from '@/components/mdViewer'

function Content({ activeView, setActiveView }: { activeView: IView, setActiveView: (view: IView) => void }) {
  if (activeView.value === ViewType.List) {
    return (
      <div className="content__list">
        <CardHero />
        <List onViewClick={setActiveView} />
      </div>
    )
  }
  return (
    <div className="content__views">
      <MarkdownViewer label={activeView.label} />
      <Views activeView={activeView} />
    </div>
  )
}

export default function Main({ activeView, setActiveView }: { activeView: IView, setActiveView: (view: IView) => void }) {
  return (
    <div className="main">
      <Content activeView={activeView} setActiveView={setActiveView} />
    </div>
  )
}
