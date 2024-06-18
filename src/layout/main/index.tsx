import { useState } from 'react'
import CardHero from '../../components/Hero'
import AnimationList from '../../components/AnimationList/index'
import AnimationView from '@/components/AnimationView/index'
import MarkdownViewer from '@/components/MdViewer/index'
import { ViewModes, viewList } from '@/types/view'
import type { IView, ViewMode } from '@/types/view'
import './style.css'

function Content({ viewMode, setViewMode }: { viewMode: ViewMode, setViewMode: (mode: ViewMode) => void }) {
  const [view, setView] = useState<IView>(viewList[0])

  const onViewClick = (view: IView) => {
    setViewMode(ViewModes.View)
    setView(view)
  }
  if (viewMode === ViewModes.ViewList) {
    return (
      <div className="content__list">
        <CardHero />
        <AnimationList onViewClick={onViewClick} />
      </div>
    )
  }
  return (
    <div className="content__views">
      <MarkdownViewer label={view.label} />
      <AnimationView view={view} />
    </div>
  )
}

export default function Main({ viewMode, setViewMode }: { viewMode: ViewMode, setViewMode: (view: ViewMode) => void }) {
  return (
    <div className="main">
      <Content viewMode={viewMode} setViewMode={setViewMode} />
    </div>
  )
}
