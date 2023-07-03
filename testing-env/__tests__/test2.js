const { JSDOM } = require('jsdom');
const L = require('leaflet');

// Create a JSDOM instance
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="map"></div></body></html>', {
  runScripts: 'dangerously',
  pretendToBeVisual: true,
});

// Set up a global window object
global.window = dom.window;
global.document = dom.window.document;

// Attach Leaflet to the global window object
global.window.L = L;

// Use Leaflet
const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);
