import '../css/gridmanager-reset.less';
import ajaxPageTemplate from './ajaxPage.tpl.html';

((GridManager) => {
    if (!GridManager) {
        console.error('GridManager未发现，请确认是否已经引用。');
        return;
    }

    const defaultOption = {
        width: '100%',
        height: '100%',
        supportAjaxPage: true,    // 默认支持分页
        isIconFollowText: true,   // 默认使用表头相关按钮跟随表头文字
        skinClassName: 'element-skin', // 页样式名称
        emptyTemplate: `<div class="empty-content init-msg"><span class="warning"><svg><symbol id="icon-caution" viewBox="0 0 1024 1024"><path d="M511.998 34.977c-263.457 0-477.023 213.566-477.023 477.023 0 263.46 213.563 477.025 477.023 477.025 263.46 0 477.026-213.565 477.026-477.025 0-263.457-213.566-477.023-477.026-477.023v0zM440.557 291.888c0-39.087 31.625-70.718 70.718-70.718 39.022 0 72.195 31.629 72.195 70.718v218.861c0 39.042-33.151 70.717-72.195 70.717-39.093 0-70.718-31.675-70.718-70.717v-218.861zM513.49 802.83c-42.835 0-80.543-34.702-80.543-77.565 0-42.807 37.707-77.541 80.543-77.541 42.839 0 77.565 34.73 77.565 77.541 0 42.864-34.725 77.565-77.565 77.565z"></path></symbol>
        <use xlink:href="#icon-caution"></use></svg></span><span class="msg">暂无数据</span></div>`,
        ajaxPageTemplate: ajaxPageTemplate
    };
    GridManager.defaultOption = defaultOption;

})(window.GridManager);
