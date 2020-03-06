function verificar(){
    var n = document.getElementById("n").value;
    var result = n%2;

    if (result == 0){

        document.getElementById("escrever").innerHTML = " O numero informado " + n + " é PAR ";

    }else{

        document.getElementById("escrever").innerHTML = " O numero informado " + n + " é IMPAR ";
    
    }

    
}