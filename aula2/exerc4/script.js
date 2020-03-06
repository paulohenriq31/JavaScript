function cadastro() {
	var pessoa = {
		nome:document.getElementById("nome").value,
		idade:document.getElementById("idade").value,
		endereço:document.getElementById("endereço").value,
		cnh_cat:function check() {
			if(document.getElementById("ab").checked)
				cnh_cat:document.getElementById("ab").value;
			else if(document.getElementById("ab").checked)
				cnh_cat:document.getElementById("c").value;
			else if(document.getElementById("d").checked)
				cnh_cat:document.getElementById("d").value;
			else if(document.getElementById("e").checked)
				cnh_cat:document.getElementById("e").value;
			else
				cnh_cat:document.getElementById("ab").value;			
		}
		dados_completos:function(){
			return this.nome + ' ' +
			this.idade + ' ' +
			this.endereço + ' ' +
			this.cnh_cat;
		}
	};
}




