$(document).ready(function() {
    const counters = $(".scroll_on");
    
    const exposurePercentage = 100; 
    const loop = true; 

    
    $(window).on('scroll', function() {
        counters.each(function() {
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
