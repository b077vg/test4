let w=300,h=300; //scale 50 
let img=[];
let m;
let angle=0;
let q=51;
let mn=-50;
let mx=50;
let z=0;
let canvas;

function setup() {  
	canvas=createCanvas(w,h);
	canvas.parent('canvas');
	for(let i=0;i<50;i++){
		img[i] = loadImage("data/picture1/Movie"+q+".jpg");
	console.log(q);
		q++;
	}
}

function draw() {
  background(200);
  if(mouseX>0 && mouseX<w){
  	m=map(mouseX,z,w,mn,mx);
	/*if(m>=mn && m<=z){
		angle=PI;
	}else if(m>z && m<=mx){
		angle=0;
	}*/
  }
  createTarget();
}

function createTarget(){
	for(let i=0; i<50; i++){
		if((m>-(50-i) && m<=-(49-i))){
		push();
			scale(-1,1);
			image(img[i], -width, 0,w,h); 
		pop();
		}else if(m<(50-i) && m>=(49-i)){
		push();
			image(img[i], 0, 0,w,h); 
		pop();
		}
	}
}
