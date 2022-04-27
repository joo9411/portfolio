$(document).ready(function(){


    // 사용자가 마우스로 헤더영역에 오버하면 .on, .h_on을 적용하고 마우스를 아웃하면 .on, h_on을 제거한다.

    // $('header').hover(function(){ //오버시 동작
    //     $(this).find('i.fas').addClass('on');
    //     $(this).find('.gnb a').addClass('on');
    //   //검정색로고
    //     $(this).find('h1 img').attr('src','./images/logo-casper.black.png');
    //     $(this).addClass('h_on');
    // },function(){ //아웃시 동작
    //     $('header i.fas').removeClass('on');
    //     $('.gnb a').removeClass('on');
    //    //흰색로고
    //     $('h1 img').attr('src','./images/logo-casper-white.png');
    //     $(this).removeClass('h_on');
    // });

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
        if(skill>=960){
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
            $('.photo').stop().animate({'top':'-100px','opacity':'1'},800);
            $('.info').stop().animate({'bottom':'140px','opacity':'1'},800);
    
        }
    });

    $(window).scroll(function(){

        let sPos = $(this).scrollTop();

        console.log(sPos);

        if(sPos>=1650){
            $('.p01_img').stop().animate({'top':'0px','opacity':'1'},600);
            $('.p01_bg').stop().animate({'top':'34%','opacity':'1'},600);
            $('.p_txt01').stop().animate({'right':'17%','opacity':'1'},600);
        }else if(sPos>=2350){
            $('.p02_img').stop().animate({'top':'0px','opacity':'1'},600);
            $('.p02_bg').stop().animate({'top':'240px','opacity':'1'},600);
        }
    });

});