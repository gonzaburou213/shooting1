const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
  x: canvas.width / 2 - 15,
  y: canvas.height - 60,
  width: 30,
  height: 30,
  color: "blue",
  life:3,
};
const bullets =[];
const bullet_speed = -5;

function tryShoot(){
    bullets.push({
      x: player.x,
      y: player.y,
      width: 30,
      height: 10,
      vy: bullet_speed,
    })
}

    
 window.addEventListener("keydown", (e) => {
  
   if (e.key === "a") {
     player.x -= 10;
   } else if (e.key === "d") {
      player.x += 10;
    }else if (e.code === "Space") {
     tryShoot();
     console.log("push");
    }

 });
function update(){
  for (let i=0;i<bullets.length; i++){
    const bullet = bullets[i];
    bullet.y += bullet.vy;
    if(bullet.y < 0){
      bullet.splice(i,1);
    }
  }

}
function draw(){
  ctx.fillStyle="black"
  ctx.Rect(0,0,canvas.width,canvas.height);

  ctx.fillStyle= player.color;
  ctx.Rect(player.x,player.y,player.width,player.height);
  ctx.fillStyle="white";
  for(let i =0; i< bullet.length; i++){
    const bullet = bullets[i];
     ctx.fillRect(bullet.x,bullet.y.bullet.width,bullet.height); 
  }
 
}



function gameLoop() {
   
ctx.fillStyle = "black";
 ctx.fillRect(0, 0, 480, 640);
 ctx.fillStyle =player.color;
 ctx.fillRect(player.x,player.y,player.width,player.height);

   for(let i = bullets.length -1; i >= 0; i--){
    const bullet = bullets[i];
    bullet.y += bullet.vy;
    ctx.fillStyle = "white";
    ctx.fillRect(bullet.x,bullet.y,bullet.width,bullet.height);
    if  (bullet.y < 0){
        bullets.splice(i,1);

    }
    console.log(bullet);
}   ;
requestAnimationFrame(gameLoop);
}


gameLoop();