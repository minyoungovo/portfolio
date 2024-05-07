$(function () {
    const menu = $('header .nav > li');
    const contents = $('#wrap > div');
    
    $('header .nav > li').eq(0).addClass('on');

    scrollMenu(contents);

    $('header .nav > li').click(function (e) {
        e.preventDefault();

        $('header .nav > li').removeClass('on');

        let target = $(this);
        let index = target.index();

        let section = $('#wrap > div').eq(index);
        let tt = section.offset().top;

        $(this).addClass('on');
        $('html, body').stop().animate({ scrollTop: tt });
    });

    
    $('#main .scroll_btn a').click(function (e) {
        var location = document.querySelector("#profile").offsetTop;
        window.scrollTo({top: location, behavior: 'smooth'});
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


    for(let i = 0; i < $('#project .tab-button').length; i++){
        projectTab(i); 
    }
        
    function projectTab(e){
        $('#project .tab-button').eq(e).click(function(){
            $('#project .tab-button').removeClass('active');
            $('#project .items > li').removeClass('show').fadeOut("fast");

            $('#project .tab-button').eq(e).addClass('active');
            $('#project .items > li').eq(e).fadeIn("fast").addClass('show');
        });
    }


    // 마우스 커서 이벤트
    let mouseCursor = document.querySelector(".cursor");
    // let navLinks = document.querySelectorAll("header .nav li a"); //메뉴 링크
    let navLinks = document.querySelectorAll("#project .list li"); //메뉴 링크
    let goBtn = document.querySelectorAll("#project .project-btn .btn"); //메뉴 링크
    let emailBtn = document.querySelectorAll("#end .email a"); //메뉴 링크
    let scrollBtn = document.querySelectorAll("#main .scroll_btn a"); //메뉴 링크

    window.addEventListener("mousemove", (e) => {
        mouseCursor.style.left = e.pageX + "px";
        mouseCursor.style.top = e.pageY + "px";
        mouseCursor.setAttribute("data-fromTop", mouseCursor.offsetTop - scrollY);
    });
    
    window.addEventListener("scroll", () => {
    const fromTop = mouseCursor.getAttribute("data-fromTop");
    mouseCursor.style.top = scrollY + parseInt(fromTop) + "px";
    });

    navLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("link-grow");
            mouseCursor.style.zIndex = "5";
            link.classList.add("hovered-link");
        });
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("link-grow");
            mouseCursor.style.zIndex = "100";
            link.classList.remove("hovered-link");
        });
    });

    goBtn.forEach((link) => {
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("go-cursor");
            mouseCursor.style.zIndex = "5";
        });
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("go-cursor");
            mouseCursor.style.zIndex = "100";
        });
    });

    emailBtn.forEach((link) => {
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("go-cursor");
            mouseCursor.style.zIndex = "5";
        });
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("go-cursor");
            mouseCursor.style.zIndex = "100";
        });
    });

    scrollBtn.forEach((link) => {
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("go-cursor");
            mouseCursor.style.zIndex = "5";
        });
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("go-cursor");
            mouseCursor.style.zIndex = "100";
        });
    });





});