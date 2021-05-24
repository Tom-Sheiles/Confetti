let canvas = document.getElementById("confet");
let ctx = canvas.getContext("2d");
let cbutton = document.getElementById("confet-button");
let colors = ["#FF718D", "#29CDFF", "#78FF44", "#A864FD", "#FDFF6A"]

let conf = [];

function resize()
{
    canvas.width = window.innerWidth-20;
    canvas.height = window.innerHeight-10;
}


function update()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    conf.forEach(c => {
        c.Translate(0, c.fallRate+5);
        c.Rotate(c.rot.x, c.rot.y, c.rot.z);
    });
   

    Draw();
    window.requestAnimationFrame(update);
}

function spawnConfetti()
{
    conf.forEach(con => {
        Remove(con);
    });
    conf = [];

    for(let i = 0; i < 150; i++)
    {
        let confetti = new Square(Math.floor(Math.random() * (canvas.width+500))+1, Math.floor(Math.random()*(canvas.height/1.5))-(canvas.height/2), 15, 25,colors[Math.floor(Math.random() * colors.length)])
        conf.push(confetti);
    }
}


function init()
{
    window.addEventListener('resize', resize, false);
    cbutton.addEventListener("click", spawnConfetti);

    resize();

}

init();
window.requestAnimationFrame(update);