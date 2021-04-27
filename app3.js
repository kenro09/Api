
var pokemon = "2";

var p = document.getElementById('poke');
var pk = null;




//boton.addEventListener('click', function () {

function pokeselector(){
  document.getElementById("poke").innerHTML="";
  document.getElementById("move").innerHTML="";
  var select = document.getElementById("pokemon");
  var pko  = select.options[select.selectedIndex].text;
  pk=pko;
  validarpoke();
}



function validarpoke(){



    fetch("https://pokeapi.co/api/v2/pokemon/"+pk)
    .then((response) => response.json())
      .then((data) => {
        //var po = data.name;
        document.getElementById("poke").innerHTML += `
         <h1><p id=pok>${data.name}</p></h1>
         <img src="${data.sprites.front_default }"
         <h2><p id=pok2>Especie: ${data.species.name}</p></h2>
         `;

         var move = data.moves;
         var mov=move[0]
         document.getElementById("move").innerHTML += `
         <h3><p id=movee>Movimientos: ${mov.move.name}</p></h3>`;
        
        

        console.log(data);
       // console.log(data.weather);
        

      })
      .catch((err) => console.log(err));
    



}