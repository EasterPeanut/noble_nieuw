// JavaScript Document
$(document).on('pagecreate','#page1',function(){

	/*
	$('p').on('tap',function(){
		$(this).hide();
	});
	$('p').on('taphold',function(){
		$(this).hide();
	});
	*/
	$('.a').on('swipe',function(){
  		alert("You swiped!");
	});
	$('p').on('swipeleft',function(){
  		alert("You swiped left!");
	});
	$('p').on('swiperight',function(){
  		alert("You swiped right!");
	});
var screen = $.mobile.getScreenHeight();

var header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight()  - 1 : $(".ui-header").outerHeight();

var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight();

/* content div has padding of 1em = 16px (32px top+bottom). This step
   can be skipped by subtracting 32px from content var directly. */
var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height();

var content = screen - header - footer - contentCurrent - 94;

$(".ui-content").height(content);
});

var id = 1;


function loadSentMessages(){
	$( ".page3-list" ).empty();
	 $.ajax({ 
                type: 'GET', 
                url: "getmessages.php?id="+id+"", 
                dataType: 'json',
                success: function (data) { 
                   
                    $.each(data, function(index, element) {
                        console.log(element[1].date);
                        for (var key in element) {
                           var obj = element[key];
                           for (var prop in obj) {
                            if((prop == "id_from") && (obj['id_from'] == id)) {
                                 $('.page3-list').append('<li><a href="#" class="ui-btn" data-transition="slide"><ul><li>'+obj.message+'</li><li>'+obj.date+ '</li></ul></a></li>');
              
                            }
                             
                           }
                        }
                        
                    });
                }
            });
}
function loadReceivedMessages(){
	$( ".page2-list" ).empty();
 $.ajax({ 
                type: 'GET', 
                url: "getmessages.php?id="+id+"", 
                dataType: 'json',
                success: function (data) { 
                   
                    $.each(data, function(index, element) {
                        console.log(element[1].date);
                        for (var key in element) {
                           var obj = element[key];
                           for (var prop in obj) {
                            if((prop == "id_to") && (obj['id_to'] == id)) {
                                 $('.page2-list').append('<li><a href="#" class="ui-btn" data-transition="slide"><ul><li>'+obj.message+'</li><li>'+obj.date+ '</li></ul></a></li>');
              
                            }
                             
                           }
                        }
                        
                    });
                }
            });
}

$(document).on('click touchstart','a', function () {
	loadSentMessages();
	loadReceivedMessages();
	console.log("haaaa");
	 });
