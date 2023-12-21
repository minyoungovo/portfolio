$(function () {
    $(window).scroll(
        function () {
            var windowTop = $(window).scrollTop() + 300;
            $("#q_mn").stop().animate({ top: windowTop + "px" }, 500);
            //$("#q_mn").stop().animate({속성:"속성값", 속성:"속성값" },1000);	
        }
    );
});