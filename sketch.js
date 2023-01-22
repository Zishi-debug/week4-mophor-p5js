let spc;
let numIters;
let a;
let block;
let gape;
let v = [];
let c = [];
let f = 0.0
let writer;

function setup() {
  createCanvas(1600,1600);
   writer=createWriter('newFile.txt');
  numIters = 20;
  spc = width / numIters;
  a = spc / 2;
  block = createGraphics(2 * a, 2 * a);
  block.clear();
  
  for (let x = 0; x < 6; x++) {
    
    v[x] = x*(sqrt(3) * a) / 4 ;
    print('The value of v is ' + v[x]);
  }
  for (let y =0; y<6;y++){
    c[y] = y*(2 * a) / 4;
    print('The value of c is ' + c[y]);
  }
}



function draw() {
  background(255);
  //stave
  //image(block,0,0);
  //line(0,0,200,200);
  for (let i = 0; i < numIters; i ++) {
    for (let j = 0; j < numIters; j ++) {
      push();
      //scale size
      translate(width/4,height/6);
      
      scale(0.5,0.5);
      push();
      // 30 is gap
      gape = (sqrt(3) * a)/2;
      translate( i * spc,  j * sqrt(3) * a +j*gape);
      image(block, 0, 0);
      drawLine(i+1,j+1);
      pop();
      
      pop();
    }
  }
  // draw stave;
  for (let k = 0; k <5; k ++) {
    
    block.stroke(0);
    block.strokeWeight(0.5);

    block.line(2, k*sqrt(3)/4 * a+1, spc-2 , k*sqrt(3)/4 * a+1);
    
  }
   //f += 0.01
  
  
}


 function drawLine(i,j){
   //k = how many lines in one block
   for (let k = 0; k <4; k++){
     //let A = vertex(noise(k*j,i)*spc,v[int(noise(i,k*j)*5)])
     let l;
     push();
     strokeWeight(int(noise(k*j+1,i)*4));
     noFill();
    
     translate(c[int(noise(k*j,i+f)*6)],v[int(noise(i+f,k*j)*6)]);
     print('The value of startpoint.x is ' + noise(k*j,i));
     print('The value of startpoint.y is ' + int(noise(i,k*j)*6));
     rotate(int(noise(k*j,i)*6)*radians(60));
     strokeCap(SQUARE);
     
     l= int(noise(k*j,i)*4)*(a/2);
     
     line(0,0,l+1,0);
     //circle(0,0,4);
     fill(0);
     writer.write(' ',-c[int(noise(k*j,i+f)*6)],-v[int(noise(i+f,k*j)*6)]);
     if (l==0){
       //strokeWeight(2);
       noFill();
       circle(0,0,4);
       fill(0);
       //text('hello',-c[int(noise(k*j,i+f)*6)],-v[int(noise(i+f,k*j)*6)]);
        //text(' ',-c[int(noise(k*j,i+f)*6)],-v[int(noise(i+f,k*j)*6)]);
       writer.write('我',-c[int(noise(k*j,i+f)*6)],-v[int(noise(i+f,k*j)*6)]);
       
     }
     
     //if(r[k]>0.1){
        //rotate(radians(60)); 
     //}
     
       
     pop();
     
     
     
     //line(10,10,30,30);
     print('The value ofl is ' + int(noise(k*j,i)*4));
   }
   }

 function keyPressed(){
   if(key === 's'){
      save("img.png");  
   }
 
   if(key === 'd'){
     writer.close();
   }

}
//   A = noise(0,2*a)+20;
//   B = v[int(noise(0,4))]+20;
//   line(10,10,noise(0,2*a),v[int(noise(0,4))]);
// 
