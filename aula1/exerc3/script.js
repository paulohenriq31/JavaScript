function login(){
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;


   if (nome != "joe" ){
       window.alert("Usuário ou senha incorreta!");
       return;

   }if (senha != 123 ){
       window.alert("Usuário ou senha incorreta!");
       return;
   }else{
       window.alert("Bem vindo ao sistema");
       return;
   }

}