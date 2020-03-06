function rnd() {
	var dt = [Math.floor(Math.random()*60)+1,
	Math.floor(Math.random()*60)+1,
	Math.floor(Math.random()*60)+1,
	Math.floor(Math.random()*60)+1,
	Math.floor(Math.random()*60)+1,
	Math.floor(Math.random()*60)+1];
	document.getElementById("rnd").innerHTML = 
	'<p>Resultado: ' + dt[0] + ' ' + dt[1] + ' ' + dt[2] + ' '
	+ dt[3] + ' ' + dt[4] + ' ' + dt[5] + ' </p>';
}




