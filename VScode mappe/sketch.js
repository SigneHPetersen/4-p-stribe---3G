//Variabel for spillerne
let spiller = 1;
//Variabel for brikkerne
let brikker = [];
 let S1V = false;
let S2V = false;

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
   checkWinner() 
 
}
  

//Her laves en funktion hvor brikken vises over spillepladen og følger musen til hvilken kolonne musen er over.
function mouseover(){
mx= mouseX;
slice = 520/7;

  if (mx > 40 && mx < 560 && mouseY < 150) {

    let kolonne = Math.floor((mx - 40) / slice);

    if (spiller == 1) {
      fill(220, 0, 0);
    } else {
      fill(220, 220, 0);
    }

    let x = 40 + (kolonne + 0.5) * slice;

    ellipse(x, 85, 65, 65);
  }
}


//Her laves en funktion der registrer at en kolonne bliver trykket på hvor brikken skal forblive.
function mousePressed() {

  let mx = mouseX;
  let slice = 520 / 7;
  console.log(brikker); 

   if (S1V|| S2V) {
    if (mouseX > 250 && mouseX < 250 + 100 &&
        mouseY > 400 && mouseY < 400 + 75) {

      for (let i = 0; i < 6; i++) {
        brikker[i] = [];
        for (let j = 0; j < 7; j++) {
          brikker[i][j] = 0;
        }
      }
      if(S1V){
        
      }
      S1V = false;
      S2V = false;
      spiller = 1;
    }
    return;
  }

  for (let kolonne = 0; kolonne < 7; kolonne++) {

    if (mx > 40 + slice * kolonne &&
        mx < 40 + slice * (kolonne + 1)) {

      for (let raekke = 5; raekke >= 0; raekke--) {

        if (brikker[raekke][kolonne] == 0) {

          brikker[raekke][kolonne] = spiller;

          if (spiller == 1) {
            spiller = 2;
          } else {
            spiller = 1;
          }
          
          break;
        }
      }
    }
  }
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
