var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  var paciente = extrairPacienteDoFormulario(form);

  if(isPossuiErros(paciente))
    return;

  var pacienteTr = criaPacienteTr();

  populaPacienteTr(paciente, pacienteTr);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  limpaFormulario(form);
});

function limpaFormulario(form) {
  form.reset();

  var inputAltura = document.querySelector("#altura");
  inputAltura.classList.remove("campo-invalido");
  
  var inputPeso = document.querySelector("#peso");
  inputPeso.classList.remove("campo-invalido");
}

function extrairPacienteDoFormulario(form) {
  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  return criaPaciente(nome, peso, altura, gordura);
}


function isPossuiErros(paciente) {

  var possuiErro = false;

  var inputNome = document.querySelector("#nome");
  var msgErroNome = document.querySelector("#msgErroNome");
  if(paciente.nome.length == 0) {
    inputNome.classList.add("campo-invalido");
    msgErroNome.textContent = 'Nome deve ser informado!';
    possuiErro = true;
  } else {
    inputNome.classList.remove("campo-invalido");
    msgErroNome.textContent = '';
  }

  var inputPeso = document.querySelector("#peso");
  var msgErroPeso = document.querySelector("#msgErroPeso");
  if(!paciente.isPesoValido()) {
    inputPeso.classList.add("campo-invalido");
    msgErroPeso.textContent = 'Peso Inválido!';
    possuiErro = true;
  } else {
    inputPeso.classList.remove("campo-invalido");
    msgErroPeso.textContent = '';
  }

  var inputAltura = document.querySelector("#altura");
  var msgErroAltura = document.querySelector("#msgErroAltura");
  if(!paciente.isAlturaValida()) {
    inputAltura.classList.add("campo-invalido");
    msgErroAltura.textContent = 'Altura Inválida!';
    possuiErro = true;
  } else {
    inputAltura.classList.remove("campo-invalido");
    msgErroAltura.textContent = '';
  }

  var inputGordura = document.querySelector("#gordura");
  var msgErroGordura = document.querySelector("#msgErroGordura");
  if(paciente.gordura == 0) {
    inputGordura.classList.add("campo-invalido");
    msgErroGordura.textContent = '%Gordura deve ser informado!';
    possuiErro = true;
  } else {
    inputGordura.classList.remove("campo-invalido");
    msgErroGordura.textContent = '';
  }

 return possuiErro;
}