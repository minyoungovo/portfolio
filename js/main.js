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

    //스크롤 시 애니메이션 효과
    $(window).scroll( function(){
        /* 2 */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object/2 ){
                $(this).animate({'opacity':'1'},500);
            }
        }); 
    });


});