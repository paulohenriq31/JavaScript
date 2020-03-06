function soma(n1,n2,n3,n4) {
	media(n1,n2,n3,n4);	
}
function media(n1,n2,n3,n4)
{
	var tt = (+n1 + +n2 + +n3 + +n4) / 4;//ou usar Number(n1)...
	document.getElementById("escrever").innerHTML = "média: = " + tt;
}

