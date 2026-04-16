

const palos = ["♥","♠","♣","♦"];
const valor = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];

const paloAleatorio = () => {
    let numeroAleatorio = Math.round(Math.random() * 3);
    return palos[numeroAleatorio];
}

const valorAleatorio = () => { 
    let numeroAleatorio = Math.round(Math.random() * 12);
    return valor[numeroAleatorio];
}

const generarCarta = () => {

    const card = document.querySelector("#card");
    card.innerHTML = "";

    const valorAleatorioIconos = paloAleatorio();
 
    const iconoCarta1 = document.createElement("p");
    iconoCarta1.innerHTML = valorAleatorioIconos;
    iconoCarta1.style.position = "absolute";
    iconoCarta1.style.top = "10px";
    iconoCarta1.style.left = "30px";
    iconoCarta1.style.fontSize = "100px"

    const iconoCarta2 = document.createElement("p");
    iconoCarta2.innerHTML = valorAleatorioIconos;
    iconoCarta2.style.position = "absolute";
    iconoCarta2.style.bottom = "10px";
    iconoCarta2.style.right = "30px";
    iconoCarta2.style.fontSize = "100px"

    if(valorAleatorioIconos == palos[0]) {
        iconoCarta1.style.color = "red";
        iconoCarta2.style.color = "red";
    }

    const valorCarta = document.createElement("p");
    valorCarta.innerHTML = valorAleatorio();
    valorCarta.style.position = "absolute";
    valorCarta.style.top = "50%";
    valorCarta.style.left = "50%";
    valorCarta.style.transform = "translate(-50%, -50%)";
    valorCarta.style.fontSize = "200px";
    valorCarta.style.margin = "0";

    card.appendChild(iconoCarta1);
    card.appendChild(iconoCarta2);
    card.appendChild(valorCarta);

}

window.onload = () => {
    generarCarta();

    document.querySelector(".button").addEventListener("click", () => {
        generarCarta();
    });
}
