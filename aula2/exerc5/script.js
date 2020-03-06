function ler() {
	var diaNasc = document.getElementById('dia_nascimento').value;
	var mesNasc = document.getElementById('mes_nascimento').value;
	var anoNasc = document.getElementById('ano_nascimento').value;
	var nomeMae = document.getElementById('nome_mae').value;
	var nomePai = document.getElementById('nome_pai').value;
	var serie = document.getElementById('serie').value;

//======BOTÃO DE RÁDIO DO TURNO=======	
	if(document.getElementById('manha').checked)
		var turno = document.getElementById('manha').value;
	else if(document.getElementById('tarde').checked)
		var turno = document.getElementById('tarde').value;
	else
		var turno = 'manha';

//=====CHECKBOX ATIVIDADES EXTRAS=====
	var atividade_extra = ['na','na','na'];
	if(document.getElementById('informatica').checked)
		atividade_extra[0] = document.getElementById('informatica').value;
	if(document.getElementById('xadrez').checked)
		atividade_extra[1] = document.getElementById('xadrez').value;
	if(document.getElementById('futebol').checked)
		atividade_extra[2] = document.getElementById('futebol').value;

escrever(diaNasc,mesNasc,anoNasc,nomeMae,nomePai,serie,turno,atividade_extra[0],atividade_extra[1],atividade_extra[2]);
}

function escrever(dia_nascimento,mes_nascimento,ano_nascimento,nome_mae,nome_pai,serie,turno,atividade_extra1,atividade_extra2,atividade_extra3) {
	document.getElementById("escrever").innerHTML = 
'<p>Dia do Nascimento: ' + dia_nascimento + '</p>'+
'<p>Mês do Nascimento: ' + mes_nascimento + '</p>'+
'<p>Ano do Nascimento: ' + ano_nascimento + '</p>'+
'<p>Nome da mãe: ' + nome_mae + '</p>'+
'<p>Nome do pai: ' + nome_pai + '</p>'+
'<p>Série: ' + serie + '</p>'+
'<p>Turno: ' + turno + '</p>'+
'<p>Atividade Extracurricular: ' + atividade_extra1 + '</p>'+
'<p>Atividade Extracurricular: ' + atividade_extra2 + '</p>'+
'<p>Atividade Extracurricular: ' + atividade_extra3 + '</p>'
;		
}

