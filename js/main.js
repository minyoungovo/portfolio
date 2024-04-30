$(function () {
    const menu = $('header .nav > li');
    const contents = $('#wrap > div');
    
    $('header .nav > li').eq(0).addClass('on');

    // $('#q_mn .nav > li').eq(0).addClass('on');
    scrollMenu(contents);

    $('header .nav > li').click(function (e) {
        e.preventDefault();

        $('header .nav > li').removeClass('on');

        let target = $(this);
        let index = target.index();

        let section = $('#wrap > div').eq(index);
        let tt = section.offset().top;

        console.log(section);
        console.log(tt);

        $(this).addClass('on');
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
            let selectorTop = selector.offset().top - 2;
            let i = selector.index();
    
            if(selectorTop <= sct){
                $('header .nav > li').removeClass('on');
                $('header .nav > li').eq(i).addClass('on');
            }
        });
    }
});