let licz=-1;
let wyn=0;
let check;
let l = document.getElementById("licznik");
let w = document.getElementById("wynik");
let c = document.getElementById("sprawdz")

/*function check_num(){
    /*var reg = /[0-9]/g;
    var ntab = licz.match(reg);
    if(ntab!=null){
        check=true;
        console.log(check);
    }
    else{
        check=false;
        console.log(check);
    }*/

    /*if(licz.toString().indexOf(toString(7)) > -1 /* true if jest 7 ){
        check = true;
    }
    else{
        check = false;
    }

    check = (licz.toString().indexOf(toString(7)) >= -1);
}*/

function licznik(){
    licz++;
    l.innerHTML = licz;

    wynik();
}

function wynik(){
    w.innerText = "wynik: " + wyn;
}

function graj(){
    //check_num();
    if(licz%7==0 || licz.toString().indexOf("7") > -1){
        wyn++;
    }else{
        wyn--;
    }
}

let interval = setInterval(licznik, 1000);

