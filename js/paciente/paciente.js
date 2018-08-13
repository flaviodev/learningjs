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

const getPaciente = (trPaciente) => {
    let tdNome = trPaciente.querySelector('.info-nome');
    let tdPeso = trPaciente.querySelector('.info-peso');
    let tdAltura = trPaciente.querySelector('.info-altura');
    let tdGordura = trPaciente.querySelector('.info-gordura');
  
    let _nome = tdNome.textContent;
    let _peso = tdPeso.textContent;
    let _altura = tdAltura.textContent;
    let _gordura = tdGordura.textContent;
  
    return new Paciente(_nome, _peso, _altura, _gordura);
  }