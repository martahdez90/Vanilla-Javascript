let nombres = ["Manuel", "Miriam", "Sara", "Paula", "Elena"];
let apellidos = ["Sanz", "Lopez", "Gonzalez", "Ramirez", "Sanchez"]

function mostrar(nombres) {
    document.write("<ul class='list-group'>")
    for (let nombre of nombres) {
       document.write(`<li class="text-center list-group-item">Me llamo ${nombre}</li>`)
   } 
}

function apellido(apellidos) {
    apellidos.forEach((apellido, indice) => {
        document.write(`<p class="text-center">El alumno ${apellido} ha sido citado el numero ${indice + 1}</p>  <br><br>`)
    })
}

function nombreYapellido(nombres, apellidos) {
     let numero = 1;
    let i = 0;
    for (let apellido of apellidos) {
        let nombre = nombres[i];
        document.write(`<p class="text-center text-secondary">El alumno ${nombre} ${apellido} es el número ${numero} de la lista <br><br></p>`)
        numero++;
        i++;
        console.log(numero + " " + i)
    }
}

mostrar(nombres);
apellido(apellidos);
nombreYapellido(nombres, apellidos);