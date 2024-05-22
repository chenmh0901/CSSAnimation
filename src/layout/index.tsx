import { useState } from 'react'
import { IView, viewList } from '@/types/type'
import Header from './header/index'
import Main from './main'
function Layout() {
  const [activeView, setActiveView] = useState<IView>(viewList[0])
  return (
    <>
      <Header setActiveView={setActiveView}/>
      <Main activeView={activeView} setActiveView={setActiveView}/>
    </>
  )
}

export default Layout
