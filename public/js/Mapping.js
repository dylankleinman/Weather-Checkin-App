var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 3
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
            map: map
        });
    });
}

getData();