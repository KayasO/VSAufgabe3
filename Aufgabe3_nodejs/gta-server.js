/**
 * Template für Übungsaufgabe VS1lab/Aufgabe3
 * Das Skript soll die Serverseite der gegebenen Client Komponenten im
 * Verzeichnisbaum implementieren. Dazu müssen die TODOs erledigt werden.
 */

/**
 * Definiere Modul Abhängigkeiten und erzeuge Express app.
 */

var http = require('http');
//var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));

/**
 * Konfiguriere den Pfad für statische Dateien.
 * Teste das Ergebnis im Browser unter 'http://localhost:3000/'.
 */

// TODO: CODE ERGÄNZEN
app.use(express.static(__dirname + "/client"));

/**
 * Konstruktor für GeoTag Objekte.
 * GeoTag Objekte sollen min. alle Felder des 'tag-form' Formulars aufnehmen.
 */

// TODO: CODE ERGÄNZEN
function GeoTagObject(latitude, longitude, name, hashtag) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.name = name;
    this.hashtag = hashtag;
}

/**
 * Array als Speicher für Geo Tags.
 * Funktion zur Suche von Geo Tags in einem Radius um eine Koordinate.
 * Funktion zur Suche von Geo Tags nach Suchbegriff.
 * Funktion zum hinzufügen eines Geo Tags.
 * Funktion zum Löschen eines Geo Tags.
 */

// TODO: CODE ERGÄNZEN
var geoTags = [];
var searchRadius = function(latitude, longitude) {

};

var searchWord = function(word) {
    geoTags.forEach(function(tag) {
       if (tag.name === word) {
           return tag;
       }
    });
};

var addGeoTag = function(latitude, longitude, name, hashtag) {
    if (geoTags.indexOf(name) === -1) {
        var geoTag = new GeoTagObject(latitude, longitude, name, hashtag);
        geoTags.push(geoTag);
    }
};

// TODO: maybe add different parameters to find tag.
var deleteGeoTag = function(name) {
    geoTags.forEach(function(tag) {
       if (tag.name === name) {
           delete tag.name;
           // abusing return for break
           return 1;
       }
    });
};

/**
 * Route mit Pfad '/geotags' für HTTP 'GET' Requests.
 * (http://expressjs.com/de/4x/api.html#app.get.method)
 *
 * URLs enthalten Query Parameter für 'lat', 'lon' und 'term'.
 * (siehe http://expressjs.com/de/4x/api.html#req.query)
 *
 * Im Response wird ein JSON Array mit Geo Tag Objekten gesendet.
 * Die Objekte liegen in einem Standard Radius um die Koordinate (lat, lon).
 * Falls 'term' vorhanden ist, wird nach Suchwort gefiltert.
 */

// TODO: CODE ERGÄNZEN

app.get('/geotags', function(req, res) {
    var query = url.parse(req.url, true).query;
    var lat = query["lat"];
    var lon = query["lon"];
    var term = query["term"];
    
    stringify()

    // sendet JSONarray (daten im standard raius um lat,lon)
    res.send()
});

/**
 * Route mit Pfad '/geotags' für HTTP 'POST' Requests.
 * (http://expressjs.com/de/4x/api.html#app.post.method)
 *
 * Requests enthalten im Body die Felder des 'tag-form' Formulars.
 * (http://expressjs.com/de/4x/api.html#req.body)
 *
 * Mit den Formulardaten wird ein neuer Geo Tag erstellt und gespeichert.
 *
 * Am Ende leitet die Route den Aufruf auf die Standard Page um.
 * (http://expressjs.com/de/4x/api.html#res.redirect)
 */

// TODO: CODE ERGÄNZEN

app.post('/geotags', function(req, res) {

});

/**
 * Setze Port und speichere in Express.
 */

var port = 3000;
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
