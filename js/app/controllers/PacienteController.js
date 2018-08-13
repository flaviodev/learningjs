class PacienteController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputPeso =  $('#peso');
        this._inputAltura = $('#altura');
        this._inputGordura = $('#gordura');
        
        this._listaPacientes = new Bind (
            new ListaPacientes(), new PacientesView($('#pacientesView')), 'adiciona', 'esvazia', 'retira');  

        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')), 'texto');
    }

    adiciona(event) {

        event.preventDefault();
        this._listaPacientes.adiciona(this._criaPaciente());
        this._mensagem.texto = 'Paciente adicionado com sucesso';
        this._limpaFormulario();
    }

    apaga() {

        this._listaPacientes.esvazia();
        this._mensagem.texto = 'Pacientes apagados com sucesso';
    }

    _limpaFormulario() {

        this._inputNome.value = '';
        this._inputPeso.value = 0;
        this._inputAltura.value = 0.0;
        this._inputGordura.value = 0;
        this._inputNome.focus();
    }

    _criaPaciente() {

        return new Paciente(
            this._listaPacientes.geraId(),
            this._inputNome.value,
            this._inputPeso.value,
            this._inputAltura.value,
            this._inputGordura.value);
    }

    importaPacientes() {

        let service = new PacienteService();

        Promise.all([
            service.obterPacientes()]
        ).then(pacientes => {
            pacientes
              .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
              .forEach(p => this._listaPacientes.adiciona(new Paciente(this._listaPacientes.geraId(), p.nome, p.peso, p.altura, p.gordura)));
            this._mensagem.texto = 'Pacientes importados com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);  
    }

    iniciaListaPacientes() {
        this._listaPacientes.adiciona(new Paciente(1,"Paulo", 100, 2.0, 10));
        this._listaPacientes.adiciona(new Paciente(2,"João", 80, 1.66, 40));
        this._listaPacientes.adiciona(new Paciente(3,"Erica", 54, 1.64, 14));
        this._listaPacientes.adiciona(new Paciente(4,"Douglas", 85, 1.73, 24));
        this._listaPacientes.adiciona(new Paciente(5,"Tatiana", 46, 1.55, 19));
    }

    excluiPaciente(pacienteId) {
        this._listaPacientes.retira(pacienteId);
    }
}