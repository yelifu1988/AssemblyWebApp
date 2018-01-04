/* 内容管理对象 */

var H5 = function () {
    this.id = ('h5_'+Math.random()).replace('.','_');
    this.el = $('<div class="h5" id="'+ this.id +'"></div>').hide();
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
        this.page.push(page);

        return this;
    };

    /*新增一个组件*/
    this.addComponent = function (name,cfg) {
        var cfg = cfg || {};
        cfg = $.extend({
            type: 'base'
        },cfg);

        var component;  //定义一个变量 存贮 组件元素
        var page = this.page.slice(-1)[0];//拿到最后一页

        switch (cfg.type){
            case 'base':
                component = new H5ComponentBase(name,cfg);
            break;

            default:
        }

        page.append(component);
        return this;
    };

    /*H5对象初始化组件*/
    this.loader = function () {
        this.el.fullpage({
            onLeave:function(index,nextIndex,direction){
                // $(this).find('.h5_component').trigger('onLeave') 坑！
                $('.h5').find('.h5_component').eq(index-1).trigger('onLeave')
            },
            afterLoad:function(anchorLink,index){
                // $(this).find('.h5_component').trigger('onLoad')
                $('.h5').find('.h5_component').eq(index-1).trigger('onLoad')
            }
        });
        this.page[0].find('.h5_component').trigger('onLoad');
        this.el.show();
    };


    return this
};