import { VIEW_COMPONENTS } from './type'
import type { IView } from '@/types/view'
import './style.css'

export default function Views({ view }: { view: IView }) {
  const ActiveComponent = VIEW_COMPONENTS[view.value]
  return (
    <div className="views">
      <ActiveComponent />
    </div>
  )
}
