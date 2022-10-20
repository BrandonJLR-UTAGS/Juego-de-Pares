//Variables
let cartasDestapadas = 0;
let kard1 = null;
let kard2 = null;
let PrimerCarta = null;
let SegundaCarta = null;
let CartaSelecionada = null;

//array de cartas
let kards = [
  "carta1",
  "carta1",
  "carta2",
  "carta2",
  "carta3",
  "carta3",
  "carta4",
  "carta4",
  "carta5",
  "carta5",
  "carta6",
  "carta6",
  "carta7",
  "carta7",
  "carta8",
  "carta8",
  "carta9",
  "carta9",
  "carta10",
  "carta10",
  "carta11",
  "carta11",
  "carta12",
  "carta12",
  "carta13",
  "carta13",
  "carta14",
  "carta14",
  "carta15",
  "carta15",
  "carta16",
  "carta16",
];

//Turbo generador de nume ros al azar
kards = kards.sort(() => {
  return Math.random() - 0.5;
});
console.log(kards);

// //Muestra tarjetas restantes
// function BloquearTarjetas(kards){
//     for(let i=0; i<=15; i++){
//     CartaSelecionada = document.getElementById(id);
//         CartaSelecionada=kards[id];
//         CartaSelecionada.innerHTML=`<img src="./images/${kards[i]}.jpg" alt="">`;
//     }
// }

//Funcion pa girar las cartas
function MostrarCarta(id) {
  cartasDestapadas++;
  console.log(cartasDestapadas);
  console.log(CartaSelecionada);

  if (cartasDestapadas == 1) {
    //Primera carta
    kard1 = document.getElementById(id);
    console.log(kard1);
    PrimerCarta = kards[id];
    kard1.innerHTML = `<img src="./images/${PrimerCarta}.jpg" alt="">`;
    //Se apaga el boton
    kard1.disabled = true;
  } else if (cartasDestapadas == 2) {
    //voltea la siguiente carta
    kard2 = document.getElementById(id);
    SegundaCarta = kards[id];
    kard2.innerHTML = `<img src="./images/${SegundaCarta}.jpg" alt="">`;
    //apagar carta
    kard2.disabled = true;

    //
    

  } else {
    //gira las cartas //gira las cartas segun el ID de la carta
    CartaSelecionada = document.getElementById(id);
    console.log(CartaSelecionada);
    Carta = kards[id];
    CartaSelecionada.innerHTML = `<img src="./images/${Carta}.jpg" alt="">`;
    //Se apaga el boton
    CartaSelecionada.disabled = true;
    
    
  }
  //si se selecciona una tercera carta se voltean las cartas antes selecionadas
  if(cartasDestapadas >= 3){
    
    kard1.innerHTML='';
    kard2.innerHTML = '';
    CartaSelecionada.innerHTML='';
    kard1.disabled=false;
    kard2.disabled=false;
    CartaSelecionada.disabled=false;
    cartasDestapadas=0;
  }
}
