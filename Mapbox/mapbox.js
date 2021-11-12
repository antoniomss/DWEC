mapboxgl.accessToken = 'pk.eyJ1IjoiYW50b25pb21pZ3VlbDEyIiwiYSI6ImNrdWk3eWZ3dTBrNWYycm96YXh3amFxeG8ifQ.GTSaSz_Q8QCxYYhF-Yny4g';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/traffic-day-v2',
    center: [-3.62388,37.18922],
    zoom: 13
    });

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
    }));
map.addControl(
    new MapboxDirections({
    accessToken: mapboxgl.accessToken
    }),
    'top-left'
    );

map.setLayoutProperty('country-label', 'text-field', [
'get',
`name_${spanish}`
]);


