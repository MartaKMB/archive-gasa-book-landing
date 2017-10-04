$("#arrow").on("click", function() {
    $("body, html").animate({
        scrollTop: $("main").offset().top
    }, 1200)
});

/* slider - inspiration: Julien Lejeune - https://codepen.io/jlnljn/pen/qRxqzR?editors=0010 */

let timer = 4000;

let i = 0;
const max = $('#carousel > li').length;
 
	$("#carousel > li").eq(i).addClass('active');
        //.css('left','2%');
	   //$("#c > li").eq(i + 1).addClass('active').css('left','62%');
 
	setInterval(function(){ 

		$("#carousel > li").removeClass('active');

		$("#carousel > li").eq(i).css('transition-delay','0.25s');
		//$("#c > li").eq(i + 1).css('transition-delay','0.5s');

		if (i < max-1) {
			i = i+1; 
		}
		else { 
			i = 0; 
		}  

		$("#carousel > li").eq(i).addClass('active').css('transition-delay','1.25s');
		//$("#c > li").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
		//$("#c > li").eq(i + 1).css('left','50%').addClass('active').css('transition-delay','1.5s');
	
	}, timer);