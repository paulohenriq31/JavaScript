function soma(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var result = +n1 + Number(n2);
    document.getElementById("escrever").innerHTML = n1 + " + " + n2 + " = " + result;
}