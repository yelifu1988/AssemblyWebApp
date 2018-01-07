/*20180104 yy*/
// 用于开发测试 H5ComponentBase 对象（基本的图文组件

var H5ComponentBase = function (name,cfg) {//参数 name 为calss后缀 cfg为参数
    var cfg = cfg || {};// 如果有参数cfg则用cfg 如果没有就用空对象 相当于if else
    //设置随机唯一id
    var id = ('h5_c'+Math.random()).replace('.','_');//把小数点用 _ 代替
    //把当前组件类型添加到样式中进行标记
    var cls = 'h5_component_'+cfg.type;
    //设置组件结构
    var component = $('<div class="h5_component '+ cls +' h5_component_name_'+name+' " id=" '+id+' "></div>');

    //1、只要“&&”前面是false，无论“&&”后面是true还是false，结果都将返“&&”前面的值;
    //2、只要“&&”前面是true，无论“&&”后面是true还是false，结果都将返“&&”后面的值;
    // && 如果存在就执行后面的

    cfg.text && component.text(cfg.text);
    cfg.width && component.width(cfg.width/2);
    cfg.height && component.height(cfg.height/2);

    cfg.css && component.css(cfg.css);
    cfg.bg && component.css('backgroundImage','url('+cfg.bg+')');

    //center居中
    if(cfg.center){
        component.css({
            marginLeft : ( cfg.width/4 * -1 ) + 'px',
            left:'50%',
        });
        //更多自定义参数
    }
    component.on('onLoad',function(){
        component.addClass(cls+'_load').removeClass(cls+'_leave');
        cfg.animateIn && component.animate(cfg.animateIn,1000);
        return false;
    });
    component.on('onLeave',function(){
        component.addClass(cls+'_leave').removeClass(cls+'_load');
        cfg.animateOut && component.animate(cfg.animateOut,1000);
        return false;
    });

    return component;


};