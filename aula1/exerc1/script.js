function soma(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var n4 = document.getElementById("n4").value;
    var n5 = document.getElementById("n5").value;
    var result = +n1 + Number(n2) + Number(n3) + Number(n4) + Number(n5);
    document.getElementById("escrever").innerHTML = " A soma dos valores " + n1 + " + " +  n2  + " + " + n3 + " + " + n4 + " + " + n5 + " = " + result;
}