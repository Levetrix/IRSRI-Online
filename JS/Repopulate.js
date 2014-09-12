$(document).ready(function(){
	$(".profile").click(function(){
		console.log("click function being added");
		var $this = $(this);
		console.log($this.attr("data-showid"));
		$(".infoContainer").addClass("showInfoContainer");
		$(".two .show").addClass("hide").removeClass("show");
		$("h3.bio").removeClass("hide").addClass("show");
		$("#"+$this.attr("data-showid")).addClass("show").removeClass("hide");
		var $contHeight = $(".infoContainer").innerHeight();
		$(".infoContainer").css({"height": $contHeight});
		
	});
});