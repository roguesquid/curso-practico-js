// Código del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

// Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Código del círculo

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return (diametro * PI).toFixed(2);
}

function areaCirculo(radio) {
    return ((radio * radio) * PI).toFixed(2);
}

// Aquí interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado() {
    const inputValue = document.getElementById("inputCuadrado").value;
    const perimetro = perimetroCuadrado(inputValue);

    const spanCuadrado = document.getElementById("resultadoCuadrado");
    spanCuadrado.innerHTML = `Perímetro: ${perimetro}`;
}
function calcularAreaCuadrado() {
    const inputValue = document.getElementById("inputCuadrado").value;
    const area = areaCuadrado(inputValue);

    const spanCuadrado = document.getElementById("resultadoCuadrado");
    spanCuadrado.innerHTML = `Área: ${area}`;
}

//Triángulo
function calcularPerimetroTriangulo() {
    const inputValue1 = Number(document.getElementById("inputTriangulo1").value);
    const inputValue2 = Number(document.getElementById("inputTriangulo2").value);
    const inputValue3 = Number(document.getElementById("inputTriangulo3").value);
    const perimetro = perimetroTriangulo(inputValue1, inputValue2, inputValue3);

    const spanTriangulo = document.getElementById("resultadoTriangulo");
    spanTriangulo.innerHTML = `Perímetro: ${perimetro}`;
}
function calcularAreaTriangulo() {
    const inputValue3 = Number(document.getElementById("inputTriangulo3").value);
    const inputValue4 = Number(document.getElementById("inputTriangulo4").value);
    const area = areaTriangulo(inputValue3, inputValue4);

    const spanTriangulo = document.getElementById("resultadoTriangulo");
    spanTriangulo.innerHTML = `Área: ${area}`;
}

//Círculo
function calcularPerimetroCirculo() {
    const inputValue = Number(document.getElementById("inputCirculo").value);
    const perimetro = perimetroCirculo(inputValue);

    const spanCirculo = document.getElementById("resultadoCirculo");
    spanCirculo.innerHTML = `Perímetro: ${perimetro}`;
}
function calcularAreaCirculo() {
    const inputValue = Number(document.getElementById("inputCirculo").value);
    const area = areaCirculo(inputValue);

    const spanCirculo = document.getElementById("resultadoCirculo");
    spanCirculo.innerHTML = `Área: ${area}`;
}