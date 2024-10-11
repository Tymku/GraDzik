let x=0
let z=0
let y
let l = document.getElementById("licznik")
let pscore = document.querySelector("#score")

function check_num(x){
    var reg = /[0-9]/g;
    var ntab = x.match(reg);
    if(ntab!=null) (y=1);
    else (y=0);
}

function licznik()
{
    l.innerHTML = x
    x++
}

function wynik()
{
    pscore.innerText = "wynik: " + z
}

function graj()
{
    if(x%7==0){z++}
    else if(y==1){z++}
    else{z--}
}



let interval = setInterval(licznik, 2000)