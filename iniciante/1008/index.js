/**
 * Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.
 * 
 */

const Salario = (NF,NH, VH) => {
    const ganhoDiario = NH * VH;
    console.log(`NUMBER = ${NF}`);
    console.log(`SALARY = U$ ${ganhoDiario}`);
    return Salario;
}

console.log(Salario(25, 100, 5.50));