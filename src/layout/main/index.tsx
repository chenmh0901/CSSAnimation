import CardHero from '../../components/Hero'
import AnimationList from '../../components/AnimationList'
import AnimationView from '@/components/AnimationView/index'
import MarkdownViewer from '@/components/MdViewer'
import { ViewType } from '@/types/view'
import type { IView } from '@/types/view'
import './style.css'

function Content({ activeView, setActiveView }: { activeView: IView, setActiveView: (view: IView) => void }) {
  if (activeView.value === ViewType.List) {
    return (
      <div className="content__list">
        <CardHero />
        <AnimationList onViewClick={setActiveView} />
      </div>
    )
  }
  return (
    <div className="content__views">
      <MarkdownViewer label={activeView.label} />
      <AnimationView activeView={activeView} />
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
