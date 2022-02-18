
  mapboxgl.accessToken = 'pk.eyJ1IjoicHJhYmhvIiwiYSI6ImNremFycTQwaTBlcGYydnM2amdnOTZxcXYifQ.W5CgypIyE-BBiPL4cREPAQ';
  navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true})
  function successLocation(position){
      console.log(position);
      setupMap([position.coords.longitude,position.coords.latitude])


  }
  function errorLocation() {
      setupMap([-23,53]);

    }
function setupMap(center){

    
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:center,
    zoom: 3
   
  });
  const nav = new mapboxgl.NavigationControl();
   map.addControl(nav);
   var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });

  
 
  
  map.addControl(directions, 'top-left');
  
 
}
  
      
 