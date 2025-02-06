function resolverEcuacionPrimerGrado() {
    const a = parseFloat(document.getElementById("a1").value);
    const b = parseFloat(document.getElementById("b1").value);
    const resultado = document.getElementById("resultado1");

    if (a === 0) {
        resultado.textContent = "La ecuación no tiene solución.";
    } else {
        const x = -b / a;
        resultado.textContent = "x = " + x;
    }
}

function resolverEcuacionSegundoGrado() {
    const a = parseFloat(document.getElementById("a2").value);
    const b = parseFloat(document.getElementById("b2").value);
    const c = parseFloat(document.getElementById("c2").value);
    const resultado = document.getElementById("resultado2");

    const discriminante = b * b - 4 * a * c;

    if (discriminante < 0) {
        resultado.textContent = "La ecuación no tiene soluciones reales.";
    } else if (discriminante === 0) {
        const x = -b / (2 * a);
        resultado.textContent = "x = " + x;
    } else {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        resultado.textContent = "x1 = " + x1 + ", x2 = " + x2;
    }
}

function resolverSistemaEcuaciones() {
    const a = parseFloat(document.getElementById("a3").value);
    const b = parseFloat(document.getElementById("b3").value);
    const c = parseFloat(document.getElementById("c3").value);
    const d = parseFloat(document.getElementById("d3").value);
    const e = parseFloat(document.getElementById("e3").value);
    const resultado = document.getElementById("resultado3");

    const determinante = a * e - b * d;

    if (determinante === 0) {
        resultado.textContent = "El sistema no tiene solución única.";
    } else {
        const x = (c * e - b * f) / determinante;
        const y = (a * f - c * d) / determinante;
        resultado.textContent = "x = " + x + ", y = " + y;
    }
}
