$(document).ready(function(){

	$("#product a:contains('Produkty')").parent().addClass('active');


$(function(){ 
     var navMain = $("#main-menu");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });

$(".navbar-nav li a").click(function() {
    var navbar_toggle = $('.navbar-toggle');
    if (navbar_toggle.is(':visible')) {
        navbar_toggle.trigger('click');
    }
});


$("ul.tabs li").click(function(){


		//$(this).toggleClass("active").siblings(this).removeClass("active");

		$("ul.tabs li.active").removeClass("active");
		$(this).addClass("active");


		var panelId = $(this).attr("rel");

		//alert(panelId);
		$(".tab-panels .panel.active").slideUp(0, function(){
			$(this).removeClass("active");

			$("#"+panelId).fadeIn(500, function(){
				$(this).addClass("active");
			})

			
		});

	});



});


