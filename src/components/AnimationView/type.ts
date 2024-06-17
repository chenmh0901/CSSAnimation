import type React from 'react'
import WaterLightAnimation from '@/views/WaterLight'
import TimeLineAniamtion from '@/views/TimeLine'
import BubbleAnimation from '@/views/Bubble'
import CheckOnAnimation from '@/views/CheckOn'
import MouseFollowAnimation from '@/views/MouseFollow'
import CardAnimation from '@/views/Card'
import ImageWallAnimation from '@/views/ImageWall'
import ClockAnimation from '@/views/Clock'
import BugWordAnimation from '@/views/BugWord'
import Calendar from '@/views/Calendar'
import { ViewType } from '@/types/view'

// 创建映射对象
export const VIEW_COMPONENTS: Record<ViewType, React.ElementType> = {
  [ViewType.Clock]: ClockAnimation,
  [ViewType.Image]: ImageWallAnimation,
  [ViewType.Card]: CardAnimation,
  [ViewType.MouseFollow]: MouseFollowAnimation,
  [ViewType.CheckOn]: CheckOnAnimation,
  [ViewType.Bubble]: BubbleAnimation,
  [ViewType.TimeLine]: TimeLineAniamtion,
  [ViewType.WaterLight]: WaterLightAnimation,
  [ViewType.BugWord]: BugWordAnimation,
  [ViewType.Calendar]: Calendar,
}
