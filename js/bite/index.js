$(document).ready(function(){

    window.addEventListener('scroll', rotateImg);
    $(window).on('scroll', function() {
        checkVisibility('.content');
        setScrollUi();
        setRotateBottle();
    });   
    setScrollUi();
    setSlide();
    checkVisibility('.content');
    changeHeight('#founder .box.r div');
    changeHeight('.m-brushing .box.r div');


    $('header ul.left li.about').on('click', function() { 
        $('header ul.left li.about').addClass('on');
    });
    $('header ul.left li.about div.about-list a.close').on('click', function(e) {
        e.stopPropagation();
        $('header ul.left li.about').removeClass('on');
    });

    function rotateImg() { 
        var img = document.querySelector('.rotate-circle img');
        var scrolled = window.pageYOffset;
        var rotateCoefficient = 0.5;
        if (scrolled > 0){
            img.style.transform ="rotate(" + scrolled * rotateCoefficient + "deg)";
        }
    }
    function setRotateBottle (){
        var scrollTop = $(document).scrollTop();
        var minScroll = $('.bottle-wrap').offset().top - $(window).height();
        var maxScroll = $('.bottle-wrap').offset().top + $('.bottle-wrap').outerHeight();
        var scrolledAmount = ($('.bottle-wrap .bottle').offset().top - $(document).scrollTop());

        rotateBottle('.bottle-wrap .bottle.bottle1', 0, 1.3, -60, 1);
        rotateBottle('.bottle-wrap .bottle.bottle2', -20, 1, -50, 1);
        rotateBottle('.bottle-wrap .bottle.bottle3', 30, 1, -30, -1);
        rotateBottle('.bottle-wrap .bottle.bottle4', 70, 1, -30, 1);
        rotateBottle('.bottle-wrap .bottle.bottle5', 90, 1, 30, -1);

        rotateBottle('.tablet-wrap .tablet1', 1, 1.1, 1, 1);
        rotateBottle('.tablet-wrap .tablet2', 30, 1.2, 1, 1);
        rotateBottle('.tablet-wrap .tablet3', 10, 1.1, 1, 1);
        rotateBottle('.tablet-wrap .tablet4', 10, 1.2, 1, 1);
        rotateBottle('.tablet-wrap .tablet5', 40, 1, 1, 1);
        rotateBottle('.tablet-wrap .tablet6', 70, 1.4,1, 1);
      
        function rotateBottle(selector, startTop, speed, startDeg, direction) {
            if (minScroll < scrollTop < maxScroll ) { 
                $(selector).css({'top': ((scrolledAmount / 35 + startTop) * speed) + '%'});
                $(selector).css({'transform': 'rotate('+ ((scrolledAmount/15 + startDeg) * direction) +'deg)'});
                $('.no-plastic .bottle-wrap').addClass('on');
            };
        }
    }
   
   function setScrollUi(){
       var scrollTop = $(document).scrollTop();
       if (scrollTop > 50) { 
           $('header').addClass('on');
       } else {
           $('header').removeClass('on');
       }
   }

   function setSlide(){ //배경바뀌는 부분 슬라이드.
        var numSlide = $('.text-slide div.slide-body').length;
        var slideNow = 0;
        var slidePrev = 0;
        var slideNext = 0;
        var firstSlide = 1;
        var timerId = '';
        var isTimerOn = false;
        var timerSpeed = 3000;

        showSlide(firstSlide);
        $('.text-slide ul.indicator li a').on('click', function() {
            var index = $('.text-slide ul.indicator li').index($(this).parent());
            showSlide(index + 1);
        });
        $('.text-slide p.control a.pre').on('click', function() {
            showSlide(slidePrev);
        });
        $('.text-slide p.control a.next').on('click', function() {
            showSlide(slideNext);
        });
        function showSlide (n){
            clearTimeout(timerId);
            $('.text-slide .slide-body.block').removeClass('block');
            $('.text-slide .slide-body:eq(' + (n - 1)+ ')').addClass('block');
            $('.text-slide ul.indicator li').removeClass('on');
            $('.text-slide ul.indicator li:eq(' + (n - 1) + ')').addClass('on');
            slideNow = n;
            slidePrev = (n - 1) === 1 ? numSlide : (n - 1);
            slideNext = (n + 1) > numSlide ? 1 : (n + 1);
            if (isTimerOn === true) {
                timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
            }
        }
    }


    setLogosBanner('.logos-wrap div.window-logo ul.slide li');
    function setLogosBanner (selector){//show nth slide
        // if($(window).width() >= 851) return false;
        var numSlide = $(selector).length;
        var ulSlideWidth = 0;
        var boxWidth = $('div.window-logo').innerWidth();
        var slideNow = 0;
        var slidePrev = 0;
        var slideNext = 0;

        $(window).resize(function() {
            setBannerStatus();
        });

        setBannerStatus();
        function setBannerStatus() {
            $(selector).each(function(){
                ulSlideWidth += $(this).outerWidth(true);
            });
            $(selector).parent().css({'width': ulSlideWidth + 'px'});
        }
       
        minOffsetLeft = boxWidth - ulSlideWidth; //negative value
        
           
        $('div.window-logo p.control a.prev').on('click', function() {
            showBanner(slidePrev);
        });
        $('div.window-logo p.control a.next').on('click', function() {
            // if(slideNow === 0) {
            //     $(this).parent().css({'transition': 'none'});
            // }
            showBanner(slideNext);
        });
        
        showBanner(1);
        function showBanner(n) {
            var offsetLeft = -($(selector + ':eq(' + (n - 1) + ')').position().left);
            if (offsetLeft < minOffsetLeft) {
                offsetLeft = minOffsetLeft;
                numBanner = n;
                console.log(offsetLeft);
            }
           $(selector).parent().stop(true).animate({'left': offsetLeft + 'px'}, 300);
            slidePrev = (n <= 0) ? 0 : (n - 1);
            slideNow = n;
            slideNext = (n >= numSlide) ? 0 : (n + 1);
        };
    };  

    //Review Banner--- responsive
    settingBanner('div.window');
    function settingBanner(selector) {
        var offsetLeft = 0;
        var boxWidth = $(selector).find('div.window').innerWidth();
        var barWidth = 0;
        var numStep = 0;
        var numBanner = $(selector).find('ul.slide li').length;
        var minOffsetLeft = 0;
        var numStep = 0;
        var bannerNow = 0;
        var bannerPrev = 0;
        var bannerNext = 0;
        setBannerStatus();
        showBanner(1);

        $(selector).find('p.control a.prev').on('click', function() {
            showBanner(bannerPrev);
        });
        $(selector).find('p.control a.next').on('click', function() {
            showBanner(bannerNext);
        });
        $(window).on('resize', function() {
            setBannerStatus();
        });
  
        function setBannerStatus(){
            boxWidth = $(selector).innerWidth();
            barWidth = 0;   
            $(selector).find('ul.slide li').each(function(i) {
                barWidth += $(this).outerWidth(true);
                if (barWidth <= boxWidth){
                    numStep = (i + 1);
                };
                // console.log('if ('+ barWidth +'<='+ boxWidth+'){' + numStep +'='+ '('+ i + '1)}');
            }); 
              
            // console.log('numsBanner/'+ numBanner + '  numstep/'+ numStep + '  numpage/'+ numPage);
            barWidth = 0;
            $(selector).find('ul.slide li').each(function(i) {
                barWidth += $(this).outerWidth(true); //ul.slide width;
                $(this).css({'left': ((100 / numStep) * i) + '%'});
            });
            minOffsetLeft = boxWidth - barWidth;

            $(selector).find('ul.slide li').each(function(i) {
                if(-$(this).position().left <= minOffsetLeft) {
                    numBanner = (i + 1);
                    return false;
                }
            });
            if (bannerNow !== 0) {
                if (bannerNow > numBanner) bannerNow = numBanner;
                showBanner(bannerNow);
            }
        }
        
        function showBanner(n) {
            offsetLeft = - $(selector).find('ul.slide li:eq(' + (n - 1) + ')').position().left;
            if (offsetLeft < minOffsetLeft) offsetLeft = minOffsetLeft;
            $(selector).find('ul.slide').css({'transition': 'left 0.3s', 'left': offsetLeft + 'px'});
            bannerNow = n;
            bannerPrev = (n <= 1) ? numBanner : (n - numStep);
            bannerNext = (n >= numBanner) ? 1 : (n + numStep);
        }
    }

    function checkVisibility(selector) {
        var scrollTop = $(document).scrollTop();
        $(selector).each(function() {
            var $selector = $(this);
            var minScroll = $selector.offset().top - $(window).height();
            var maxScroll = $selector.offset().top + $selector.outerHeight();
            if (scrollTop < minScroll) {
                if ($selector.hasClass('down') !== true) {
                    $selector.removeClass('show up');
                    $selector.addClass('down');
                }
            } else if (scrollTop > maxScroll) {
                if ($selector.hasClass('up') !== true) {
                    $selector.removeClass('down show');
                    $selector.addClass('up');
                }
            } else {
                if ($selector.hasClass('show') !== true) {
                    $selector.removeClass('down up');
                    $selector.addClass('show');
                }
            }
        });
    }
    // setTimeout(function(){hideAlert()}, 1000);
    //    function hideAlert () {
    //         $('#alert').removeClass('close');
    //    }
    //    $('#alert a.x').on('click', function() {
    //     $('#alert').addClass('close');
    //  });

    function changeHeight (selector) {   
        var height = $(selector).height();
        $(window).resize(function() {        
            var windowWidth = $(window).width();
            if (windowWidth < 990) {
                $(selector).parent().css({'height' : (height + 100) + 'px'});
            } else if (990 < windowWidth) { 
                $(selector).parent().css({'height' : 640 + 'px'});
            }
        });   
    }
    
});