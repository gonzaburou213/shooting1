document.getElementById("kirigirisu").innerText="tositosihiko";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");



 let x = 225;
 let y = -150;

    
 window.addEventListener("keydown", (e) => {
   if (e.key === "a") {
     x -= 10;
   } else if (e.key === "d") {
     x += 10;
    }else if (e.key === "space") {
     tama += 1;
    }

 });


function gameLoop() {
   
ctx.fillStyle = "black";
 ctx.fillRect(0, 0, 480, 640);

 ctx.fillStyle = "blue";
 ctx.fillRect(x, 480, 30, 30);
 requestAnimationFrame(gameLoop);


y+=15;
ctx.fillStyle = "red";
 ctx.fillRect(225, y, 30, 30);
if(tama>0){
ctx.fillStyle = "white";
 ctx.fillRect(x + 10, 480 -tama *10, 10, 10  );
 
}

gameLoop();