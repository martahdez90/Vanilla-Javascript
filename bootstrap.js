'use strict'
        //aumentar el progreso de la barra por cada segundo
        let contador = 0;
        setInterval(() => {
            if(contador < 100){
               contador++;
            var barra = document.querySelector("#progreso");
            barra.style.width = contador + '%';
            barra.innerHTML = contador + "%" 
            }
            
        }, 50)

