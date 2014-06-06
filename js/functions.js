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
});

//APPARAAT ID
var id = 1;


function loadSentMessages(){
	$( ".page3-list" ).empty();
	 $.ajax({ 
                type: 'GET', 
                url: "getmessages.php?id="+id+"", 
                dataType: 'json',
                success: function (data) { 

           
                    if(!(jQuery.isEmptyObject(data))) {
                    $.each(data, function(index, element) {
                       // console.log(element[1].date);
                        for (var key in element) {
                           var obj = element[key];
                           for (var prop in obj) {
                            var lon = obj.location_lon;
                            var lat = obj.location_lat;

                            var loc = loadLocation(lat, lon);
                            console.log(loc);
                            if((prop == "id_from") && (obj['id_from'] == id)) {
                                 $('.page3-list').append('<li><a href="#" class="ui-btn" data-transition="slide"><ul><li>'+obj.message+'</li><li>'+ loc + '</li></ul></a></li>');
              
                            }
                             
                           }
                        }
                        
                    });
                    }else {
                	$('.page3-list').append('No sent messages yet.');
                }
                }
            });
}
function loadLocation(lat,lon){
   $.ajax({ 
                type: 'GET', 
                url: "http://open.mapquestapi.com/nominatim/v1/search?q="+lat+","+lon+"&format=json", 
                dataType: 'json',
                success: function (data) { 

           
                    if(!(jQuery.isEmptyObject(data))) {
                    $.each(data, function(index, element) {
                      console.log(element.display_name);
                     return element.display_name;
               
                    });
                    }else {
                  return "No location";
                }
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
                   if(!(jQuery.isEmptyObject(data))){
                    $.each(data, function(index, element) {
                     //   console.log(element[1].date);
                        for (var key in element) {

                           var obj = element[key];

                           for (var prop in obj) {

                            var loc = loadLocation(obj.location_lat,obj.location_lon);

                            if((prop == "id_to") && (obj['id_to'] == id)) {
                                 $('.page2-list').append('<li><a href="#" class="ui-btn" data-transition="slide"><ul><li>'+obj.message+'</li><li>'+loc+ '</li></ul></a></li>');
              					
                            }
                             
                           }
                        }
                        
                    });
                }else {
                	$('.page2-list').append('No received messages yet.');
                }
                }
            });
}

$(document).on('click touchstart','.ui-navbar .ui-btn', function () {
	loadSentMessages();
	loadReceivedMessages();
	 });
