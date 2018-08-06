class Paciente {
    constructor(nome, peso, altura, gordura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.gordura = gordura;
    }
}

const calculaImc = (peso, altura) => peso / ( altura * altura);

const isPesoValido = (peso) => peso > 0 && peso < 200;

const isAlturaValida = (altura) => altura  > 0.0 && altura < 3.0;
