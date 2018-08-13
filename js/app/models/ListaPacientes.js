class ListaPacientes {

    constructor() {
        this._pacientes = [];
    }

    adiciona(paciente) {

        this._pacientes.push(paciente);
    }

    get pacientes() {
        
        return [].concat(this._pacientes);
    }

    esvazia()   {

        this._pacientes = [];
    }
}