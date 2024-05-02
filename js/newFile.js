$(document).ready(function () {

    //스크롤이 움직일때마다 값을 sessionStorage에 추가
    let scrollHeight = 0;
    addEventListener('scroll', (event) => {
        scrollHeight = $(document).scrollTop();
        sessionStorage.setItem("scrollY", scrollHeight);
    });

    //스크롤 위치 지정
    $(document).ready(function () {
        const scrollY = parseInt(sessionStorage.getItem("scrollY"));
        if (scrollY && scrollY > 0) {
            window.scrollTo(0, scrollY);
        }
    });

    const counters = $(".scroll_on");

    const exposurePercentage = 100;
    const loop = true;


    // 버튼 클릭시 
    $("#top_btn").click(function () {
        $('html, body').animate({
            scrollTop: 0 // 0 까지 animation 이동합니다. 
        }, 400); // 속도 400 return false; 
    });

    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 250) { //250 넘으면 버튼이 보여짐니다.
            $('#top_btn').css('opacity:1');
            $('#top_btn').fadeIn();
            // $('#top_btn').css('left', $('#sidebar').offset().left); // #sidebar left:0 죄표 
        } else {
            $('#top_btn').fadeOut();
        }


        counters.each(function () {
            const $el = $(this);

            const rect = $el[0].getBoundingClientRect();
            const winHeight = window.innerHeight;
            const contentHeight = rect.bottom - rect.top;

            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                $el.addClass('active');
            }
            if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                $el.removeClass('active');
            }
        });
    }).scroll();

});
