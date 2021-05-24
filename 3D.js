let objs = []

function Register(obj)
{
    objs.push(obj);
}
function Remove(obj)
{
    let i = objs.indexOf(obj);
    if(i > -1)
    {
        objs.splice(i, 1);
    }
}

class Vec3{
    constructor(x, y, z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

function Draw()
{
    objs.forEach(obj => {
        ctx.fillStyle = obj.c;
        ctx.beginPath();
        ctx.moveTo(obj.vert[0].x, obj.vert[0].y);

        for(let i = 1; i < obj.vert.length; i++)
        {
            ctx.lineTo(obj.vert[i].x, obj.vert[i].y);
        }
        ctx.lineTo(obj.vert[0].x, obj.vert[0].y);
        ctx.fill();
        
    });
}



class Square{
    vert = [];
    constructor(x, y, w, h, c)
    {
        this.x = x;
        this.y = y;
        this.vert[0] = new Vec3(x, y, 0);
        this.vert[1] = new Vec3(x+w, y, 0);
        this.vert[2] = new Vec3(x+w, y+h, 0);
        this.vert[3] = new Vec3(x, y+h, 0);
        this.c = c;
        console.log(this)

        Register(this);
    }

    Translate(x, y)
    {
        this.vert.map(v =>{
            v.x += x;
            v.y += y;
        })
    }

    Rotate(thetax, thetay, thetaz)
    {
        let sinThetax = Math.sin(thetax);
        let cosThetax = Math.cos(thetax);

        let sinThetay = Math.sin(thetay);
        let cosThetay = Math.cos(thetay);

        let sinThetaz = Math.sin(thetaz);
        let cosThetaz = Math.cos(thetaz);

        this.vert.map(v =>{
            let x = v.x;
            let y = v.y;
            let z = v.z;

            v.x = x * cosThetax - y * sinThetax;
            v.y = y * cosThetax + x * sinThetax;
            
            x = v.x;
            y = v.y;
            z = v.z;

            v.y = y * cosThetay - z * sinThetay;
            v.z = z * cosThetay + y * sinThetay;

            x = v.x;
            y = v.y;
            z = v.z

            v.x = x * cosThetaz + z * sinThetaz;
            v.z = z * cosThetaz - x * sinThetaz;
        })
    }
}