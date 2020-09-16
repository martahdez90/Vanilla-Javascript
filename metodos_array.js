'use strict'

let peliculas = ["Harry Potter", "Matilda", "Spiderman", "Batman"];
let personajes = ["Hermione", "madrastra", "Perer Parker"];
let cine = [peliculas, personajes]



//PUSH and propiedad LENGTH
// let elemento = "";

// do {
//     elemento = prompt("Introduce una película: "); 
//     peliculas.push(elemento);
//     console.log(peliculas.length)
// }   while (elemento != "ACABAR") 


//PUSH, POP, TOSTRING
// peliculas.push("Bambi")
// document.write(`<div class="texto">la ultima pelicula era: ${peliculas.pop()} <br><br> ${peliculas.toString()}</div> `)

// INDEXOF, PUSH, POP, SPLICE, SHIFT, LASTINDEXOF


peliculas.push("Bambi"); //añadeal final ["Harry Potter", "Matilda", "Spiderman, "Bambi"];
document.write(peliculas + "<br>")
peliculas.shift(); //elimina el 1º ["Matilda", "Spiderman, "Bambi"]
document.write(peliculas + "<br>");
let index = peliculas.indexOf("Batman");
if (index != 1) {
    peliculas.splice(index, 1); //elimina a partir del del indice ["Matilda", "Bambi"]
}

document.getElementById("texto").innerHTML = peliculas.toString();
document.write(peliculas + "<br>");
peliculas.pop(); //elimina el último ["Matilda"]
document.write(peliculas + "<br>");
peliculas.unshift("Matilda") //añade al principio ["Matilda, "Spiderman", "Matilda]
document.write(peliculas + "<br>");
index = peliculas.lastIndexOf("Matilda");
peliculas.splice(index, 1); //elimina el indice
document.write(peliculas + "<br>"); //["Matilda", "Spiderman"]
peliculas.push("Pitufos"); //["Matilda", "Spiderman", "Pitufos"]
document.write(peliculas.join(" o ") + "<br>"); //convierte a string añadiendo el separador indicado

//ordenar arrray 
peliculas.sort();//alfabeticamente
document.write(peliculas + "<br>");
peliculas.reverse();
document.write(peliculas + "<br>");

//recorrer array

for (let pelicula in peliculas) {
    document.write(`<li> ${pelicula} </li>`)//muestra el indice
}

// for (let pelicula in peliculas) {
//     document.write(`<li> ${peliculas[pelicula]} </li>`)//muestra el indice
// }

for (let pelicula of peliculas) {
    document.write(`<li> ${pelicula} </li>`)
}

document.write(`<h2 class ="h2 text-success text-center">Comienzan las busquedas</h2><br><br>`)

//busquedas

let busqueda = peliculas.find((pelicula) => {
    return pelicula == "Matilda";
})

busqueda = peliculas.find(pelicula => pelicula == "Matilda");

document.write(busqueda + "<br>")

let eliminar = peliculas.findIndex(pelicula => pelicula == "Matilda")
document.write(eliminar + "<br>")
peliculas.splice(eliminar, 1);
document.write(peliculas + "<br>")

peliculas.push("Bambi2");
peliculas.push("Pocahontas");
peliculas.unshift("Pocahontas");
document.write(peliculas + "<br>")


//TO STRING

// function mostrar() {
//     document.write(`las peliculas de este cine son ${peliculas.toString()} <br>
//     y los personajes son ${personajes.toString()}<br><br>`)  
// }

// mostrar();



