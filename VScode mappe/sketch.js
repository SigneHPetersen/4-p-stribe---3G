//Variabel for spillerne.
let spiller = 1;
//Tomt array til brikkerne.
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

  //Tegner hele den blå spilleplade.
  fill(0,20,200);
  rect(40, 150, 520, 420);

  //Der tegnes 42 huller som alle er gennemsigtige.
  //Der bruges for-løkker, så alle 6 rækker og 7 kolonner gennemgås.
  fill(220);

  for (let kolonne = 0; kolonne < 7; kolonne++) {
    for (let raekke = 0; raekke < 6; raekke++) {
      
      //Beregner midten af hvert hul på spillepladen.
      let x = 40 + (kolonne + 0.5) * (520 / 7);
      let y = 150 + 35 + raekke * (420 / 6);

      //Tegner hullet som en cirkel.
      ellipse(x, y, 65, 65);
    }
  }

      //Her Tegner jeg brikkerne, som allerede er placerede på spillepladen.
      //For-løkkerne gennemgår alle felterne i arrayet.
      for (let raekke = 0; raekke < 6; raekke++) {
        for (let kolonne = 0; kolonne < 7; kolonne++) { 
      
        //Hvis feltet har værdien 1, tegnes en rød brik.
        if (brikker[raekke][kolonne] == 1) {
          fill(230, 0, 0);
          //Beregner brikkens placering ud fra dens række og kolonne.
          ellipse(40 + (kolonne + 0.5) * (520 / 7),
                185 + raekke * (420 / 6), 65, 65);
      }

      //Hvis feltet har værdien 2, tegnes en gul brik.
      if (brikker[raekke][kolonne] == 2) {
        fill(240, 240, 0);
        //Beregner brikkens placering ud fra dens række og kolonne.
        ellipse(40 + (kolonne + 0.5) * (520 / 7),
              185 + raekke * (420 / 6), 65, 65);
     }
    }  
  }
  
  //Her kaldes mouseover funktionen, når den tegner brikken der følger musen.
   mouseover()
}

//Her laves en funktion hvor brikken vises over spillepladen og følger musen til hvilken kolonne musen er over.
function mouseover(){
//Her gemmer musen x-koordinatet i variablen mx.
let mx= mouseX;
//Her beregnes bredden på hver kolonne.
let slice = 520/7;


  //Tjekker om musen er inden for spillepladens bredde og højde.
  if (mx > 40 && mx < 560 && mouseY > 150 && mouseY < 570) {

    //Finder hvilken kolonne musen er over.
    let kolonne = Math.floor((mx - 40) / slice);

    //Vægler brikkens farve efter, hvilken spiller der har turen.
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
  //Her gemmer musen x-koordinatet som mx.
  let mx = mouseX;
  //Beregner bredden på hver kolonne.
  let slice = 520 / 7;

  //Der gennemgås alle 7 kolonner for at finde den kolonne, der bliver klikket på.
  for (let kolonne = 0; kolonne < 7; kolonne++) {

    //Der tjekkes om muses x-koordinat er indne for den valgte kolonne.
    if (mx > 40 + slice * kolonne &&
        mx < 40 + slice * (kolonne + 1)) {

      //Starter nederst på spillepladen og bevæger sig opad.
      for (let raekke = 5; raekke >= 0; raekke--) {

        //Tjekker om det valgte felt er tomt.
        if (brikker[raekke][kolonne] == 0) {
          //Placerer spillerens brik i det tomme felt.
          brikker[raekke][kolonne] = spiller;

          //Tjekker om spillepladen er fuld.
          if (TjekOmPladenErFuld()) {
            //Skriver en besked i konsollen, hvis pladen er fuld.
            console.log("Spilleplade er fuld");
          } else {

            //Skifter spillernes tur.
              if (spiller == 1) {
                spiller = 2;
              } else {
                spiller = 1;
              }

          }
          //Stopper for-løkken, da brikken er blevet placeret.
          break;
        }
      }
    }
  }
}


//Denne fukntion tjekker om spillepladen er fuld.
function TjekOmPladenErFuld(){
  //Der gennmgås alle 6 rækker.
  for (let raekke = 0; raekke < 6; raekke++) {
    //Der gennemgås alle 7 kolonner.
    for (let kolonne =  0; kolonne < 7; kolonne++) {

      //Undersøger om et felt stadig har værdien 0, hvis ja er feltet tomt.
      if (brikker[raekke][kolonne] == 0) {
        //Returnerer false, fordi spillepladem ikke er fuld.
        return false;
      }
    }
  }
  //Returnerer true, fordi spillepladen er fuld.
  return true;
}


function checkWinner() {
  //Her skal der laves en funktion der tjekker om der er en vinder.
  //Der skal tjekkes for vandret, lodret og diagonalt.

  //vandret
  for (let v = 0; v < 6; v++) {
    for (let l = 0; l <= 3; l++) {
       let s = brikker[v][l];
      if (s !== 0 && s === brikker[v][l+1] && s === brikker[v][l+2] && s === brikker[v][l+3]) {
        if (s === 1) {
          S1V = true;
        } else {
          S2V = true;
    }}}
  }
    
//lodret

  for (let v = 0; v <=2; v++) {
    for (let l = 0; l < 7; l++) {
       let s = brikker[v][l];
      if (s !== 0 && s === brikker[v+1][l] && s === brikker[v+2][l] && s === brikker[v+3][l]) {
         if (s === 1) {
          S1V = true;
        } 
        if(s=== 2) {
          S2V = true;
    }
      }
    }}

//dirgonal ned mod højre
for (let v = 0; v <=2; v++) {
for (let l = 0; l <= 3; l++) {
    let s = brikker[v][l];
     if (s !== 0 && s === brikker[v+1][l+1] && s === brikker[v+2][l+2] && s === brikker[v+3][l+3]) {
       if (s === 1) {
          S1V = true;
        } 
        if(s=== 2) {
          S2V = true;
        }
      }
    }}

//dirgonal ned mod venstre
for (let v = 0; v <=2; v++) {
for (let l = 3; l <= 6; l++) {
    let s = brikker[v][l];
     if (s !== 0 && s === brikker[v+1][l-1] && s === brikker[v+2][l-2] && s === brikker[v+3][l-3]) {
        if (s === 1) { S1V = true; }
        if (s === 2) { S2V = true; }
      }
    }}

    
 if (S1V == true){
        fill(0,20,200);
        rect(40, 150, 520, 420);
        fill(255,0,0);
        textSize(30);
        text('Rød har vundet', 300, 350);
        fill(255);
        rect(250, 400, 100, 75);
        fill(0);
        textSize(20);
        text('Nyt spil?', 250 + 100/2, 400 + 75/2);   
        textAlign(CENTER, CENTER);}
    
    if(S2V == true) {
      fill(0,20,200);
        rect(40, 150, 520, 420);
        fill(220,220,0);
        textSize(30);
        text('Gul har vundet!', 300, 350);
        fill(255);
        rect(250, 400, 100, 75);
        fill(0);
        textSize(20);
        text('Nyt spil?', 250 + 100/2, 400 + 75/2);   
        textAlign(CENTER, CENTER);}
        }

