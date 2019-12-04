import 'gridmanager/css/gm.css';
import 'gridmanager';
import '../js/index.js';

// 博文类型
const TYPE_MAP = {
    '1': 'HTML/CSS',
    '2': 'nodeJS',
    '3': 'javaScript',
    '4': '前端鸡汤',
    '5': 'PM Coffee',
    '6': '前端框架',
    '7': '前端相关'
};
const gridManagerName = 'gridManager-element-skin';

// 删除操作
window.delectRowData = (title) => {
    alert(`当前正在删除[${title}]`);
};
const arg = {
    gridManagerName: gridManagerName,
    width: '100%',
    height: '100%',
    dataKey: 'data',
    totalsKey: 'totals',
    disableCache: false,  // 用户记忆开启
    ajax_data: function () {
        return 'http://www.lovejavascript.com/blogManager/getBlogList';
    },
    ajax_type: 'POST',
    columnData: [
        {
            key: 'pic',
            width: '110px',
            align: 'center',
            text: '缩略图',
            // 使用函数返回 dom node
            template: function(pic, row) {
                var picNode = document.createElement('a');
                picNode.setAttribute('href', `https://www.lovejavascript.com/#!zone/blog/content.html?id=${row.id}`);
                picNode.setAttribute('title', row.title);
                picNode.setAttribute('target', '_blank');
                picNode.title = `点击阅读[${row.title}]`;
                picNode.style.display = 'block';
                picNode.style.height = '58.5px';

                var imgNode = document.createElement('img');
                imgNode.style.width = '90px';
                imgNode.style.margin = '0 auto';
                imgNode.alt = row.title;
                imgNode.src = `https://www.lovejavascript.com/${pic}`;

                picNode.appendChild(imgNode);
                return picNode;
            }
        },{
            key: 'title',
            align: 'center',
            text: '标题',
            sorting: '',
            template: function(title, row) {
                var titleNode = document.createElement('a');
                titleNode.setAttribute('href', `https://www.lovejavascript.com/#!zone/blog/content.html?id=${row.id}`);
                titleNode.setAttribute('title', title);
                titleNode.setAttribute('target', '_blank');
                titleNode.innerText = title;
                titleNode.title = `点击阅读[${row.title}]`;
                titleNode.classList.add('plugin-action');
                return titleNode;
            }
        }, {
            key: 'type',
            remind: 'the type',
            text: '博文分类',
            align: 'center',
            width: '150px',
            sorting: '',
            // 表头筛选条件, 该值由用户操作后会将选中的值以{key: value}的形式覆盖至query参数内。非必设项
            filter: {
                // 筛选条件列表, 数组对象。格式: [{value: '1', text: 'HTML/CSS'}],在使用filter时该参数为必设项。
                option: [
                    {value: '1', text: 'HTML/CSS'},
                    {value: '2', text: 'nodeJS'},
                    {value: '3', text: 'javaScript'},
                    {value: '4', text: '前端鸡汤'},
                    {value: '5', text: 'PM Coffee'},
                    {value: '6', text: '前端框架'},
                    {value: '7', text: '前端相关'}
                ],
                // 筛选选中项，字符串, 未存在选中项时设置为''。 在此设置的选中的过滤条件将会覆盖query
                selected: '3',
                // 否为多选, 布尔值, 默认为false。非必设项
                isMultiple: true
            },
            template: function(type, row){
                return TYPE_MAP[type];
            }
        }, {
            key: 'info',
            width: '100px',
            text: '简介'
        }, {
            key: 'username',
            align: 'center',
            width: '100px',
            text: '作者',
            template: username => {
                return `<a class="plugin-action" href="https://github.com/baukh789" target="_blank" title="去看看${username}的github">${username}</a>`;
            }
        }, {
            key: 'createDate',
            width: '130px',
            text: '创建时间',
            sorting: 'DESC',
            // 使用函数返回 htmlString
            template: (createDate, row) => {
                return new Date(createDate).toLocaleDateString();
            }
        }, {
            key: 'lastDate',
            width: '130px',
            text: '最后修改时间',
            sorting: '',
            // 使用函数返回 htmlString
            template: function(lastDate, row){
                return new Date(lastDate).toLocaleDateString();
            }
        }, {
            key: 'action',
            width: '100px',
            align: 'center',
            disableCustomize: true,
            text: '<span>操作</span>',
            // 直接返回 htmlString
            template: (action, row) => {
                return `<span class="plugin-action" title="${row.title}" onclick="delectRowData(this.title)">删除</span>`;
            }
        }
    ]
};
const initGM = () => {
    const table = document.querySelector('table');
    new window.GridManager(table, arg, (query) => {
        console.log('初始化完成，当前query参数:', query);
    });
};

initGM();

// 初始化实例
const gridInit = document.querySelector('.grid-init');
gridInit.onclick = function() {
    initGM();
};

// 获取表格版本信息
const gridVersion = document.querySelector('.grid-version');
gridVersion.onclick = function() {
    console.log(window.GridManager.version);
};

// 清除数据
const clearData = document.querySelector('.grid-cleardata');
clearData.onclick = function() {
    console.log(window.GridManager.cleanData(gridManagerName));
};

// 刷新数据
const refreshData = document.querySelector('.grid-refresh');
refreshData.onclick = function() {
    console.log(window.GridManager.refreshGrid(gridManagerName));
};

// 获取表格所有信息
const gridInfo = document.querySelector('.grid-info');
gridInfo.onclick = function() {
    console.log(window.GridManager.get(gridManagerName))
};

// 获取表格记忆信息
const gridMemoryInfo = document.querySelector('.grid-memory-info');
gridMemoryInfo.onclick = function() {
    console.log(window.GridManager.getLocalStorage(gridManagerName));
};

// 清除记忆
const clearMemory = document.querySelector('.grid-clear-memory');
clearMemory.onclick = function() {
    console.log(window.GridManager.clear(gridManagerName));
};

// 获取选中数据
const checkedData = document.querySelector('.grid-checked-data');
checkedData.onclick = function() {
    console.log(window.GridManager.getCheckedData(gridManagerName));
};

// 导出数据
const exportData = document.querySelector('.grid-export');
exportData.onclick = function() {
    console.log(window.GridManager.exportGridToXls(gridManagerName, 'export', true))
};

// 销毁实例
const destoryData = document.querySelector('.grid-destroy');
destoryData.onclick = function () {
    console.log(window.GridManager.destroy(gridManagerName));
};

