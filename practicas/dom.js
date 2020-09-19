'use strict'

let caja = document.querySelector("#micaja");

function color(color) {
    caja.innerHTML = "<button onClick='changeColor()'>Click</button> <div id='resultado'></div>";
    let button = document.querySelector("button");
    button.className = "bg-warning";
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `Soy un texto`;
    resultado.style.background = "coral";
    resultado.style.textAlign = "center";
    caja.style.background = color;
    button.style.textAlign = "center";
}

function changeColor() {
    document.querySelector("button").className = "bg-success";
    document.querySelector("button").style.padding = "1rem";
}

// function hello() {
//     let hello = document.querySelectorAll(".hello");
//     console.log(hello);
//     hello.innerHTML = '<h1 class="h1 bg-primary">Hello World!</h1>'
//     hello.styele.color = "red";
// }


color("red");