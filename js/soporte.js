import { lista_soporte } from "./data_tecnica.js"
let div_soporte = document.querySelector(".contenedor2")

div_soporte.innerHTML  = "hiols";

lista_soporte.forEach((cada_categoria)=>{
    let div = document.createElement("div");
    div.innerHTML = ` 
    <img src="${cada_categoria.img}" alt="">
    <h2>${cada_categoria.nommbre}</h2>
    <span>${cada_categoria.cantidad}</span>

    <div class "categoria">
    </div>
    `;

    div_soporte.appendChild(div)
})