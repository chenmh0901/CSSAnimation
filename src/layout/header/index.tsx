import { IView, ViewType } from '@/types/type'

function header({setActiveView}: {setActiveView: (view:IView) => void}) {
  return (
    <div className="navbar ">
      <div className="navbar-start" />
      <div className="navbar-center">
        <a className="btn btn-ghost text-2xl" onClick={()=>setActiveView({label: 'List', value: ViewType.List})}>CSSAnimation Gallery</a>
      </div>
      <div className="navbar-end" >
      </div>
    </div>
  )
}

export default header
