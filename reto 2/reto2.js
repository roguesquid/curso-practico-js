function alturaIsoceles(lado1, lado2, base) {
    if (lado1 === lado2 && lado1 === base) {
        alert(`Si es isóceles`);
        let altura = Math.sqrt(lado1 ** 2 - (base ** 2 / 4));
        return altura;
    }
}

alturaIsoceles(16, 16, 16);