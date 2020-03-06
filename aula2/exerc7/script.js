function soma() {
	var n1 = document.getElementById("n1").value;
	n1 = n1.split(";");
	var tt = (+n1[0] + +n1[1] + +n1[2] + +n1[3] + +n1[4] + +n1[5] + +n1[6]) / 7;//ou usar Number(n1)...
        document.getElementById("escrever").innerHTML = "média: = " + tt;
}

