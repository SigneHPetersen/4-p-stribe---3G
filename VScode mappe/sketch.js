//Variabler for snefnug.
let cX2; // <-- Opret variabler for cirklens x og y
let cY2;

let snefnug = [] //tomt array til at kunne lave snefnug
//


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
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