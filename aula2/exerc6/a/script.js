﻿function soma() {
	var n1 = document.getElementById("n1").value;
	var n2 = document.getElementById("n2").value;
	var n3 = document.getElementById("n3").value;
	var n4 = document.getElementById("n4").value;
	var tt = (+n1 + +n2 + +n3 + +n4) / 4;//ou usar Number(n1)...
        document.getElementById("escrever").innerHTML = "média: = " + tt;
}

