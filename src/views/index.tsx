import ClockAnimation from "./Clock"
import ImageWallAnimation from "./ImageWall"
import CardAnimation from "./Card"
import MouseFollowAnimation from "./MouseFollow"
import CheckOnAnimation from "./CheckOn"
import BubbleAnimation from "./Bubble"
import { IView, ViewType} from "@/types/type"
import TimeLineAniamtion from "./TimeLine"
import WaterLightAnimation from "./WaterLight"

export default function Views({activeView}: {activeView: IView}){
  return (
    <div className="views">
      {activeView.value===ViewType.Clock && <ClockAnimation />}
      {activeView.value===ViewType.Image && <ImageWallAnimation />}
      {activeView.value===ViewType.Card && <CardAnimation />}
      {activeView.value===ViewType.MouseFollow && <MouseFollowAnimation />}
      {activeView.value===ViewType.CheckOn && <CheckOnAnimation />} 
      {activeView.value===ViewType.Bubble && <BubbleAnimation />}
      {activeView.value===ViewType.TimeLine && <TimeLineAniamtion />}
      {activeView.value===ViewType.WaterLight && <WaterLightAnimation />}
    </div>
  )
}
