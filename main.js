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
                    value = "-";
                    localStorage.setItem(""+w+d+p, value);
                }
                m[w][d][p] = value;
                s[w*5*6+d*6+p].textContent = value;
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