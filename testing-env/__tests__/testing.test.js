const {JSDOM} = require('jsdom');

describe('My CDN Library', () => {
    it('should correctly perform a library function', () => {
        
        const html_doc = `
        <!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
            crossorigin=""/>
        <title>Scooteq Data Provider</title>
    </head>
    <body>
        <div id="map"></div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
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
                marker1 = L.marker([]);
                marker2 = L.marker([]);

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

        // fetch('testing.html')
        //     .then(response => response.text())
        //     .then(html => {
        //         // Use the HTML string here
        //         html_doc = html;
        //         console.log(html);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });

        const dom = new JSDOM(html_doc);
        //global.window = dom.window;
        const window = dom.window;

        // Dynamically load the CDN script
        // const script = document.createElement('script');
        // script.src = 'https://cdn.example.com/myLibrary.js';
        // document.head.appendChild(script);

        // Access the loaded library function
        //const { myLibraryFunction } = window;

        //Get test_getDistance function from loaded html doc
        const {test_getDistance} = window;
        console.log(typeof test_getDistance);

        // Run the test
        const result = test_getDistance();
        expect(result).toBe(5);

        // Clean up
        delete global.window;
    });
  });