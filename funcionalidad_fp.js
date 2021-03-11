var operandoa;
var operandob;
var operacion;

function $(id) {
    return document.getElementById(id);
}

function init() {
    //variables
    var resultado = $("resultado");
    var igual = $("igual");

    //eventos
    var append = function(num) {
        return function(e) {
            resultado.textContent = resultado.textContent + num;
        }
    }

    $("uno").onclick = append("1");
    $("dos").onclick = append("2");
    $("tres").onclick = append("3");
    $("cuatro").onclick = append("4");
    $("cinco").onclick = append("5");
    $("seis").onclick = append("6");
    $("siete").onclick = append("7");
    $("ocho").onclick = append("8");
    $("nueve").onclick = append("9");
    $("cero").onclick = append("0");

    $("reset").onclick = function(e) {
        resetear();
    }

    var operar = function(op) {
        return function(e) {
            operandoa = resultado.textContent;
            operacion = op;
            limpiar();
        }
    }

    $("suma").onclick = operar("+");
    $("resta").onclick = operar("-");
    $("multiplicacion").onclick = operar("*");
    $("division").onclick = operar("/");

    $("igual").onclick = function(e) {
        operandob = resultado.textContent;
        resolver();
    }

    function limpiar() {
        resultado.textContent = "";
    }

    function resetear() {
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }

    function resolver() {
        var res = 0;
        switch (operacion) {
            case "+":
                res = parseFloat(operandoa) + parseFloat(operandob);
                break;

            case "-":
                res = parseFloat(operandoa) - parseFloat(operandob);
                break;

            case "*":
                res = parseFloat(operandoa) * parseFloat(operandob);
                break;

            case "/":
                res = parseFloat(operandoa) / parseFloat(operandob);

        }
        resultado.textContent = res;
    }
}