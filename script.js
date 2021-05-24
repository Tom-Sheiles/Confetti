let canvas = document.getElementById("confet");
let ctx = canvas.getContext("2d");
let cbutton = document.getElementById("confet-button");
let colors = ["#FF718D", "#29CDFF", "#78FF44", "#A864FD", "#FDFF6A"]

let sq;
let sq1;

function resize()
{
    canvas.width = window.innerWidth-20;
    canvas.height = window.innerHeight-10;
}


function update()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    sq.Rotate(0.04, 0.03, 0.02);
    //sq.Translate(0, 0);

    Draw();
    window.requestAnimationFrame(update);
}


function init()
{
    window.addEventListener('resize', resize, false);
    resize();

    //ctx.translate(500, 500);

    sq = new Square(-50,-50,100,100,"red");

    Draw();
}

init();
window.requestAnimationFrame(update);