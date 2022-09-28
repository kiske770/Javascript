let marker;
let map;

function initMap(){
    //console.log("iniciando mapa!")
    const position ={
        lat: 4.734824 ,
        lng: -74.101976
    }

     map = new google.maps.Map(document.getElementById("map"),
     {
        zoom: 4,
        center: position
    })

    marker = new google.maps.Marker({
        position: position,
        map, 
        title: "Initial position"
    })

    //navigator.geolocation  -> para acceder a las propiedades de
    //la geolocalizacion del navegador

    //obetener la geolocalizacion
    geoPosiciona()
}

function geoPosiciona(){
    if (navigator.geolocation){
        const geoLoc = navigator.geolocation
        const options = {timeout: 60000}
        const watchPos = geoLoc.watchPosition( 
                centrarMapa,
                onError,
                options)
    }else{
        alert("This browser does not support geolocation.")
    }
}

function centrarMapa (position){
    const newPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    } 

    console.log(newPos)
    marker.setPosition(newPos)
    map.setCenter(newPos)
}

function onError(error){
    console.error(error)
}