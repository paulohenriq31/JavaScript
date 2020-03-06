function add(n,m) {
    var r = n + m;
    return r;
}

function soma(n,m) {
    var r = add(n,m);
    document.getElementById("escrever").innerHTML= n +  " + " + m + " = " + r;
}