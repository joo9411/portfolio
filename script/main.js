$(document).ready(function(){

    $('.h_title h2 span:nth-of-type(2)').css('opacity','0').delay(600).animate({'opacity':'1'},600);


    // 스크롤이벤트를 사용하여 일정영역이상으로 내려가면 위 서식을 적용한다.
    $(window).scroll(function(){
        let sPos = $(this).scrollTop();
        console.log(sPos);//스크롤값을 체크한다.
    
        if(sPos>=953){ //영상콘텐츠가 모두 올라가면
        //만약에 사용자가 헤더에 마우스를 아웃하면 서식이 지워지지 않는다.
            // $('header').find('i.fas').addClass('on');
            $('header').find('.gnb a').addClass('on');
        //검정색로고
            $('header').find('h1 img').attr('src','./images/h_logo_b.png'); 
            $('header').addClass('h_on');

        $('header').mouseleave(function(){ //마우스 아웃시 동작
            // $(this).find('i.fas').addClass('on');
            $(this).find('.gnb a').addClass('on');
            //검정색로고
            $(this).find('h1 img').attr('src','./images/h_logo_b.png');
            $(this).addClass('h_on');
        });
        }else{
            // $('header i.fas').removeClass('on');
            $('.gnb a').removeClass('on');
            //흰색로고
            $('h1 img').attr('src','./images/h_logo.png');
            $('header').removeClass('h_on');

            $('header').mouseleave(function(){ //마우스 아웃시 동작
            // $(this).find('i.fas').removeClass('on');
            $(this).find('.gnb a').removeClass('on');
            //검정색로고
            $(this).find('h1 img').attr('src','./images/h_logo.png');
            $(this).removeClass('h_on');
        });
        }
    });

    //ABOUT ME 버튼 클릭시 해당 페이지로 올라가기
    const gnb = $('.gnb li:first-child');
    gnb.click(function(){

        $('html, body').stop().animate({scrollTop:960},800);
    return false;
    });

    //스크롤 내렸을 때 스킬바 게이지 채우기
    $(window).scroll(function(){
        let skill = $(this).scrollTop();
        console.log(skill);
        if(skill>=950){
            $('.skill .s_left > li:first-child > .bar').stop().animate({'width':'90%'},800);
            $('.skill .s_left > li:nth-child(2) > .bar').stop().animate({'width':'85%'},800);
            $('.skill .s_left > li:last-child  > .bar').stop().animate({'width':'50%'},800);

            $('.skill .s_right > li:first-child > .bar').stop().animate({'width':'60%'},800);
            $('.skill .s_right > li:nth-child(2) > .bar').stop().animate({'width':'75%'},800);
            $('.skill .s_right > li:last-child > .bar').stop().animate({'width':'70%'},800);

            $('.skill .s_left > li:first-child > .bar > .ball').stop().animate({'left':'203px'},800);
            $('.skill .s_left > li:nth-child(2) > .bar > .ball').stop().animate({'left':'192px'},800);
            $('.skill .s_left > li:last-child > .bar > .ball').stop().animate({'left':'113px'},800,);
            $('.skill .s_right > li:first-child > .bar > .ball').stop().animate({'left':'135px'},800,);
            $('.skill .s_right > li:nth-child(2) > .bar > .ball').stop().animate({'left':'169px'},800);
            $('.skill .s_right > li:last-child > .bar > .ball').stop().animate({'left':'158px'},800);
        };
    });

    $(window).scroll(function(){ //화면을 스크롤동작하면 아래내용을 실행

        let sPos = $(this).scrollTop(); //현재 세로스크롤값을 변수에 담는다.
    
        console.log(sPos);
    
        //스크롤 값이 880이상일 때 프로필 페이지 2개박스가 서서히 올라오면서 나타난다.
        if(sPos>=880){
            $('.photo').stop().animate({'top':'-125px','opacity':'1'},800);
            $('.info').stop().animate({'bottom':'155px','opacity':'1'},800);
    
        }
    });

    $(window).scroll(function(){

        let sPos = $(this).scrollTop();

        console.log(sPos);

        if(sPos>=1650){
            $('.p01_img').stop().animate({'top':'0px','opacity':'1'},500);
            $('.p01_bg').stop().animate({'top':'34%','opacity':'1'},500);
            $('.p_txt01').stop().animate({'right':'17%','opacity':'1'},500);
        }
        if(sPos>=2350){
            $('.p02_img').stop().animate({'top':'0px','opacity':'1'},500);
            $('.p02_bg').stop().animate({'top':'240px','opacity':'1'},500);
            $('.p_txt02').stop().animate({'left':'11.5%','opacity':'1'},500);
        }
        if(sPos>=3950){
            $('.p03_img').stop().animate({'top':'-10px','opacity':'1'},500);
            $('.p03_bg').stop().animate({'top':'330px','opacity':'1'},500);
            $('.p_txt03').stop().animate({'right':'20%','opacity':'1'},500);
        }
        if(sPos>=4800){
            $('.p04_img').stop().animate({'top':'0px','opacity':'1'},500);
            $('.p04_bg').stop().animate({'top':'330px','opacity':'1'},500);
            $('.p_txt04').stop().animate({'left':'16%','opacity':'1'},500);
        }
        // if(sPos>=5900){
        //     $('#design').stop().animate()
        // }
    });


    // 페이지 올라갔을 때 top버튼 사라지게 하기
    $('.top_btn').hide();
    
    $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos);
    if(sPos>=1250){
        $('.top_btn').show();
    }else{
        $('.top_btn').hide();
    }
    });


     //if문을 사용하여 해당 스크롤 높이를 체크하여 서식적용하기
    $(window).scroll(function(){

        let sPos = $(this).scrollTop();

        console.log(sPos);

    if(sPos>=1900&&sPos<=2700){
        $('.gnb li').eq(1).find('a').addClass('on1');
    }else if(sPos>=2800&&sPos<=3850){
        $('.gnb li').eq(2).find('a').addClass('on2');
    }else if(sPos>=3950&&sPos<=5000){
        $('.gnb li').eq(3).find('a').addClass('on3');
    }else if(sPos>=5100&&sPos<=6100){
        $('.gnb li').eq(4).find('a').addClass('on4');
    }else{
        $('.gnb li').find('a').removeClass('on1');
        $('.gnb li').find('a').removeClass('on2');
        $('.gnb li').find('a').removeClass('on3');
        $('.gnb li').find('a').removeClass('on4');
    }

    });


    //모달창 서식

    const modal01 = '<div class="intro_modal"><div class="intro_m_box"><img src="./images/modal.jpg" alt="모달창"><p><label for="ch">오늘 하루 열지않음</label><a href="#" title="닫기" class="c_btn">닫기</a></p></div></div>'

  //body태그 안쪽의 맨 뒤에 내용을 추가한다.
    $('body').append(modal01);


  //쿠키
  const $ex = $('#ch') //체크박스를 변수에 담는다.

  //1. 만약에 쿠키가 현재 브라우저에 존재한다면 모달을 나오지 않게 숨긴다.
    if($.cookie('popup')=='none'){
    $('.intro_modal').hide();
    }

  //2.사용자가 오늘 하루 열지 않음 버튼을 클릭하면 popup 함수를 호출하여 쿠키를 생성
    $('.intro_modal label').click(function(){
    $.cookie('popup', 'none', {expires:1, path:'/'});
    $('.intro_modal').hide();
    });

    //3. 닫기 버튼을 클릭하면 모달 숨기기
    $('.intro_modal a').click(function(){
    $('.intro_modal').hide();
    return false;
    });


    //스크롤 이벤트 서식
    
    window.onload = function () {
        $(".box").each(function () {
            // 개별적으로 Wheel 이벤트 적용
            $(this).on("mousewheel DOMMouseScroll", function (e) {
                e.preventDefault();
                var delta = 0;
                if (!event) event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                } else if (event.detail) delta = -event.detail / 3;
                var moveTop = null;
                // 마우스휠을 위에서 아래로
                if (delta < 0) {
                    if ($(this).next() != undefined) {
                        moveTop = $(this).next().offset().top;
                    }
                // 마우스휠을 아래에서 위로
                } else {
                    if ($(this).prev() != undefined) {
                        moveTop = $(this).prev().offset().top;
                    }
                }
                // 화면 이동 0.8초(800)
                $("html,body").stop().animate({
                    scrollTop: moveTop + 'px'
                }, {
                    duration: 800, complete: function () {
                    }
                });
            });
        });
    }


});