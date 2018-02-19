jQuery(document).ready(function(){
	
	//responsive menu btn
	 jQuery(".menu-btn i").click(function(){
	  jQuery(".menu-area").slideToggle();
	 })
	 jQuery(window).resize(function(){
	  var screenSize=jQuery(window).width();
	  if (screenSize > 768) {
	    jQuery(".menu-area").removeAttr("style");
	  }
	 })
});