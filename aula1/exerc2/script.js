function converter(){
    var c = document.getElementById("c").value;
    var result = (c*1.8)+32;

    document.getElementById("escrever").innerHTML = " O conversão de  " + c + " Celsius  para Fahrenheit " + " = " + result;
}