import { VIEW_COMPONENTS } from './type'
import type { IView } from '@/types/view'
import { ViewType } from '@/types/view'
import './style.css'

export default function Views({ activeView }: { activeView: IView }) {
  const ActiveComponent = VIEW_COMPONENTS[activeView.value]
  return (
    <div className="views">
      <ActiveComponent />
    </div>
  )
}
