const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let balls = [];

for(let i = 0; i < 20; i++){
    balls.push(new Ball(canvas.width/2, canvas.height/2))
};


function animation(){

    ctx.clearRect(0,0, canvas.width, canvas.height);

    balls.forEach(ball =>{
        ball.draw();
        ball.move();
    });
    

    requestAnimationFrame(animation);
}

animation();