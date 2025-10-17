export const enemies =[];
const SIZE =26;


export function SpawnEnemy(canvas){
    if(enemies.length < 5)  {
        spawnEnemy(canvas);
    }
}
ctx.fillStyle="black"
  ctx.Rect(0,0,canvas.width,canvas.height);

  drawPlayer(ctx);

  ctx.fillStyle="white";
  for(let i =0; i< bullet.length; i++){
    const bullet = bullets[i];
     ctx.fillRect(bullet.x,bullet.y.bullet.width,bullet.height); 
  }

   ctx.fillStyle="red";
  for(let i =0; i< bullet.length; i++){
    const enemies = enemies[i];
     ctx.fillRect(bullet.x,bullet.y.bullet.width,bullet.height); 