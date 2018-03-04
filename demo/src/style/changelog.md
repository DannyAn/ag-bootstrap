1.radius有一个统一的开关进行控制，无需修改
$border-radius:               .25rem !default;
$border-radius-lg:            .3rem !default;
$border-radius-sm:            .2rem !default;
2.解决按钮圆角弧度
修改变量$border-radius和$border-radius-lg和$border-radius-sm三个圆角弧度为2px，并计算成rem单位为2/16=0.125rem
3.解决日期选取器自定义下拉框出现两个下拉背景问题
_variables.scss中注视掉背景中指定的图片
4.解决日期选取器中自定义下拉框的圆角弧度总是不随自己定义的弧度改变
原因：demo站点的控件覆盖编写了圆角弧度为永远的0.25rem=4px
解决：从demo站点的datepicker中删除样式的定义，新建自定义日期选取器scss

5.分页条样式被下面的语句覆盖掉了，该语句在bootstrap中定义
a:not([href]):not([tabindex])
解决方案：给所有的a元素添加 javascript:void(0)

6.动画组件启用必须导入如下模块
table-edit must import animation 
BrowserAnimationsModule,

7.按钮的字体太大，默认1rem=16px
方案一：_custom-btn-toggole.scss中重新定义.btn调整字体大小
自定义.btn字体大小调整为
.btn {
    @include button-size($btn-padding-y, $btn-padding-x, $font-size-base*0.75, $btn-line-height, $btn-border-radius);
}
方案二：调整整体的界面主题字体base为0.75 rem=12px,保证所有的组件都是基于这个大小进行配置
可以解决大部分组件内部，尤其是表格内的字体大小太大为16px的问题
目前bootstrap官网是16px，14px作为互联网的字体大小基线
0.875rem=12px
8. 开关控件采用scss默认不支持fade，less语法翻译的结果不同
  _variables.scss:  background-color: fade(#000, 25%); 浏览器：background-color: fade(#000, 25%);
  _variables.less:  background-color: fade(#000, 25%); 浏览器：background-color: rgba(0,0,0,.25);

修正为直接改为rgba方法
检查_switch.scss中的fade（）函数进行修改魏rgba方法。

9.去掉烦人的focus边框
原：$input-btn-focus-width:       .2rem !default;
调整：$input-btn-focus-width:       .02rem !default;
10.文字小方块的来源，默认启用了bootstrap的样式，ant的样式
bootstrap:
ol ol ul, ol ul ul, ul ol ul, ul ul ul {
    list-style-type: square;
}
ant:
ol, ul {
    list-style: none;
}

11. ant与bootstrap圆角变量不统一
ant: $border-radius-base
bootstrap:$border-radius
修改方案：
1.查找ant所有该变量，统一成bootstrap
2.从ant基础边良重删除 $

Module build failed:
      border-radius: 0 $border-radius-base - 1px $border-radius-base - 1px 0;
                      ^
      Incompatible units: 'px' and 'rem'.
      in /Users/kongan/bootstrap/ng-bootstrap/demo/src/style/themes/_searchinput.scss (line 35, column 24)
12.背景颜色不生效
      .ant-dropdown-menu-item:hover, .ant-dropdown-menu-submenu-title:hover {
    background-color: tint(#108ee9, 90%);
}
 13.修正a链接被颜色覆盖问题
 href="javascript:void(0)"


问题：项目组要定制某个GitHub上的开源项目， 如何做到当开源项目的版本更新了，如何做到我们本地clone版本可以进行merge？

 说一下自己的办法，抛砖引玉：

fork开源项目到自己的github

clone fork以后的项目到本地

用git remote add命令将开源项目添加为远程仓库，例如命名为fork

这样就有了两个remote，一个origin（自己fork的）、一个fork（开源项目的）
自己的改动直接push到master，要合并开源项目的更新使用 git pull fork master，合并完代码再push到自己的master

