// scrolling
$(document).ready(function(){
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 300){
            $(".scroll").fadeIn();
        }else{
            $(".scroll").fadeOut();
        }

        if(scrolling > 100){
            $(".menu-bg").addClass("menu-fix")
        }else{
            $(".menu-bg").removeClass("menu-fix")

        }
    });

    $(".scroll").click(function(){
        $("body,html").animate({
            scrollTop:"0px",
        },1500);
    });
});