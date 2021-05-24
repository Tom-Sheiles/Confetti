let canvas = document.getElementById("confet");
let ctx = canvas.getContext("2d");

let cbutton = document.getElementById("confet-button");


let colors = ["#FF718D", "#29CDFF", "#78FF44", "#A864FD", "#FDFF6A"]
let conf = []

function resize()
{
    canvas.width = window.innerWidth-20;
    canvas.height = window.innerHeight-10;
}



cbutton.addEventListener("click", ()=>{
    conf = []
    for(let i = 0; i < Math.floor(Math.random() * 300)+100; i++){
        let newconf = {x:Math.floor(Math.random() * canvas.width), y:(Math.floor(Math.random() * (canvas.height/1.5)))-(canvas.height/2), w:15, h:25, color:colors[Math.floor(Math.random() * colors.length)], fallrate:Math.floor(Math.random() * 4)+1};
        conf.push(newconf);
    }
});


function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    conf.forEach(con => {
        con.y += con.fallrate+5;
        ctx.fillStyle = con.color;
        ctx.fillRect(con.x, con.y, con.w, con.h);
    });

    window.requestAnimationFrame(draw);
}


window.addEventListener('resize', resize, false);
resize();

window.requestAnimationFrame(draw);