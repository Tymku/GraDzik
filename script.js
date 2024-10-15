let licz=-1;
let wyn=0;
let check;
let interval, intervalNum=0;
let l = document.getElementById("licznik");
let w = document.getElementById("wynik");
let c = document.getElementById("sprawdz")

function licznik(){
    licz++;
    l.innerHTML = licz;

    wynik();
}

function wynik(){
    w.innerText = "wynik: " + wyn;
}

function graj(){
    if(licz%7==0 || licz.toString().indexOf("7") > -1){
        wyn++;
    }else{
        wyn--;
    }
}

function start(){
    interval = setInterval(licznik, 750);
    intervalNum++;
}


function stop(){
    for(let i = 0; i < intervalNum; i++){
        clearInterval(interval-i);
    }
    intervalNum=0;
    alert("koniec, twój wynik to " + wyn)
    licz=0;
}

