//Variables
let cartasDestapadas = 0;
let kard1 = null;
let kard2 = null;
let PrimerCarta = null;
let SegundaCarta = null;
let CartaSelecionada = null;
let movimientos = null;
let aciertos = null;
let tiempo= 0;
let ComenzoPartida=false;
TiempoPartida= null;



//Elementos del HTML
let ImprimirMovimientos = document.getElementById('movimientos');
let ImprimirAciertos = document.getElementById('aciertos');
let ImprimirTiempo = document.getElementById('tiempo');


//array de cartas
let kards = [
  "carta1",
  "carta2",
  "carta3",
  "carta4",
  "carta5",
  "carta6",
  "carta7",
  "carta8",
  "carta9",
  "carta10",
  "carta11",
  "carta12",
  "carta13",
  "carta14",
  "carta15",
  "carta16",
  "carta17",
  "carta18",
  "carta19",
  "carta20",
  "carta21",
  "carta22",
  "carta23",
  "carta24",
  "carta25",
  "carta26",
  "carta27",
  "carta28",
  "carta29",
  "carta30",
  "carta31",
  "carta32",
  "carta33",
  "carta34",
  "carta35",
  "carta36",
  "carta37",
  "carta38",
  "carta39"

  

  
];

  //Turbo generador de numeros al azar
  //Mescla todas las cartas

  let KardsMezcladas =[];
  KardsMezcladas = kards.sort(() => {
    return Math.random() - 0.5;
  });

//seleciona solo las primeras 8 cartas de la mezcla
  let KardsJuego = [];

  for(let index = 0; index < 8; index++){
    const item = KardsMezcladas[index];
    //coloca los elementos en un nuevo array 'KardsJuego'
    KardsJuego.push(`${item}`);

  }
  console.log(KardsJuego);

//Crea una copia de las cartas selecionadas
let CopiaKardsJuego=KardsJuego;
console.log(CopiaKardsJuego);
//Crea un mazo de las cartas selecionadas y la copia de estas
let UnionKardCopiadas = CopiaKardsJuego.concat(KardsJuego);
console.log(UnionKardCopiadas)

//Turbo generador de numeros al azar
//Mezcla el mazo de cartas
kards = UnionKardCopiadas.sort(() => {
  return Math.random() - 0.5;
});

console.log(kards)

//Cuenta el tiempo de la partida
function Cronometro(){
  TiempoPartida = setInterval(()=>{
    tiempo++;
    ImprimirTiempo.innerHTML =`Tiempo: ${tiempo} Segundos`
    if(aciertos == 8){
      clearInterval(TiempoPartida);
      ImprimirTiempo.innerHTML =`!!Felicidades terminaste en ${tiempo} Segundos !!`
    }
  },1000);
}

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
  //Comienza a correr el tiempo
  if(ComenzoPartida == false){
    Cronometro();
    ComenzoPartida = true;
  }

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

    //Incrementar movimientos echos por el jugador
    movimientos++;    
    ImprimirMovimientos.innerHTML = `Movimientos: ${movimientos}`;

     if(PrimerCarta == SegundaCarta){
      //Tapar targetas
      cartasDestapadas = 0;
      //Incrementa los aciertos
      aciertos++;
      ImprimirAciertos.innerHTML = `Aciertos: ${aciertos}`;

      if(aciertos == 8){
        ImprimirAciertos = `Aciertos: ${aciertos} WoW`;
        ImprimirMovimientos = `Movimientos ${movimientos}`;
      }

    } 
    else{
      //mostrar valores y tapar de nuevo
      setTimeout(()=>{
        kard1.innerHTML='';
          kard2.innerHTML = '';
          //reactiva las cartas
          kard1.disabled=false;
          kard2.disabled=false;
          //Reinicia constador de carta destapadas
          cartasDestapadas=0;
      },1000);
    }
  } 


                    //else {
                      // //gira las cartas //gira las cartas segun el ID de la carta
                      // CartaSelecionada = document.getElementById(id);
                      // console.log(CartaSelecionada);
                      // Carta = kards[id];
                      // CartaSelecionada.innerHTML = `<img src="./images/${Carta}.jpg" alt="">`;
                      // //Se apaga el boton
                      // CartaSelecionada.disabled = true;

                      
                      
                      
                    //}
                    //si se selecciona una tercera carta se voltean las cartas antes selecionadas
                    // if(cartasDestapadas >= 3){
                      
                    //   kard1.innerHTML='';
                    //   kard2.innerHTML = '';
                    //   CartaSelecionada.innerHTML='';
                    //   kard1.disabled=false;
                    //   kard2.disabled=false;
                    //   CartaSelecionada.disabled=false;
                    //   cartasDestapadas=0;
                    // }
}
