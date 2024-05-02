// const $cursor = $('.cursor');
// let isMouseOverLink = false; // .link 요소 위에 마우스가 있는지 추적
// let isMouseDown = false; // 마우스 버튼이 눌려 있는지 추적

// // 커서 상태 업데이트 - $link 위에 있거나 마우스 버튼이 눌려있으면 확대
// function updateCursor() {
//     if (isMouseOverLink || isMouseDown) {
//         $cursor.addClass('cursor_expand');
//     } else {
//         $cursor.removeClass('cursor_expand');
//     }
// }

// // 마우스 이동에 따라 커서 위치 업데이트
// $(document).mousemove(function(e) {
//     $cursor.css({
//         'left': e.pageX - $cursor.width() / 2 + 'px',
//         'top': e.pageY - $cursor.height() / 2 + 'px'
//     });
//     updateCursor(); // 마우스 이동 시 커서 상태 업데이트
// });
// // 마우스 버튼 누름/뗌에 따라 isMouseDown 업데이트
// $(document).mousedown(function() {
//     isMouseDown = true;
//     updateCursor();
// }).mouseup(function() {
//     isMouseDown = false;
//     updateCursor();
// });


// cursor 클래스를 가진 요소를 선택합니다.
// const $cursor = $('.cursor');

// // $cursor 요소의 크기와 위치 정보를 가져옵니다.
// const cursorSize = $cursor[0].getBoundingClientRect();

// $(document).on('mousemove', function(e) {
//     // 마우스의 현재 X 좌표에서 커서 너비의 절반을 빼서 커서가 마우스 중심에 오도록 합니다.
//     const mouseX = e.clientX - cursorSize.width / 2;

//     // 마우스의 현재 Y 좌표에서 커서 높이의 절반을 빼서 커서가 마우스 중심에 오도록 합니다.
//     const mouseY = e.clientY - cursorSize.height / 2;

//     // $cursor 요소의 CSS 'transform' 속성을 업데이트하여 마우스 위치에 따라 이동시킵니다.
//     $cursor.css('transform', `translate(${mouseX}px, ${mouseY}px)`);
// });