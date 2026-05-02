export function somaDobroNumerosParesFuncional(numeros) {
    return numeros
        .filter(n => n % 2 === 0)
        .map(n => n * 2)
        .reduce((soma, n) => soma + n, 0);
}

export function somaDobroNumerosParesProcedural(numeros) {
    let somaTotal = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            somaTotal += numeros[i] * 2;
        }
    }
    return somaTotal;
}
