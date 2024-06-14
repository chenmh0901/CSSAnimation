import { useState } from 'react'
import Navigator from '../components/Navigator/index'
import Main from './main'
import type { IView } from '@/types/view'
import { viewList } from '@/types/view'

function Layout() {
  const [activeView, setActiveView] = useState<IView>(viewList[0])
  return (
    <>
      <Navigator setActiveView={setActiveView} />
      <Main activeView={activeView} setActiveView={setActiveView} />
    </>
  )
}

export default Layout
