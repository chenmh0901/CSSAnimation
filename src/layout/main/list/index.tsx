import { ViewType } from "@/types/type"
import Card from "./card"
import "./style.css"
function List({onViewClick}: {onViewClick: (arg: {label: string, value: ViewType}) => void}) {
  return (
    <div className="list">
      <Card title={'ClockAnimation'} content={'这是一个酷炫的闹钟展示动画'} onClick={()=>onViewClick({label:'Clock',value:ViewType.Clock})}/>
      <Card title={'ImageWallAnimation'} content={'这是一个好看的照片墙展示动画'} onClick={()=>onViewClick({label:'Image',value:ViewType.Image})}/>
      <Card title={'CardAnimation'} content={'这是一个好看的卡牌选择动画'} onClick={()=>onViewClick({label:'Card',value:ViewType.Card})}/>
      <Card title={'CheckOnAnimation'} content={'这是一个好看的完成打勾进度动画'} onClick={()=>onViewClick({label:'CheckOn',value:ViewType.CheckOn})}/>
      <Card title={'MouseFollowAnimation'} content={'这是一个好看的流水灯动画'} onClick={()=>onViewClick({label:'MouseFollow',value:ViewType.MouseFollow})}/>
      <Card title={'BubbleAnimation'} content={'这是一个好看的气泡背景动画'} onClick={()=>onViewClick({label:'Bubble',value:ViewType.Bubble})}/>
      <Card title={'TimeLineAnimation'} content={'这是一个CSSTimeLine动画'} onClick={()=>onViewClick({label:'TimeLine',value:ViewType.TimeLine})}/>
      <Card title={'WaterLightAnimation'} content={'这是一个好看的流水灯动画'} onClick={()=>onViewClick({label:'WaterLight',value:ViewType.WaterLight})}/>
    </div>
  )
}

export default List
