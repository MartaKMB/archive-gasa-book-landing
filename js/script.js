$("#arrow").on("click", function() {
    $("body, html").animate({
        scrollTop: $("main").offset().top
    }, 1200)
});

/* slider - inspiration: https://codepen.io/jlnljn/pen/qRxqzR?editors=0010 */

var timer = 4000;

var i = 0;
var max = $('#c > li').length;
 
	$("#c > li").eq(i).addClass('active').css('left','2%');
	$("#c > li").eq(i + 1).addClass('active').css('left','62%');
 

	setInterval(function(){ 

		$("#c > li").removeClass('active');

		$("#c > li").eq(i).css('transition-delay','0.25s');
		$("#c > li").eq(i + 1).css('transition-delay','0.5s');

		if (i < max-2) {
			i = i+2; 
		}

		else { 
			i = 0; 
		}  

		$("#c > li").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
		$("#c > li").eq(i + 1).css('left','50%').addClass('active').css('transition-delay','1.5s');
	
	}, timer);