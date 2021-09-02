canchange = false;
let s;
let btn
let m = new Array(2).fill(new Array(5).fill(new Array(6).fill("-")));

function Change(w, d, p, th) 
{
    w--;
    d--;
    p--;
    //console.log(""+w+d+p, th.textContent);
    localStorage.setItem(""+w+d+p, th.textContent);
}
function Load()
{
    let nw=0, nd=0, np=0;
    //let now = new Date();
    let now = new Date('10-16-2021')
    let hm = now.getHours()*60+now.getMinutes;

    //nw
    let daysLag = Math.ceil(Math.abs(now.getTime() - new Date('30-08-2021').getTime()) / (1000 * 3600 * 24));
    //let daysLag = Math.ceil(Math.abs(now.getTime() - new Date('08-30-2021').getTime()) / (1000 * 3600 * 24));
    //nd
    nd = now.getDay()-2;
    let cnd = nd;
    if(nd<0 || nd>4) 
    {
        daysLag++;
        hm = 0;
        nd = 0;
    }
    let cnLag = daysLag;
    //np
    if(hm <= 8*60 + 30)
    {
        np=0;
    }
    else if(hm <= 10*60 + 25)
    {
        np=1;
    }
    else if(hm <= 12*60 + 20)
    {
        np=2;
    }
    else if(hm <= 14*60 + 15)
    {
        np=3;
    }
    else if(hm <= 16*60 + 10)
    {
        np=4;
    }
    else if(hm <= 18*60 + 30)
    {
        np=5;
    }
    else 
    {
        daysLag++;
        nd++;
    }
    if(nd<0 || nd>4) 
    {
        daysLag++;
        hm = 0;
        nd = 0;
    }
    
    //nw    
    let weekcheck = daysLag % 14;
    if(weekcheck >= 7) nw = 0;
    else nw = 1;
    
    let cweekcheck = cnLag % 14;
    let cnw;
    if(cweekcheck >= 7) cnw = 0;
    else cnw = 1;
    
    s = document.getElementsByClassName("s");
    btn = document.getElementById("btn");

    for(let w = 0; w<2; w++)
    {
        for(let d=0; d<5; d++)
        {
            for(let p=0; p<6; p++)
            {
                let value = localStorage.getItem(""+w+d+p);
                if(value==null)
                {
                    value = "";
                    localStorage.setItem(""+w+d+p, value);
                }
                m[w][d][p] = value;
                s[w*5*6+d*6+p].textContent = value;
                if(w==nw && d==nd && p>=np && s[w*5*6+d*6+p].textContent.length>0) 
                {
                    np=666;
                    s[w*5*6+d*6+p].className+= " current";
                }
                if(d==cnd && w==cnw) s[w*5*6+d*6+p].className+=" curday";
            }
        }
    }
}
function CanChange()
{
    if(canchange == true)
    {
        btn.textContent="ИЗМЕНИТЬ";
        btn.style.backgroundColor="whitesmoke";
        canchange = false;
        for(let i = 0;i<s.length;i++)
        {
            s[i].setAttribute("contenteditable", false);
        }
    }
    else 
    {
        btn.textContent="ПРИНЯТЬ";
        btn.style.backgroundColor="green";
        canchange = true;
        for(let i = 0;i<s.length;i++)
        {
            s[i].setAttribute("contenteditable", true);
        }
    }
}