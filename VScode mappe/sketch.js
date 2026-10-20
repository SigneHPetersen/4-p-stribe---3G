//Variabler for snefnug.
let cX2; // <-- Opret variabler for cirklens x og y
let cY2;

let snefnug = [] //tomt array til at kunne lave snefnug
//


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  //dette er hele spillepladen
  fill(0,20,200);
  rect(40, 150, 520, 420);

  //Dette er hver lodrette kolodne af spillepladen, 
  //Derefter tegnes gennesigtige cirkler ovenpå.
  //fill(0, 0, 250);
  //rect(40, 150, 520/7, 420);
  fill(220);
  ellipse(520/7 + 0*(520/7), 185, 65, 65);
  ellipse(520/7 + 0*(520/7), 185 + 1*(420/6), 65, 65);
  ellipse(520/7 + 0*(520/7), 185 + 2*(420/6), 65, 65);
  ellipse(520/7 + 0*(520/7), 185 + 3*(420/6), 65, 65);
  ellipse(520/7 + 0*(520/7), 185 + 4*(420/6), 65, 65);
  ellipse(520/7 + 0*(520/7), 185 + 5*(420/6), 65, 65);

  //fill(20);
  //rect(40 + 520/7, 150, 520/7, 420);
  fill(220);
  ellipse(520/7 + 1*(520/7), 185, 65, 65);
  ellipse(520/7 + 1*(520/7), 185 + 1*(420/6), 65, 65);
  ellipse(520/7 + 1*(520/7), 185 + 2*(420/6), 65, 65);
  ellipse(520/7 + 1*(520/7), 185 + 3*(420/6), 65, 65);
  ellipse(520/7 + 1*(520/7), 185 + 4*(420/6), 65, 65);
  ellipse(520/7 + 1*(520/7), 185 + 5*(420/6), 65, 65);

  //fill(220,0,30);
  //rect(40 + 2*(520/7), 150, 520/7, 420);
  fill(220);
  ellipse(520/7 + 2*(520/7), 185, 65, 65);
  ellipse(520/7 + 2*(520/7), 185 + 1*(420/6), 65, 65);
  ellipse(520/7 + 2*(520/7), 185 + 2*(420/6), 65, 65);
  ellipse(520/7 + 2*(520/7), 185 + 3*(420/6), 65, 65);
  ellipse(520/7 + 2*(520/7), 185 + 4*(420/6), 65, 65);
  ellipse(520/7 + 2*(520/7), 185 + 5*(420/6), 65, 65);

  //fill(0,220,0);
  //rect(40 + 3*(520/7), 150, 520/7, 420);
  fill(220);
  ellipse(520/7 + 3*(520/7), 185, 65, 65);
  ellipse(520/7 + 3*(520/7), 185 + 1*(420/6), 65, 65);
  ellipse(520/7 + 3*(520/7), 185 + 2*(420/6), 65, 65);
  ellipse(520/7 + 3*(520/7), 185 + 3*(420/6), 65, 65);
  ellipse(520/7 + 3*(520/7), 185 + 4*(420/6), 65, 65);
  ellipse(520/7 + 3*(520/7), 185 + 5*(420/6), 65, 65);

  //fill(0,0,220);
  //rect(40 + 4*(520/7), 150, 520/7, 420);
  fill(220);
  ellipse(520/7 + 4*(520/7), 185, 65, 65);
  ellipse(520/7 + 4*(520/7), 185 + 1*(420/6), 65, 65);
  ellipse(520/7 + 4*(520/7), 185 + 2*(420/6), 65, 65);
  ellipse(520/7 + 4*(520/7), 185 + 3*(420/6), 65, 65);
  ellipse(520/7 + 4*(520/7), 185 + 4*(420/6), 65, 65);
  ellipse(520/7 + 4*(520/7), 185 + 5*(420/6), 65, 65);

  //fill(220,220,0);
  //rect(40 + 5*(520/7), 150, 520/7, 420);
  fill(220);
  ellipse(520/7 + 5*(520/7), 185, 65, 65);
  ellipse(520/7 + 5*(520/7), 185 + 1*(420/6), 65, 65);
  ellipse(520/7 + 5*(520/7), 185 + 2*(420/6), 65, 65);
  ellipse(520/7 + 5*(520/7), 185 + 3*(420/6), 65, 65);
  ellipse(520/7 + 5*(520/7), 185 + 4*(420/6), 65, 65);
  ellipse(520/7 + 5*(520/7), 185 + 5*(420/6), 65, 65);

  //fill(20,0,50);
  //rect(40 + 6*(520/7), 150, 520/7, 420);
  fill(220);
  ellipse(520/7 + 6*(520/7), 185, 65, 65);
  ellipse(520/7 + 6*(520/7), 185 + 1*(420/6), 65, 65);
  ellipse(520/7 + 6*(520/7), 185 + 2*(420/6), 65, 65);
  ellipse(520/7 + 6*(520/7), 185 + 3*(420/6), 65, 65);
  ellipse(520/7 + 6*(520/7), 185 + 4*(420/6), 65, 65);
  ellipse(520/7 + 6*(520/7), 185 + 5*(420/6), 65, 65);


  mouseover()
}


function mouseover(){
mx= mouseX;
slice = 520/7

for(let i = 0; i < 7; i++){
if (mx > 40 + slice*i && mx < 40 + slice*(i+1)){
  ellipse(520/7 + i*(520/7), 185-100, 65, 65);
  console.log("kolonne " + (i+1));
}








//Dette skal bruges til at lave funktionen hvor hvad klikker.
function mouseClicked(){

  /*Dette er en nemmere måde at skrive hvilket felt musen er i på:
  for(let j = 0; j < 3; j++){
  for(let i = 0; i < 3; i++){
  if(mouseX > 0 + width/3*i && mouseX < width/3 + width/3*i && mouseY > 0 + height/3*j && mouseY < height/3 + height/3*j){
    cell = i + (3*j);
    }
   }
  }
  */
  
//Dette er en svære måde at skrive hvilket felt musen er i på:
  //første række:
  if(mouseX > 0 && mouseX < width/3 && mouseY > 0 && mouseY < height/3){
    cell = 0
    }
    if(mouseX > width/3 && mouseX < width/3*2 && mouseY > 0 && mouseY < height/3){
    cell = 1
    }
   if(mouseX > width/3*2 && mouseX < width/3*3 && mouseY > 0 && mouseY < height/3*3){
    cell = 2
    }
  
  //anden række:
  if(mouseX > 0 && mouseX < width/3 && mouseY > height/3 && mouseY < height/3*2){
    cell = 3
    }
  if(mouseX > width/3 && mouseX < width/3*2 && mouseY > height/3 && mouseY < height/3*2){
    cell = 4
    }
   if(mouseX > width/3*2 && mouseX < width/3*3 && mouseY > height/3 && mouseY < height/3*2){
    cell = 5
    }

  //trejde række:
  if(mouseX > 0 && mouseX < width/3 && mouseY > height/3*2 && mouseY < height/3*3){
    cell = 6
    }
  if(mouseX > width/3 && mouseX < width/3*2 && mouseY > height/3*2 && mouseY < height/3*3){
    cell = 7
    }
  if(mouseX > width/3*2 && mouseX < width/3*3 && mouseY > height/3*2 && mouseY < height/3*3){
    cell = 8
    }
  
  
  
  /*Tegn kryds og bolle
  circle(width/6,height/6,width/3.5);//lavet bollen øverst til venstre.
  fill(150,140,200);
  //line(width/3,height/3,width/20,height/20)
  
  //line(width/20,153.3,width/3.5,246.6);
  //line(width/20, 246.6, width/3.5, 153.3);
  */

  console.log(cell);
  
  board[cell] = player;
  player *=-1; 
  console.log(board);
}


//Dette skal bruges til at lave brikkerne.
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