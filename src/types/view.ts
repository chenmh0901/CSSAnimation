export enum ViewModes {
  ViewList = 'ViewList',
  View = 'View',
}

export type ViewMode = ViewModes.ViewList | ViewModes.View
export enum ViewType {
  Clock = 'Clock',
  Image = 'Image',
  Card = 'Card',
  CheckOn = 'CheckOn',
  Bubble = 'Bubble',
  MouseFollow = 'MouseFollow',
  TimeLine = 'TimeLine',
  WaterLight = 'WaterLight',
  BugWord = 'BugWord',
  Calendar = 'Calendar',
}

export interface IView {
  label: string
  value: ViewType
}

export const viewList: IView[] = [
  {
    label: 'Clock',
    value: ViewType.Clock,
  },
  {
    label: 'Card',
    value: ViewType.Card,
  },
  {
    label: 'CheckOn',
    value: ViewType.CheckOn,
  },
  {
    label: 'Bubble',
    value: ViewType.Bubble,
  },
  {
    label: 'MouseFollow',
    value: ViewType.MouseFollow,
  },
  {
    label: 'TimeLine',
    value: ViewType.TimeLine,
  },
  {
    label: 'WaterLight',
    value: ViewType.WaterLight,
  },
  {
    label: 'BugWord',
    value: ViewType.BugWord,
  },
  {
    label: 'Calendar',
    value: ViewType.Calendar,
  },
]
