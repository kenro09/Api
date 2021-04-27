







"use strict";
//*** Obteniendo datos con fetch

//var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
var posts = null;
var cap = null;




//boton.addEventListener('click', function () {

function selector(){
  document.getElementById("contenedor").innerHTML="";
  document.getElementById("prueba").innerHTML="";
  var select = document.getElementById("capitales");
  var capi  = select.options[select.selectedIndex].text;
  cap=capi;
  validar(cap);
  validarcapi(cap);
}


function validar(cap){

  fetch('https://restcountries.eu/rest/v2/capital/'+ cap)
  .then(data => data.json())
  .then(data => {
  posts = data;
  console.log(posts);
  mostrarDatos(posts)
  });
  
  //});
  
  function mostrarDatos(posts) {
  posts.map((post, i) => {
  
  
    let pais = document.createElement('h1');
    let capi = document.createElement('h3');
    let regi = document.createElement('h3');
    let subregi = document.createElement('h3');
  
    let band = document.getElementById('bander');
    
      pais.innerHTML = post.name;
      capi.innerHTML = post.capital;

      regi.innerHTML = post.region;
      subregi.innerHTML = post.subregion;
  

       band.innerHTML = `<img src="${post.flag }" height="250" width="350" />`;



      
        
    contenedor.appendChild(pais);
    contenedor.appendChild(capi);
    contenedor.appendChild(regi);
    contenedor.appendChild(subregi);
  





    //const image = `<div><img src="${band}" /></div>`;
    //contenedor.insertAdjacentHTML('beforeend', image);
    //contenedor.appendChild(band);
   


  })
  }
  


}























