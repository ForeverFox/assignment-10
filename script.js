$("document").ready(function() {
	$("a").click(function(evt) {
		$(this).addClass("new-background");
	});

	$("h2.title").click(function(evt) {
		$(this).fadeOut(800, function(){

		});
	});
});
