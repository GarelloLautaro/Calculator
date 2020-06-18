var operandoA
var operandoB
var operacion

function getElement() {
    cuenta = document.getElementById("operation");
    resultado = document.getElementById("result")
    cero = document.getElementById("n0")
    uno = document.getElementById("n1")
    dos = document.getElementById("n2")
    tres = document.getElementById("n3")
    cuatro = document.getElementById("n4")
    cinco = document.getElementById("n5")
    seis = document.getElementById("n6")
    siete = document.getElementById("n7")
    ocho = document.getElementById("n8")
    nueve = document.getElementById("n9")
    ce = document.getElementById("clear")
    mas = document.getElementById("nA")
    menos = document.getElementById("nS")
    multiplicacion = document.getElementById("nM")
    division = document.getElementById("nD")
    igual = document.getElementById("equal")
}

function onClick() {
    cero.onclick = function (e) {
        cuenta.textContent = cuenta.textContent + "0"
    }

    uno.onclick = function (e) {
        cuenta.textContent = cuenta.textContent + "1"
    }

    dos.onclick = function (e) {
        cuenta.textContent = cuenta.textContent + "2"
    }

    tres.onclick = function (e) {
        cuenta.textContent = cuenta.textContent + "3"
    }

    cuatro.onclick = function (e) {
        cuenta.textContent = cuenta.textContent + "4"
    }

    cinco.onclick = function (e) {
        cuenta.textContent = cuenta.textContent + "5"
    }

    seis.onclick = function (e) {
        cuenta.textContent = cuenta.textContent + "6"
    }

    siete.onclick = function (e) {
        cuenta.textContent = cuenta.textContent + "7"
    }

    ocho.onclick = function (e) {
        cuenta.textContent = cuenta.textContent + "8"
    }

    nueve.onclick = function (e) {
        cuenta.textContent = cuenta.textContent + "9"
    }

    ce.onclick = function (e) {
        resetear()
    }

    mas.onclick = function (e) {
        operandoA = cuenta.textContent
        operacion = "+"
        limpiar()
    }
    
    menos.onclick = function (e) {
        operandoA = cuenta.textContent
        operacion = "-"
        limpiar()
    }
    
    division.onclick = function (e) {
        operandoA = cuenta.textContent
        operacion = "/"
        limpiar()
    }
    multiplicacion.onclick = function (e) {
        operandoA = cuenta.textContent
        operacion = "x"
        limpiar()
    }
    
    igual.onclick = function (e) {
        operandoB = cuenta.textContent
        resolver()
    }
}

function limpiar() {
    cuenta.textContent = ""
}

function resetear() {
    cuenta.textContent = ""
    resultado.textContent = ""
    operandoA = 0
    operandoB = 0
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

window.onload = function () {
    getElement()
    onClick()
    limpiar()
    resetear()
    resolver()
}
