// JavaScript Document

$(document).ready(function(){ //모든 파일에 링크됨. 모든 파일에 돌아가야 하는 함수는 여기에 쓴다.
    preventDefaultAnchor();
    setCurrentPage();
    // setGnb(); 
    // 특정한 페이지에만 사용하는 함수는 해당 페이지에 쓰는게 좋다.
    $('header .tnb ul li a.menu').on('click', function() {
        $('header .tnb ul li a.menu').toggleClass('close');
        $('#asideMenu').toggleClass('on');
    });
});


function preventDefaultAnchor() {
    $(document).on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    });
}


function setCurrentPage() {
    var bodyClass = $('body').attr('class');
    var arrayClass = bodyClass.split(' ');
    console.log(bodyClass, arrayClass);
    if (arrayClass[0] === 'main') return false;  // 메인화면에서는 적용하지 않음
    
    $('.gnb > ul > li').each(function() { /* 대메뉴 */
        if ($(this).attr('data-menu') === arrayClass[1]) { /* tech 랑 같은지.  */
            $(this).addClass('on');
        } else {
            $(this).removeClass('on');
        }
    });
};




// function setGnb() {/* 함수 안에 넣어서 묶고 실행만 해주면 다른 곳에서 사용할 수 있다. 공통js에 정리할 때  */
//     $('#gnb > ul > li > a').on('mouseenter focus', function() { /* 마우스가 엔터하면 이 기능을 해줘 */ 
//     var offsetLeft = $(this).position().left;
//     var width = $(this).width();
//     $('#gnb > ul ul').css({'display': 'none'}); /* 이걸 안하면 나와있던 애들이 계속 쌓인다. . */
//     $(this).next().css({'display': 'block'}); /* next 가 ul이다. */
//     $('#header').addClass('on');
//     $('#gnb span.bar').css({'width': width + 'px', 'left': offsetLeft + 'px'}); /* animation은 css로 하면 stop같은거 안해도 된다 */
// });

// $('#header').on('mouseleave', function() { /* html상 부모 헤더 안에서 */
//     $('#gnb > ul ul').css({'display': 'none'});
//     $('#header').removeClass('on');
//     $('#gnb span.bar').css({'width': 0});
// });