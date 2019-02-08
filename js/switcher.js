/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	

		$("ul.colors .color1" ).click(function(){
			$("#color" ).attr("href", "css/colors/color1.html" );
			return false;
		});
		
		$("ul.colors .color2" ).click(function(){
			$("#color" ).attr("href", "css/colors/color2.html" );
			return false;
		});
		
		$("ul.colors .color3" ).click(function(){
			$("#color" ).attr("href", "css/colors/color3.html" );
			return false;
		});

		$("ul.colors .color4" ).click(function(){
			$("#color" ).attr("href", "css/colors/color4.html" );
			return false;
		});

		$("ul.colors .color5" ).click(function(){
			$("#color" ).attr("href", "css/colors/color5.html" );
			return false;
		});
		
		$("ul.colors .color6" ).click(function(){
			$("#color" ).attr("href", "css/colors/color6.html" );
			return false;
		});
		$("ul.colors .color7" ).click(function(){
			$("#color" ).attr("href", "css/colors/color7.html" );
			return false;
		});
		$("ul.colors .color8" ).click(function(){
			$("#color" ).attr("href", "css/colors/color8.html" );
			return false;
		});
		$("ul.colors .color9" ).click(function(){
			$("#color" ).attr("href", "css/colors/color9.html" );
			return false;
		});
		$("ul.colors .color10" ).click(function(){
			$("#color" ).attr("href", "css/colors/color10.html" );
			return false;
		});
		$("ul.colors .color11" ).click(function(){
			$("#color" ).attr("href", "css/colors/color11.html" );
			return false;
		});
		$("#style-switcher .bottom a.settings").click(function(e){
			e.preventDefault();
			var div = $("#style-switcher");
			console.log(div.css("left"));
			if (div.css("left") === "-189px") {
				$("#style-switcher").animate({
					left: "0px"
				}); 
			} else {
				$("#style-switcher").animate({
					left: "-189px"
				});
			}
		})
		
		$("ul.colors li a").click(function(e){
			e.preventDefault();
			$(this).parent().parent().find("a").removeClass("active");
			$(this).addClass("active");
		})
				
	});