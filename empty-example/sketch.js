var textX=0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(88,230,117);
   fill(253,155,13);   
   noStroke();   
   textSize(40);   
   textFont('Helvetica');  
   textStyle(ITALIC);   
   textAlign(CENTER);   
   text("WELCOME",textX,150);  
   text("TO",textX,200);
  text("JUANPABLO'S",textX,250);
  text("WEBSITE!",textX,300);
          //add a conditional
  if (textX>500){     
     textX = 0;   
  }else{     
     textX=textX + 5;   
  }
}

