
$(window).scroll(function (event) {


    var vh = $(window).height();
    var scroll = $(window).scrollTop();

    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    
    
    if(window.innerHeight > window.innerWidth && window.innerHeight < 420 ){

     
    if (scroll > 0){

    $('.topheader').css({
        'transform': 'translateY('+-scroll/vh*60+'px) scale('+(1-scroll/vh/5)+')',
        'opacity': 1-scroll/vh*0.85,
    });

    $('.midheader').css({
        'transform': 'translateY('+-scroll/vh*150+'px) scale('+(1-scroll/vh/5)+')',
        'opacity': 1-scroll/vh*0.9,
    });

    $('.endheader').css({
        'transform': 'translateY('+-scroll/vh*180+'px) scale('+(1-scroll/vh/5)+')',
        'opacity': 1-scroll/vh*1,
       
    });} else {
        $('.topheader').css({
            'transform': 'translateY('+-scroll/vh*50+'px) scale('+(1-scroll/vh/4)+')',
            'opacity': 1-scroll/vh*1,
        });
    
        $('.midheader').css({
            'transform': 'translateY('+-scroll/vh*100+'px)',
            'opacity': 1-scroll/vh*1,
        });
    
        $('.endheader').css({
            'transform': 'translateY('+-scroll/vh*250+'px)',
            'opacity': 1-scroll/vh*1,
           
        });
    }} else {

        $('.topheader').css({
            'transform': 'translateY('+-scroll/vh*60+'px) scale('+(1-scroll/vh/5)+')',
            'opacity': 1-scroll/vh*1,
        });
    
        $('.midheader').css({
            'transform': 'translateY('+-scroll/vh*60+'px) scale('+(1-scroll/vh/5)+')',
            'opacity': 1-scroll/vh*1,
        });
    
        $('.endheader').css({
            'transform': 'translateY('+-scroll/vh*60+'px) scale('+(1-scroll/vh/5)+')',
            'opacity': 1-scroll/vh*1,
    });
}

    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        $('#floating_circlebutton').css({transform: "rotate(180deg)"})
        $('#floatingdiv').css({transform: "translateY(0px)", opacity: "1"})
    }else{
        $('#floating_circlebutton').css({transform: "rotate(0deg)"})
        $('#floatingdiv').css({transform: "translateY(60px)", opacity: "0"})
    }

/*	if ( -200 < (scrollHeight - scrollPosition) / scrollHeight < 200) {
	
        $('#floating_circlebutton').css({transform: "rotate(180deg)"})
        $('#floatingdiv').css({transform: "translateY(0px)", opacity: "1"})

    } else {
  
        $('#floating_circlebutton').css({transform: "rotate(0deg)"})
        $('#floatingdiv').css({transform: "translateY(60px)", opacity: "0"})
    }

*/

    var midopacity = $('.midheader').css('opacity');

    if( midopacity <= 0){
        $('.section').css({
            'pointer-events': 'none'
        });
    } else {
        $('.section').css({
            'pointer-events': 'all'
        });
    }

});

$(window).on('load', function () {

    $("#nightswitch").click(function(){
        if ($("body").hasClass("semidarkbg")){
            $("#githubimg").attr('src', './images/github.svg')
        } else {
            $("#githubimg").attr('src', './images/github-dark.svg')
        }
        $("body").css("transition-duration","0.8s").toggleClass("semidarkbg")
        $(".circle").css("transition-duration","0.8s").toggleClass("darkbg")
        $(".bio").css("transition-duration","0.8s").toggleClass("darkbgblur")
        $("p").css("transition-duration","0.8s").toggleClass("dark_p_h2")
        $("h2").css("transition-duration","0.8s").toggleClass("dark_p_h2")
        $(".bold").css("transition-duration","0.8s").toggleClass("darkbold")
        $(".github").toggleClass("githubdark")
        $(".github p").toggleClass("githubdarkspan")


    });


    if(window.innerWidth > 950 ){


    $( ".inline-btn" ).hover(
        function() {
          $(".socialdiv").css( "transform","scale(1.02)" );
        },
        function() {
            $(".socialdiv").css( "transform","scale(1.0)" );
          }
      );


    } else {


    }
});

function buttonfix()
{
    var el = this;
    var par = el.parentNode;
    var next = el.nextSibling;
    par.removeChild(el);
    setTimeout(function() {par.insertBefore(el, next);}, 0)
}
