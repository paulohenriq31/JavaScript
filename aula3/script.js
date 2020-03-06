
function boaNoiteWhile(){
    
    var boa = "";
    var contador = 1;
    while(contador <= 20){
        boa += contador + " - Boa Noite" + "<br>";
        contador++;

        document.getElementById("boa").innerHTML = boa;
    }
    
}

function boaNoiteDoWhile(){
    var boa ="";
    var contador = 1;

    do{
    boa += contador + " - Boa Noite" + "<br>";
    contador++;
    document.getElementById("boadoWhile").innerHTML = boa;
    
    }
    while(contador <= 20);
    
}

function boaNoiteFor(){
    var boa ="";
    var contador = 1;

    for (contador=0; contador<20; contador++){
        boa += contador + " - Boa Noite" + "<br>";
        document.getElementById("boaFor").innerHTML = boa; 
    }
    
}

function whileCont(){
    
    var number = "";
    var contador = 1;
    while(contador <= 20){
        number += contador + "<br>";
        contador++;

        document.getElementById("whileCont").innerHTML = number;
    }
    
}

function doWhileCont(){
    var number ="";
    var contador = 1;

    do{
    number += contador + "<br>";
    contador++;

    document.getElementById("doWhileCont").innerHTML = number;
    }
    while(contador <= 20);
    
}

function forCont(){
    var number ="";
    var contador = 1;

    for (contador=1; contador<=20; contador++){
        number += contador + "<br>";
        document.getElementById("forCont").innerHTML = number; 
    }
    
}

function forArray(){

    var i;
    var doctor = ['Jodie Whittaker', 'Peter Capaldi', 'Matt Smith', 'David Tennant', 'Christopher Eccleston'];
    var text = "";

    for (i=0; i<doctor.length; i++){
        text +=doctor[i]+ ";" + "<br>";
        document.getElementById("forArray").innerHTML = text;
    }
}

function whileArray(){
    
    var i = 0;
    var doctor = ['Jodie Whittaker', 'Peter Capaldi', 'Matt Smith', 'David Tennant', 'Christopher Eccleston'];
    var text = "";

    while(i<doctor.length){
        text +=doctor[i]+ ";" + "<br>";
        i++;
        document.getElementById("whileArray").innerHTML = text;
    }
}