let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');


// c.fillStyle = '#f45dfd';
// c.fillRect(300,100,200,100);
// c.fillStyle = '#f45fdf';
// c.fillRect(300,210,200,100);
// c.fillStyle = 'green';
// c.fillRect(300,320,200,100);


// c.beginPath();
// c.moveTo(100,100);
// c.lineTo(200,200);
// c.lineTo(300,420);
// c.strokeStyle = 'red';
// c.stroke();

// c.beginPath();
// c.moveTo(100,100);
// c.lineTo(300,100);
// c.strokeStyle = 'red';
// c.stroke();

// c.beginPath();
// c.arc(700,200,30,0,Math.PI *2,false);
// c.fillStyle = "skyblue";
// c.fill();
// c.strokeStyle = 'black';
// c.stroke();

/* ***************************** random circle generator ********************** */

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
// for(let  i = 0 ; i  < 20; i++){
//     let x = parseInt(Math.random() * innerWidth);
//     let y = parseInt(Math.random() * innerHeight);
//     let z = parseInt(Math.random() * 50);
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI *2,false);
//     c.fillStyle = getRandomColor();
//     c.fill();
//     c.strokeStyle = 'black';
//     c.stroke();
// }

function Mycircle(x,y,rad,dx,dy,color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.draw = function(){
        
        c.beginPath();
        c.arc(this.x,this.y,this.rad,0,Math.PI *2,false);
        c.fillStyle = color;
        c.fill();
        c.strokeStyle = 'black';
        c.stroke();
    }
    this.update = function(){
        
        this.draw();
        
        if(this.x+this.rad > innerWidth || this.x-this.rad < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.rad > innerHeight || this.y-this.rad < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;   
    }
}
let circArray = [];

for(let i = 0 ; i < 100 ;i++){
    let rad = 20;
    let x = Math.random() * (innerWidth - rad*2) + rad ;
    let y = Math.random() * (innerHeight- rad*2) + rad;
    let dx = Math.random() * 8;
    let dy = Math.random() * 8;
    
    circArray.push(new Mycircle(x,y,rad,dx,dy,getRandomColor()));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0 , 0, innerWidth, innerHeight);
    for(let i = 0 ; i < 100; i++){
        circArray[i].update();
    }
}
animate();