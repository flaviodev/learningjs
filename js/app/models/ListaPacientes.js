class ListaPacientes {

    constructor() {

        this._pacientes = [];
    }
    
    get pacientes() {
        
        return [].concat(this._pacientes);
    }
    
    adiciona(paciente) {

        this._pacientes.push(paciente);
    }

    retira(pacienteId) {
        this._pacientes = this._pacientes.filter(p => p.id != pacienteId);
    }

    esvazia() {

        this._pacientes = [];
    }

    geraId() {
        return this.pacientes.length > 0 ? this._pacientes.reduce((paciente, maiorId) => paciente.id > maiorId ? paciente.id : maiorId, 0).id + 1 : 1;
    }

}