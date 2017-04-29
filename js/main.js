/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// will run once DOM is ready for JS to execute
$(document).ready(function(){


  // carousel for images
  $('.carousel').carousel({
    interval: 5500
  });


// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// create leaflet for object inside #map-container div

// create a map within the map-container div
var map = L.map('map-container').setView([46.843, -121.670], 9);

var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

var osmAttrib='Map data © <a href="http://openstreetmap.org">StreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

var streetLayer = L.tileLayer( 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'bvasilop.53e23efe',
  accessToken: 'pk.eyJ1IjoiYnZhc2lsb3AiLCJhIjoiY2oxeTRyaTF6MDA3ZTMzbnUyeGU4OGU0bCJ9.tpBVd1s-paEv6otpjh2bDA'
});


  var satLayer = L.tileLayer( 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'bvasilop.0ed6442b',
    accessToken: 'pk.eyJ1IjoiYnZhc2lsb3AiLCJhIjoiY2oxeTRyaTF6MDA3ZTMzbnUyeGU4OGU0bCJ9.tpBVd1s-paEv6otpjh2bDA'
  });

  var drawnLayer = L.tileLayer( 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,

    id: 'bvasilop.cd971359',
    accessToken: 'pk.eyJ1IjoiYnZhc2lsb3AiLCJhIjoiY2oxeTRyaTF6MDA3ZTMzbnUyeGU4OGU0bCJ9.tpBVd1s-paEv6otpjh2bDA'
  });




//Add map layers


/*
var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap"   target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a     href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img  src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap"   target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a     href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img  src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});
*/
var mapLayers = {
    "Map View": drawnLayer,
    "Satellite": satLayer,
    "Open Street Maps": streetLayer
};

L.control.layers(mapLayers).addTo(map);
    drawnLayer.addTo(map);


//show markers with popups at no fewer than 3 interesting locations.
var marker = L.marker([46.852, -121.760]).addTo(map);
    marker.bindPopup('<b>Welcome to Mt. Rainier!</b><br>This peak is 14,417 feet (4,394 m) high.<br><a href="http://visitrainier.com">Visit Mt. Rainier!</a>');

var marker = L.marker([46.845757, -121.767565]).addTo(map);
    marker.bindPopup('<b>Point Success</b><br>Elevation: 14,164 feet (4,300 m)');

var marker = L.marker([46.869047, -121.517128]).addTo(map);
    marker.bindPopup('<b>Tipsoo Lake</b><br>Elevation: 5,290 ft (1,612 m)');

var marker = L.marker([46.785836, -121.735372]).addTo(map);
    marker.bindPopup('<b>Paradise</b><br>Elevation: 5,400 ft (1,645 m)');

var circle = L.circle([46.927725, -121.493720], 1000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    }).addTo(map);
    circle.bindPopup('<b>Crystal Mountain Ski Resort</b>');

/* tabs*/
    $('#tab-buttons a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});



    /* smooth scrolling effects */


 $(document).ready(function(){
   // Add smooth scrolling to all links
   $("a").on('click', function(event) {

     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();

       // Store hash
       var hash = this.hash;

       // Using jQuery's animate() method to add smooth page scroll
       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 800, function(){

         // Add hash (#) to URL when done scrolling (default click behavior)
         window.location.hash = hash;
       });
     } // End if
   });
 });







});
