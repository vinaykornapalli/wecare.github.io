function is_touch_device() {
  return !!('ontouchstart' in window);
}

jQuery(window).load(function() {
	
	
/********************************************/	
	if( is_touch_device() ){	
	
		jQuery('.background_fixed').each(function(){  
		jQuery(this).css('background-attachment','scroll');  
		});
	};  
/*************************************************/	

});
$(document).ready(function() {
		
	$(window).load(function(){
        $('.page-loader').fadeOut('slow');
     });
	/*
	displayHints();
*/
	var ResetInput = function(){
    	$('input, textarea').each(function() {
        	$(this).val('').text('');
    	});
	};
	$(function() {
		if (window.PIE) {
			$('.rounded').each(function() {
				PIE.attach(this);
			});
		}
	});
});
/*
var displayHints = function()
{
	$('#contactform .name').attachHint('Name');
	$('#contactform .email').attachHint('Email Address');
	$('#contactform .message').attachHint('Message');
};
*/
jQuery(window).resize(function(){


});
//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------

var StringFormat = function() {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var regExpression = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(regExpression, arguments[i + 1]);
    }
    return s;
}

function is_touch_device() {
  return !!('ontouchstart' in window);
}