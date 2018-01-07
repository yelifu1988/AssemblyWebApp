//散点图组件
var H5ComponentPoint = function (name,cfg) {
    var component = new H5ComponentBase(name,cfg);

    var base = cfg.data[0][1];  // 以第一个数据的比例为大小的 100%

    //输出没一个Point
    $.each(cfg.data,function (idx,item) {

       var point = $('<div class="point point_'+idx+'"></div>');
        //文本信息
       var name = $('<div class="name">'+ item[0] +'</div>');
        var rate = $('<div class="per">'+ (item[1]*100) +'%</div>');
        name.append(rate);
        point.append(name);
        //大小
       var per = (item[1]/base*100)+'%';
        point.width(per).height(per);
        //颜色
        if (item[2]){
            point.css('background-color',item[2]);
        }
        //位置
        if(item[3] !==undefined&&item[4] !==undefined){//如果是0座if判断是不正确的
            point.css({
                'left':item[3],
                'top':item[4]
            })
        }


        component.append(point);

    });

    return component

};