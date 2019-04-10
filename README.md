# GridManager-element-skin

GridManager-element-skin适配element-ui表格组件库样式
[![npm version](https://img.shields.io/npm/v/gridmanager-element-skin.svg?style=flat)](https://www.npmjs.com/package/gridmanager-element-skin)
[![npm downloads](https://img.shields.io/npm/dt/gridmanager-element-skin.svg?style=flat-square)](https://npm-stat.com/charts.html?package=gridmanager-element-skin)

## 修改原始配置项

param|description|oldValue|newValue|
:----:|:----:|:----:|:----:|
supportAjaxPage | 指定列表是否支持分页 | false | true |
isIconFollowText | 设置表头的icon图标是否跟随文本 | false | true |
loadingTemplate | 数据加载时loading样式模版 | - | - |
skinClassName | 皮肤样式所使用的className | - | element-skin |
emptyTemplate | 数据为空时自定义html模版 | - | - |
ajaxPageTemplate | 页脚自定义html模版 | - | - |


## 安装
```node
npm install gridmanager-element-skin
```

## 使用
```
import 'gridmanager-element-skin'
```

## 配置后效果预览

- 存在数据时：

	- 原始配置效果：
	![old.png](https://s2.ax1x.com/2019/04/09/AINlin.png)

	- 本项目配置效果：
	![new.png](https://s2.ax1x.com/2019/04/09/AIdTQx.png)

- 无数据时:

    - 原始配置效果：
    ![oldEmpty.png](https://s2.ax1x.com/2019/04/09/AINUZ4.png)

    - 本项目配置效果:
    ![newEmpty.png](https://s2.ax1x.com/2019/04/09/AIdvYd.png)

- 加载中loading:

    - 原始配置效果:
    ![oldLoading.png](https://s2.ax1x.com/2019/04/09/AINWod.png)

    - 本项目配置效果:
    ![newLoading.png](https://s2.ax1x.com/2019/04/09/AIwCOf.png)
    


## 反馈
> 如有疑问，可提issue(https://github.com/xtfan21/GridManager-element-skin/issues)



