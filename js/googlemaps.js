function GoogleMap(lat, lng, canvas){
	var canvas = canvas;
 
	this.initialize = function(){
		var map = showMap();
	}
	 
	var showMap = function(){
		//Create map
		var myLatLng = new google.maps.LatLng(lat, lng);

		var mapOptions = {
			center: myLatLng,
			zoom: 20,
			disableDefaultUI: true,
			scrollwheel: false,
		    navigationControl: false,
		    mapTypeControl: false,
		    scaleControl: false,
		    draggable: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
	 
		var map = new google.maps.Map(canvas, mapOptions);

		//Create markers
		//var baseUrl = 'http://localhost/foundation/';
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: "Me",
			animation: google.maps.Animation.BOUNCE,
			//icon: 'img/marker3.png',
		});

		return map;

	}



	/*function initialize() {
  var myLatLng = new google.maps.LatLng(53.000980, 6.538572);
  var centerLatLng = new google.maps.LatLng(53.000980, 6.825604);
  
  var mapOptions = {
	scrollwheel: false,
    zoom: 10,
    center: centerLatLng,
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var baseUrl = 'http://localhost/foundation/';
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
	animation: google.maps.Animation.BOUNCE,
	icon: 'img/marker3.png',
  });  
  
  google.maps.event.addDomListener(window, 'resize', function() {
	if(window.innerWidth < 624){
  		map.setCenter(myLatLng);
	}else{
  		map.setCenter(centerLatLng);
	}
    
  });*/
}