import { useState } from 'react'
import Header from './header/index'
import Main from './main'
import type { IView } from '@/types/type'
import { viewList } from '@/types/type'

function Layout() {
  const [activeView, setActiveView] = useState<IView>(viewList[0])
  return (
    <>
      <Header setActiveView={setActiveView} />
      <Main activeView={activeView} setActiveView={setActiveView} />
    </>
  )
}

export default Layout
