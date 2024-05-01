$(document).ready(function() {
    let scrollHeight = 0;

    //새로고침 시 스크롤 위치 지정
    const scrollY = parseInt(sessionStorage.getItem("scrollY"));

    if(scrollY && scrollY > 250){
        window.scrollTo(0, scrollY);
        $('#top_btn').css('visibility', 'visible');
    }

    const counters = $(".scroll_on");
    
    const exposurePercentage = 100; 
    const loop = true; 

    // 버튼 클릭시 
    $("#top_btn").click(function() { 
        $('html, body').animate({ scrollTop : 0 }, 400); 
    }); 
    
    $(window).on('scroll', function() {

        if ($(this).scrollTop() > 250) { 
            $('#top_btn').css('visibility', 'visible');
        } else { 
            $('#top_btn').css('visibility', 'hidden');
        } 


        counters.each(function() {

            //세션 스토리지에 저장하여 새로고침 시 현재 스크롤 위치 값 반환
            scrollHeight = $(document).scrollTop();
            sessionStorage.setItem("scrollY", scrollHeight);

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
