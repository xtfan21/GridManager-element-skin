# GridManager-element-skin

GridManager适配组件库样式
[![npm version](https://img.shields.io/npm/v/gridmanager-element-skin.svg?style=flat)](https://www.npmjs.com/package/gridmanager-element-skin)
[![install size](https://img.shields.io/github/languages/code-size/xtfan/gridManager-element-skin.svg?style=flat)](https://packagephobia.now.sh/result?p=gridmanager-element-skin)
[![npm downloads](https://img.shields.io/npm/dt/gridmanager-element-skin.svg?style=flat-square)](https://npm-stat.com/charts.html?package=gridmanager-element-skin)

## 修改原始配置项

param|description|oldValue|newValue|
:----:|:----:|:----:|:----:|
dataKey | 指定返回数据列表的key键值 | data | list |
currentPageKey | 请求参数中当前页key键值 | cPage | pageNum |
pageSizeKey | 请求参数中每页显示条数key健值 | pSize | pageSize |
supportAutoOrder | 是否支持自动序号 | true | false |
supportCheckbox | 配置是否支持选择与反选 | true | false |
supportAjaxPage | 指定列表是否支持分页 | false | true |
supportAdjust | 用于配置是否支持宽度调整功能 | false | true |
disableLine | 配置是否禁用单元格分割线 | false | true |
supportMenu | 配置是否支持右键菜单功能，禁用后右键功能将失效 | true | false |
isIconFollowText | 设置表头的icon图标是否跟随文本 | false | true |
loadingTemplate | 数据加载时loading样式模版 | - | - |
skinClassName | 皮肤样式所使用的className | - | ccms-skin |
configInfo | 配置列自定义提示信息 | 配置列的显示状态 | 自定义字段可在列表拖拽调整排序 |
emptyTemplate | 数据为空时自定义html模版 | - | - |
ajaxPageTemplate | 页脚自定义html模版 | - | - |

## 安装
```node
npm install gridmanager-element-skin
```
