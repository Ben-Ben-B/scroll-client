//var eventTool={
//    //获取兼容对象
//    getEvent:function(e){
//     return e||window.event;
//    },
//    //兼容废获取client
//    getClientX:function(e){
//        return this.getEvent(e).clientX;
//    },
//    getClientY:function(e){
//        return this.getEvent(e).clientY;
//    },
//    //兼容的获取page,ie8不兼容page
//    getPageX:function(e){
//        return this.getClientX(e)+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)
//    },
//    getPageY:function(e){
//        return this.getClientY(e)+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)
//    }
//};
var eventTool={
    getEvent:function(e){
        return e||window.event;
    },
    getClientX:function(e){
        return this.getEvent(e).clientX;
    },
    getClientY:function(e){
        return this.getEvent(e).clientY;
    },
    getPageX:function(e){
        return this.getClientX(e)+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)},
    getPageY:function(e){
         return this.getClientY(e)+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)
        }
};
//var eventTool={
//    getEvent:function(e){
//        return e||window.event;
//    },
//    getClientX:function(e){
//        return this.getEvent(e).clientX;
//    },
//    getClientY:function(e){
//        return this.getEvent(e).clientY;
//    },
//    getPageX:function(e){
//        return this.getClientX(e)+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)
//    },
//    getPageY:function(e){
//        return this.getClientY(e)+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)
//
//    }
//}