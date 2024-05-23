# TimeLine笔记

1. CSS按滚动驱动动画。
2. animation-timeline：时间线动画。
3. scroll()：第一个参数指定滚动条对象。nearest最近父元素。root根元素。self自身。
4. 第二个参数指定方向，block、inline、x、y。
5. view(),根据元素位置使用动画。第一个菜参数指定方向，第二个参数指定元素动画区间。offset。
6. animation-range：entry，定义元素在哪个区间触发动画。entry：元素上边界开始进入可视区。exit：元素下边界开始离开可视区。entry-crossing：元素从进入到完全进入。exit-crossing：元素从离开到完全离开。cover：元素上边界进入可视区到下边界离开可视区。contain：元素完全在可视区间。
