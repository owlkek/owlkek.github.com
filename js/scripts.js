$(document).ready(function(){

	var switchmode = false;
		document.getElementById('darkmode').addEventListener('click', function() {
			if(switchmode == true)
			{
				console.log("casual mode");
				document.body.style = 'background-color: azure;';
			}
			else
			{
				console.log("dark mode");
				document.body.style = 'background-color: rgb(20, 30, 44)';
			}

			switchmode = !switchmode;
		});

  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    
    $(".zoom").hover(function(){
		
		$(this).addClass('transition');
	}, function(){
        
		$(this).removeClass('transition');
	});
});
    

$(function () {
	$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});



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
