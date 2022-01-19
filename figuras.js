// Código del Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado es: ${areaCuadrado}cm2`);
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm.`);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es de: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triángulo es: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El area del triángulo es: ${areaTriangulo}cm2`);

console.groupEnd();

// Código del círculo
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log(`El radio del círculo es ${radioCirculo}cm.`);

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del círculo es ${diametroCirculo}cm.`);

//PI
const pi = Math.PI;
console.log(`PI es: ${pi}`);

//Circunferencia
const perimetroCirculo = diametroCirculo * pi;
console.log(`El perímetro del círculo es ${perimetroCirculo}cm.`);

//Área
const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log(`El área del círculo es ${areaCirculo}cm2.`);

console.groupEnd();