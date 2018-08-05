function criaPaciente(_nome, _peso, _altura, _gordura) {
    var paciente = {};
    paciente.nome = _nome;
    paciente.peso = _peso;
    paciente.altura = _altura;
    paciente.gordura = _gordura;

    paciente.imc =  function () { 
        return this.peso / ( this.altura * this.altura);
    };

    paciente.isPesoValido = function() {
        return peso <=0 || peso >= 200;
    };

    paciente.isAlturaValida = function() {
        return altura <=0.0 || altura >= 3.0;
    };

    return paciente;
}


