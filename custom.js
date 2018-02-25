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

	 $('.owl-carousel').owlCarousel({
	 loop: true,
	 responsive:{
	     0:{
	         items:1
	     },
	     576:{
	         items:3
	     },
	     768:{
	         items:4
	     },
	     1270:{
	         items:5
	     }
	 }
	 })

	 var owl = jQuery('.owl-carousel');
	 owl.owlCarousel();
	 // Go to the next item
	 jQuery('.owl-next').click(function() {
	     owl.trigger('next.owl.carousel');
	 })
	 // Go to the previous item
	 jQuery('.owl-prev').click(function() {
	     // With optional speed parameter
	     // Parameters has to be in square bracket '[]'
	     owl.trigger('prev.owl.carousel', [300]);
	 })
});