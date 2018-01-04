/* 内容管理对象 */

var H5 = function () {
    this.id = ('h5_'+Math.random()).replace('.','_');
    this.el = $('<div class="h5" id="'+ this.id +'"></div>');
    this.page = [];
    $('body').append(this.el);


    /**
     * 新增一个页
     * @param {string} name 组件的名称，会加入到ClassName中
     * @param {string} text 页内的默认文本
     * @return {H5} [description] H5对象，可以重复使用H5对象支持的方法
     */
    this.addPage = function (name,text) {
        var page = $('<div class="h5_page section"></div>');
        if (name != undefined){
            page.addClass('h5_page_'+name);
        }
        if (text != undefined){
            page.text(text);
        }
        this.el.append(page);
        this.page.push(page)
    };

    return this
};