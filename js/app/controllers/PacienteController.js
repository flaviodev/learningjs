class PacienteController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputPeso =  $('#peso');
        this._inputAltura = $('#altura');
        this._inputGordura = $('#gordura');
        
        this._listaPacientes = new Bind (
            new ListaPacientes(), new PacientesView($('#pacientesView')), 'adiciona', 'esvazia');  

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
              .forEach(paciente => this._listaPacientes.adiciona(paciente));
            this._mensagem.texto = 'Pacientes importados com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);  
    }
}