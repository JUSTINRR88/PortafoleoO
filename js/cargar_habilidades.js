import { data_img } from "./data_cuadro_lateral.js";
let div_hb = document.querySelector(".habilidades_img");

div_hb.innerHTML="hola"

    data_img.forEach((cada_habilidad)=>{
        let div = document.createElement("div")
        div.innerHTML = `
        <h2>${cada_habilidad.nombre}</h2>
        <img src="${cada_habilidad.img}" alt="">
        `

        div_hb.appendChild(div)

})