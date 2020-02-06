


/*
$(document).ready(function() {
	    $('a[href^="#"]').on('click', function (e){
	    	e.preventDefault();

	    	var target = this.hash;
	    	var $targer = $(target);
		    
		    //Scroll and show hash
		    $('html, body').animate({
		    	'scrollTop': $targer.offset().top
		    }, 1000, 'swing', function () {
		    	window.location.hash = target+100;
		    });
			//Scroll and dont shaw hash
			//$('html, body').animate({
			//	'scrollTop': $target.offset().top
			//}, 1000, 'swing');
		});
});

/*
$(window).load(function(){
  if(window.location.hash){
    $('a[href="'+window.location.hash+'"]').trigger('click');
  }
});

$(document).on('click', 'a[data-toggle="profile"]', function(){
  window.location.hash = $(this).attr('href');
})
