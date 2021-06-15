let y=0;
let x=100;

function setup(){
  createCanvas(400,400);
  
}

function draw(){
  background(0);

  fill(0,255,0);
  
  circle(x,y,20);

  if(y<height-10){
    y++;
  }else if(y>height-10 || y==height-10){
    x++;

  }

}