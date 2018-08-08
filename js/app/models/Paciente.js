class Paciente {
    constructor(nome, peso, altura, gordura) {
        this._nome = nome;
        this._peso = peso;
        this._altura = altura;
        this._gordura = gordura;

        Object.freeze(this);
    }

    get nome() { return this._nome; }
 
    get peso() { return this._peso; }
 
    get altura() { return this._altura; }
 
    get gordura() { return this._gordura; }

    get imc() { return this._peso / ( this._altura * this._altura); } 

    get pesoValido() { return this._peso > 0 && this._peso < 200; }

    get alturaValida() { return this._altura  > 0.0 && this._altura < 3.0; }
}


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