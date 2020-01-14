var map, infowindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 2
    });
}

async function getData () {
    const response = await fetch('/api');
    const data = await response.json();
    console.log(data);
    data.forEach(element => {
        var latLng = new google.maps.LatLng(element.lat, element.lon);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: element.firstName,
            animation: google.maps.Animation.DROP
        });
        var contentString = '<h1><img style="border-radius: 22px; margin-right: 10px;" src="'+element.Image+'" width="40px" height="40px">'+element.firstName+'</h1>' +
        '<p>Latitude: ' + element.lat + '</p><p>Longitude: ' + element.lon + 
        '</p><p>Tiime: ' + element.timestamp + '</p><p>Weather: ' + element.weather.currently.summary+'</p>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
    });
}

getData();