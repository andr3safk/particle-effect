const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let balls = [];

for(let i = 0; i < 12; i++){
    balls.push(new Ball(canvas.width/2, canvas.height/2))
};


function animation(){

    ctx.clearRect(0,0, canvas.width, canvas.height);

    balls.forEach(ball =>{

        balls.forEach(ball2 => {

            let dx = ball2.x - ball.x;
            let dy = ball2.y - ball.y;
            let dist = Math.sqrt(dx ** 2 + dy ** 2)

            if(dist < 200){
                ctx.beginPath();
                ctx.moveTo(ball.x, ball.y);
                ctx.lineTo(ball2.x, ball2.y);
                ctx.stroke();
                ctx.closePath();
            }
        });

        ball.draw();
        ball.move();
    });
    

    requestAnimationFrame(animation);
}

animation();