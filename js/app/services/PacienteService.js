class PacienteService {

    constructor() {

        this._http = new HttpService();
    }

    obterPacientes() {

        return new Promise((resolve, reject) => {
            
            this._http
                .get('https://api-pacientes.herokuapp.com/pacientes')
                .then(pacientes => {
                    resolve(pacientes.map(objeto => new Paciente(objeto.nome, objeto.peso, objeto.altura, objeto.gordura)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter os pacientes');
                })
        });
    }
}