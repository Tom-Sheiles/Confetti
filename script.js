let canvas = document.getElementById("confet");
let ctx = canvas.getContext("2d");

let cbutton = document.getElementById("confet-button");


let colors = ["#FF718D", "#29CDFF", "#78FF44", "#A864FD", "#FDFF6A"]
let conf = []


class square{
    constructor(x, y, w, h)
    {
        this.p1 = {x:x, y:y};
        this.p2 = {x:x+w, y:y};
        this.p3 = {x:x+w, y:y+h};
        this.p4 = {x:x, y:y+h};
    }
}

function lineSquare(sqaure)
{
    ctx.beginPath();
    ctx.moveTo(sqaure.p1.x, sqaure.p1.y);
    ctx.lineTo(sqaure.p2.x, sqaure.p2.y);
    ctx.lineTo(sqaure.p3.x, sqaure.p3.y);
    ctx.lineTo(sqaure.p4.x, sqaure.p4.y);
    ctx.lineTo(sqaure.p1.x, sqaure.p1.y);
    ctx.fill();
}

function rotate(sqaure, theta)
{
    let sinThe = Math.sin(theta);
    let cosThe = Math.cos(theta);

    sqaure.p1.x = (sqaure.p1.x * cosThe - sqaure.p1.y * sinThe) + 500;
    sqaure.p1.y = (sqaure.p1.y * cosThe + sqaure.p1.x * sinThe) + 50;

    sqaure.p2.x = (sqaure.p2.x * cosThe - sqaure.p2.y * sinThe) + 500;
    sqaure.p2.y = (sqaure.p2.y * cosThe + sqaure.p2.x * sinThe) + 50;

    sqaure.p3.x = (sqaure.p3.x * cosThe - sqaure.p3.y * sinThe) + 500;
    sqaure.p3.y = (sqaure.p3.y * cosThe + sqaure.p3.x * sinThe) + 50;
    
    sqaure.p4.x = (sqaure.p4.x * cosThe - sqaure.p4.y * sinThe) + 500;
    sqaure.p4.y = (sqaure.p4.y * cosThe + sqaure.p4.x * sinThe) + 50;
}

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


let sq = new square(50, 50, 50, 70);
rotate(sq, 1);
lineSquare(sq);