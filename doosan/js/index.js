$(document).ready(function(){
    videoSlide ();
    function videoSlide () { 
        if ($('body').hasClass('sub')) return false;
        var timerId = '';
        var isTimerOn = true;
        var numslide = $('#main-video ul.video li').length;
        var timerSpeed = 7000;

        $('#main-video .indicator ul li a').on('click', function(){
            var index = $('#main-video .indicator ul li').index($(this).parent());
            showSlide(index + 1);
        });
        $('#main-video .indicator > a.stop').on('click', function(){
            clearTimeout(timerId);
            $(this).css({'display':'none'});
            $(this).next().css({'display':'block'});
            $('#main-video ul.video li:eq(' + (slideNow - 1) + ') video').get(0).pause();
            $('#main-video .indicator ul li:eq(' + (slideNow - 1) + ')').removeClass('on');
        });
        $('#main-video .indicator > a.play').on('click', function(){
            setTimeout(timerId);
            $(this).css({'display':'none'});
            $(this).prev().css({'display':'block'});
            $('#main-video ul.video li:eq('+ (slideNow - 1) +') video').get(0).currentTime = 0;
            $('#main-video ul.video li:eq('+ (slideNow - 1) +') video').get(0).play();
            $('#main-video .indicator ul li:eq(' + (slideNow - 1) + ')').addClass('on');
            showSlide(slideNow);
        });
        showSlide(1);
        function showSlide (n){
            clearTimeout(timerId);
            $('#main-video ul.video li:eq(' + (n - 1) + ') video').get(0).play();
            $('#main-video ul.video li').removeClass('on');
            $('#main-video ul.video li:eq(' + (n - 1) + ')').addClass('on');
            $('#main-video ul.video li > div').removeClass('on');
            $('#main-video ul.video li:eq(' + (n - 1) + ') div').addClass('on');
            $('#main-video .indicator ul li').removeClass('on');
            $('#main-video .indicator ul li:eq('+ (n - 1) +')').addClass('on');
            slideNow = n;
            slidePrev = (n - 1) < 1 ? numslide : (n - 1);
            slideNext = (n + 1) > numslide ? 1 : (n + 1);
            if(isTimerOn === true){
                timerId = setTimeout(function (){showSlide(slideNext);}, timerSpeed)
            }
        }
    };

    // header 
    $('header nav > ul > li > a ').on('mouseenter focus', function(){
        $('header').addClass('open dark');       
    });
    $('header nav').on('mouseleave', function(){
        var windowWidth = $(window).width();
        if (windowWidth <= 1080) return false;
        $('header').removeClass('open dark');
    });
    $('header nav ul:first-of-type > li:last-of-type > ul > li:last-of-type a').on('focusout', function(){
        $('header').removeClass('open dark');
    });
    $('header a.search').on('click', function(){ //검색버튼
        $('header form.search-form').toggleClass('on');
        $('#header').addClass('dark');
    });
    $('header ul.lang').on('click focus', function() {
       $(this).toggleClass('on');
    });
    $('header').on('mouseleave', function() {
        $('header ul.lang').removeClass('on');
        $('header form.search-form').removeClass('on');
    });
    $(document).on('click', function() { //뒷배경 어둡게
        $('header div.lang').removeClass('on');
    });
    // checkCurrentMenu();
    // function checkCurrentMenu() {
    //     var bodyClass = $('body').attr('class');
    //     if (bodyClass === 'main') return false;
    //     var classArray = bodyClass.split('');

    //     $('nav.gnb > ul > li').each(function() {
    //         if($(this).attr('data-menu') === classArray[1]) {
    //             $(this).addClass('on');
    //         } else {
    //             $(this).removeClass('on');
    //         }
    //     });
    //     $('nav.gnb > ul > li.on > ul > li').each(function() {
    //         if($(this).attr('data-menu') === classArray[2]) {
    //             $('nav.gnb > ul > li').find('nav.gnb > ul > li.on').addClass('on');
    //             // // console.log($(this).attr());
    //         } else {
    //             $(this).parent().parent().removeClass('on');
    //         }
    //     });
    // }
    

    // mobile-gnb
   
    $('header ul.lang + a.menu.only-m').on('click', function(e) {
        e.stopPropagation();
        $('header').addClass('open dark');
    });
    $('#click').on('click', function() {
        alert('dddd');
    });
    $(document).on('click', function() { //뒷배경 어둡게
        $('header').removeClass('open dark');
    });
    $('nav.gnb').on('click', function(e) {
        e.stopPropagation();
    })
    $('header nav.gnb a.close').on('click', function() {
        $('header').removeClass('open dark');
    });
    $('header form.search-form a.close').on('click', function() { 
        $('header form.search-form').removeClass('on');
    });
    $('header nav.gnb > ul:nth-of-type(1) > li > a').on('click', function(){
        if ($(this).parent().hasClass('on')) {
            $(this).parent().removeClass('on');
            return false;
        } else {
            $('header nav.gnb > ul:nth-of-type(1) > li').removeClass('on');
        }
        $(this).parent().addClass('on');
    })
   
    // header fixed-nav
    fixNav();
    function fixNav (){
        var offsetTop = $('header').offset().top;
        $(window).on('scroll', function(){
            var scrollTop = $(document).scrollTop();
            if(scrollTop >= offsetTop) {
                $('header').addClass('fixed');
            } else if(scrollTop <= offsetTop) { 
                $('header').removeClass('fixed');
            }
        });
    }

    mainSetContentUp ();
    function mainSetContentUp (){
        if ($('body').hasClass('sub')) return false;
        setContentUp('section.business h2');
        setContentUp('section.business p');
        setContentUp('.business .engine');
        setContentUp('.business .machine');
        setContentUp('#img-slide > div:nth-of-type(1)');
        setContentUp('#img-slide > div:nth-of-type(2)');
        setContentUp('#img-slide ul.indicator');
        setContentUp('#news');
        setContentUp('#news div > a');
        setContentUp('#news h2');
        setContentUp('#news p');
        setContentUp('#info h2');
        setContentUp('div.half > p');
        setContentUp('div.half div.more-hide-btn');
        setContentUp('#info img');
        setContentUp('footer');
        function setContentUp (selector){
            var offsetTop = $(selector).offset().top;
            var windowHeight = $(window).height();
            $(window).on('scroll', function(){
                var scrollTop = $(window).scrollTop();
                if (offsetTop - windowHeight <= scrollTop){
                    $(selector).addClass('up');
                }
            });
        }
        
        // img-slide
        setImgSlide ();
        function setImgSlide (){
            var numslide = $('#img-slide ul.slide li').length;
            $('#img-slide > ul.indicator li a').on('click', function (){
                var index = $('#img-slide > ul.indicator li').index($(this).parent());
                showSlide(index + 1);
                // console.log(index);
            });
            $('#img-slide p.control a.prev').on('click', function(){
                showSlide(slidePrev);
            });
            $('#img-slide p.control a.next').on('click', function(){
                showSlide(slideNext);
            });
            showSlide(1);
            function showSlide (n){
                $('#img-slide ul li').removeClass('on');
                $('#img-slide ul li:eq('+ (n - 1) +')').addClass('on');
                $('#img-slide > ul.indicator li').removeClass('on');
                $('#img-slide > ul.indicator li:eq('+ (n - 1) +')').addClass('on');
                slideNow = n;
                slidePrev = (n - 1) < 1 ? numslide : (n - 1);
                slideNext = (n + 1) > numslide ? 1 : (n + 1);
                // console.log(slidePrev +'/'+slideNow+'/'+ slideNext +'/'+numslide  );
            }
        }   
    }
    

//news-bannerslide 
    bannerSlide();
    function bannerSlide (){
        if ($('body').hasClass('sub')) return false;
        var boxWidth = $('div.banner').innerWidth();
        console.log(boxWidth);
        var numBanner = $('#news div.banner ul.slide li').length;
        var bannerNow = 0;
        var bannerPrev = 0;
        var bannerNext = 0;
        var ulSlideWidth = 0;
        var minOffsetLeft = 0;
        setBannerStatus('div.banner');

        $(window).resize(function () {
            setBannerStatus()
        });
        $('#news div.banner ul.slide li').each(function (){
            ulSlideWidth += $(this).outerWidth(true);
            $(this).addClass('on');
        });
        $('#news div.banner ul.slide').css({'width': ulSlideWidth + 'px'});
     
        $('#news div a.prev').on('click', function() {
            showBanner(bannerPrev);
            $('div.banner ul.slide li:eq('+ (bannerNow) +')').addClass('on');
        });
        $('#news div a.next').on('click', function() {
            showBanner(bannerNext);
          $('div.banner ul.slide li:eq('+ (bannerPrev)+')').removeClass('on');
        });


        function setBannerStatus(selector) {
            boxWidth = $(selector).innerWidth();
            ulSlideWidth = 0;
            $(selector).find('ul.slide li').each(function() {
                ulSlideWidth += $(this).outerWidth(true);
            });
            $(selector).find('ul.slide').css({'width': ulSlideWidth + 'px'});
            minOffsetLeft = boxWidth - ulSlideWidth;
              
            console.log(minOffsetLeft);
            $(selector).find('ul.slide li').each(function(i) {
                if (-$(this).position().left < minOffsetLeft) {
                    numBanner = (i + 1);
                    return false;
                }
            });
            if (bannerNow !== 0) showBanner(bannerNow);
        }


        //swipe
        $('div.banner').find('ul.slide').on('touchstart', function(e) {
            startX = e.touches[0].clientX;
            offsetX = $(this).position().left;
            console.log(startX +'/'+ offsetX);
            $(document).on('touchmove', function(e) {
                delX = e.touches[0].clientX - startX;
                console.log(delX);
            });

            $(document).on('touchmove', function(e) { //손가락을 댄 시점에 시작
                delX = e.touches[0].clientX - startX; // 손을 댄 시점에서 x에서 얼마나 움직였는지 확인가능
                if ((slideNow === 1 && delX > 0) || (slideNow === numBanner && delX < 0)){//1번일 때 밀어서 마지막 꺼 나오는 경우, 마지막일 때 빈공간 나오는 경우
                    delX = delX / 10;
                } 
                $('div.banner').find('ul.slide').css({'left': (offsetX + delX)+ 'px'});//delX는 무조건 0에서 시작하니까 기존위치값 더해줌
            });
            $(document).on('touchend', function() { //손가락을 떼면서 붙어있던 이벤트 제거
                if(delX > 50 && bannerNow !== 1) { //50보다 크면 오른쪽으로 반이상 민 경우 . if it's 1, show first banner
                    showBanner(bannerPrev);
                } else if(delX < -50 && bannerNow !== numBanner) { //왼쪽으로 반 이상 민경우
                    showBanner(bannerNext);
                } else { //이도저도 아니게 조금 움직였을 때 now 보여줌
                    showBanner(bannerNow);
                }
                $(document).off('touchmove touchend'); //
            });
        });

        
        showBanner(1);
        function showBanner (n){
            liWidth = $('#news div.banner ul.slide li').outerWidth();
            offsetLeft = -$('#news div.banner ul.slide li:eq('+ (n - 1) +')').position().left;
            if (offsetLeft < minOffsetLeft){
                offsetLeft = minOffsetLeft;
                n = bannerNow;
            }
            console.log( offsetLeft +'='+ minOffsetLeft);
            $('div.banner ul.slide').css({'transition': 'left 0.3s', 'left' : offsetLeft + 'px'});
            if (bannerNext === 1){
                $('div.banner ul.slide li').addClass('on');
            }
            bannerNow = n;
            bannerPrev = (n <= 1) ? 1 : (n - 1);
            bannerNext = (n >= numBanner) ? 1 : (n + 1);
            // console.log( bannerPrev + '/' + bannerNow  + '/' + bannerNext  + '/' + numBanner);
        }
    };
    
    
    if ($('body').hasClass('vision')){
        if($(window).width() >= 1080) return false;
        $('.sub.vision ul.solutions > li a').on('mouseenter', function() {
            var index = $('.sub.vision ul.solutions > li').index($(this).parent());
            $(this).parent().addClass('on');
            $('.sub.vision ul.bg li.bg-img:eq('+ index +')').css({'display': 'block'})
            console.log(index);
        });
        $('.sub.vision ul.solutions > li').on('mouseleave', function() {
            $(this).removeClass('on');
            $('.sub.vision ul.bg li.bg-img').css({'display': 'none'})
        });
    }
    //footer

    $('footer .wrapper div.familysites > ul > li > a').on('click', function() {
        $(this).parent().parent().toggleClass('open');
    });
    // iconDelay();
    // function iconDelay() {
    //     $('#footer .wrapper ul.menu > li ul li').css({'opacity': '0'});
    //     $('#footer .wrapper ul.menu > li ul li').each(function(i) {
    //        $(this).delay(i * 200).animate({'opacity': '1'}, 500);
    //     });   
    //  }

});