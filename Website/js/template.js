/*global $:false */
(function($){
    $.fn.parallax = function(options){
        var $$ = $(this);
        offset = $$.offset();
        var defaults = {
            "start": 0,
            "stop": offset.top + $$.height(),
            "coeff": 0.95
        };
        var opts = $.extend(defaults, options);
        return this.each(function(){
            $(window).bind('scroll', function() {
                windowTop = $(window).scrollTop();
                if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
                    newCoord = windowTop * opts.coeff;
                    $$.css({
                        "background-position": "50%"+ newCoord + "px"
                    });
                }
            });
        });
    };
})(jQuery);

// call the plugin
$('#team-top').parallax({ "coeff":-0.25 });
$('#services-top').parallax({ "coeff":-0.14 });
$('#works-top').parallax({ "coeff":-0.10 });
$('#blog-top').parallax({ "coeff":-0.08 });
$('#contact-top').parallax({ "coeff":-0.04 });
	  
/*global $:false */
	 // DOM ready
	 $(function() {"use strict";
	   
      // Create the dropdown base
      $("<select />").appendTo(".nav-container nav");
      
      // Create default option "Go to..."
      $("<option />", {
         "selected": "selected",
         "value"   : "",
         "text"    : "Go to..."
      }).appendTo(".nav-container nav select");
      
      // Populate dropdown with menu items
      $(".nav-container nav a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo(".nav-container nav select");
      });
      
	   // To make dropdown actually work
      $("nav select").change(function() {
        window.location = $(this).find("option:selected").val();
      });
	 
	 });

	 