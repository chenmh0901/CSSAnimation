import ThemeToggle from '../ThemeToggle'
import type { ViewMode } from '@/types/view'
import { ViewModes } from '@/types/view'

function header({ setViewMode }: { setViewMode: (mode: ViewMode) => void }) {
  return (
    <div className="navbar ">
      <div className="navbar-start" />
      <div className="navbar-center">
        <a className="btn btn-ghost text-2xl" onClick={() => setViewMode(ViewModes.ViewList)}>CSSAnimation Gallery</a>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default header
