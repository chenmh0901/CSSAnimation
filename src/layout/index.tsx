import { useState } from 'react'
import Navigator from '../components/Navigator/index'
import Main from './main'
import { ViewModes } from '@/types/view'

function Layout() {
  const [viewMode, setViewMode] = useState(ViewModes.ViewList)
  return (
    <>
      <Navigator setViewMode={setViewMode} />
      <Main viewMode={viewMode} setViewMode={setViewMode} />
    </>
  )
}

export default Layout
