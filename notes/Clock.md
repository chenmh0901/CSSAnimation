# Clock 笔记

1. ~选择器，范型兄弟选择器，选择同一父元素下的所有兄弟元素。.active.dot ~ .dot选择.active.dot元素后面的所有.dot元素。
2. :nth-child()选择器，选择父元素下的第n个子元素。.dot:nth-child(5n+5)选择父元素下的每五个元素一组的第五个元素第5个、第10个等等。
3. before中添加position: absolute;，使得伪元素相对于最近的父元素进行定位并脱离文档流，可以通过top、left、right、bottom属性设置位置。
4. box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);设置阴影，第一个参数为水平偏移量，第二个参数为垂直偏移量，第三个参数为模糊半径，第四个参数为阴影颜色。inset创建内阴影。
5. font-weight: 100;设置字体粗细，100为最细，900为最粗。font-size: 2em;设置字体大小，em为相对单位，相对于父元素字体大小。
