let licz=-1;
let wyn=0;
let check;
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

let interval = setInterval(licznik, 750);

function stop(){
    clearInterval(interval);
    alert("koniec, twój wynik to " + wyn)
}

