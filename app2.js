"use strict";
//*** Obteniendo datos con fetch

//var boton = document.getElementById('boton');
var contenedor2 = document.getElementById('contenedor2');
var posts = null;

//boton.addEventListener('click', function () {

/*fetch('https://api.openweathermap.org/data/2.5/weather?lat=-25.183331&lon=-57.349998&appid=76586c1d29fa28ec1ec11d579c82d664')
.then(data => data.json())
.then(data => {
posts = data;
console.log(posts);
mostrarDat(posts)
});
*/



//});
/*
function mostrarDat(posts) {
posts.map((post) => {


  let titulo = document.createElement('p');
 // let contenido = document.createElement('p');
 // let capi = document.createElement('p');
  
    titulo.innerHTML = post.base;
 //   contenido.innerHTML = post.region;
//    capi.innerHTML = post.capital;
    
      
  contenedor2.appendChild(titulo);
 // contenedor.appendChild(contenido);
//  contenedor.appendChild(capi);

})
}
*/

var latitud = null;
var longitud = null;


//boton.addEventListener('click', function () {

/*
function selector2(){
  document.getElementById("prueba").innerHTML="";
  var selecti = document.getElementById("capitales");
  var capi  = selecti.options[selecti.selectedIndex].text;
  validarcapi(capi);
  
}*/




function validarcapi(capi){

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + capi + "&appid=76586c1d29fa28ec1ec11d579c82d664")
    .then((response) => response.json())
      .then((data) => {
        var longilati = data.coord;
        document.getElementById("prueba").innerHTML += `
         <h3><p id=long>Longitud: ${longilati.lat}</p></h3> 
          <h3><p id=lat>Latitud: ${longilati.lon}</p></h3>  `;
        var clim = data.weather;
    var clima=clim[0]
    document.getElementById("prueba").innerHTML += `
    <h2><p id=lat>Clima: ${clima.description}</p></h2>`;

        // data.forEach(element => {
        //cargar(${data.lat});
        //});
    
        latitud = longilati.lat;
        longitud = longilati.lon;
        iniciarMap();

        console.log(data.coord);
        console.log(data.weather);
        

      })
      .catch((err) => console.log(err));
    



}


/*
function selecpaises(){

    let cbxpais = document.getElementById('cbxpais');
  let paises = cbxpais.value();
  
  console.log(paises);
  
  } 
  selecpaises();
  */


  //  var latitud = 4.6722257;
  //  var longitud = -74.072092;
  
  /*
  function iniciarMap(){
      console.log(latitud);
    var coord = {lat:latitud ,lng: longitud};
    var mapa = new google.maps.Map(document.getElementById('mapa'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      mapa: mapa
    });
  }*/



  function iniciarMap(){

  var coord = {lat:latitud ,lng: longitud};
  var mapa = new google.maps.Map(document.getElementById('mapa'),{
    zoom: 5,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
//    mapa: mapa
  });
}