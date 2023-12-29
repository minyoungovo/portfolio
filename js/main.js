$(function () {
    const menu = $('.nav > li');
    const contents = $('#wrap > div');

    $('#q_mn .nav > li').eq(0).addClass('on');
    scrollMenu(contents);

    $('.nav> li').click(function (e) {
        e.preventDefault();

        let target = $(this);
        let index = target.index();

        let section = $('#wrap > div').eq(index);
        let tt = section.offset().top;

        $('html, body').stop().animate({ scrollTop: tt });
    });

    //메뉴에 addclass를 적용
    $(window).scroll(function(){
        scrollMenu(contents);
    });

    function scrollMenu(){
        var sct = $(window).scrollTop();
    
        contents.each(function(){
            let selector = $(this);
            let selectorTop = selector.offset().top;
            let i = selector.index();
    
            if(selectorTop <= sct){
                $('#q_mn .nav > li').removeClass('on');
                $('#q_mn .nav > li').eq(i).addClass('on');
            }
        });
    }
});