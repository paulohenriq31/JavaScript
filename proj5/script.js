function resolver(){
    var nome = document.getElementById("fname").value;
    var idade = document.getElementById("idade").value;

    document.getElementById("escrever").innerHTML = nome + " tem " + idade + " anos de idade!";
}