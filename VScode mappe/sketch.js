<<<<<<< HEAD
//Variabler for snefnug.
let cX2; // <-- Opret variabler for cirklens x og y
let cY2;

let snefnug = [] //tomt array til at kunne lave snefnug
//


function setup() {
  createCanvas(600, 600);
=======
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

  
>>>>>>> Mathias's
}

function draw() {
  background(220);

<<<<<<< HEAD
  //dette er hele spillepladen
  fill(100);
  rect(40, 150, 520, 420);

  //dette er hver lodrette kolodner af spillepladen, tegner derefter gennesigtige cirkler ovenpå
  fill(50);
  rect(40, 150, 520/7, 420);
  fill(0, 0, 255, 100);
  ellipse(520/7 + 0*(520/7), 185, 65, 65);
  ellipse(520/7 + 0*(520/7), 185 + 1*(420/6), 65, 65);
  ellipse(520/7 + 0*(520/7), 185 + 2*(420/6), 65, 65);
  ellipse(520/7 + 0*(520/7), 185 + 3*(420/6), 65, 65);
  ellipse(520/7 + 0*(520/7), 185 + 4*(420/6), 65, 65);
  ellipse(520/7 + 0*(520/7), 185 + 5*(420/6), 65, 65);

  //fill(20);
  //rect(40 + 520/7, 150, 520/7, 420);
  fill(0, 0, 255, 100);
  ellipse(520/7 + 1*(520/7), 185, 65, 65);
  ellipse(520/7 + 1*(520/7), 185 + 1*(420/6), 65, 65);
  ellipse(520/7 + 1*(520/7), 185 + 2*(420/6), 65, 65);
  ellipse(520/7 + 1*(520/7), 185 + 3*(420/6), 65, 65);
  ellipse(520/7 + 1*(520/7), 185 + 4*(420/6), 65, 65);
  ellipse(520/7 + 1*(520/7), 185 + 5*(420/6), 65, 65);

  //fill(220,0,30);
  //rect(40 + 2*(520/7), 150, 520/7, 420);
  fill(0, 0, 255, 100);
  ellipse(520/7 + 2*(520/7), 185, 65, 65);
  ellipse(520/7 + 2*(520/7), 185 + 1*(420/6), 65, 65);
  ellipse(520/7 + 2*(520/7), 185 + 2*(420/6), 65, 65);
  ellipse(520/7 + 2*(520/7), 185 + 3*(420/6), 65, 65);
  ellipse(520/7 + 2*(520/7), 185 + 4*(420/6), 65, 65);
  ellipse(520/7 + 2*(520/7), 185 + 5*(420/6), 65, 65);

  //fill(0,220,0);
  //rect(40 + 3*(520/7), 150, 520/7, 420);
  fill(0, 0, 255, 100);
  ellipse(520/7 + 3*(520/7), 185, 65, 65);
  ellipse(520/7 + 3*(520/7), 185 + 1*(420/6), 65, 65);
  ellipse(520/7 + 3*(520/7), 185 + 2*(420/6), 65, 65);
  ellipse(520/7 + 3*(520/7), 185 + 3*(420/6), 65, 65);
  ellipse(520/7 + 3*(520/7), 185 + 4*(420/6), 65, 65);
  ellipse(520/7 + 3*(520/7), 185 + 5*(420/6), 65, 65);

  //fill(0,0,220);
  //rect(40 + 4*(520/7), 150, 520/7, 420);
  fill(0, 0, 255, 100);
  ellipse(520/7 + 4*(520/7), 185, 65, 65);
  ellipse(520/7 + 4*(520/7), 185 + 1*(420/6), 65, 65);
  ellipse(520/7 + 4*(520/7), 185 + 2*(420/6), 65, 65);
  ellipse(520/7 + 4*(520/7), 185 + 3*(420/6), 65, 65);
  ellipse(520/7 + 4*(520/7), 185 + 4*(420/6), 65, 65);
  ellipse(520/7 + 4*(520/7), 185 + 5*(420/6), 65, 65);

  //fill(220,220,0);
  //rect(40 + 5*(520/7), 150, 520/7, 420);
  fill(0, 0, 255, 100);
  ellipse(520/7 + 5*(520/7), 185, 65, 65);
  ellipse(520/7 + 5*(520/7), 185 + 1*(420/6), 65, 65);
  ellipse(520/7 + 5*(520/7), 185 + 2*(420/6), 65, 65);
  ellipse(520/7 + 5*(520/7), 185 + 3*(420/6), 65, 65);
  ellipse(520/7 + 5*(520/7), 185 + 4*(420/6), 65, 65);
  ellipse(520/7 + 5*(520/7), 185 + 5*(420/6), 65, 65);

  //fill(20,0,50);
  //rect(40 + 6*(520/7), 150, 520/7, 420);
  fill(0, 0, 255, 100);
  ellipse(520/7 + 6*(520/7), 185, 65, 65);
  ellipse(520/7 + 6*(520/7), 185 + 1*(420/6), 65, 65);
  ellipse(520/7 + 6*(520/7), 185 + 2*(420/6), 65, 65);
  ellipse(520/7 + 6*(520/7), 185 + 3*(420/6), 65, 65);
  ellipse(520/7 + 6*(520/7), 185 + 4*(420/6), 65, 65);
  ellipse(520/7 + 6*(520/7), 185 + 5*(420/6), 65, 65);
}



class Bubbel{   
    constructor() {
       this.x = random(0, width); // <-- initialiser variablerne med en værdi 
       this.y = random(0, height); //.  for at give cirklens dens position. 
       // Hvis i undres over værdien -20 i f.eks. cY = height-20 er det halvdelen af diameter, 
       // altså radius af cirklen, for ikke at det halve af cirklen bliver inde/eller ude af canvas.
       this.r=random(8,15)
    }
   
    show(){
      //show bliver brugt til at vise de snefnug jeg laver.
      //push og pop gør at mine snefnug kan blive farvet hvid med gennemsigtighed,
      //men highlightsne forbliver helt hvide.
      push();
      fill(255,185);
      circle(this.x, this.y, this.r);
      pop();
      noFill();
      strokeWeight(1)
      arc(this.x, this.y, this.r*0.7, this.r*0.7, 270, 335); //Her laver jeg min highlights på snefnugne.
      //this.r er hvor lang min streg skal være. 270+335 er hvor henne i grader stregen er. 
      //Det er sådan set at lavet en cirkelring. 
      //this.x & this.y gør at snefnugne tilpasser sig til de individuele snefnugnes centrum.
      
    }
   
    update(){
      //update bliver brugt til at snefnugne kommer igen.
      this.y +=1; //Her for jeg snefnugne til at bevæge sig ned af.
      this.x +=random(-0.5,0.5); //<-- Vi får snefnugne til at bevæge sig random i x-aksen.
      // Talet indikere hvor hurtigt snefnugne køre frem og tilbage.
      if (this.y > height  + 10){
        this.y = -10;
      } //Her for snefnugne til at komme igen.
    }
   } 
=======
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

//for(let i = 0; i < 7; i++){
//if (mx > 40 + slice*i && mx < 40 + slice*(i+1)){
  //ellipse(520/7 + i*(520/7), 185-100, 65, 65);
  //console.log("kolonne " + (i+1));
  //}}
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



>>>>>>> Mathias's
