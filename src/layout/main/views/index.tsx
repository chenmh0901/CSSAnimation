import WaterLightAnimation from '@/views/WaterLight'
import TimeLineAniamtion from '@/views/TimeLine'
import BubbleAnimation from '@/views/Bubble'
import CheckOnAnimation from '@/views/CheckOn'
import MouseFollowAnimation from '@/views/MouseFollow'
import CardAnimation from '@/views/Card'
import ImageWallAnimation from '@/views/ImageWall'
import ClockAnimation from '@/views/Clock'
import BugWordAnimation from '@/views/BugWord'
import type { IView } from '@/types/type'
import { ViewType } from '@/types/type'
import './style.css'

export default function Views({ activeView }: { activeView: IView }) {
  return (
    <div className="views">
      {activeView.value === ViewType.Clock && <ClockAnimation />}
      {activeView.value === ViewType.Image && <ImageWallAnimation />}
      {activeView.value === ViewType.Card && <CardAnimation />}
      {activeView.value === ViewType.MouseFollow && <MouseFollowAnimation />}
      {activeView.value === ViewType.CheckOn && <CheckOnAnimation />}
      {activeView.value === ViewType.Bubble && <BubbleAnimation />}
      {activeView.value === ViewType.TimeLine && <TimeLineAniamtion />}
      {activeView.value === ViewType.WaterLight && <WaterLightAnimation />}
      {activeView.value === ViewType.BugWord && <BugWordAnimation />}
    </div>
  )
}
