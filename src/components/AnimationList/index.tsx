import type { IView } from '@/types/view'
import { ViewType } from '@/types/view'
import AnimationCard from '@/components/AnimationCard'
import './style.css'

const animationCards = [
  { title: 'ClockAnimation', content: '这是一个酷炫的闹钟展示动画', view: { label: 'Clock', value: ViewType.Clock } },
  { title: 'Calendar', content: '这是一个自己设计的日期选择器', view: { label: 'Calendar', value: ViewType.Calendar } },
  { title: 'ImageWallAnimation', content: '这是一个好看的照片墙展示动画', view: { label: 'Image', value: ViewType.Image } },
  { title: 'CardAnimation', content: '这是一个好看的卡牌选择动画', view: { label: 'Card', value: ViewType.Card } },
  { title: 'CheckOnAnimation', content: '这是一个好看的完成打勾进度动画', view: { label: 'CheckOn', value: ViewType.CheckOn } },
  { title: 'MouseFollowAnimation', content: '这是一个好看的流水灯动画', view: { label: 'MouseFollow', value: ViewType.MouseFollow } },
  { title: 'BubbleAnimation', content: '这是一个好看的气泡背景动画', view: { label: 'Bubble', value: ViewType.Bubble } },
  { title: 'TimeLineAnimation', content: '这是一个CSSTimeLine动画', view: { label: 'TimeLine', value: ViewType.TimeLine } },
  { title: 'WaterLightAnimation', content: '这是一个好看的流水灯动画', view: { label: 'WaterLight', value: ViewType.WaterLight } },
  { title: 'BugWordAnimation', content: '这是一个好看的文字故障动画', view: { label: 'BugWord', value: ViewType.BugWord } },
]

function List({ onViewClick }: { onViewClick: (view: IView) => void }) {
  return (
    <div className="list">
      {animationCards.map(({ title, content, view }) => (
        <AnimationCard
          key={title}
          title={title}
          content={content}
          onClick={() => onViewClick(view)}
        />
      ))}
    </div>
  )
}

export default List
