 	var turnoffButtons = function(){
 		$('.fg_missed_button').removeClass("fg_missed_active")
 		$('.fg_made_button').removeClass("fg_made_active")
		$('.rebound_button').removeClass("rebound_active")
		$('.steal_button').removeClass("steal_active")
		$('.turnover_button').removeClass("turnover_active")
		$('.block_button').removeClass("block_active")
 	};

 	var turnOffMapDirections = function(){
		$('#directions').fadeOut();
	};


 $(document).ready(function() {

	$('.fg_missed_button').click(function() {
			turnoffButtons();
			turnOffMapDirections();
	    $(this).toggleClass("fg_missed_active");
	});

	$('.fg_made_button').click(function() {
			turnoffButtons();
			turnOffMapDirections();
	    $(this).toggleClass("fg_made_active");
	});

	$('.rebound_button').click(function() {
			turnoffButtons();
			turnOffMapDirections();
	    $(this).toggleClass("rebound_active");
	});

	$('.steal_button').click(function() {
			turnoffButtons();
			turnOffMapDirections();
	    $(this).toggleClass("steal_active");
	});

	$('.turnover_button').click(function() {
			turnoffButtons();
			turnOffMapDirections();
	    $(this).toggleClass("turnover_active");
	});

	$('.block_button').click(function() {
			turnoffButtons();
			turnOffMapDirections();
	    $(this).toggleClass("block_active");
	});

	$('.court').click(function(){
		$('#directions').fadeOut();
	})


});
