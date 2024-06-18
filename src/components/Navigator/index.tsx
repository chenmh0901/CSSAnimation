import ThemeToggle from '../ThemeToggle'

function header({ setViewMode }: { setViewMode: (mode: ViewMode) => void }) {
  return (
    <div className="navbar ">
      <div className="navbar-start" />
      <div className="navbar-center">
        <a className="btn btn-ghost text-2xl" onClick={() => setViewMode('ViewList')}>CSSAnimation Gallery</a>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default header
