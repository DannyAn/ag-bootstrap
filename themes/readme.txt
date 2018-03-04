1.你如果只是需要bootstrap的变量，函数或是mixin这一类的话，就可以直接引入_variables.scss和_mixins.scss
2.scss文件分为两种，一种是以下划线开头的如 _variables.scss ，一种是没有下划线的如 bootstrap.scss ，
这两个的区别是前者表示被导入的文件，默认不会编译成对应的css文件，而后者会编译对应的css文件。
3.bootstrap-reboot.scss为重置样式，bootstrap-grid.scss为网格样式，这两个可以看作赠送的单独样式
4.剔除了开关直接支持Flex布局
bootstrap和bootstrap-flex的区别是前者使用传统的布局方式，后者用的是的是flex方式，所以可以根据自己的实际情况选择使用。
从上面图上可以看到 bootstrap-flex.scss 在导入 bootstrap.scss 之前，重置了 $enable-flex: true，最新release版本直接采用flex布局，
不再支持传统布局
5.mixin是一种设计模式，Mixin是有部分或者全部实现的接口，其主要作用是代码复用
Mixin defining all dictionary methods for classes that already have a minimum dictionary interface including getitem,
setitem, delitem,and keys.
6.rem于px单位换算
1rem等于多少px呢？
1rem等于html根元素设定的font-size的px值，假如我们在css里面设定下面的css。
html{font-size:14px}
如果css里面没有设定html的font-size，则默认浏览器以1rem=16px来换算。

移动端用rem来进行浏览器自适应
http://caibaojian.com/flexible-js.html rem自适应布局-移动端自适应必备:flexible.js
在没有设置html的font-size值时，rem就相对浏览器的font-size值，即16px。

   使用rem有什么好处呢？rem既然是一个相对值，那么我们就可以改变html的font-size值来动态改变页面内容的字体大小，宽高度，间距等等，这样就有了一个自由缩放的效果，在移动端就可以适配不同手机屏幕，所以在移动端就使用rem作为单位。
   另外：
    涉及到rem与px的换算，就想到与rem相似的em，em也是一个相对单位，不过它是相对于使用em单位的元素的字体大小，有一个普遍的误解，以为em是相对于父元素的字体大小，其实，这是因为继承的原因，父元素的字体大小才可以影响em的值。
阿里团队开源的一个库。使用flexible.js轻松搞定各种不同的移动端设备兼容自适应问题。

7.bootstrap在_variables.scss文件中定义了font-size-base统一采用浏览器默认的html font-size作为1rem来定义
$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`
