function baskhara() {
    var a = document.getElementById("A").value;
    var b = document.getElementById("B").value;
    var c = document.getElementById("C").value;

    // var delta = ((Math.pow(b,2))-((4*a)*c));

    var delta = +b * b - +4 * a * c;
    var divisor = 2 * +a;
    var raizDelta = Math.sqrt(delta);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {

        window.alert("Somente números são aceitos");

    } else {

        if (delta < 0) {
            window.alert("Delta menor ou igual a 0");
            document.getElementById("delta").innerHTML = "";
            document.getElementById("result1").innerHTML = "";
            document.getElementById("result2").innerHTML = "";
            return;

        } if (delta == 0) {
            window.alert("Delta = 0, portanto x1 e x2 é igual a 0")
            document.getElementById("delta").innerHTML = "";
            document.getElementById("result1").innerHTML = "";
            document.getElementById("result2").innerHTML = "";

        } if (delta > 0) {

            var x1 = (-b + raizDelta) / divisor;
            var x2 = (-b - raizDelta) / divisor;

            document.getElementById("delta").innerHTML = delta;
            document.getElementById("result1").innerHTML = x1;
            document.getElementById("result2").innerHTML = x2;

            return;
        }
    }
}
