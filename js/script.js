$("#arrow").on("click", function() {
    $("body, html").animate({
        scrollTop: $("main").offset().top
    }, 1200)
});

/* slider - inspiration: Julien Lejeune - https://codepen.io/jlnljn/pen/qRxqzR?editors=0010 */

let timer = 4000;
let i = 0;

const max = $('#carousel_patron > li').length;
 
	$("#carousel_patron > li").eq(i).addClass('active');
        //.css('left','2%');
	   //$("#c > li").eq(i + 1).addClass('active').css('left','62%');
 
	setInterval(function(){ 

		$("#carousel_patron > li").removeClass('active');

		$("#carousel_patron > li").eq(i).css('transition-delay','0.25s');
		//$("#c > li").eq(i + 1).css('transition-delay','0.5s');

		if (i < max-1) {
			i = i+1; 
		}
		else { 
			i = 0; 
		}  

		$("#carousel_patron > li").eq(i).addClass('active').css('transition-delay','0.25s');
		//$("#c > li").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
		//$("#c > li").eq(i + 1).css('left','50%').addClass('active').css('transition-delay','1.5s');
	
	}, timer);

let j = 0;
const max_cover = $('#carousel_cover > li').length;
 
$("#carousel_cover > li").eq(j).addClass('active');
 
setInterval(function(){ 

    $("#carousel_cover > li").removeClass('active');
    $("#carousel_cover > li").eq(j).css('transition-delay','0.25s');
    if (j < max_cover-1) {
        j = j+1; 
    } else { 
        j = 0; 
    }  
    $("#carousel_cover > li").eq(i).addClass('active').css('transition-delay','0.25s');	
	
}, timer);

/* button buy autographed book pop up */

$("#btn_option_aut").click(function(){
    $("#buy_autographed_book").css('display', 'block');
});

$("#btn_option_aut_2").click(function(){
    $("#buy_autographed_book").css('display', 'block');
});

$("#close_buy").click(function(){
    $("#buy_autographed_book").css('display', 'none');
});