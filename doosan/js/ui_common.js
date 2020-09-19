// JavaScript Document

$(document).ready(function(){
    preventDefaultAnchor();
    showNav();
    
});


function preventDefaultAnchor() {
    $(document).on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    });
}

function showNav() { 
        $('#bottom-gnb ul > li > a').on('mouseenter  focus', function() { /* focus넣어서 tab키로도 쓸수 있도록 */
        $('#bottom-gnb > ul ul').css({'display': 'block'});
        $('#bottom-gnb').addClass('on');
    });
    $('#bottom-gnb').on('mouseleave', function() {
        $('#bottom-gnb > ul ul').css({'display': 'none'});
        $('#bottom-gnb').removeClass('on');
    });
}