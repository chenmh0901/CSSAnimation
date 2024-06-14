import type { IView } from '@/types/view'
import { ViewType } from '@/types/view'
import AnimationCard from '@/components/AnimationCard'
import './style.css'

function List({ onViewClick }: { onViewClick: (view: IView) => void }) {
  return (
    <div className="list">
      <AnimationCard title="ClockAnimation" content="这是一个酷炫的闹钟展示动画" onClick={() => onViewClick({ label: 'Clock', value: ViewType.Clock })} />
      <AnimationCard title="ImageWallAnimation" content="这是一个好看的照片墙展示动画" onClick={() => onViewClick({ label: 'Image', value: ViewType.Image })} />
      <AnimationCard title="AnimationCardAnimation" content="这是一个好看的卡牌选择动画" onClick={() => onViewClick({ label: 'Card', value: ViewType.Card })} />
      <AnimationCard title="CheckOnAnimation" content="这是一个好看的完成打勾进度动画" onClick={() => onViewClick({ label: 'CheckOn', value: ViewType.CheckOn })} />
      <AnimationCard title="MouseFollowAnimation" content="这是一个好看的流水灯动画" onClick={() => onViewClick({ label: 'MouseFollow', value: ViewType.MouseFollow })} />
      <AnimationCard title="BubbleAnimation" content="这是一个好看的气泡背景动画" onClick={() => onViewClick({ label: 'Bubble', value: ViewType.Bubble })} />
      <AnimationCard title="TimeLineAnimation" content="这是一个CSSTimeLine动画" onClick={() => onViewClick({ label: 'TimeLine', value: ViewType.TimeLine })} />
      <AnimationCard title="WaterLightAnimation" content="这是一个好看的流水灯动画" onClick={() => onViewClick({ label: 'WaterLight', value: ViewType.WaterLight })} />
      <AnimationCard title="BugWordAnimation" content="这是一个好看的文字故障动画" onClick={() => onViewClick({ label: 'BugWord', value: ViewType.BugWord })} />
    </div>
  )
}

export default List
