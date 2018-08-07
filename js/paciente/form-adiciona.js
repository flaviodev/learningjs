var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  var paciente = extrairPacienteDoFormulario(form);

  if(isPossuiErros(paciente))
    return;

  var tabela = document.querySelector("#tabela-pacientes");

  adicionaPaciente(paciente, tabela);

  limpaFormulario(form);
});

const limpaFormulario = (form) => {
  form.reset();

  document.querySelector("#nome").classList.remove("campo-invalido");
  document.querySelector("#peso").classList.remove("campo-invalido");
  document.querySelector("#altura").classList.remove("campo-invalido");
  document.querySelector("#gordura").classList.remove("campo-invalido");
}

const extrairPacienteDoFormulario = (form) => {
  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  return new Paciente(nome, Number(peso), Number(altura), Number(gordura));
}

const isPossuiErros = (paciente) => {

  var possuiErro = false;

  var inputNome = document.querySelector("#nome");
  var msgErroNome = document.querySelector("#msgErroNome");
  if(paciente.nome.length == 0) {
    inputNome.classList.add("campo-invalido");
    msgErroNome.textContent = ' campo obrigatório!';
    possuiErro = true;
  } else {
    inputNome.classList.remove("campo-invalido");
    msgErroNome.textContent = '';
  }

  var inputPeso = document.querySelector("#peso");
  var msgErroPeso = document.querySelector("#msgErroPeso");
  if(!isPesoValido(paciente.peso)) {
    inputPeso.classList.add("campo-invalido");
    msgErroPeso.textContent = ' deve ser > 0 e < 200';
    possuiErro = true;
  } else {
    inputPeso.classList.remove("campo-invalido");
    msgErroPeso.textContent = '';
  }

  var inputAltura = document.querySelector("#altura");
  var msgErroAltura = document.querySelector("#msgErroAltura");
  if(!isAlturaValida(paciente.altura)) {
    inputAltura.classList.add("campo-invalido");
    msgErroAltura.textContent = ' deve ser > 0 e < 3';
    possuiErro = true;
  } else {
    inputAltura.classList.remove("campo-invalido");
    msgErroAltura.textContent = '';
  }

  var inputGordura = document.querySelector("#gordura");
  var msgErroGordura = document.querySelector("#msgErroGordura");
  if(paciente.gordura == 0) {
    inputGordura.classList.add("campo-invalido");
    msgErroGordura.textContent = ' campo obrigatório!';
    possuiErro = true;
  } else {
    inputGordura.classList.remove("campo-invalido");
    msgErroGordura.textContent = '';
  }

  return possuiErro;
}