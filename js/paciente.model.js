function criaPaciente(nome, peso, altura, gordura) {
    var paciente = {};
    paciente.nome = nome;
    paciente.peso = Number(peso);
    paciente.altura = Number(altura);
    paciente.gordura = Number(gordura);

    paciente.imc =  function () { 
        return this.peso / ( this.altura * this.altura);
    };

    paciente.isPesoValido = function() {
        return this.peso > 0 && this.peso < 200;
    };

    paciente.isAlturaValida = function() {
        return this.altura  > 0.0 && this.altura < 3.0;
    };

    return paciente;
}