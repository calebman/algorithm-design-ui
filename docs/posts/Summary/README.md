# 组件概览

## Button 按钮

#### [TooltipButton](/posts/Button/TooltipButton/) 带有提示的按钮

扩展了一个Tooltip的title配置，其余的配置继承自[a-button](https://vue.ant.design/components/button-cn/)

#### [TooltipButtonGroup](/posts/Button/TooltipButtonGroup/) 带有提示的按钮组

TooltipButton的集合，按钮中间会用[a-divider](https://vue.ant.design/components/divider-cn/)隔开

## Form 表单

#### [FormList](/posts/Form/FormList/) 填写型表单

基于[a-form](https://vue.ant.design/components/form-cn/)封装快速构建表单组件

#### [FormFilter](/posts/Form/FormFilter/) 筛选型表单

基于[a-form](https://vue.ant.design/components/form-cn/)封装快速构建筛选项组件

## Modal 模态框

#### [FormModal](/posts/Modal/FormModal/) 基于FormList的表单模态框

基于[a-modal](https://vue.ant.design/components/modal-cn/)与FormList构建的模态框表单组件

## Picker 选择器

#### [IconPicker](/posts/Picker/IconPicker/) 图标选择器

[a-icon](https://vue.ant.design/components/icon-cn/)图标选择器

## Table 表格

#### [FormatTable](/posts/Table/FormatTable/) 带有列基础格式化功能(formatDate/formatActions...)的表格

基于[a-table](https://vue.ant.design/components/table-cn/)扩展有基础格式化列的表格组件

#### [FormTable](/posts/Table/FormTable/) 集成了FormModal与FormFilter功能的表格

以FormatTable、FormModal、FormFilter为基础构建的带有增删改查表格组件

#### [FuncTable](/posts/Table/FuncTable/) 约定大于配置，集成了后端增删改查功能的表格

基于FormTable集成了与服务端的增删改查逻辑表格组件

## Tree 树结构

#### [OrgTree](/posts/Tree/OrgTree/) 组织机构树

独立无依赖组件，实现了组织机构树状图效果

## Other 其他组件

#### [CountDown](/posts/Other/CountDown/) 倒计时

独立无依赖组件，倒计时结束后将抛出事件用于激活某个业务

#### [CountTo](/posts/Other/CountTo/) 渐变数

独立无依赖组件，实现了数字渐变的效果