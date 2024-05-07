$(document).ready(function() {

    // const cousor = document.querySelector('.sample_cousor');

    // const animateCursor = (e) => {
    //     cousor.style.left = `${e.pageX}px`;
    //     cousor.style.top = `${e.pageY}px`;
        
    // }
    // window.addEventListener('mousemove', animateCursor);



    let scrollHeight = 0;

    //새로고침 시 스크롤 위치 지정
    const scrollY = parseInt(sessionStorage.getItem("scrollY"));


    // if(scrollY > 900){
    //     $('header').css('background', '#222');
    //     $('header .logo').css('color', '#fff');
    //     $('header .nav li a').css('color', '#fff');
    //     $('header .email').css('color', '#fff');
    //     $('header .nav li.on a').css('color', '#d33f3f');
    // }else{
    //     $('header .logo').css('color', '#222');
    //     $('header .nav li a').css('color', '#222');
    //     $('header .email').css('color', '#222');
    //     $('header .nav li.on a').css('color', '#d33f3f');
    //     $('header').css('background', 'none');
    // }

    if(scrollY && scrollY > 250){
        window.scrollTo(0, scrollY);
        $('#top_btn').css('visibility', 'visible');
    }

    const counters = $(".scroll_on");
    
    const exposurePercentage = 100; 
    const loop = true; 

    // 버튼 클릭 시 
    $("#top_btn").click(function() { 
        $('html, body').animate({ scrollTop : 0 }, 400); 
    }); 

    $("header .logo a").click(function() { 
        $('html, body').animate({ scrollTop : 0 }, 400); 
    }); 
    
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 250) { 
            $('#top_btn').css('visibility', 'visible');
        } else { 
            $('#top_btn').css('visibility', 'hidden');
        } 

        // if ($(this).scrollTop() > 900) { 
        //     $('header').css('background', '#222');
        //     $('header .logo').css('color', '#fff');
        //     $('header .nav li a').css('color', '#fff');
        //     $('header .email').css('color', '#fff');
        //     $('header .nav li.on a').css('color', '#d33f3f');

        // }else{
        //     $('header .logo').css('color', '#222');
        //     $('header .nav li a').css('color', '#222');
        //     $('header .email').css('color', '#222');
        //     $('header .nav li.on a').css('color', '#d33f3f');
        //     $('header').css('background', 'none');
        // }

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

    
    // 마우스 휠 이벤트 - 줌 글씨 효과 
    // const zoomElement = document.querySelector(".title_bottom");
    // let zoom = 1;
    // const ZOOM_SPEED = 0.1;

    // document.addEventListener("wheel", function (e) {
    // if (e.deltaY > 0) {
    //     zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
    // } else {
    //     zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
    // }
    // });


    // 패럴렉스
    // let ypos; // 스크롤 위치를 추적하기 위한 변수입니다.

    // // 패럴랙스 효과를 관리하는 함수입니다.
    // function parallax() {
    //     ypos = $(window).scrollTop(); // 현재 window의 스크롤 위치를 가져옵니다.
    //     updatePosition('#main .container', ypos, 0.8, 'top'); // 배경에 대한 top 위치 업데이트
    //     updatePosition('#main .title', ypos, 0.2, 'margin-top'); // 빠른 속도로 움직이는 요소 위치 업데이트
    //     updatePosition('.parallax .slow', ypos, 0.6, 'margin-top'); // 느린 속도로 움직이는 요소 위치 업데이트
    // }

    // // 주어진 요소의 위치를 업데이트하는 함수입니다.
    // function updatePosition(selector, scrollPos, factor, type) {
    //     $(selector).css(type, `${scrollPos * factor}px`); // 계산된 값을 사용하여 CSS 속성값을 설정합니다.
    // }

    // // 스크롤 이벤트가 발생할 때 parallax 함수를 호출합니다.
    // $(window).on('scroll', function () {
    //     requestAnimationFrame(parallax);
    // });

    // // 초기 실행을 통해 패럴랙스 효과를 활성화합니다.
    // parallax();
});
