import '../scss/main.scss';

document.addEventListener("DOMContentLoaded", function(){

    let style = [
    {
        "stylers": [
            {
                "hue": "#dd0d0d"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    }
];

var data = {
    pictures:  [
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/SphinxGiza.jpg',
            name: 'Sphinx',
            lat: '29.975232',
            lng: '31.137610'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Uluru_%28Helicopter_view%29-crop.jpg/1920px-Uluru_%28Helicopter_view%29-crop.jpg',
            name: 'Uluru',
            lat: '-25.344154',
            lng: '131.036997'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg/800px-Tour_Eiffel_Wikimedia_Commons.jpg',
            name: 'Eifel Tower',
            lat: '48.858349',
            lng: '2.294515'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg',
            name: 'Rio de Janeiro',
            lat: '-22.951965',
            lng: '-43.210434'
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ulica_Prosta_w_Warszawie_2015.JPG/1280px-Ulica_Prosta_w_Warszawie_2015.JPG',
            name: 'Prosta',
            lat: '52.231215',
            lng: '20.988370'
        }
    ]
}

var score = 0;
var route = 0;



//etap 1.

function rounds(el){
    route++;
    var latlong = {lat: parseFloat(el.lat), lng: parseFloat(el.lng) };

    var map = new google.maps.Map(document.getElementById('map'),{

    zoom: 1,
    center: latlong,
    styles: style
    });


    var mainPic = document.querySelector(".main-pic");
    mainPic.style.backgroundImage = "url(" + el.url + ")";




  map.addListener("click", function(e) {
    console.log(e.latLng.lat());
    console.log(e.latLng.lng());

    //Adress Markera - Edynburg
    var origin1 = new google.maps.LatLng(parseFloat(el.lat), parseFloat(el.lng));
    //Adress Klikniętego miejsca na mapie
    var origin2 = new google.maps.LatLng(e.latLng.lat(), e.latLng.lng())

    /**
    * Alternatywna wersja do rozbudowania pobieranie dystansów komunikacyjnych np. dystans do przejechania autem
    */



    /**
    * Wersja pobiera odległość w linii prostej i rysuje kreske czerwoną
    */
    //Czerwona krecha
    var flightPlanCoordinates = [origin1, origin2];
    var flightPath = new google.maps.Polyline({path: flightPlanCoordinates, geodesic: true, strokeColor: '#FF0000', strokeOpacity: 1.0, strokeWeight: 2});

    console.log(flightPath);

    flightPath.setMap(map);

    console.log(flightPath.getPath());

    var heading = google.maps.geometry.spherical.computeDistanceBetween(origin1, origin2);

    console.log(Math.round(heading / 1000));

    score += Math.round(heading / 1000);
    document.querySelector(".singleScore strong").innerText = Math.round(heading / 1000);
    document.querySelector(".totalScore strong").innerText = score;
    return;



}); }

rounds(data.pictures[route]);


document.querySelector("#click").addEventListener("click", () => {
    console.log("Działa");
    rounds(data.pictures[route]);
})


// var marker2 = new google.maps.Marker({
// position: {lat: 52.214693, lng: 21.028119},
// map: map
// });
//
//
// var infowindow2 = new google.maps.InfoWindow ({
//     content: "<h1>Chopin</h1>"
// });
//
// marker2.addListener('click', function() {
//     infowindow2.open(map, marker2);
//
// });



var btn = document.querySelector('.button');

btn.addEventListener("click", function(){

var tr = document.querySelector('#players tr');

var newtr = tr.cloneNode(true);

var name = document.querySelector('#name').value;
var city = document.querySelector('#city').value;

newtr.querySelectorAll('td')[0].innerText = name;
newtr.querySelectorAll('td')[1].innerText = city;

document.querySelector('#players tbody').appendChild(newtr);

});






});
