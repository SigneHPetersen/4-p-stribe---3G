//Variabel for spillerne
let spiller = 1;
//Variabel for brikkerne
let brikker = [];

function setup() {
  createCanvas(600, 600);

  //Her kan programmet huske hvor brikkerne er, der bruges senere når man placer brikkerne på spillepladen.
   for (let i = 0; i < 6; i++) {
    brikker[i] = [];

    for (let j = 0; j < 7; j++) {
      brikker[i][j] = 0;
    }
  }
}

function draw() {
  background(220);

  //Tegner hele den blå spilleplade
  fill(0,20,200);
  rect(40, 150, 520, 420);

  //Der tegnes gennemsigtigte cirkler ovenpå spillepladen, ved hjælp af for-løkker.
  //Der tegnes 42 huller som alle er gennemsigtige i farven.
  fill(220);

  for (let kolonne = 0; kolonne < 7; kolonne++) {
    for (let raekke = 0; raekke < 6; raekke++) {
      let x = 40 + (kolonne + 0.5) * (520 / 7);
      let y = 150 + 35 + raekke * (420 / 6);

      ellipse(x, y, 65, 65);
    }
  }

      //Her Tegner jeg brikkerne, til når de er placerede på spillepladen.
      for (let raekke = 0; raekke < 6; raekke++) {
      for (let kolonne = 0; kolonne < 7; kolonne++) { 
      
      if (brikker[raekke][kolonne] == 1) {
        fill(230, 0, 0);
        ellipse(40 + (kolonne + 0.5) * (520 / 7),
              185 + raekke * (420 / 6), 65, 65);
     }

      if (brikker[raekke][kolonne] == 2) {
        fill(240, 240, 0);
        ellipse(40 + (kolonne + 0.5) * (520 / 7),
              185 + raekke * (420 / 6), 65, 65);
     }
    }  
  }
  
  //Jeg kalder mouseover funktionen nå den tegner brikken der følger musen.
   mouseover()
}

//Her laves en funktion hvor brikken vises over spillepladen og følger musen til hvilken kolonne musen er over.
function mouseover(){
let mx= mouseX;
let slice = 520/7;

//for(let i = 0; i < 7; i++){
//if (mx > 40 + slice*i && mx < 40 + slice*(i+1)){
  //ellipse(520/7 + i*(520/7), 185-100, 65, 65);
  //console.log("kolonne " + (i+1));
  //}}

  //Tjekker om musen er inden for spillepladens bredde og højde.
  if (mx > 40 && mx < 560 && mouseY > 150 && mouseY < 570) {

    //Finder hvilken kolonne musen er over.
    let kolonne = Math.floor((mx - 40) / slice);

    //Vægler farve efter hvilken spiller der er.
    if (spiller == 1) {
      fill(220, 0, 0);
    } else {
      fill(220, 220, 0);
    }

    //Finder midten af den kolonne, musen er over.
    let x = 40 + (kolonne + 0.5) * slice;

    //Tegner brikken over spillepladen.
    ellipse(x, 85, 65, 65);
  }
}


//Her laves en funktion der registrer at en kolonne bliver trykket på hvor brikken skal forblive.
function mousePressed() {

  let mx = mouseX;
  let slice = 520 / 7;

  for (let kolonne = 0; kolonne < 7; kolonne++) {

    if (mx > 40 + slice * kolonne &&
        mx < 40 + slice * (kolonne + 1)) {

      for (let raekke = 5; raekke >= 0; raekke--) {

        if (brikker[raekke][kolonne] == 0) {

          brikker[raekke][kolonne] = spiller;

          //Tjekker om spillepladen er fuld.
          if (TjekOmPladenErFuld()) {
            console.log("Spilleplade er fuld");
          } else {

            //Skifter spiller
              if (spiller == 1) {
                spiller = 2;
              } else {
                spiller = 1;
              }

          }

          break;
        }
      }
    }
  }
}

function TjekOmPladenErFuld(){
  for (let raekke = 0; raekke < 6; raekke++) {
    for (let kolonne =  0; kolonne < 7; kolonne++) {

      //Hvis et felt stadig er tomt så...
      if (brikker[raekke][kolonne] == 0) {
        return false;
      }
    }
  }
  //HVis alle felter er optaget sker.
  return true;
}


