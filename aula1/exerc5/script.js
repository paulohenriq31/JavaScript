function verificar(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var ar = [n1 , n2]

    ar.sort(function(a , b){
        return a - b;
    });

    document.getElementById("escrever").innerHTML = ar ;
    
}