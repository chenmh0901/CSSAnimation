import CardHero from './hero'
import List from './list'
import Views from '@/views/index'
import './style.css'
import { ViewType } from '@/types/type'

function Content({ activeView, setActiveView }) {
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
      <Views activeView={activeView} />
    </div>
  )
}

export default function Main({ activeView, setActiveView }) {
  return (
    <div className="main">
      <Content activeView={activeView} setActiveView={setActiveView} />
    </div>
  )
}
