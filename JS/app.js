var resultado = document.getElementById("result");
var cero = document.getElementById("n0")
var uno = document.getElementById("n1")
var dos = document.getElementById("n2")
var tres = document.getElementById("n3")
var cuatro = document.getElementById("n4")
var cinco = document.getElementById("n5")
var seis = document.getElementById("n6")
var siete = document.getElementById("n7")
var ocho = document.getElementById("n8")
var nueve = document.getElementById("n9")
var ce = document.getElementById("clear")
var mas = document.getElementById("nA")
var menos = document.getElementById("nS")
var multiplicacion = document.getElementById("nM")
var division = document.getElementById("nD")
var operandoA;
var operandoB;
var operacion;

cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0"
}

uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1"
}

dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2"
}

tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3"
}

cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4"
}

cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5"
}

seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6"
}

siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7"
}

ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8"
}

nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9"
}

function limpiar() {
    resultado.textContent = ""
}

function resetear() {
    resultado.textContent = ""
    operandoA = 0
    operandoB = 0
    operacion = ""
}

function resetear() {

    resultado.textContent = ""
    operandoA = 0;
    operandoB = 0;
    operacion = ""
}

function resolver() {
    var res = 0
    switch (operacion) {
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB)
            break
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB)
            break
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB)
            break
        case "x":
            res = parseFloat(operandoA) * parseFloat(operandoB)
            break
    }
    resetear()
    resultado.textContent = res;
}

ce.onclick = function (e) {
    resetear()
}
