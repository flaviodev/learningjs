class Paciente {

    constructor(id, nome, peso, altura, gordura) {
        this._id = id;
        this._nome = nome;
        this._peso = peso;
        this._altura = altura;
        this._gordura = gordura;
        Object.freeze(this);
    }

    get id() {
        return this._id;
    }

    get nome() {
        return this._nome;
    }

    get peso() {
        return this._peso;
    }

    get altura() {
        return this._altura;
    }

    get gordura() {
        return this._gordura;
    }

    get imc() {
        return (this._peso / (this._altura * this._altura)).toFixed(2);
    }

    get pesoValido() {
      return this._peso > 0 && this._peso < 200;  
    } 

    get alturaValida() {
        return this._altura  > 0.0 && this._altura < 3.0;
    }
}