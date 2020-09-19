$(document).ready(function(){
    'use strict';

    $('div.introduce a.skip').on('focusin click', function(){
        $('div.introduce').css({'display': 'none'});
    });

    setTypeWriter();
    function setTypeWriter (){
        var i = 0;
        var txt = 'Hi, I\'m Jay Kim.  I\'m front-end developer. I love making websites which give users new experience :)'; 
        // var txt = '안녕하세요 김지영입니다! ^^'; 
        var speed = 300; /* The speed/duration of the effect in milliseconds */
        typeWriter();
        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("type").innerHTML += txt.charAt(i);
                i++;
                // if(txt.charAt(i) == '<'){
                //     $(txt.charAt(i)).replaceAll('\n', '<br />');
                // }
                setTimeout(typeWriter, speed);
            } else if (i >= txt.length) {
                setTimeout(function(){
                    $('div.introduce').css({'display': 'none'});
                }, 5000);
            }
        }
    }


    //메뉴
    $('header nav a.menu').on('click', function(){ 
            console.log('열어라');
            $(this).toggleClass('close');
            $('header nav > ul.gnb').toggleClass('on');  
            // $('.menu .bar').css({'background':'#fff'});
            $('header nav, footer, main').toggleClass('black');
            $('header nav > ul li').removeClass('on');
    });
    showGnbLi() //header nav > ul.gnb > li 열기
    function showGnbLi() {
        $('header nav > ul.gnb > li > a').on('click', function(){
            var index = $('header nav > ul.gnb > li').index($(this).parent());
            console.log(index);
            $('header nav > ul.gnb > li').removeClass('on');
            $('header nav > ul.gnb > li:eq(' + index + ')').attr('class', 'on');
            $('header nav > ul.gnb > li:eq(' + index + ')').nextAll().attr('class', 'on');
        });
    };
       

    whenHover('header nav ul > li:nth-child(1) a', 92);
    whenHover('header nav ul > li:nth-child(2) a', 84);
    whenHover('header nav ul > li:nth-child(3) a', 76);
    
    function whenHover (selector, right) {
        $(selector).parent().on('mouseenter',function (){
            $(this).css({'right': (right - 3) + '%'});
        });
        $(selector).parent().on('mouseleave',function (){
            $(this).css({'right': right + '%'});
        });
    };

    setMainSlide('ul.works > li');
    function setMainSlide (selector){
        var numSlide = $(selector).length;
        var slideNow = 0;
        var slidePrev = 0;
        var slideNext = 0;
      
        $('main p.control a.next').on('click', function(){
            showSlide(slideNext);
        });
        $('main p.control a.prev').on('click', function(){
            showSlide(slidePrev);
        });

        showSlide(1);
        function showSlide (n){ 
            var ele1 = $('#main > ul > li:nth-child(1)');
            var ele2 = $('#main > ul > li:nth-child(2)');
            var ele3 = $('#main > ul > li:nth-child(3)');
            var ele4 = $('#main > ul > li:nth-child(4)');
            
            $('ul.works li').removeClass();

            if(n === 1){
                ele1.addClass('slide1');
                ele2.addClass('slide2');
                ele3.addClass('slide3');
                ele4.addClass('slide4');
            }
            if(n === 2){
                ele1.addClass('slide4');
                ele2.addClass('slide1');
                ele3.addClass('slide2');
                ele4.addClass('slide3');
            }
            if(n === 3){
                ele1.addClass('slide3');
                ele2.addClass('slide4');
                ele3.addClass('slide1');
                ele4.addClass('slide2');
            }
            if(n === 4){
                ele1.addClass('slide2');
                ele2.addClass('slide3');
                ele3.addClass('slide4');
                ele4.addClass('slide1');
            }
            console.log(slidePrev + '/'+ slideNow+ '/'+slideNext);
            /*
            if(n % 2 !== 0){
                ele1.classList.add('slide' + n%4 );
                ele2.classList.add('slide' + (n+1)%4);
                ele3.classList.add('slide' + (n+2)%4);
                ele4.classList.add('slide' + (n+3)%4);
            }
            */ 
                // $('ul.works li:eq(' +(n - 1) + ')').addClass('slide1');
                // $('ul.works li:eq(' + n + ')').addClass('slide2'); 
                // $('ul.works li:eq(' + slideNext1 + ')').addClass('slide3');
                // $('ul.works li:eq(' + slideNext2 + ')').addClass('slide4');
                // $('ul.works li').removeClass();
                // $('ul.works li:eq('+ n - 1 + ')').addClass('slide1');
                // $('ul.works li:eq('+ n + ')').addClass('slide2'); 
                // $('ul.works li:eq('+ slideNext1+ ')').addClass('slide3');
                // $('ul.works li:eq('+ slideNext2+ ')').addClass('slide4');
            // n에 무엇을 넣을지 결정하는 부분. 
            slidePrev = (n - 1) < 1 ? numSlide : (n - 1);
            slideNow = n;
            slideNext = (n + 1) > numSlide ? 1 : (n + 1);
            
       }
    }
});