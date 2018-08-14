class PacienteController {

    constructor() {

       let $ = document.querySelector.bind(document);
        
        this._campoFiltro = $('#campoFiltro');
       
        this._inputNome = $('#nome');
        this._inputPeso =  $('#peso');
        this._inputAltura = $('#altura');
        this._inputGordura = $('#gordura');
       
        this._msgErroNome = $('#msgErroNome');
        this._msgErroPeso =  $('#msgErroPeso');
        this._msgErroAltura = $('#msgErroAltura');
        this._msgErroGordura = $('#msgErroGordura');

        this._listaPacientes = new Bind (
            new ListaPacientes(), new PacientesView($('#pacientesView')), 'adiciona', 'esvazia', 'retira');  

        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')), 'texto');
    }

    adiciona(event) {

        event.preventDefault();
        let paciente = this._criaPaciente();
        let mensagens = paciente.valida();

        if(mensagens) {
            this._mostraMensagensDeValidacaoNosCampos(mensagens);
            return;
        }

        this._listaPacientes.adiciona(paciente);
        this._mensagem.texto = 'Paciente adicionado com sucesso';
        this._limpaFormulario();
        this.filtrarPacientes();
    }

    apaga() {

        this._listaPacientes.esvazia();
        this._mensagem.texto = 'Pacientes apagados com sucesso';
    }

    _limpaFormulario() {

        this._inputNome.value = '';
        this._inputNome.classList.remove("campo-invalido");
        this._msgErroNome.textContent = '';

        this._inputPeso.value = '';
        this._inputPeso.classList.remove("campo-invalido");
        this._msgErroPeso.textContent = '';

        this._inputAltura.value = '';
        this._inputAltura.classList.remove("campo-invalido");
        this._msgErroAltura.textContent = '';

        this._inputGordura.value = '';
        this._inputGordura.classList.remove("campo-invalido");
        this._msgErroGordura.textContent = '';
        
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

    _mostraMensagensDeValidacaoNosCampos(mensagens) {

        if(mensagens.nome) {
            this._inputNome.classList.add("campo-invalido");
            this._msgErroNome.textContent = mensagens.nome;
        } else {
            this._inputNome.classList.remove("campo-invalido");
            this._msgErroNome.textContent = '';
        }
      
        if(mensagens.peso) {
            this._inputPeso.classList.add("campo-invalido");
            this._msgErroPeso.textContent = mensagens.peso;
        } else {
            this._inputPeso.classList.remove("campo-invalido");
            this._msgErroPeso.textContent = '';
        }
      
        if(mensagens.altura) {
            this._inputAltura.classList.add("campo-invalido");
            this._msgErroAltura.textContent = mensagens.altura;
        } else {
            this._inputAltura.classList.remove("campo-invalido");
            this._msgErroAltura.textContent = '';
        }
      
        if(mensagens.gordura) {
            this._inputGordura.classList.add("campo-invalido");
            this._msgErroGordura.textContent = mensagens.gordura;
        } else {
            this._inputGordura.classList.remove("campo-invalido");
            this._msgErroGordura.textContent = '';
        }
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
            this.filtrarPacientes();
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
        this._mensagem.texto = 'Paciente excluído com sucesso';
        this.filtrarPacientes();
    }

    filtrarPacientesOnInput() {
        this.filtrarPacientes(true);
    }

    filtrarPacientes(forca=false) {
        if(forca && this._campoFiltro.value.length == 0) {
            document.querySelectorAll(".paciente")
                .forEach(p => p.classList.remove("invisivel"));
        } else if(this._campoFiltro.value.length > 0) {
            let expressao = new RegExp(this._campoFiltro.value, "i"); 
            document.querySelectorAll(".paciente")
                .forEach(p => (!expressao.test(p.querySelector(".info-nome").textContent))
                    ? p.classList.add("invisivel") 
                    : p.classList.remove("invisivel"));
        }
    }
}