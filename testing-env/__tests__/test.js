const {JSDOM} = require('jsdom');

console.log("Dies ist ein Test :)");

const html_doc = `
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    crossorigin=""/>
<title>Scooteq Data Provider</title>
</head>
<body>
<div id="map"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
    crossorigin=""></script>
<script>
    var map = L.map('map').setView([53.55, 10.0], 13);

    var markers = [];
    var marker1 = null;
    var marker2 = null;

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    function addMarkers()
    {
        marker1 = L.marker([50,60]);
        marker2 = L.marker([40,50]);

        markers.push(
            marker1
        );

        markers.push(
            marker2
        );
    }
    function test_getDistance()
    {
        //return marker1._latlng.distanceTo(marker2._latlng);
        return 5;
    }

</script>
</body>
</html>
`;

//const dom = new JSDOM(html_doc);
const dom = new JSDOM(html_doc, { runScripts: 'dangerously' });
//global.window = dom.window;
const window = dom.window;

//Get test_getDistance function from loaded html doc
//const {test_getDistance} = window;
console.log(typeof window.test_getDistance);

// Run the test
const result = window.test_getDistance();
console.log(result);

window.addMarkers();
//expect(result).toBe(5);

// Clean up
delete global.window;
