/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// will run once DOM is ready for JS to execute
$(document).ready(function(){

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// create leaflet for object inside #map-container div

var map = L.map('mapid').setview([46.878, -121.760], 13);

// create layer for street view
var osmURL = 'http://{s}.title.openstreetmap.org/{z}/{y}.png';

var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

	// create layer for sattelite view
	var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    	subdomains: ['otile1','otile2','otile3','otile4']
	}).addTo(map);

	// create layer for map view layer
	var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    	subdomains: ['otile1','otile2','otile3','otile4']
	});

	//Create a marker for the specified location
	var marker = L.marker([46.852, -121.760]).addTo(map);
	//Create a message on the marker creater above
	marker.bindPopup("<b>Hello from Mt. Rainier!</b>.").openPopup();

	//Create Layer Control: Choose Sat View, Map View, or Street View
	var mapLayers = {
		  "Satellite": satLayer, //satLayer map image
    	"Map View": drawLayer, //mapView map image
    	"Open Street Maps": osm //streeView map image
	};

	L.control.layers(mapLayers).addTo(map); //adding controls to map

});

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)
