$(function () {
	$.get( "ajax/section1.html", function( data ) {
		$("#section1").html( data );
	});
	$("#section-2-checkbox").click(function() {
		if($.trim($("#section2").html())==''){
			$.get( "ajax/section2.html", function( data ) {
				$("#section2").html( data );
			});
		} 
	});
	$("#section-3-checkbox").click(function() {
		if($.trim($("#section3").html())==''){
			$.get( "ajax/section3.html", function( data ) {
				$("#section3").html( data );
			});
		} 
	});
	$("#section-4-checkbox").click(function() {
		if($.trim($("#section4").html())==''){
			$.get( "ajax/section4.html", function( data ) {
				$("#section4").html( data );
			});
		} 
	}); 		         	
});