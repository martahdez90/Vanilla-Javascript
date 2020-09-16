let peliculas = ["Harry Potter", "Matilda", "Spiderman"];
let personajes = ["Hermione", "madrastra", "Perer Parker"];
let cine = [peliculas, personajes]
const plength = personajes.length + 3;

function mostrar() {
    document.write(`las peliculas de este cine son ${peliculas.toString()} <br>
    y los personajes son ${personajes.toString()}`)  
}

mostrar();



function addpersonajes(personajes) {
    for (i = 0; i < plength; i++){
    let length2 = personajes.length;
    console.log(`comienzo de longitud en ${length2}`)
        let newPersonaje = prompt("escribe un personaje"); 
        personajes.push(newPersonaje)
    console.log(i);
    console.log(length);
}
}

addpersonajes(personajes)


mostrar()

function addpeliculas(peliculas) {
   while (peliculas.length < personajes.length) {
 let newPeliculas = prompt("introduce una pelicua")
    peliculas.push(newPeliculas); 
    return peliculas.length + "" + personajes.length;
} 
}

addpeliculas(peliculas);


mostrar();
