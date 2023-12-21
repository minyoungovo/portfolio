$(function () {
    var menu = $('.nav > li');
    var contents = $('#wrap > div');

    $('.nav> li').click(function (event) {
        event.preventDefault();

        var tg = $(this);
        var i = tg.index();

        var section = $('#wrap > div').eq(i);
        var tt = section.offset().top;

        $('html, body').stop().animate({ scrollTop: tt });
    });
    //메뉴에 addclass를 적용
    // $(window).scroll(function(){
    //     var sct = $(window).scrollTop();

    //     $('#wrap > div').each(function(){
    //         var tg = $(this);
    //         var i = tg.index();
    //         if(tg.offset().top <= sct){
    //             $('.nav > li').removeClass('on');
    //             $('.nav > li').eq(i).addClass('on');
    //     }
    // });
    // $(window).scroll(function(){
    // var sct = $(window).scrollTop();

    // contents.each(function(){
    //     var tg = $(this);
    //     var i = tg.index();
    //     if(tg.offset().top <= sct){
    //         menu.removeClass('on');
    //         menu.eq(i).addClass('on');
    //     }
    // });


});