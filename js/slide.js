  $(function(){
      
        /*$('section').on('mousewheel',function(event,delta){
            if($(".greeting-list").hasClass("pageshow")){
                slideText(0);
            }else if($(".greeting-list").hasClass("pagehide")){
                clearInterval(textmotion);
            };
        });*/

    //End Each
    $(".web-list>li>a").click(function(){
        $(".modal").fadeIn(1000);
        $(this).siblings(".web-info").fadeIn(1000);
        return false;
    });
     $(".modal").click(function(){
        $(".modal").fadeOut(500);
        $(".web-info").fadeOut(500);
        return false;
    });//end modal
    //화살표 버튼
     $(".web-list-button>li:first").click(function(){
        $(".web-list>li.web-on").prev().addClass("web-on");
        $(".web-list>li.web-on").next().removeClass("web-on");
    });
    $(".web-list-button>li:last").click(function(){
        $(".web-list>li.web-on").next().addClass("web-on");
        $(".web-list>li.web-on").prev().removeClass("web-on");
    });
    $(".web-list-button>li:first").mouseenter(function(){
        $(this).find("img").attr("src","img/left-hover.png");
    })
     $(".web-list-button>li:first").mouseleave(function(){
        $(this).find("img").attr("src","img/left.png");
    })
    $(".web-list-button>li:last").mouseenter(function(){
        $(this).find("img").attr("src","img/right-hover.png");
    });
     $(".web-list-button>li:last").mouseleave(function(){
        $(this).find("img").attr("src","img/right.png");
    });
}); //End jquery